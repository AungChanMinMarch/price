export default function(obj1, obj2){
	//return new object that contains changes from obj1 to obj2
	let diff = {};
	for(let property in obj2){
		if(obj1[property] !== obj2[property]){
			diff[property] = obj2[property]
		}
	}
	return diff
}