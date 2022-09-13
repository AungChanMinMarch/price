import axios from 'axios'
import axiosTrackPromise from "./axios.js"

export const signIn = (form, callback) => {
	axiosTrackPromise(
		"signing in...",
		"POST",
		'auth/signin',
		callback,
		{
	    	email: form.email,
	    	password: form.password
		}
	)
}
export const signOut = (callback) => {
	axiosTrackPromise(
		"signing out...",
		'GET',
		'auth/signout',
		callback
	)
}
export const signUp = (form, callback)=> {
	axiosTrackPromise(
		"signing up...",
		"POST",
		'auth/signup', 
		callback,
		{
	        email: form.email,
	        password: form.password
	    }
	)
}