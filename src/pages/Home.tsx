import { motion } from 'framer-motion'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'

export function Home() {
  return (
    <motion.div
      className="box min-h-screen text-white-900 pt-20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <Main />
      <Footer />
    </motion.div>
  )
}
