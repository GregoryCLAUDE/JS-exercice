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

function calling ( name, firstname, age){

	return "Bonjour "+ name +" "+ firstname + ",tu as "+ age + " ans."
}
 console.log (calling("jean","peuplus",120));


function genderAge (gender, age){

age = age>18? "majeur":"mineur";
return gender ==="homme"? "tu es un homme et tu es "+ age : "tu es une femme et tu es "+ age;
}
console.log (genderAge("homme", 20));
console.log (genderAge("homme", 12));
console.log (genderAge("femme", 20));
console.log (genderAge("femme", 12));