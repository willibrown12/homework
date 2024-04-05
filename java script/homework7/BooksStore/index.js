function init() {

    const booksListDiv = document.getElementById("booksList") // create the books list container
    booksListDiv.style.border = "1px solid black"
    booksListDiv.style.background = "pink"
    booksListDiv.style.textAlign = "center"
    // create book ui 
    // var singleBook = books[0]
    // var singleBook2 = books[1]

    // books.forEach(function (currentBook) {

    // })

   
        const currentBook = books[index];
        const bookContainerDiv = document.createElement("div") // create the single book container
        bookContainerDiv.id = `book_${index}`
        bookContainerDiv.className = "book-card"
        const bookTitleH2 = document.createElement("h2") // create header for title
        bookTitleH2.innerText ="Title: "+ currentBook.title // insert the title from the Data into UI 

        const bookTitleH4 = document.createElement("h4")
        bookTitleH4.innerText = "Author: "+currentBook.author

        const bookTitlecountry = document.createElement("h4") 
        bookTitlecountry.innerText = "Country: "+currentBook.country
        const year = document.createElement("h4") 
        year.innerText = "year: "+currentBook.year
       

       
        const bookLink = document.createElement("h4")
        bookLink.innerText = "link: "+currentBook.link 
        const pages = document.createElement("h4")
        pages.innerText = "pages: "+currentBook.pages
       
        



        bookContainerDiv.append(bookTitleH2, bookTitleH4, bookTitlecountry,bookLink,year,pages) // append title (h3) into single book container

        booksListDiv.append(bookContainerDiv) // append single book container into books list container
    

}


init();