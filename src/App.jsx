import { Route, Routes } from 'react-router-dom'
import './App.css'
import './assets/fonts/AeonikTRIAL.css'
import { Dashboard, Error, Home, SignIn, SignUp } from './pages'
import { Navbar } from './components'
import { ProtectedRoute } from './utils'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path="*" element={<Error />} />
          <Route index element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Route>
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
