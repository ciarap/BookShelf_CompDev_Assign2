var mongoose = require('mongoose');  
  mongoose.connect('mongodb://localhost/bookShelfDb');
  var Book = require('../api/books/book.model');
   var Review = require('../api/reviews/review.model');

 Review.find({}).remove(function() {
    Review.create( {
       opinion : "Grand",
       username : "Jimmy Doe",
       bookId : '5a2fc6806528c71be815f923',
       bookTitle: "The Notebook",
       upvote : 22
    },
    {
       opinion : "Grand",
       bookId : '5a2fc6806528c71be815f923',
       username : "Ciara",
       bookTitle:"The Notebook",
       upvote : 21
    },
    {
       opinion : "Not Great",
       bookId : "5a2fc6806528c71be815f923",
       username : "Adam",
       bookTitle: "The Notebook",
       upvote : 7
    },
    {
       opinion : "Fantastic",
       bookId : "5a2fc6806528c71be815f931",
       username : "joe",
       bookTitle:"The Book Thief",
       upvote : 2
    },
    {
       opinion : "Great",
       bookId : "5a2fc6806528c71be815f92c",
       bookTitle:"To Kill A Mockingbird",
       username : "Jo",
       upvote : 50
    },
    {
       opinion : "Good",
       bookId : "5a2fc6806528c71be815f923",
       bookTitle:"The Notebook",
       username : "Millie",
       upvote : 8
    },
    {
       opinion : "Great Book",
       bookId : "5a2fc6806528c71be815f928",
       bookTitle:"The Passenger",
       username : "Johnny",
       upvote : 2
    },
    {
       opinion :  "good book" ,
       bookId : "5a2fc6806528c71be815f931",
       bookTitle: "The Book Thief",
       username : "CP",
       upvote : 2
    },
    {
       opinion : "This book is set in a future when animals are much cleverer than now. And because of their cleverness, the pigs started a revolution against the humans. Pigs could speak fluently in English unlike the other animals, and that gave them the power to be leaders. But, the story that follows only happened a few years after that...  Their first leader, Old Major, was kind and fair who knew animals should be equal. But when Napoleon became the leader it was very unpleasant. He made a rule that allowed the pigs to have better food and that forced all of the other animals to work crazily hard every day and night. That wasn’t enough, Napoleon wanted more power.  He decided to kill his brother, Snowball, so that he would be the only leader. Snowball was admired because he came up with a clever idea to build windmill. Snowball was also popular because of his role in the revolution. He and Boxer (a hardworking horse) were the bravest. So this selfish pig, Napoleon, destroyed what the animals built (the windmill) and blamed Snowball who escaped the farm. Then Napoleon made the animals work harder and harder, making the animals very weak and even die. If any of the animals were clever like Napoleon, he would just order an execution to get rid of them.My favourite character is Boxer the horse, who would work the hardest of the animals but never give up no matter how much it hurt, or how old he gets. He never complained to Napoleon, instead saying, “Napoleon is always right”. This book made me think of another newer book, Mockingjay (Part Two of The Hunger Games films) because President Snow is like the humans and President Alma Coin is like Napoleon. President Alma Coin defeats President Snow, but then becomes corrupt and maybe worse.",
       bookId : "5a2fc6806528c71be815f91e",
       username : "John N",
       bookTitle:"Animal Farm",
       upvote : 11
    },
    {
       opinion : "Great Book - Well Worth a read!!",
       bookId : "5a2fc6806528c71be815f919",
       bookTitle:"Harry Potter and The Chamber of Secrets",
       username : "Emily M.",
       upvote : 0
    } , function () {
        process.exit()
    });

 });

  Book.find({}).remove(function() {
    Book.create(  {
      _id:"5a2fc6806528c71be815f919",
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K Rowling",
      authorId: "jk-rowling",
      category: "Fantasy",
      date: 1998,
      votes: 28,
      images: [
        {url:"./img/harrypotter_ChamberOfSecrets.jpg"},
        {url:"./img/harrypotter_ChamberOfSecrets2.jpg"},
        {url: "./img/harrypotter_ChamberOfSecrets3.jpg"},
         {url:"./img/harrypotter_ChamberOfSecrets4.jpg"}
      ],
      blurb: "The Dursleys were so mean that hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike. And strike it does. For in Harry's second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor, Gilderoy Lockheart, a spirit named Moaning Myrtle who haunts the girls' bathroom, and the unwanted attentions of Ron Weasley's younger sister, Ginny. But each of these seem minor annoyances when the real trouble begins, and someone--or something--starts turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects...Harry Potter himself?"
    },
    {
      _id: "5a2fc6806528c71be815f91e",
      title: "Animal Farm",
      author: "George Orwell",
      authorId: "george-orwell",
      category: "Allegorical",
      date: 1945,
      images: [
        {url:"./img/AnimalFarm.jpg"},
        {url:"./img/AnimalFarm2.jpg"},
        {url:"./img/AnimalFarm3.jpg"},
        {url:"./img/AnimalFarm4.jpg"}
      ],
      blurb: "'All animals are equal. But some animals are more equal than others.'Mr Jones of Manor Farm is so lazy and drunken that one day he forgets to feed his livestock. The ensuing rebellion under the leadership of the pigs Napoleon and Snowball leads to the animals taking over the farm. Vowing to eliminate the terrible inequities of the farmyard, the renamed Animal Farm is organised to benefit all who walk on four legs. But as time passes, the ideals of the rebellion are corrupted, then forgotten. And something new and unexpected emerges.\n Animal Farm - the history of a revolution that went wrong - is George Orwell's brilliant satire on the corrupting influence of power.",
      votes: 27
    },
    {
      _id:"5a2fc6806528c71be815f923",
      title: "The Notebook",
      author: "Nicholas Sparks",
      authorId: "nicholas-sparks",
      category: "Romance",
      votes: 5,
      images: [
       {url: "./img/notebook.jpg"},
        {url:"./img/notebook2.jpg"},
        {url:"./img/notebook3.jpg"},
        {url:"./img/notebook4.jpg"}
      ],
      blurb: "Every so often a love story so captures our hearts that it becomes more than a story-it becomes an experience to remember forever. The Notebook is such a book. It is a celebration of how passion can be ageless and timeless, a tale that moves us to laughter and tears and makes us believe in true love all over again... ...At thirty-one, Noah Calhoun, back in coastal North Carolina after World War II, is haunted by images of the girl he lost more than a decade earlier. At twenty-nine, socialite Allie Nelson is about to marry a wealthy lawyer, but she cannot stop thinking about the boy who long ago stole her heart. Thus begins the story of a love so enduring and deep it can turn tragedy into triumph, and may even have the power to create a miracle...",
      date: 1996
    },
    {
      _id:"5a2fc6806528c71be815f928",
       title : "The Passenger",
       author : "Lisa Lutz",
       authorId : "lisa-lutz",
       category : "Thriller",
       votes : 4,
       images : [
        {url:"./img/passenger.jpg"},
        {url:"./img/passenger2.jpg"},
        {url:"./img/passenger3.jpg"}
      ],
       date : 2016,
       blurb : "“A dead-serious thriller (with a funny bone)” (The New York Times Book Review), from the author of the New York Times bestselling Spellman Files series, comes the story of a woman who creates and sheds new identities as she crisscrosses the country to escape her past. Forty-eight hours after leaving her husband’s body at the base of the stairs, Tanya Dubois cashes in her credit cards, dyes her hair brown, demands a new name from a shadowy voice over the phone, and flees town. It’s not the first time. She meets Blue, a female bartender who recognizes the hunted look in a fugitive’s eyes and offers her a place to stay. With dwindling choices, Tanya-now-Amelia accepts. An uneasy―and dangerous―alliance is born. It’s almost impossible to live off the grid in the twenty-first century, but Amelia-now-Debra and Blue have the courage, the ingenuity, and the desperation, to try. Hopscotching from city to city, Debra especially is chased by a very dark secret. From heart-stopping escapes and devious deceptions, we are left to wonder…can she possibly outrun her past? The Passenger’s white-knuckled plot and unforeseeable twists make one thing for certain: the ride will leave you breathless. “When the answers finally come, they are juicy, complex, and unexpected. The satisfying conclusion will leave readers rethinking everything and immediately turning back to the first page to start again. Psychological suspense lovers will tear through this thriller” (Library Journal, starred review)."
    },
    {
      _id: "5a2fc6806528c71be815f92c",
       title : "To Kill a Mockingbird",
       author : "Harper Lee",
       authorId : "harper-lee",
       category : "Drama",
       votes : 2,
       date : 1960,
       images : [
        {url:"./img/ToKillAMockingbird.gif"},
       {url: "./img/ToKillAMockingbird2.jpg"},
        {url:"./img/ToKillAMockingbird3.jpg"},
       {url: "./img/ToKillAMockingbird4.jpg"}
      ],
       blurb : "Harper Lee's Pulitzer prize-winning masterwork of honor and injustice in the deep south—and the heroism of one man in the face of blind and violent hatred. One of the best-loved stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime."
    },
    {
      _id: "5a2fc6806528c71be815f931",
       title : "The Book Thief",
       author : "Markus Zusak ",
       authorId :  "markus-zusak ",
       category : "Drama",
       votes : 5,
       images : [
       {url: "./img/BookThief.jpg"},
       {url: "./img/BookThief2.jpg"},
       {url: "./img/BookThief3.jpg"},
       {url: "./img/BookThief4.jpg"}
      ],
       blurb : "The extraordinary #1 New York Times bestseller that is now a major motion picture, Markus Zusak's unforgettable story is about the ability of books to feed the soul.It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will become busier still. Liesel Meminger is a foster girl living outside of Munich, who scratches out a meager existence for herself by stealing when she encounters something she can’t resist–books. With the help of her accordion-playing foster father, she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement. In superbly crafted writing that burns with intensity, award-winning author Markus Zusak, author of I Am the Messenger, has given us one of the most enduring stories of our time.",
       date : 2005
    },
    {
      _id: "5a2fc6806528c71be815f936",
       votes : 0,
       authorId : "new-author",
       title : "New Book",
       author : "New Author",
       images : [
        {url:"./img/BookThief4.jpg"}
      ],
       category : "Allegorical",
       date : 1999,
       blurb : "jhgfdcvbhjuytgv"
    }, function () {
        process.exit()
    });

 });