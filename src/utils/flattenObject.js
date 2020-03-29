// https://gist.github.com/penguinboy/762197
export default function flattenObject(ob) {
	const toReturn = {};
	
	for (let i in ob) {
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
			const flatObject = flattenObject(ob[i]);
			for (let x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				toReturn[x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
};