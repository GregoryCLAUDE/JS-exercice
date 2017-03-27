function alwaysTrue (){
		return true;
	};


function string(yipikai) {
	return yipikai;
};


function concat(a,b){

	return (a + b);

}
console.log(concat("yabada","dou"));

function comparate(x,y){
	if (x>y){
		return "le premier nombre est plus grand"
	}
	else if (x<y){
		return "le premier nombre est plus petit"
	}	
 else {
	return "les deux nombres sont identiques"
}
};

console.log(comparate(6,3));
console.log(comparate(3,6));
console.log(comparate(6,6));

function compil (n,c) {
	return n + " " + c
}

console.log (compil (3,"poulets"));