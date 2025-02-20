import { useState } from 'react'
import DevTool from '@/dev/devtool'
import { useNuiEvent } from '@/hook'
import { isEnvBrowser, setClipboard } from '@/utils'

const BROWSER = isEnvBrowser()

function App() {
  const [visible, setVisible] = useState(BROWSER)

  useNuiEvent<boolean>('nui:visible', (status) => {
    setVisible(status)
  })

  useNuiEvent<string>('nui:clipboard', (value) => {
    setClipboard(value)
  })

  if (!visible && BROWSER) return (
    <div>
      <button onClick={() => setVisible(true)}>Show NUI</button>
    </div>
  );

  if (!visible && !BROWSER) return null;

  return (
    <>
      {BROWSER && <DevTool />}
    </>
  )
}

export default App