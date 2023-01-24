console.log('hello world')
console.log(3.01 == 3)
const t = ['jim', 'bob', 'marley'];
for (const f of t) {
    console.log(f)
}

t.forEach((f) => console.log(f))

function loopT(t) {
    for (const f of t) {
        console.log(`${f} at index ${t.indexOf(f)}`)
    }
}
loopT(t)

//Exercise 1

//const favoriteBooks = [];

//add all that don't contain 'great'
// const addFavoriteBook = (bookTitle) => {
//     if (!bookTitle.includes('Great')) {
//         favoriteBooks.push(bookTitle);
//     }
// };

class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }
    addFavoriteBook(bookTitle) {
        if (!bookTitle.includes('Great')) {
            return this.favoriteBooks.push(bookTitle);
        }
    };

    printFavoriteBooks() {
        return console.log(this.favoriteBooks);
    };
}

const bookshelf = new Bookshelf();

// bookshelf.addFavoriteBook("A Song of Ice and Fire");
// bookshelf.addFavoriteBook("The Great Gatsby");
// bookshelf.addFavoriteBook("Crime & Punishment");
// bookshelf.addFavoriteBook("Great Expectations");
// bookshelf.addFavoriteBook("You Don't Know JS");


var BOOK_API = "https://some.url/api";

// const cb = (books) => {
//     console.log(books)
//     books.forEach(bookshelf.addFavoriteBook(bookTitle));
// };

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

const loadBooks = (bookshelf) => {
    fakeAjax(BOOK_API, (books) => {
        books.forEach((book) => {
            bookshelf.addFavoriteBook(book)
        })
        bookshelf.printFavoriteBooks();
    });
}

// function loadBooks(bookshelf) {
//     fakeAjax(BOOK_API, function onBooks(bookNames) {
//         for (const book of bookNames) {
//             bookshelf.addFavoriteBook(book);
//         }
//         bookshelf.printFavoriteBooks();
//     })
// }

loadBooks(bookshelf);

// const printFavoriteBooks = (books) => {
    
// };

// printFavoriteBooks(favoriteBooks);