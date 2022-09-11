import { GET, POST } from './axios.js'

export const signIn = (form, callback) => {
	POST('auth/signin', {
    	email: form.email,
    	password: form.password
	}).then(()=>{
		callback();
	})
}
export const signOut = (callback) => {
	GET('auth/signout').then(()=>{
		callback()
	})
}
export const signUp = (form, callback)=> {
	POST('auth/signup', {
        email: form.email,
        password: form.password
    }).then(()=>{
    	callback();
    })
}