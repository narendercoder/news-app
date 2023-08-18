'use client'
import HomePage from './components/HomePage'
import { useAuth } from './context/AuthContext'
import Login from './components/auth/login'

export default function Home() {
  const {currentUser} = useAuth()
  return (
    <>
       {!currentUser && <Login/>}
      {currentUser && <HomePage/>}
    </>
  )
}
