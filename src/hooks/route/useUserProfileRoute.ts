import { useLinkTo } from '@react-navigation/native'

export function useUserProfileRoute() {
  const linkTo = useLinkTo()

  const goProfileScreen = () => {
    linkTo('/user-nested/profile')
  }

  const goCommentScreen = () => {
    linkTo('/user-nested/comments')
  }

  const goLikedScreen = () => {
    linkTo('/user-nested/liked')
  }

  const goEditUsernameScreen = () => {
    linkTo('/user-nested/edit-username')
  }

  return {
    goProfileScreen,
    goCommentScreen,
    goLikedScreen,
    goEditUsernameScreen,
  }
}
