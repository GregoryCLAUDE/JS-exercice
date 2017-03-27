var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
var month = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","dececmbre"];
 console.log(month[2]);
 console.log(month[5]);
 console.log(month[10]);
 var modif = month.splice(7,1,"août");
 console.log(month);