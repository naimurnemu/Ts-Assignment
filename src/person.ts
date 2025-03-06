class Person {
  name: string;
  age: number;
  phone?: number;
  address?: {
    city?: string;
    street?: string;
  };
  constructor(
    name: string,
    age: number,
    phone?: number,
    city?: string,
    street?: string
  ) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = {
      city,
      street,
    };
  }

  getAddressCity(): string {
    if (this.address?.city && this.address?.street) {
      return `City: ${this.address.city}, Street: ${this.address.street}`;
    } else if (this.address?.city) {
      return `City: ${this.address.city}`;
    } else if (this.address?.street) {
      return `Street: ${this.address.street}`;
    } else {
      return "Address not available";
    }
  }
}

const person1 = new Person("John Doe", 30, 1234567890, "New York", "Main Street");
const person2 = new Person("Jane Doe", 25, 9876543210);
const person3 = new Person("Bob Smith", 40);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person1.getAddressCity());
console.log(person2.getAddressCity());
console.log(person3.getAddressCity());
