var http = require("http");
var testIBook = function (book) {
    console.log(book.title);
};
var b1 = {
    title: "Test",
    author: "test",
    published: new Date(),
    pages: 230
};
testIBook(b1);
