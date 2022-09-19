import axiosTrackPromise from "./axios.js"

export const addNewItem = (form)=>{
	function callback(res){
		if(res.status === 200){
			// window.location.replace("/memories")
			// window.location.href = "/memories"
			//using this but I don't like this. BUt both above refresh page
			history.back();
		}
	}
	axiosTrackPromise(
		"Adding New Item...",
		"POST",
		"/",
		callback,
		{
			name: form.name,
			type: form.addMemoryType
		}
	)
}

export const getApp = (callback)=>{
	axiosTrackPromise(
		"Loading your app... please wait a second...",
		"GET",
		"/",
		callback
	)
}