'use client'
import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '@/firebase/config'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const router = useRouter()
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        return
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        signOut(auth)
        router.push('/') 
        toast.error('Signout Successfully');
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}