'use client'
import { useEffect, useState } from "react"
import Header from "../components/Header"
import { AuthProvider } from "../context/AuthContext"
import { FilterContextProvider } from "../context/FilterContext"
import Providers from "../context/Provider"
import {ToastContainer} from "react-toastify"
import Preloader from "../components/Preloader"
import { Provider } from "react-redux"
import store from "../Redux/store"
import Footer from "../components/Footer"


const GlobalWrapper = ({children}) => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setloading(false);
      }, 1000);
    // eslint-disable-next-line
  }, []);
  return (
   <>
     <Provider store={store}>
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
          {
            loading ? <>
              <Preloader/>
            </> : <>
            <Header />
          <div className="w-screen flex justify-center items-center dark:bg-zinc-900">
            <div className="w-full custom-container flex justify-center items-center px-5">
              {children}
            </div>
          </div>
          <Footer/>
            </>
          }
        </Providers>
      </AuthProvider>
    </FilterContextProvider>
  </Provider>
   </>
  )
}

export default GlobalWrapper