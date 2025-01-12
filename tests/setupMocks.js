import { initMocksServer } from '@/mocks/node'

const server = initMocksServer()

beforeAll(() => {
  server.listen()
})

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
