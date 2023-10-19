import { MaxLength } from 'class-validator'

export class PostHoleValidator {
  title?: string

  body: string

  imgs?: string[]
}
