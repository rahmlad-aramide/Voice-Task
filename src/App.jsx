import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/fonts/AeonikTRIAL.css";
import ChangePriority from "./pages/Dashboard/ChangePriority";
import { Dashboard, Error, Home, SignIn, SignUp } from "./pages";
import { Navbar } from "./components";
import { ProtectedRoute } from "./utils";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  AuthProvider,
  ModalProvider,
  MutationProvider,
  SearchProvider,
} from "./contexts";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <ModalProvider>
          <AuthProvider>
            <MutationProvider>
              <ToastContainer />
              <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route path="*" element={<Error />} />
                    <Route index element={<Home />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                  </Route>
                  <Route path="/test" element={<ChangePriority />} />
                </Route>
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
              </Routes>
            </MutationProvider>
          </AuthProvider>
        </ModalProvider>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
