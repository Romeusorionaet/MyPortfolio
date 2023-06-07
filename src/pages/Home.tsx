import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'

export function Home() {
  return (
    <div className="min-h-screen text-white-900 pt-20">
      <Header />

      <Main />

      <Footer />
    </div>
  )
}
