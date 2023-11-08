import { ArrowBar } from '@/pages/user/components/ArrowBar'
import UserAvatar from '@/components/UserAvatar'
import { useUserProfile } from '@/query/user/profile'
import { Loading } from '@/components/Loading'
import { SecondaryText } from '@/components/Text/SecondaryText'
import TimeText from '@/components/Text/TimeText'
import { useMutation } from '@tanstack/react-query'
import { PostUserProfileRequest } from '@/apis/user'
import { Toast } from '@/utils/toast'
import { useImagePicker } from '@/hooks/useImagePicker'
import { UploadHoleImgRequest } from '@/apis/hole'

export function Profile() {
  const { data, isSuccess, refetch } = useUserProfile()

  const mutationAvatar = useMutation({
    mutationFn: (avatar: string) => PostUserProfileRequest({ avatar }),
    async onSuccess() {
      await refetch()
      Toast.success({
        text1: '成功修改头像',
      })
    },
  })
  const { onImageSelect } = useImagePicker({
    allowsEditing: true,
    async onSuccess(imgs) {
      // @ts-ignore
      const img = imgs.assets[0].uri as string
      const res = await UploadHoleImgRequest([img])
      if (res) mutationAvatar.mutate(res[0])
    },
  })

  const changeAvatar = () => {
    onImageSelect()
  }

  const mutationUsername = useMutation({
    mutationFn: (username: string) => PostUserProfileRequest({ username }),
    async onSuccess() {
      await refetch()
      Toast.success({
        text1: '成功修改昵称',
      })
    },
  })
  const changeUsername = () => {}

  return (
    <>
      {isSuccess ? (
        <>
          <ArrowBar text={'头像'} onPress={changeAvatar}>
            <UserAvatar url={data?.avatar} size={48} />
          </ArrowBar>
          <ArrowBar text={'昵称'} onPress={changeUsername}>
            <SecondaryText>{data?.username}</SecondaryText>
          </ArrowBar>
          <ArrowBar text={'创建时间'}>
            <TimeText time={data?.createAt} isDay={true} />
          </ArrowBar>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
