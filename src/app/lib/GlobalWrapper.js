'use client'
import Header from "../components/Header"
import { AuthProvider } from "../context/AuthContext"
import { AppProvider } from "../context/Context"
import { FilterContextProvider } from "../context/FilterContext"
import Providers from "../context/Provider"
import {ToastContainer} from "react-toastify"

const GlobalWrapper = ({children}) => {
  return (
    <AppProvider>
    <FilterContextProvider>
      <AuthProvider>
        <Providers>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Header />
          <div className="w-screen flex justify-center items-center dark:bg-zinc-900">
            <div className="w-full custom-container flex justify-center items-center px-5">
           
              {children}
            </div>
          </div>
        </Providers>
      </AuthProvider>
    </FilterContextProvider>
  </AppProvider>
  )
}

export default GlobalWrapper