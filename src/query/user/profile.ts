import { useQuery } from '@tanstack/react-query'
import { GetUserProfileRequest } from '@/apis/auth'

export function useUserProfile() {
  const key = ['user.profile']

  const query = useQuery(key, () => GetUserProfileRequest())

  return {
    ...query,
  }
}
