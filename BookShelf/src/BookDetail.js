// Author : Ciara Power 20072488

 import React from 'react';
    import BookCache from './BookCache';
    import AuthorCache from './AuthorCache';
    import request from 'superagent' ; 
     import { Link } from 'react-router'; 
     import api from './LocalCache';

   

   class BookSection extends React.Component {  // section of page containing book details
    
    handleVote = () => {  // book upvoted
            this.props.upvoteHandler(this.props.book._id,this.props.book.votes);
        };

      render(){
          var mainImage = (
            <div className="book-images">
              <img src={"/"+this.props.book.images[0]}   // first image in nested images collection is main image 
                    alt={this.props.book.title}  className="book"/>
            </div>
            ) ;
            return (
                <div className="row">
                <div className="col-md-4">
                   {mainImage}
                   </div>
                   <div className="col-md-7  about">
                   <div className="row">
                   <div className="col-md-10">
                   <h1>About</h1>
                   </div>
                   <div className="col-md-2" style={{float:'right',textAlign:'right'}}>
                    <span className="glyphicon glyphicon-heart "  style={{ color: 'red',cursor: 'pointer',fontSize:'50px' }} onClick={this.handleVote}>  {this.props.book.votes}</span> {/*heart icon button  for upvotes */}
                   </div>
                   </div>
                   <h4> Category: {this.props.book.category}</h4>
                   <h4> Publish Date: {this.props.book.date}</h4>
                    <p> {this.props.book.blurb}</p>
                    </div>
                  </div>
                  );
          }
    };


class ImagesSection extends React.Component{   // images section of page

  render(){
    var thumbImages = this.props.book.images.map(function(img,index) {   {/*get each image in the collection*/}
               console.log(img);
               return (
                <li key={index}>
                   <img key={index} src={"/"+img}
                       alt="missing" />

                </li>
                ) ;
              } );

  return (
    <div>
    <ul className="book-thumbs">
       {thumbImages}
     </ul>
     </div>
  );
}
};


class Form extends React.Component {
    state = { body: '', user: ''};

    handleBodyChange = (e) => {
        this.setState({body : e.target.value});
    };

