import axiosTrackPromise from "./axios.js"

export const addMemory = (form)=>{
	function callback(res){
		if(res.status === 200){
			// window.location.replace("/memories")
			// window.location.href = "/memories"
			//using this but I don't like this. BUt both above refresh page
			history.back();
		}
	}
	axiosTrackPromise(
		"Creating New Memory",
		"POST",
		"/memories",
		callback,
		{
			name: form.name,
			type: form.addMemoryType
		}
	)
}

export const getMemories = (callback)=>{
	axiosTrackPromise(
		"Loading your memories... please wait a second...",
		"GET",
		"/memories",
		callback
	)
}