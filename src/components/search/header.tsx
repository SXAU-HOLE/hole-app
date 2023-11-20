import { View } from 'react-native'
import { Func } from '@/shared/types'
import { SearchInput } from '@/components/form/SearchInput'
import { FieldErrors, useForm } from 'react-hook-form'
import { CloseIcon, SearchIcon } from '@/components/Icons'
import { Button } from 'react-native-paper'
import { SearchValidator } from '@/shared/validators/hole/search'
import { useHoleSearchRoute } from '@/hooks/route/useHoleSearchRoute'
import { Toast } from '@/utils/toast'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { useRoute } from '@react-navigation/native'
import { useMemo } from 'react'

interface SearchProps {
  placeholder: string
  onSubmit: Func
}

export function SearchHeader({ placeholder, onSubmit }: SearchProps) {
  const { goHome } = useHoleSearchRoute()
  const params = useRoute().params as SearchValidator
  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
    setValue,
  } = useForm<SearchValidator>({
    resolver: classValidatorResolver(SearchValidator),
    defaultValues: { keywords: params?.keywords || '' },
  })

  const onError = (error: FieldErrors<SearchValidator>) => {
    Toast.error({
      text1: error.keywords!.message,
    })
  }

  const onHandleSubmit = handleSubmit(onSubmit, onError)

  const clearInput = () => {
    setValue('keywords', '', { shouldDirty: true })
  }

  const isAutoFocus = useMemo(() => {
    if (params?.keywords) return false
    else return true
  }, [params?.keywords])

  return (
    <View className={'flex flex-row bg-background px-2 py-4'}>
      <View
        className={
          'w-[85%] flex flex-row items-center rounded-full bg-onBackground px-3'
        }
      >
        <SearchIcon size={18} />
        <View className={'flex-1'}>
          <SearchInput
            name={'keywords'}
            control={control}
            placeholder={placeholder}
            onSubmitEditing={onHandleSubmit}
            maxLength={100}
            autoFocus={isAutoFocus}
          />
        </View>
        {dirtyFields.keywords && <CloseIcon size={16} onPress={clearInput} />}
      </View>
      <View className={'flex-1'}>
        <Button onPress={goHome}>取消</Button>
      </View>
    </View>
  )
}
