declare interface IResponse<T = any> {
  code: number
  message: string | string[]
  data: T
}
