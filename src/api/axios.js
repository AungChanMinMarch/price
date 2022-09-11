import axios from 'axios'

const instance = axios.create({
	baseURL: 'process.env.API_URL',
	headers: {
		'Content-Type': 'application/json',
		// timeout: 1000,
	},
    withCredentials: true
});

export const POST = (pathname, data) => instance({
    method: 'post',
	url: pathname,
	data: data
})
export const GET =  (pathname)=> instance({
	method: 'get',
	url: pathname,
})
export const DELETE =  (pathname)=> instance({
	method: 'delete',
	url: pathname,
})