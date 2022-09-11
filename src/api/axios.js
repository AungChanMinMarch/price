import axios from 'axios'
import { env } from 'react-env-config'

const instance = axios.create({
	baseURL: process.env.API_URL || 'https://special-memory-api.aungchanminmarc.repl.co/',
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