    handleUserChange = (e) => {
        this.setState({user: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        let body = this.state.body.trim();
        let user = this.state.user.trim();
        if (!body ) {
            return;
        }
        this.props.authorReviewHandler(body,user );
        this.setState({body: '', user: ''});
    };

    render() {
        return (
            <form  style={{marginTop: '30px'}}>
                <h4>Add a new comment</h4>

                <div className="form-group">
                    <input type="text"  className="form-control"
                        placeholder="Body" value={this.state.body}
                        onChange={this.handleBodyChange} ></input>
                </div>     
                <div className="form-group">
                    <input type="text"  className="form-control"
                        placeholder="Your username" value={this.state.user}
                        onChange={this.handleUserChange} ></input>
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={this.onSubmit}>Submit</button>
            </form>
        );
    }
}


class AuthorReview extends React.Component {

  handleDelete = () => {   // delete author review
            this.props.deleteHandler(this.props.review._id);
        };


    render() {
        let lineStyle = {
            fontSize: '20px', marginLeft: '10px' };
        return (
            <div>
                <span style={lineStyle} >
                    {this.props.review.body}
                </span>
                 - by {this.props.review.user}
                 <div className="col-md-1" style={{float:'right',textAlign:'right'}} onClick={this.handleDelete}>  {/* delete review button */}
                    <button type="delete" className="btn btn-danger btn-s"
                        >Delete</button>
                        </div>
                        <hr/>
            </div> 

        );
    }
}

class AuthorReviewList extends React.Component {
    render() {
        let items = this.props.reviews.map((review,index) => {
            return (
                <AuthorReview key={index} deleteHandler={this.props.deleteHandler} review={review}   />
            );
        } );
        return (
            <div>
                {items}
            </div>
        );
    }
};

    class AuthorSection extends React.Component {   //Author info section of page

       deleteAuthorReview = (reviewId) => {  // to delete an authors review
             request.delete('http://localhost:3000/api/authors/'+this.props.author._id+'/authorReviews/'+reviewId)  // deletes review from server (DELETE)
            .end(function(error, res){
                if (res) {
                  console.log(res);
                  var author = JSON.parse(res.text);
                  api.setOrUpdateAuthor(author); 
                 this.setState({});            
                } else {
                    console.log(error );
                }
            }.bind(this)); 
          };


componentDidMount(){
  request.get('http://localhost:3000/api/authors/'+this.props.author._id) //gets author relevant to book from server (READ)
            .end(function(error, res){
                if (res) {
                  if(error){
                    if (error.status === 404){   // if author doesnt exist
                    AuthorCache.setAuthor(null);
                  }
                }
                  else{
                    var author = JSON.parse(res.text);   // author found
                    AuthorCache.setAuthor(author);
                  }
                    this.setState({}) ; 
                } else {
                   
                    console.log(error );
                 
                }
            }.bind(this)); 
}

componentWillUpdate() {   // before update
        request.get('http://localhost:3000/api/authors/'+this.props.author._id)    // (READ) gets book from server and gets reviews from server that have the relevant bookId attribute value to the book in question
                                                                                                     // this for all purposes returns the book object with a nested collection within of the reviews matching the book
            .end(function(error, res){
                if (res) {
                    var newAuthor = JSON.parse(res.text);   {/* the updated json file from server*/}
                    var oldAuthor=AuthorCache.getAuthor();   {/* the previous list of Reviews that was stored in cache */}
                    AuthorCache.setAuthor(newAuthor)
                    newAuthor=AuthorCache.getAuthor();    {/* updated list*/}

               console.log("Test Authors");
               if(newAuthor.reviews.length!== oldAuthor.reviews.length){    {/* if list length was changed */}
                console.log("Length change");
                      this.setState({});
                }
                } else {
                    console.log(error );
                }
            }.bind(this)); 

           
      };
          addAuthorReview = (body, user) => {
          var author=AuthorCache.getAuthor();
        request
           .post('http://localhost:3000/api/authors/' + 
                      author._id + '/authorReviews' )
           .send({ body: body,user: user})
           .set('Content-Type', 'application/json')
           .end( (err, res) => {
             if (err || !res.ok) {
                 alert('Error adding  author review');
             } else {
                 let author = JSON.parse(res.text);
                 api.setOrUpdateAuthor(author); 
                 this.setState({});               
             }
           } ); 
    };


      render(){
        var author= AuthorCache.getAuthor();
          var mainImage = (
            <div className="author-images">
              <img src={"/"+author.imageUrl}     // get the image to be shown 
                    alt={author.name}  className="author"/>
            </div>
            ) ;
            return (
                   <div className="authorAbout">
                   <div className="row">
                   <div className="col-md-3">
                   {mainImage}
                   </div>
                   <div className="col-md-9 ">
                   <h1 >Author</h1>
                   <a className="link" href={author.url}>
                   <h3 style={{borderBottom:'none'}}>{author.name}</h3>
                   </a>
                    <p> {author.info}</p>
                    </div>
                    </div>
                    <div className="row">
                    <div className= "col-md-12">
                        <h2 >Author Reviews</h2>
                         <AuthorReviewList reviews={author.reviews} deleteHandler={this.deleteAuthorReview}  />
                    <Form author={author}  authorReviewHandler={this.addAuthorReview} /> 
                    </div>
                    </div>
                  </div>
                  );
          }
    };


    class BookDetail extends React.Component {  // total book detail page component

      state = { };


       componentDidMount() {   // when component mounts

        request.get('http://localhost:3000/api/books/'+this.props.params._id)   // gets book object from server (READ)
            .end(function(error, res){
                if (res) {
                    var book = JSON.parse(res.text);
                    BookCache.setBook(book);
                    this.setState({}) ; 
                } else {
                    console.log(error );
                }
            }.bind(this)); 

        request.get('http://localhost:3000/api/authors/'+this.props.params.authorId) //gets author relevant to book from server (READ)
            .end(function(error, res){
                if (res) {
                  if(error){
                    if (error.status === 404){   // if author doesnt exist
                    AuthorCache.setAuthor(null);
                  }
                }
                  else{
                    var author = JSON.parse(res.text);   // author found
                    AuthorCache.setAuthor(author);
                  }
                    this.setState({}) ; 
                } else {
                   
                    console.log(error );
                 
                }
            }.bind(this)); 
      } 


      componentWillUpdate() {  // before update

        request.get('http://localhost:3000/api/books/'+this.props.params._id)  //get the book from server (READ)
            .end(function(error, res){
                if (res) {
                    var newBook = JSON.parse(res.text);   // new book from server
                    var oldBook=BookCache.getBook();   // book that was previously loaded
                    BookCache.setBook(newBook);
                    newBook=BookCache.getBook();

                    if(newBook.votes !== oldBook.votes){   // if the votes differ, an upvote occurred, so update 
                      this.setState({});
                }
              }
                 else {
                    console.log(error );
                }
            }.bind(this));     
      };


       incrementUpvote = (_id,votes) => {   // when upvote occurs
             request.put('http://localhost:3000/api/books/'+_id+'/votes',{"votes": votes+1})  // patches the new votes value to the books attribute
            .end(function(error, res){
                if (res) {
                  console.log(res);
                  this.setState({}) ; 
                } else {
                    console.log(error );
                }
            }.bind(this)); 
          };

      render(){

          let bookDisplay = <p>No book details + {this.props.params._id}</p> ; 
          console.log(this.props.params._id)
          let book= BookCache.getBook();

          let authorDisplay = <p>No author details + {this.props.params.authorId}</p> ; 
          var author=AuthorCache.getAuthor();

         if(author){  // if author exists
            authorDisplay = (
            <AuthorSection author={author}  />
              )
          }
          if (book) {  // if book exists
              bookDisplay =  (
                <div>
                    <div className="row header" >
                      <div className="col-md-1">
                       <Link className="link" to={'/AllBooks/'}>     {/*link back to all books page*/}
                       <img className="img-responsive back-arrow" src="/img/back_arrow.png" alt="arrow" />
                        <figcaption>  Go Back to All Books </figcaption>
                        </Link> 
                        </div>
                         <div className="col-md-10">
                       <h1 className="BlackPageTitle">{book.title}</h1>      
                    </div>
                    <div className="col-md-1">
                     <Link className="link" to={'/AllBooks/'+book._id+'/'+book.authorId+'/BookReviews'}>
                       <img className="img-responsive back-arrow" src="/img/forward_arrow.png" alt="arrow" />
                        <figcaption>  Reviews  </figcaption>
                        </Link> 
                        </div>
                    </div>
                    <BookSection book={book} upvoteHandler={this.incrementUpvote} />
                     <div className="bookCoverImages">
                       <h1> Alternative Book Covers </h1>
                     <ImagesSection book={book}/>
                     </div>
                    </div>
                    ) ;
          }
          return (
            <div>
              {bookDisplay}
                {authorDisplay}
            </div>
            );
      }
    };

 
    export default BookDetail;