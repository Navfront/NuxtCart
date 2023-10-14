import { createToken } from '../utils/create-token'

export default function useBearer (event: any) {
  const bearer = event.headers.get('Authorization')
  const token = bearer ? bearer.split(' ')[1] : createToken()

  return { token }
}
