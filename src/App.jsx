import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PersonPage from './pages/PersonPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/person/:id" element={<PersonPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
