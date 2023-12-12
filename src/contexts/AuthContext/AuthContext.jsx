import { createContext, useContext, useState } from "react"

const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null)
  const value = {
    token, setToken
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useToken = () => useContext(AuthContext);
export default AuthProvider