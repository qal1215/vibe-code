export type App = {
  name: string
  kind: string
  description: string
  detail: string
  stack: string[]
  visual: 'gamepad' | 'pixelio' | 'share'
  liveUrl?: string
  sourceUrl?: string
}

export const apps: App[] = [
  {
    name: 'Gamepad Bench',
    kind: 'Browser tool',
    description: 'A live diagnostic for gamepads and controllers in the browser.',
    detail: 'Inspect buttons, triggers, analog sticks, and multiple connected controllers as their inputs change.',
    stack: ['React', 'Gamepad API', 'JavaScript'],
    visual: 'gamepad',
    liveUrl: 'https://gamepad-bench.qal.vn/',
    sourceUrl: 'https://github.com/qal1215/gamepad-bench',
  },
  {
    name: 'Pixelio',
    kind: 'Image utility',
    description: 'An image size reduction tool that runs in the browser.',
    detail: 'Choose a JPEG, PNG, or WebP image, set a size target, compare the result, and download the processed file.',
    stack: ['React', 'Vite', 'Browser APIs'],
    visual: 'pixelio',
  },
  {
    name: 'LAN Share',
    kind: 'Desktop app',
    description: 'Share files and folders across a local network.',
    detail: 'Create a link and QR code from a desktop app; recipients can download in their browser without installing anything.',
    stack: ['Tauri', 'Angular', 'Rust'],
    visual: 'share',
  },
]
