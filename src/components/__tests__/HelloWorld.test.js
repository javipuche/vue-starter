import { render, screen } from '@testing-library/vue'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', async () => {
    const msg = 'Hello Vitest'

    render(HelloWorld, { props: { msg } })

    const text = screen.getByText(msg)
    const name = await screen.findByText('John Maverick', { exact: false })

    expect(text).toBeVisible()
    expect(name).toBeVisible()
  })
})
