function Human (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.calculateTelomereLength ()
    }

Human.prototype.calculateTelomereLength = function () {
    this.telomereLength = Math.random();
    }

function HumanChild (stageOfDevelopment, name, gender) {
    Human.call(this, name, gender, "minor");
    this.stageOfDevelopment = stageOfDevelopment;
}

HumanChild.prototype = Object.create(Human.prototype);

HumanChild.prototype.doGrowthSpurt = function () {
    this.telomereLength--;
};

let pai = new Human('Fulano', 'Masculino', 27)
  
let filha = new HumanChild('Inicial', 'Ciclana', 'Feminino', 2)