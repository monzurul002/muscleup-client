import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";


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
    //password reset
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    //googleSign in
    const provider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signInWithPassword,
        userProfileUpdate,
        googleSignIn,
        logOut,
        resetPassword
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setLoading(false);
            setUser(currUser);
            if (currUser) {
                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ email: currUser.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("token", data.token)
                    })
            }
            else {
                localStorage.removeItem("token")
            }

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