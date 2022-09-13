import React from "react"
class Emitter {
	constructor(){
		this.hasPromise = false;
	}
	on(fn){
		this.updaterFn = fn
	}
	add(description, canceler){
		this.hasPromise = true;
		this.updaterFn(true, description, canceler)
	}
	remove(){
		this.hasPromise = false;
		this.updaterFn(false)
	}
}
const emitter = new Emitter();
export const usePromiseTracker = ()=>{
  	let isMounted = React.useRef(false);
	const [promise, setPromise] = React.useState({
		inProgress: false
	})
	const updatePromiseStatus = (anyPromise, description, canceler) => {
		if (!anyPromise) {
			setPromise({ inProgress: false});
		} else {
			const promiseCanceller = ()=>{
				setPromise({ inProgress: false})
				canceler();
			}
			setPromise({
				inProgress: true,
				description: description || "",
				promiseCanceller: promiseCanceller
			});
		}
  	};
	React.useEffect(()=>{
		if(isMounted.current) return;
		emitter.on(updatePromiseStatus)
		isMounted.current = true
	})
	return { promise }
}
export const trackPromise = (promise, description, canceler, callback)=>{
	if(emitter.hasPromise){
		console.log('sorry there has already existed a promise');
		return
	}
	emitter.add(description, canceler);
	const onResolveHandler = (res) => {
		callback(res)
		emitter.remove()
	}
	const onRejectHandler = () =>emitter.remove()
	promise.then(onResolveHandler).catch(onRejectHandler)
	return promise
}