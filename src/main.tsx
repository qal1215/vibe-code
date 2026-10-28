import { createHead, UnheadProvider } from '@unhead/react/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const head = createHead()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UnheadProvider value={head}>
      <App />
    </UnheadProvider>
  </StrictMode>,
)
