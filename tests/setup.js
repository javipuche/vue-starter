import '@testing-library/jest-dom'

beforeAll(() => {
  const { getComputedStyle } = window
  window.getComputedStyle = elt => getComputedStyle(elt)
})
