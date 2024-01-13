import { useImmer } from 'use-immer'
import { useForm } from 'react-hook-form'
import { PostHoleValidator } from '@/shared/validators/hole'
import { createStore } from 'hox'
import { Tag } from '@/pages/hole/post/components/HolePostAddTags'
import { useState } from 'react'

export const [useHolePostContext, HolePostContext] = createStore(() => {
  const [imgs, setImgs] = useImmer<string[]>([])
  const [tags, setTags] = useImmer<Tag[]>([])
  const [vote, setVote] = useState({
    title: '',
    items: [],
  })

  const {
    formState: { errors },
    ...form
  } = useForm<PostHoleValidator>()

  return {
    imgs,
    setImgs,
    form,
    ...form,
    tags,
    setTags,
    vote,
    setVote,
  }
})
