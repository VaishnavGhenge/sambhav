export type TGenericApiResponse<T> = {
  status: number,
  message: string,
  success: boolean,
  data: T,
}

