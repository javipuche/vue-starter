import { setupWorker } from 'msw/browser'

let worker = null

export const initMocksWorker = async () => {
  if (import.meta.env.MODE !== 'development') return
  if (worker) throw new Error('Worker already exists')

  const { handlers } = await import('./handlers')
  const { scenarios } = await import('./scenarios')
  const scenarioName = new URLSearchParams(window.location.search).get('scenario')
  const runtimeScenarios = scenarios[scenarioName] || []

  worker = setupWorker(...runtimeScenarios, ...handlers)

  return worker.start({ onUnhandledRequest: 'bypass', quiet: true })
}

export const getMocksWorker = () => worker
