// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if(Array.isArray(obj)){
		if(obj.length === 0){
			return "[]";
		}
		var result = "["
		for (var i = 0; i < obj.length; i++) {
			if(i=== obj.length-1){
				result = result + stringifyJSON(obj[i])
			}
			else{result = result + stringifyJSON(obj[i])+',';}
			
		}
		
	//	result = result.slice(0, result.length - 1);
		 result = result+"]";
	} else if( typeof obj === "object" && obj!== null){
		var result = "{"
		
		for(var i = 0; i < Object.keys(obj).length ; i++){
			if(obj[Object.keys(obj)[i]] === undefined && typeof obj[Object.keys(obj)[i]] === "function"){
				delete obj[Object.keys(obj)[i]];
				i--
			}
			if(obj[Object.keys(obj)[i]] !== undefined && typeof obj[Object.keys(obj)[i]] !== "function")
			{

			 if(i===Object.keys(obj).length - 1) result = result +stringifyJSON(Object.keys(obj)[i])+":"+stringifyJSON(obj[Object.keys(obj)[i]])

				else {result = result +stringifyJSON(Object.keys(obj)[i])+":"+stringifyJSON(obj[Object.keys(obj)[i]])+",";}
			}
	}   	
		
	//	result = result.slice(0, result.length - 1);
		result = result+"}";
	}
	else {


		if( typeof obj === "number" || typeof obj === "boolean" ){
			if(isNaN(obj)){
				return "null"
			}
				return obj.toString()
		}
		else { 
			if(typeof obj === "string"){
				return  '"'+ obj +'"';
			}
			else if(Boolean(obj) === false){
				console.log(obj)
				return "null";
			}
		}
	}

	return result;


};

var obj = {"a":{1:"n"}, b:[1,2,3,4,5]}// 
