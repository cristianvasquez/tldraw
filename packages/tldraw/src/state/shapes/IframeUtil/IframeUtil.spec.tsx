import { Iframe, Image } from '..'

describe('Iframe shape', () => {
  it('Creates a shape', () => {
    expect(Iframe.create({ id: 'iframe' })).toMatchSnapshot('iframe')
  })
})
