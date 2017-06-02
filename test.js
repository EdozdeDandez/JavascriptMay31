'use strict';
var family = (function(){
	function People(name, age){
		this.name = name;
		this.age = age;
	}
	People.prototype.name = People.name;
	People.prototype.age = People.age;
	function Fam(name, age, relation){
		People.call(this, age, relation);
		this.relation = relation;
	}
	Fam.prototype = Object.create(People.prototype);
	var nfam;
	return {
		setFam : function(name1,age1,relation1){
			nfam = new Fam(name1,age1,relation1);

		},
		getFam : function(){
			return "My "+ nfam.relation + " is called "+ nfam.name+" and is "+ nfam.age+" years old";
		}
	}
})();
var name = "Edith";
console.log("My name is "+name);
family.setFam("Ed",2,"sister");
console.log(family.getFam());
family.setFam("Dee",28,"brother");
console.log(family.getFam());
family.setFam("Dan",50,"father");
console.log(family.getFam());
family.setFam("Jane",45,"mother");
console.log(family.getFam());