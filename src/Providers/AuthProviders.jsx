import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
const auth = getAuth(app)
export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(true)
    //new user create
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //user signin with email password
    const signInWithPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //profile update of user
    const userProfileUpdate = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }


    //logout 
    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signInWithPassword,
        userProfileUpdate,
        logOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    )
};

export default AuthProviders;