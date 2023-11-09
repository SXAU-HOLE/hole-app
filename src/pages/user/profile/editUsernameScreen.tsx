import Input from '@/components/form/Input'
import { useForm } from 'react-hook-form'
import { Button } from 'react-native-paper'
import { View } from 'react-native'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { EditUsernameValidator } from '@/shared/validators/user/profile'
import { useMutation } from '@tanstack/react-query'
import { PostUserProfileRequest } from '@/apis/user'
import { Toast } from '@/utils/toast'
import { useUserProfile } from '@/query/user/profile'
import { useUserProfileRoute } from '@/hooks/route/useUserProfileRoute'

export function EditUsernameScreen() {
  const { refetch } = useUserProfile()
  const route = useUserProfileRoute()

  const { control, handleSubmit } = useForm<EditUsernameValidator>({
    resolver: classValidatorResolver(EditUsernameValidator),
    mode: 'onBlur',
  })

  const mutationUsername = useMutation({
    mutationFn: (username: string) => PostUserProfileRequest({ username }),
    async onSuccess(data) {
      if (data) {
        await refetch()
        Toast.success({
          text1: '成功修改昵称',
        })
        route.goProfileScreen()
      }
    },
  })

  const submit = (data: EditUsernameValidator) => {
    mutationUsername.mutate(data.username)
  }

  return (
    <View className={'px-3 flex flex-col space-y-3'}>
      <Input
        name={'username'}
        control={control}
        label={''}
        placeholder={'用户昵称在1~10个字符哦'}
      />
      <Button onPress={handleSubmit(submit)} mode={'contained'}>
        确认修改
      </Button>
    </View>
  )
}
