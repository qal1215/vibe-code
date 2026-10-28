import { useHead } from '@unhead/react'
import { apps, type App } from './apps'

function AppVisual({ visual }: { visual: App['visual'] }) {
  if (visual === 'gamepad') {
    return (
      <div className="flex h-full items-center justify-center bg-[#0d1728]">
        <img src={`${import.meta.env.BASE_URL}app-icons/gamepad-bench.png`} alt="" className="size-32 rounded-3xl shadow-2xl sm:size-40" />
      </div>
    )
  }

  if (visual === 'share') {
    return (
      <div className="flex h-full items-center justify-center bg-[#172c3c]">
        <div className="flex size-36 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl sm:size-44">
          <img src={`${import.meta.env.BASE_URL}app-icons/lan-share.png`} alt="" className="size-28 sm:size-36" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full items-center justify-center bg-[#dfeaff]">
      <div className="w-52 rounded-xl border border-[#9db7e3] bg-white p-4 shadow-[0_22px_50px_-25px_rgba(26,67,139,0.5)] sm:w-64">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span className="size-2 rounded-full bg-blue-500" />
          <span className="size-2 rounded-full bg-slate-200" />
          <span className="size-2 rounded-full bg-slate-200" />
          <span className="ml-auto text-[10px] font-bold text-slate-500">PIXELIO</span>
        </div>
        <div className="mt-4 flex h-24 items-center justify-center rounded-md bg-[#eff4fb]">
          <svg viewBox="0 0 72 56" className="h-14 w-20 fill-none stroke-[#5f8ed9] stroke-[2]" aria-hidden="true">
            <rect x="4" y="4" width="64" height="48" rx="5" />
            <circle cx="22" cy="19" r="5" />
            <path d="m9 45 18-17 11 10 8-7 17 14" />
          </svg>
        </div>
        <div className="mt-4 h-2 rounded-full bg-slate-100"><div className="h-2 w-2/3 rounded-full bg-blue-500" /></div>
      </div>
    </div>
  )
}

function App() {
  useHead({
    title: 'Vibe Code — Apps by Anh Le',
    meta: [{ name: 'description', content: 'Explore Gamepad Bench, Pixelio, LAN Share, and other apps built by Anh Le.' }],
  })

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#10213d]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <a href="https://qal.vn/" className="text-2xl font-black tracking-[-0.06em]" aria-label="qal. home">qal<span className="text-blue-600">.</span></a>
        <a href="https://qal.vn/" className="text-sm font-semibold text-[#42516a] transition-colors hover:text-blue-600">← Back to portfolio</a>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#10213d] px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-14">
          <div className="absolute -right-24 -top-24 size-96 rounded-full border border-white/10" aria-hidden="true" />
          <div className="absolute -right-8 top-12 size-72 rounded-full border border-white/10" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[#83b5ff] uppercase">Engineering lab / app index</p>
            <h1 className="mt-5 text-6xl font-bold tracking-[-0.07em] sm:text-7xl lg:text-[6.5rem]">Vibe Code<span className="text-[#70a8ff]">.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4dfef] sm:text-xl">Small tools and experiments built to make a real task easier.</p>
            <div className="mt-12 flex items-center gap-3 border-t border-white/15 pt-5 text-xs font-semibold tracking-[0.14em] text-[#aebed6] uppercase">
              <span>{String(apps.length).padStart(2, '0')} apps</span>
              <span className="h-px w-8 bg-[#83b5ff]" aria-hidden="true" />
              <span>Built by Anh Le</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-14" aria-labelledby="apps-title">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.18em] text-blue-600 uppercase">The collection</p>
              <h2 id="apps-title" className="text-3xl font-bold tracking-[-0.045em] sm:text-4xl">Apps I’ve built</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#59677d]">Each project started with a small problem worth solving.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {apps.map((app, index) => (
              <article key={app.name} className="overflow-hidden rounded-2xl border border-[#10213d]/10 bg-white shadow-[0_16px_50px_-35px_rgba(16,33,61,0.4)]">
                <div className="h-56 sm:h-64 lg:h-52"><AppVisual visual={app.visual} /></div>
                <div className="flex min-h-[310px] flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between text-xs font-bold tracking-[0.14em] text-blue-600 uppercase"><span>{app.kind}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <h3 className="mt-5 text-2xl font-bold tracking-[-0.04em]">{app.name}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-[#30435f]">{app.description}</p>
                  <p className="mt-2 text-sm leading-6 text-[#66758b]">{app.detail}</p>
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {app.stack.map((item) => <span key={item} className="rounded-md bg-[#f0f4f8] px-2.5 py-1 text-xs text-[#465570]">{item}</span>)}
                    </div>
                    {(app.liveUrl || app.sourceUrl) && (
                      <div className="mt-6 flex gap-5 text-sm font-semibold text-blue-700">
                        {app.liveUrl && <a href={app.liveUrl} className="hover:underline hover:underline-offset-4">Open app ↗</a>}
                        {app.sourceUrl && <a href={app.sourceUrl} className="hover:underline hover:underline-offset-4">Source ↗</a>}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#10213d]/10 px-6 py-8 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-[#59677d]">
          <span>© Anh Le</span>
          <a href="https://qal.vn/" className="font-semibold text-[#10213d] hover:text-blue-600">qal.vn ↗</a>
        </div>
      </footer>
    </div>
  )
}

export default App
