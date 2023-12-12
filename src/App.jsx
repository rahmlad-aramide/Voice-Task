import { Route, Routes } from 'react-router-dom'
import './App.css'
import './assets/fonts/AeonikTRIAL.css'
import ChangePriority from './pages/Dashboard/ChangePriority'
import { Error, Home, SignIn, SignUp } from './pages'
import { Navbar } from './components'
import { ProtectedRoute } from './utils'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { AuthProvider, SearchProvider } from './contexts'

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route path="*" element={<Error />} />
              <Route element={<ProtectedRoute />}>
                <Route index element={<Home />} />
                {/* <Route path='/dashboard' element={<Dashboard />} /> */}
              </Route>
              <Route path="/test" element={<ChangePriority />} />
            </Route>
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </SearchProvider>
    </QueryClientProvider>
  )
}

export default App
