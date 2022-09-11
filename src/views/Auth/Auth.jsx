import React from "react"

import { toast } from 'react-toastify'

import './Auth.css'
import { Input } from '@app/components'
import { signIn, signUp } from '@app/api/auth.js'

const initialForm = {name: '', email:"", password: '', confirm_password:''}

const Auth = ({ onSubmit })=>{
	const [isSignIn, setIsSignIn] = React.useState(true)
	const [form, setForm] = React.useState(initialForm);

	const submit = ()=>{
		if(!form.email) return toast.error('email can not be empty')
		if(!form.password) return toast.error('password can not be empty')
		if(isSignIn){
			signIn(form, onSubmit)
		}else{
			if(form.password != form.confirm_password)
				return toast.error('password not match')
			signUp(form, onSubmit)
		}
	}
	React.useEffect(()=>{
		setForm(initialForm)
	}, [isSignIn])
	return (
		<div className="Auth fbox">
			<h1 className='Auth-header'>
				{isSignIn ? "Sign in Your Account" : "Sign Up For Free"}
			</h1>
			<Input name='email' state={form} label="Email Address" setter={setForm}/>
			<Input name='password' state={form} label="Password" setter={setForm}/>
			{!isSignIn &&
				<Input name='confirm_password' state={form} label="Confirm Password" setter={setForm}/>
			}
			<button className='Auth-submit' onClick={submit}>{isSignIn ? "Sign In":"Sign Up"}</button>
			<h4 onClick={()=>setIsSignIn(prev => !prev)}>
				{ isSignIn ? "Don't have an account? Sign up now.":
				 "Already have an account? signIn Now"}
			</h4>
		</div>
	)
}
export default Auth