import { createContext, useContext } from 'react'
import { useImmer } from 'use-immer'
import { useForm } from 'react-hook-form'
import { PostHoleValidator } from '@/shared/validators/hole'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'

type Func = (data: any) => void

type UseFormReturnType = ReturnType<typeof useForm>
type IContext = {
  imgs: string[]
  setImgs: Func
  form: UseFormReturnType
} | null
export const PostContext = createContext<IContext>(null)

export function usePostContext() {
  return useContext(PostContext)!
}
export function HolePostContext() {
  const [imgs, setImgs] = useImmer<string[]>([])

  const {
    formState: { errors },
    ...form
  } = useForm<PostHoleValidator>({
    resolver: classValidatorResolver(PostHoleValidator),
  })

  return {
    imgs,
    setImgs,
    form,
  }
}
