import { useQuery } from '@tanstack/react-query'

import { GetUserProfileRequest } from '@/apis/user'

export function useUserProfile() {
  const key = ['user.profile']

  const query = useQuery(key, () => GetUserProfileRequest())

  return {
    ...query,
  }
}
