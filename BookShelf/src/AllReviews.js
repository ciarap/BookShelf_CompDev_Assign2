// Author: Ciara Power 20072488

import React from 'react';
import api from './LocalCache';
import _ from 'lodash';
import { Link } from 'react-router'; 
import BookCache from './BookCache';

var request = require('superagent') ;

class SelectBox extends React.Component {     
    handleChange = (e,  value) => {    // handles change after sort value changes
        e.preventDefault();
        this.props.onUserInput( value);
    };


    handleSortChange = (e) => {   //sort value changes
        this.handleChange(e,  e.target.value);
    };

    render() {
        return (
            <div className="searchSortBar">
                <p>Sort by: &emsp; </p>
                <select id="sort" value={this.props.order} 
                    onChange={this.handleSortChange} >
                    <option value="bookTitle">Book</option>
                    <option value="username">User</option>
                    <option value="upvote">Highest Rated</option>
                </select>
            </div>
        );
    }
  }


class AllReviewListItem extends React.Component {    // each review item in list 
 state = {};

  componentDidMount() {       // after mounted first 
console.log("Book"+this.props.review.bookId);
  request.get('http://localhost:3000/api/books/'+this.props.review.bookId)    // gets book related to the review being listed (READ)
            .end(function(error, res){
                if (res) {
                    var book = JSON.parse(res.text);
                    BookCache.setBook(book);
                    this.setState({}) ; 
                } else {
                    console.log(error );
                }
            }.bind(this)); 
}

 componentWillReceiveProps(nextProps) {      // change to state
console.log("Next"+this.props.review.bookId);
    request.get('http://localhost:3000/api/books/'+this.props.review.bookId)   //gets book related to review in question after changes occur
            .end(function(error, res){
                if (res) {
                    var newBook = JSON.parse(res.text);
                    BookCache.setBook(newBook);
                    
                    if(newBook._id!==nextProps){    // if the id of the  book currently in item position doesnt equal the id it should have nextProps , then set state to update
                      this.setState({});
                    }
                } else {
                    console.log(error );
                }
            }.bind(this)); 
     }

        handleDelete = () => {    // delete review handler
            this.props.deleteHandler(this.props.review._id);
        };

         handleVote = () => {   // upvote review 
            this.props.upvoteHandler(this.props.review._id,this.props.review.upvote);
        };

    render() {
      let bookDisplay = (
         <li  style={{border: '1px solid black'}}>
            <p>No book details + {this.props.review.bookId}</p>   {/*default incase no book object found later*/}
            </li> )

      let book= BookCache.getBook();

if(book){    {/* book object found */}
  bookDisplay=(
    <div>
    <li style={{border: '1px solid black'}} >
    <div className="row">
   <div className="col-md-2" style={{margin:'auto'}}>
             <Link className="link" to={'/AllBooks/' + book._id +'/'+book.authorId}>   {/*link to book details*/}
            <img src={"../"+book.images[0].url} alt= {book.title} className="thumb"/>
                 </Link>
                 </div>
                  <div className="col-md-9" style={{paddingTop:'2em'}}>
                 <h4><span  style={{fontWeight:'bold'}}>Book:</span>  
                        <Link className="link" to={'/AllBooks/' + book._id +'/'+book.authorId}>{book.title}</Link></h4>  {/*link to book details*/}
                <h4><span  style={{fontWeight:'bold'}}> User: </span>{this.props.review.username}</h4>
                <h4> <span  style={{fontWeight:'bold'}}>Review: </span>{this.props.review.opinion}</h4>
                </div>
                 <div className="col-md-1" style={{float:'right',textAlign:'right'}}  >   {/* Delete button */}
                    <button type="delete" onClick={this.handleDelete} className="btn btn-danger"
                        >Delete</button>
                        </div>
                         <div className="col-md-2" style={{float:'right',textAlign:'right'}}>    
                    <span className="glyphicon glyphicon-thumbs-up"  style={{ cursor: 'pointer',fontSize:'20px' }} onClick={this.handleVote}> {this.props.review.upvote}</span> {/* Vote Button */}
                    </div>
                  </div>
                </li>
                </div>
      )
    }
        return (
             <span>{bookDisplay}</span>
        );
    }
}


