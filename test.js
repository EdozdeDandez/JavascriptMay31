'use strict';
var family = (function(){
	function People(name, age){
		this.name = name;
		this.age = age;
	}
	function Fam(name, age, relation){
		People.call(this, name, age);
		this.relation = relation;
	}
	Fam.prototype = Object.create(People.prototype);
	var nfam = new Fam("e",2,"Siz");
	var allfam = [];
	var f;
	var name1;
	var age1;
	var relation1;
	return {
		setFam : function(){
			name1 = document.getElementById("fname").value.trim();
			age1 = document.getElementById("age").value.trim();
			relation1 = document.getElementById("relate").value.trim();
			nfam = new Fam(name1,age1,relation1);
			allfam.push(nfam);
			console.log(name1);
			$('#fform').trigger("reset");
			return family.getFam();

		},
		getFam : function(){
			var doc = document.getElementById("family-names");
			var text = "";
			for (var i = 0; i < allfam.length; i++) {
				f = allfam[i];
				text += "My " + f.relation + " is called " + f.name + " and is " + f.age + " years old.<br>";
			}
			return doc.innerHTML = text;
			//return false;
			//return "My "+ nfam.relation + " is called "+ nfam.name+" and is "+ nfam.age+" years old";
		}
	}
})();
/*family.setFam("Ed",2,"sister");
console.log(family.getFam());
/*var name = "Edith";
console.log("My name is "+name);
family.setFam("Ed",2,"sister");
console.log(family.getFam());
family.setFam("Dee",28,"brother");
console.log(family.getFam());
family.setFam("Dan",50,"father");
console.log(family.getFam());
family.setFam("Jane",45,"mother");
console.log(family.getFam());*/