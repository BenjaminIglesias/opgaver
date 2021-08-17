let http = require("http");

interface IBook {
    title:String, 
    readonly author: String,
    published?: Date,
    pages?: Number
} 

const testIBook = (book : IBook) => {
    console.log(book);
}
const b1: IBook = {
    title: "test",
    author: "test",
    published:  new Date(),
    pages: 230
}

testIBook(b1)


//Java way
class Book implements IBook {

    #title: string
    #author: string
    #published: Date
    #pages: number

    constructor(title: string,
        author: string,
        published: Date,
        pages: number) {
        this.#title = title
        this.#author = author
        this.#published = published
        this.#pages = pages
    }

    get title(): string { return this.#title }
    set title(title: string) { this.#title = title }

    get author(): string { return this.#author }
    set author(author: string) { this.#author = author }

    get published(): Date { return this.#published }
    set published(published: Date) { this.#published = published }

    get pages(): number { return this.#pages }
    set pages(pages: number) { this.#pages }

    toString(): string { return this.title + this.author + this.published + this.pages }
}
