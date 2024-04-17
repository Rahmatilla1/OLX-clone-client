import React, { useState } from 'react'
import { signUp, login } from "../../api/authRequest";
import { useInfoContext } from "../../context/infoContext"
import GoogleAuth from '../../component/googleAuth';

import './Auth.css'


const Auth = () => {

    const [isSignup, setIsSignup] = useState(true);
    const [code, setCode] = useState(false);
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
                // signUp
                if (password) {
                    res = await signUp(formData)
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
        <div className='signup'>
            <div className="curcle"></div>
            <div className="signup-page">
                <form onSubmit={handleSubmit} action="" className="auth-form">
        <button className="facebook mb-3">
        <i class="fa-brands fa-facebook"></i>
        <span>Продолжить через Facebook</span>
        </button>
        <button className="facebook apple mb-3">
        <i class="fa-brands fa-apple"></i>
        <span>Продолжить через Apple</span>
        </button>
        <GoogleAuth/>
                    <div className='inp'>
                        <div className="span">
                            <span className='border'></span>
                            <span>или</span>
                            <span className='border'></span>
                        </div>
                        <div className="d-flex justify-content-around">
              <h5
                style={isSignup ? { cursor: "pointer", borderBottom: '3px solid #002F34', padding: '10px'} : {cursor: "pointer"}}
                onClick={() => setIsSignup(true)}
              >
                Войти
              </h5>
              <h5
                style={!isSignup ? { cursor: "pointer", borderBottom: '3px solid #002F34', padding: '10px'} : {cursor: "pointer"}}
                onClick={() => setIsSignup(false)}
              >
                Зарегистрироваться
              </h5>
            </div>
                        <label htmlFor="" className='label'>
                        Электронная почта или телефон
                        <input type="email" name='email' className="info-input" required/>
                        </label>
                    <label htmlFor="" className='password label'>
                    Пароль <br />
                        <input type={!code ? "password" : 'text'} name='password'className="info-input" required />
                        <span onClick={() => setCode(!code)}>{!code ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>}</span>
                        </label>
                    </div>
                        <a href="" className='passwor-zabil'>{isSignup ? "Забыли пароль?" : ""}</a>
                        <p>{isSignup ? "" : `Я соглашаюсь с Условия использования а также с передачей и обработкой моих данных в OLX. Я подтверждаю своe совершеннолетие и ответственность за размещение объявления`}</p>
                        <br />
                        <a href="">
                            {isSignup ? "" : <input className='zabilone' type="checkbox" />}
                        </a>
                            <a href="" className='zabil'>{isSignup ? "" : "Да, я хочу получать информацию о новостях и акциях на OLX."}</a>
                    <div>
                        <button disabled={loading} className='btn-acc'>{isSignup ? "Войти" : "Зарегистрироваться"}</button>
                    </div>
                    <p>{isSignup ? "При входе вы соглашаетесь с нашими" : ""}<a href="" className='a-p'>{isSignup ?"Условия использования." : ""}</a></p>
                </form>
            </div>
        </div>
    )
}

export default Auth;