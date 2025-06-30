import { render, screen } from '@testing-library/vue'
import PageHome from '../PageHome.vue'

describe('PageHome', () => {
  it('should render the correct message', async () => {
    const msg = 'This is a home page'

    render(PageHome, { props: { msg } })

    const text = screen.getByText(msg)
    const name = await screen.findByText(msg, { exact: false })

    expect(text).toBeVisible()
    expect(name).toBeVisible()
  })
})
