class Cat {
  name: string;
  color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  meow() {
    console.log(`That ${this.color} cat ${this.name} says meow!`);
  }
}

const cat = new Cat("Garfield", "orange");
cat.meow();

function isCat(instanceCat: any): boolean {
  return instanceCat instanceof Cat;
}

if(isCat(cat)) console.log("yes, it's a cat.")
else console.log("no, it's not a cat.");

if(isCat("My cat")) console.log("yes, it's a cat.")
else console.log("no, it's not a cat.");
