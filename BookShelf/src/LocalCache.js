// Author: Ciara Power 20072488
var _ = require('lodash')

class LocalCache {    // local cache for books and reviews lists

    constructor() {
        this.books = [] ;
        this.reviews = [] ;
        this.authors=[];
    }

   initializeBooks(books) {    // NEW 
          this.books = books
          return null; 
      }

    getAllBooks() {
        return this.books ;
    }
    
     initializeAuthors(authors) {    // NEW 
          this.authors = authors
          return null; 
      }

    getAllAuthors() {
        return this.authors ;
    }


    getAllReviews() {
        return this.reviews ;
    }

    initializeReviews(reviews) {
        this.reviews = reviews;
        return null;
    }

     deleteBook(k) {
          let elements = _.remove(this.books, 
              (book) => book._id === k
          );
          return elements; 
      }

 deleteReview(k) {
          let elements = _.remove(this.reviews, 
              (review) => review._id === k
          );
          return elements; 
      }

 setOrUpdateBook(book) {
      var index = _.findIndex(this.books, { _id: book._id} );   
      if (index !== -1) {                 
          this.books.splice(index,1,book) ;
      } else {
          this.books.push(book) ;
      }
      return true ;
  }

  setOrUpdateAuthor(author) {
      var index = _.findIndex(this.authors, { _id: author._id} );   
      if (index !== -1) {                 
          this.authors.splice(index,1,author) ;
      } else {
          this.authors.push(author) ;
      }
      return true ;
  }

setOrUpdateReview(review) {
      var index = _.findIndex(this.reviews, { _id: review._id} );   
      if (index !== -1) {                 
          this.reviews.splice(index,1,review) ;
      } else {
          this.reviews.push(review) ;
      }
      return true ;
  }
add(id,t,aid,a,d,b,i,c) {
          let len = this.books.length ;
          let newLen = this.books.push({
              _id: id, title: t, authorId : aid, author: a, date: d, blurb:b, images: i, category:c }) ;
          return newLen > len ;
      }

       update(id,t,aid,a,d,b,i,c) {
          var index = _.findIndex(this.books, 
              (book) => book._id === id
          );      
          if (index !== -1) {
              this.books.splice(index, 1, 
                  {     _id: id, title: t, authorId : aid, author: a, date: d, blurb:b, images: i, category:c });
              return true ;
          }
          return false ;
      }


  getBook(id) {
      var result = null ;
      var index = _.findIndex(this.books, { '_id': id} );     
      if (index !== -1) {                 
          result = this.books[index];
      }
      return result ;
  }
}



export default (new LocalCache() );
