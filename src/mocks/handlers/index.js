import { http } from 'msw'
import { getUserResolver } from '../resolvers/getUser'

export const handlers = [http.get('https://example.com/user', getUserResolver.success)]
