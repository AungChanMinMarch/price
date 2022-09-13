import axios from 'axios'
import { trackPromise } from "@app/hooks/usePromiseTracker.js"

const instance = axios.create({
	baseURL: process.env.API_URL || 'https://special-memory-api.aungchanminmarc.repl.co/',
	headers: {
		'Content-Type': 'application/json',
		// timeout: 1000,
	},
    withCredentials: true
});

export default (description, method, url, callback, data)=>{
	// const cancelTokenSource = axios.CancelToken.source();
	// const CANCEL = ()=>{
	// 	console.log('cancelTokenSource');
	// 	cancelTokenSource.cancel()
	// }
	trackPromise(
		instance({
			method, url, data, 
			// cancelToken: cancelTokenSource.token
		}),
		description,
		callback
	)
}

// export const POST = (pathname, data) => instance({
//     method: 'post',
// 	url: pathname,
// 	data: data,
// 	cancelToken: cancelTokenSource.token
// })
// export const GET =  (pathname)=> instance({
// 	method: 'get',
// 	url: pathname,
// })
// export const DELETE =  (pathname)=> instance({
// 	method: 'delete',
// 	url: pathname,
// })
// export const CANCEL = ()=>{
// 	console.log('cancelTokenSource');
// 	cancelTokenSource.cancel()
// }