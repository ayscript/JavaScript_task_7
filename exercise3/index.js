class Vehicle{
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year
    }

    getInfo(){
        console.log(`Vehicle Brand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`)
    }

    isOld(){
        const date = new Date()
        const currentYear = date.getFullYear()

        console.log(`${currentYear - this.year > 10 ? true : false}`)
    }
}

class Car extends Vehicle{
    constructor (brand, model, year, fuelType){
        super(brand, model, year)
        this.fuelType = fuelType
    }
}

const MyCar = new Car('Toyota', 'Hilux', 2017, 'Gasoline')

MyCar.isOld()