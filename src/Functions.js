
export const GMT = () => {

	var today = new Date();
	var str = today.toGMTString();  // deprecated! use toUTCString()

	console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
}

