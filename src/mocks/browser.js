import { setupWorker } from 'msw/browser'

const { handlers } = await import('./handlers')
const { scenarios } = await import('./scenarios')
const scenarioName = new URLSearchParams(window.location.search).get('scenario')
const runtimeScenarios = scenarios[scenarioName] || []

export const worker = setupWorker(...runtimeScenarios, ...handlers)
