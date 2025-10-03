class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }

    getSummary(){
        console.log(`Book: ${this.title} by ${this.author} (${this.author})`)
    }
}

const Book1 = new Book("Things Fall apart", "Chinua Achebe", "2024")
const Book2 = new Book("potter's wheel", "Favour", "2023")

    Book1.getSummary()
    Book2.getSummary()