class FilteredAllReviewList extends React.Component {  // whole list of filtered reviews

      render() {
          var displayedAllReviews = this.props.reviews.map(function(review) {  {/* To deal with one review from list at a time */}
            return <AllReviewListItem key={review._id} review={review} upvoteHandler={this.props.upvoteHandler} deleteHandler={this.props.deleteHandler} /> ;
          }.bind(this)) ;
          return (
                  <div >
                    <ul className="allReviews">
                        {displayedAllReviews }
                    </ul>
                  </div>
            ) ;
      }
    }


class AllReviews extends React.Component{    // whole page 

componentDidMount() { //after mounted
        request.get('http://localhost:3000/api/reviews') //get all reviews in server (READ)
            .end(function(error, res){
                if (res) {
                    var reviews = JSON.parse(res.text);
                    api.initializeReviews(reviews);
                    this.setState({}) ; 
                } else {
                    console.log(error );
                }
            }.bind(this)); 
    }


    componentWillUpdate() {  //before update occurs

        request.get('http://localhost:3000/api/reviews')   //get all reviews (READ)
            .end(function(error, res){
                if (res) {
                    var newReviews = JSON.parse(res.text);    // updated list from server
                    var oldReviews=api.getAllReviews();   // current reviews list
                    api.initializeReviews(newReviews);
                    newReviews=api.getAllReviews();

                    if(newReviews.length !== oldReviews.length ){    // if lists differ in size - change occured, set state to update view
                    this.setState({}) ; 
                }
                
                else{
                for(var i=0;i<newReviews.length;i++){    // for each review, check if upvotes are same for old and new list - if not then upvote occured so update view
                    if(newReviews[i].upvote !== oldReviews[i].upvote){
                      this.setState({});
                    }
                }
              }
            }else {
                    console.log(error );
                }
            }.bind(this)); 
      };


 incrementUpvote = (_id, upvote) => {
       request
           .put('http://localhost:3000/api/reviews/' + _id + '/upvote' )
           .send({ upvote: upvote + 1 })
           .set('Content-Type', 'application/json')           
           .end( (err, res) => {
             if (err || !res.ok) {
               alert('Error upvoting review');
             } else {
                request.get('http://localhost:3000/api/reviews/' + _id )
                  .end( (error, res) => {
                    if (res) {
                      var review = JSON.parse(res.text);
                      api.setOrUpdateReview(review);
                      this.setState( {}) ;                
                    } else {
                      console.log(error );
                    }
                  }); 
             } // end else
           }); 
           };

state = {  sort: 'bookTitle' };  // state sort value default set to sort by bookId

      handleChange = ( value) => {   // handle sort value change
            this.setState( { sort: value } ) ;
    };

     deleteReview = (k) => {
        request
          .del('http://localhost:3000/api/reviews/' + k)
          .end( (err, res) => {
              if (err || !res.ok) {
                 alert('Error deleting review');
               } else {
                  api.deleteReview(k);
                  this.setState( {} ) ;
               } 
          });
    };

          render(){
                let list = api.getAllReviews();
                let filteredAllReviewList = _.sortBy(list, this.state.sort) ;    {/* Sort list of reviews */}
                if(this.state.sort==="upvote"){  {/* if sorting by upvotes, want high to low (default is low to high) so reverse */} 
                  filteredAllReviewList=filteredAllReviewList.reverse();
                }
                

           return (
           <div className="allReviewsBlock">
                <h1 className="BlackPageTitle">All Reviews</h1>
                <div className="view-container">
                <div className="view-frame">
                   <div className="container-fluid">
                   <div className="row">
                      <SelectBox onUserInput={this.handleChange } 
                             sort={this.state.sort} />
                       <FilteredAllReviewList reviews={filteredAllReviewList} upvoteHandler={this.incrementUpvote} deleteHandler={this.deleteReview} />
                  </div> 
                  </div>                   
                </div>
              </div>
              </div>
         );
    }
}

export default AllReviews;