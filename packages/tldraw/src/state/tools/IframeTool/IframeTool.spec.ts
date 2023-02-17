import { TldrawApp } from '~state'
import { IframeTool } from '.'

describe('IframeTool', () => {
  it('creates tool', () => {
    const app = new TldrawApp()
    new IframeTool(app)
  })
})
