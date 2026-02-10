import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageAnimations from './components/PageAnimations'
import { LanguageProvider } from './contexts/LanguageContext'
import { ModalProvider } from './contexts/ModalContext'
import SeoManager from './components/SeoManager'
import Modal from './components/ui/Modal'

// Критичні сторінки завантажуються одразу
import Home from './pages/Home'
import About from './pages/About'
import Donations from './pages/Donations'

// Інші сторінки lazy-load
const Contract = lazy(() => import('./pages/Contract'))
const Contacts = lazy(() => import('./pages/Contacts'))
const Fundraising = lazy(() => import('./pages/Fundraising'))
const Vacancies = lazy(() => import('./pages/Vacancies'))
const Vacancy = lazy(() => import('./pages/Vacancy'))
const Cookies = lazy(() => import('./pages/Cookies'))
const Policy = lazy(() => import('./pages/Policy'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Prefetch компонент для завантаження всіх сторінок у фоні
function PrefetchPages() {
  useEffect(() => {
    // Після завантаження сторінки починаємо prefetch інших сторінок
    const timer = setTimeout(() => {
      // Prefetch lazy-loaded сторінок
      import('./pages/Contract')
      import('./pages/Contacts')
      import('./pages/Fundraising')
      import('./pages/Vacancies')
      import('./pages/Vacancy')
      import('./pages/Cookies')
      import('./pages/Policy')
      import('./pages/NotFound')
    }, 1000) // Чекаємо 1 секунду після завантаження

    return () => clearTimeout(timer)
  }, [])

  return null
}

function App() {
  return (
    <LanguageProvider>
      <ModalProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <SeoManager />
          <PrefetchPages />
          <PageAnimations>
            <Suspense fallback={<div style={{ minHeight: '100vh', background: '#151419' }} />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contract" element={<Contract />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/donations" element={<Donations />} />
                <Route path="/fundraising" element={<Fundraising />} />
                <Route path="/vacancies" element={<Vacancies />} />
                <Route path="/vacancy/:id" element={<Vacancy />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </PageAnimations>
          <Modal />
        </BrowserRouter>
      </ModalProvider>
    </LanguageProvider>
  )
}

export default App
