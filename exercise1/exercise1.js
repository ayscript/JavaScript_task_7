class Book{
    constructor(title, author, year, isBorrowed = false){
        this.title = title
        this.author = author
        this.year = year
        this.isBorrowed = isBorrowed
    }

    getSummary(){
        console.log(`Book: ${this.title} by ${this.author} (${this.author})`)
    }

    borrowBool(){
        this.isBorrowed = true
    }


}

const Book1 = new Book("Things Fall apart", "Chinua Achebe", "2024")
const Book2 = new Book("potter's wheel", "Favour", "2023")

    Book1.getSummary()
    Book2.getSummary()