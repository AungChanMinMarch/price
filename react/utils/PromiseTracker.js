import React from "react"
import {toast} from "react-toastify"

import './PromiseTracker.css'
const emitter = {
	addFn: null,
	rmFn: null,
	canceler: null,
	queue: null
}
const PromiseTracker = ()=>{
	const [promise, setPromise] = React.useState({ inProgress: false, description: "" });
	const addPromise = (description)=>setPromise({ inProgress: true, description: description });
	const rmPromise = ()=>setPromise({ inProgress: false, description: "" });
	
	React.useEffect(()=>{
		emitter.addFn = addPromise;
		emitter.rmFn = rmPromise;
		if(emitter.queue){
			emitter.queue();
			emitter.queue = null;
		}
	}, []);
	return (
		<div className={promise.inProgress ? "PromiseTracker-On" :"PromiseTracker-Off"}>
			{/*{onCancel && <img 
				src="/img/close.svg" 
				alt="cancel btn"
				className="load-closer"
				onClick={onCancel}
			/>}*/}
			<div className="PromiseTracker-loader"></div>
			<div className="PromiseTracker-description">{promise.description || "Loading please wait..."}</div>
		</div>
	)
}
export default PromiseTracker;
export const trackPromise = (promise, description, callback)=>{
	if(emitter.addFn === null && emitter.rmFn === null){
		console.log("function haven't set yet in emitter");
		emitter.queue = ()=>trackPromise(promise, description, callback);
		return promise;
	}
	emitter.addFn(description);

	const onResolveHandler = (res) => {
		toast.success(res.data.message)
		emitter.rmFn();
		callback(res);
	}
	const onRejectHandler = (err) => {
		console.log(err);
		toast.error(err.response.data.message);
		emitter.rmFn();
	}
	promise.then(onResolveHandler).catch(onRejectHandler);
	return promise;
}