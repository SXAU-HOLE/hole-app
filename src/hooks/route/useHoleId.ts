import { useRoute } from '@react-navigation/native'

export function useHoleDetailId() {
  const params = useRoute().params as { id: string }

  return params.id
}
