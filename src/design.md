1. Components and Hierarchy

App
 ---ListBooks w/ GoToSearch-Button
   ---BookShelf 
     ---Book
       ---ShelfStatusChangeButton
---SearchBooks
  ---SearchInput w/ Back-Button
  ---Book
    ---ShelfStatusChangeButton


2. Function of the Components

a) App
- Routing

b) ListBooks
- display MyBookList by shelfStatusInfo 
- moves books by changing shelfStatusInfo
- removes books from MyBookList by changing shelfStatusInfo
- gets Books (Info for Book) for MyBookList
- calls/routes to SearchBooks

c) BookShelf
- displays Books based on status of shelfStatusInfo

d) shelfStatusChangeButton
- receives and displays shelfStatusInfo for a Book
- changes shelfStatusInfo of a book

e) SearchBooks
- search books by title or name from bookAPI
- display searchResults
- sets initial shelfStatusInfo and adds after status change to          MyBookList
- synchronizes  with searchInput (if searchInput empty, no books to display)
- calls/routes to ListBooks

3. Data Residence
Book              needs shelfStatusInfo      in App
MyBookList        array of books             in App (needed in search, list)
Query             search Query               in SearchList
shelfStatusInfo                              in App (needed in search, list, shelf)
searchResult                                 in SearchList


4. Preliminary Order of Attack
- create components for ListBooks (static)
- load books for MyBookList
- display books based on Status in different shelfs
- implement shelfStatusChange-Functionality
- implement Routing

then
- create components forSearchList
- implement search functionality
- implement status change and add to MyBookList
- Ensure that the searched books from book list show in correct shelf



5. Question:
- How do I set the initial content of the bookshelf: is it hard-coded or can I get my books from the api?