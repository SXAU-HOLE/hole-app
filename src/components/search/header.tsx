import { View } from 'react-native'
import { Func } from '@/shared/types'
import { SearchInput } from '@/components/form/SearchInput'
import { useForm } from 'react-hook-form'
import { CloseIcon, SearchIcon } from '@/components/Icons'
import { Button } from 'react-native-paper'
import { SearchValidator } from '@/shared/validators/hole/search'
import { useHoleSearchRoute } from '@/hooks/route/useHoleSearchRoute'

interface SearchProps {
  placeholder: string
  onSubmit: Func
}

export function SearchHeader({ placeholder, onSubmit }: SearchProps) {
  const { goHome } = useHoleSearchRoute()

  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
    setValue,
  } = useForm<SearchValidator>()
  const onHandleSubmit = handleSubmit(onSubmit)

  const clearInput = () => {
    setValue('keywords', '', { shouldDirty: true })
  }

  return (
    <View className={'flex flex-row bg-background'}>
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
            autoFocus={true}
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
