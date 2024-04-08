import React, { useState } from 'react'
import { signUp, login } from "../../api/authRequest";

import { useInfoContext } from "../../context/infoContext"
import './Auth.css'

const Auth = () => {

    const [isSignup, setIsSignup] = useState(true);
    const [loading, setLoading] = useState(false);
    const { setCurrentUser } = useInfoContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        setLoading(true)
        try {
            let res;
            if (!isSignup) {
                const password = formData.get('password')
                const confirmPassword = formData.get('confirmPassword')
                // signUp
                if (password === confirmPassword) {
                    setConfirmPass(true)
                    res = await signUp(formData)
                } else {
                    return setConfirmPass(false)
                }
            } else {
                // login
                res = await login(formData)
            }
            localStorage.setItem("profile", JSON.stringify(res.data.user))
            localStorage.setItem("token", JSON.stringify(res.data.token))
            setCurrentUser(res?.data.user);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error?.response?.data.message)
        }

    }

    return (
        <div className='auth'>
            <div className="autt-right">
                <form onSubmit={handleSubmit} action="" className="auth-form">
                    <h3>{isSignup ? "Login" : "SignUp"}</h3>

                    {
                        !isSignup && <>
                            <div>
                                <input type="text" name='firstName' minLength={3} className="info-input" placeholder='Enter your firstname' required />
                            </div>
                            <div>
                                <input type="text" name='lastName' className="info-input" placeholder='Enter your lastname' required />
                            </div>
                        </>
                    }
                    <div>
                        <input type="email" name='email' className="info-input" placeholder='Enter your email' required />
                    </div>
                    <div>
                        <input type="password" name='password' minLength={4} className="info-input" placeholder='Enter your password' required />
                    </div>
                    <div>
                        <span onClick={() => {
                            setIsSignup(!isSignup)
                        }} className="info-span">{!isSignup ? "Already have a account Login" : "Don't have an account SignUp"}</span>

                        <button disabled={loading} className='info-btn button'>{isSignup ? "Login" : "SignUp"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth;