import { http } from 'msw'
import { getUserResolver } from '../resolvers/getUser'

export const handlers = [http.get('http://api.example/user', getUserResolver.success)]
