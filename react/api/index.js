import axiosTrackPromise from "./axios.js"
import getDiffObj from "app/utils/getObjDiff.js"

export const addNewItem = (form, callback)=>{
	axiosTrackPromise(
		"Adding New Item...",
		"POST",
		"/",
		callback,
		form
	)
}
export const updateItem = (initial, form, callback) => {
	const diff = getDiffObj(initial, form);
	if(diff === {}){
		alert("You cannot update without changing values")
		return;
	}
	axiosTrackPromise(
		"Updating Item...",
		"PUT",
		`/${initial._id}`,
		callback,
		diff
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