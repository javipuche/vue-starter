import { setupServer } from 'msw/node'
import { handlers } from './handlers'

let server = null

export const initMocksServer = () => {
  if (server) throw new Error('Server already exists')
  server = setupServer(...handlers)
  return server
}

export const getMocksServer = () => server
