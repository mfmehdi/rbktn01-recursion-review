// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var arrayOfelements=[];
  	  //var arrayBody=document.body.childNodes
  	  var search = function(node){
	if(node.childNodes.length === 0 && node.className === className){
		arrayOfelements.push(node)
	}

	if(node.className === className){
		arrayOfelements.push(node)
	}

	for(let i =0; i < node.childNodes.length; i++){
		search(node.childNodes[i]);
		}
	}
	search(document.body);
	return arrayOfelements
};

