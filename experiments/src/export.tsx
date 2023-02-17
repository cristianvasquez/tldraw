import { TDExport, TDExportType, Tldraw, TldrawApp } from '@tldraw/tldraw'
import * as React from 'react'

export default function Export() {
  const [app, setApp] = React.useState<TldrawApp>()

  const handleMount = React.useCallback((app: TldrawApp) => {
    setApp(app)
  }, [])

  return (
    <div className="tldraw">
      <Tldraw id="export_example" onMount={handleMount} />

      <div style={{ position: 'fixed', top: 20, left: 32, zIndex: 100 }}>
        <textarea cols={80} rows={80} value={JSON.stringify(app?.document, null, 2)}></textarea>
      </div>
    </div>
  )
}
