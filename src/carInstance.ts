class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Driver {
  name: string;
  licanceNumber: string;

  constructor(name: string, licanceNumber: string) {
    this.name = name;
    this.licanceNumber = licanceNumber;
  }
}

function VehicleInfo(car: Car, driver: Driver) {
  return {
    ...car,
    ...driver,
  }
}

const car = new Car("Toyota", "Camry", 2022);
const driver = new Driver("John Doe", "123456789");

const vehicle = VehicleInfo(car, driver);

console.log(vehicle);
