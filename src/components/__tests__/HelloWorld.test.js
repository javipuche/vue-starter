import { render, screen } from '@testing-library/vue'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const msg = 'Hello Vitest'
    render(HelloWorld, { props: { msg } })
    const text = screen.getByText(msg)
    expect(text).toBeVisible()
  })
})
