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


}



export default (new LocalCache() );
