var mongoose = require('mongoose');  
  mongoose.connect('mongodb://localhost/bookShelfDb');
  var Book = require('../api/books/book.model');
   var Review = require('../api/reviews/review.model');
    var Author = require('../api/authors/author.model');

Author.find({}).remove(function() {
    Author.create( 

{
       _id : "5a2ff6e4f514972010a26206",
       name : "George Orwell",
       imageUrl : "./img/george-orwell.jpg",
       info : "Eric Arthur Blair (25 June 1903 – 21 January 1950),better known by his pen name George Orwell, was an English novelist, essayist, journalist, and critic. His work is marked by lucid prose, awareness of social injustice, opposition to totalitarianism, and outspoken support of democratic socialism.Orwell wrote literary criticism, poetry, fiction, and polemical journalism. He is best known for the allegorical novella Animal Farm (1945) and the dystopian novel Nineteen Eighty-Four (1949). His non-fiction works, including The Road to Wigan Pier (1937), documenting his experience of working class life in the north of England, and Homage to Catalonia (1938), an account of his experiences in the Spanish Civil War, are widely acclaimed, as are his essays on politics, literature, language, and culture. In 2008, The Times ranked him second on a list of \"The 50 greatest British writers since 1945\".Orwell's work continues to influence popular and political culture, and the term Orwellian – descriptive of totalitarian or authoritarian social practices – has entered the language together with many of his neologisms, including Big Brother, Thought Police, Room 101, memory hole, newspeak, doublethink, proles, unperson, and thoughtcrime.",
       url : "https://en.wikipedia.org/wiki/George_Orwell",
       reviews: [{body: "Great Author", user: "Jim"}]
    },
    {
       _id : "5a2ff6e4f514972010a26207",
       imageUrl : "./img/harper-lee.jpg",
       name : "Harper Lee",
       url :  "https://en.wikipedia.org/wiki/Harper_Lee ",
         reviews: [{body: "Great Author", user: "Joe"}],
       info : "Nelle Harper Lee (April 28, 1926 – February 19, 2016), better known by her pen name Harper Lee, was an American novelist widely known for To Kill a Mockingbird, published in 1960. Immediately successful, it won the 1961 Pulitzer Prize and has become a classic of modern American literature. Though Lee had only published this single book, in 2007 she was awarded the Presidential Medal of Freedom for her contribution to literature. Additionally, Lee received numerous honorary degrees, though she declined to speak on those occasions. She was also known for assisting her close friend Truman Capote in his research for the book In Cold Blood (1966). Capote was the basis for the character Dill in To Kill a Mockingbird.The plot and characters of To Kill a Mockingbird are loosely based on Lee's observations of her family and neighbors, as well as an event that occurred near her hometown in 1936, when she was 10 years old. The novel deals with the irrationality of adult attitudes towards race and class in the Deep South of the 1930s, as depicted through the eyes of two children. The novel was inspired by racist attitudes in her hometown of Monroeville, Alabama.Another novel, Go Set a Watchman, was written in the mid-1950s and published in July 2015 as a \"sequel\", though it was later confirmed to be To Kill a Mockingbird's first draft."
    },
    {
       _id : "5a2ff6e4f514972010a26208",
       name : "J.K Rowling",
       imageUrl : "./img/jk-rowling.jpg",
         reviews: [{body: "Great Author", user: "Jack"}],
       url : "https://en.wikipedia.org/wiki/J._K._Rowling",
       info : "Joanne Rowling, ( born 31 July 1965), who writes under the pen names J. K. Rowling and Robert Galbraith, is a British novelist and screenwriter who wrote the Harry Potter fantasy series. The books have won multiple awards, and sold more than 400 million copies. They have become the best-selling book series in history and been the basis for a series of films, over which Rowling had overall approval on the scripts and was a producer on the final films in the series.Born in Yate, Gloucestershire, England, Rowling was working as a researcher and bilingual secretary for Amnesty International when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London in 1990. The seven-year period that followed saw the death of her mother, birth of her first child, divorce from her first husband and relative poverty until the first novel in the series, Harry Potter and the Philosopher's Stone, was published in 1997. There were six sequels, of which the last, Harry Potter and the Deathly Hallows, was released in 2007. Since then, Rowling has written four books for adult readers: The Casual Vacancy (2012) and—under the pseudonym Robert Galbraith—the crime fiction novels The Cuckoo's Calling (2013), The Silkworm (2014) and Career of Evil (2015).Rowling has lived a \"rags to riches\" life story, in which she progressed from living on state benefits to multi-millionaire status within five years. She is the United Kingdom's best-selling living author, with sales in excess of £238M. The 2016 Sunday Times Rich List estimated Rowling's fortune at £600 million, ranking her as the joint 197th richest person in the UK. Time magazine named her as a runner-up for its 2007 Person of the Year, noting the social, moral, and political inspiration she has given her fans. In October 2010, Rowling was named the \"Most Influential Woman in Britain\" by leading magazine editors. She has supported charities including Comic Relief, One Parent Families, Multiple Sclerosis Society of Great Britain and Lumos."
    },
    {
       _id : "5a2ff6e4f514972010a26209",
       imageUrl : "./img/lisa-lutz.jpg",
       name : "Lisa Lutz",
         reviews: [{body: "Great Author", user: "Jimmy"}],
       url : "https://en.wikipedia.org/wiki/Lisa_Lutz",
       info : "Lisa Lutz is an American author. She began her career writing screenplays for Hollywood. One of her rejected screenplays became the basis for a popular series of novels about a family of private investigators, the Spellmans."
    },
    {
       _id : "5a2ff6e4f514972010a2620a",
       name : "Markus Zusak",
       url : "https://en.wikipedia.org/wiki/Markus_Zusak",
       imageUrl : "./img/markus-zusak.jpg",
         reviews: [{body: "Great Author", user: "Jane"}],
       info : "Markus Frank Zusak (born 23 June 1975) is an Australian writer. He is best known for The Book Thief and The Messenger (US title, I Am the Messenger), two novels for young adults which have been international best-sellers. He won the annual Margaret A. Edwards Award in 2014 for his contributions to young-adult literature published in the US."
    },
    {
       _id : "5a2ff6e4f514972010a2620b",
       imageUrl :  "./img/nicholas-sparks.jpg" ,
       name : "Nicholas Sparks",
       url : "https://en.wikipedia.org/wiki/Nicholas_Sparks",
         reviews: [],
       info : "Nicholas Charles Sparks (born December 31, 1965) is an American romance novelist, screenwriter and producer. He has published eighteen novels and two non-fiction books. Several of his novels have become international bestsellers, and eleven of his romantic-drama novels have been adapted to film all with multimillion-dollar box office grosses.Sparks was born in Omaha, Nebraska and wrote his first novel, The Passing, in 1985, while a student at the University of Notre Dame. His first published work came in 1990, when he co-wrote with Billy Mills Wokini: A Lakota Journey to Happiness and Self-Understanding, which sold approximated 50,000 copies in its first year. In 1993, Sparks wrote his breakthrough novel The Notebook in his spare time while selling pharmaceuticals in Washington, D.C.. Two years later, his novel was discovered by literary agent Theresa Park who offered to represent him. The novel was published in October 1996 and made the New York Times best-seller list in its first week of release."
    },
    {
       name : "Jimmy D",
       _id : "5a2ff6e4f514972010a2620c",
       url : "https://en.wikipedia.org/wiki/John_Doe",
       imageUrl : "./img/markus-zusak.jpg",
         reviews: [{body: "Great Author", user: "Jackie"}],
       info : "uygvbniuyg"
    },
    {
       name : "New Author",
       _id : "5a2ff6e4f514972010a2620d",
       url : "https://en.wikipedia.org/wiki/George_Orwell",
       imageUrl : "./img/george-orwell.jpg",
         reviews: [{body: "Great Author", user: "Janet"}],
       info : "Writing for ages"
    }, function () {
        process.exit()
    });

 });




  Book.find({}).remove(function() {
    Book.create(  {
      _id:"5a2fc6806528c71be815f919",
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K Rowling",
      authorId: "5a2ff6e4f514972010a26208",
      category: "Fantasy",
      date: "1998",
      votes: 28,
      images: [
        "./img/harrypotter_ChamberOfSecrets.jpg",
        "./img/harrypotter_ChamberOfSecrets2.jpg",
         "./img/harrypotter_ChamberOfSecrets3.jpg",
         "./img/harrypotter_ChamberOfSecrets4.jpg"
      ],
      blurb: "The Dursleys were so mean that hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike. And strike it does. For in Harry's second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor, Gilderoy Lockheart, a spirit named Moaning Myrtle who haunts the girls' bathroom, and the unwanted attentions of Ron Weasley's younger sister, Ginny. But each of these seem minor annoyances when the real trouble begins, and someone--or something--starts turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects...Harry Potter himself?"
    },
    {
      _id: "5a2fc6806528c71be815f91e",
      title: "Animal Farm",
      author: "George Orwell",
      authorId: "5a2ff6e4f514972010a26206",
      category: "Allegorical",
      date: "1945",
      images: [
        "./img/AnimalFarm.jpg",
        "./img/AnimalFarm2.jpg",
        "./img/AnimalFarm3.jpg",
        "./img/AnimalFarm4.jpg"
      ],
      blurb: "'All animals are equal. But some animals are more equal than others.'Mr Jones of Manor Farm is so lazy and drunken that one day he forgets to feed his livestock. The ensuing rebellion under the leadership of the pigs Napoleon and Snowball leads to the animals taking over the farm. Vowing to eliminate the terrible inequities of the farmyard, the renamed Animal Farm is organised to benefit all who walk on four legs. But as time passes, the ideals of the rebellion are corrupted, then forgotten. And something new and unexpected emerges.\n Animal Farm - the history of a revolution that went wrong - is George Orwell's brilliant satire on the corrupting influence of power.",
      votes: 27
    },
    {
      _id:"5a2fc6806528c71be815f923",
      title: "The Notebook",
      author: "Nicholas Sparks",
      authorId: "5a2ff6e4f514972010a2620b",
      category: "Romance",
      votes: 5,
      images: [
        "./img/notebook.jpg",
        "./img/notebook2.jpg",
        "./img/notebook3.jpg",
        "./img/notebook4.jpg"
      ],
      blurb: "Every so often a love story so captures our hearts that it becomes more than a story-it becomes an experience to remember forever. The Notebook is such a book. It is a celebration of how passion can be ageless and timeless, a tale that moves us to laughter and tears and makes us believe in true love all over again... ...At thirty-one, Noah Calhoun, back in coastal North Carolina after World War II, is haunted by images of the girl he lost more than a decade earlier. At twenty-nine, socialite Allie Nelson is about to marry a wealthy lawyer, but she cannot stop thinking about the boy who long ago stole her heart. Thus begins the story of a love so enduring and deep it can turn tragedy into triumph, and may even have the power to create a miracle...",
      date: "1996"
    },
    {
      _id:"5a2fc6806528c71be815f928",
       title : "The Passenger",
       author : "Lisa Lutz",
       authorId : "5a2ff6e4f514972010a26209",
       category : "Thriller",
       votes : 4,
       images : [
        "./img/passenger.jpg",
        "./img/passenger2.jpg",
      "./img/passenger3.jpg"
      ],
       date : "2016",
       blurb : "“A dead-serious thriller (with a funny bone)” (The New York Times Book Review), from the author of the New York Times bestselling Spellman Files series, comes the story of a woman who creates and sheds new identities as she crisscrosses the country to escape her past. Forty-eight hours after leaving her husband’s body at the base of the stairs, Tanya Dubois cashes in her credit cards, dyes her hair brown, demands a new name from a shadowy voice over the phone, and flees town. It’s not the first time. She meets Blue, a female bartender who recognizes the hunted look in a fugitive’s eyes and offers her a place to stay. With dwindling choices, Tanya-now-Amelia accepts. An uneasy―and dangerous―alliance is born. It’s almost impossible to live off the grid in the twenty-first century, but Amelia-now-Debra and Blue have the courage, the ingenuity, and the desperation, to try. Hopscotching from city to city, Debra especially is chased by a very dark secret. From heart-stopping escapes and devious deceptions, we are left to wonder…can she possibly outrun her past? The Passenger’s white-knuckled plot and unforeseeable twists make one thing for certain: the ride will leave you breathless. “When the answers finally come, they are juicy, complex, and unexpected. The satisfying conclusion will leave readers rethinking everything and immediately turning back to the first page to start again. Psychological suspense lovers will tear through this thriller” (Library Journal, starred review)."
    },
    {
      _id: "5a2fc6806528c71be815f92c",
       title : "To Kill a Mockingbird",
       author : "Harper Lee",
       authorId : "5a2ff6e4f514972010a26207",
       category : "Drama",
       votes : 2,
       date : "1960",
       images : [
        "./img/ToKillAMockingbird.gif",
        "./img/ToKillAMockingbird2.jpg",
       "./img/ToKillAMockingbird3.jpg",
       "./img/ToKillAMockingbird4.jpg"
      ],
       blurb : "Harper Lee's Pulitzer prize-winning masterwork of honor and injustice in the deep south—and the heroism of one man in the face of blind and violent hatred. One of the best-loved stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime."
    },
    {
      _id: "5a2fc6806528c71be815f931",
       title : "The Book Thief",
       author : "Markus Zusak ",
       authorId :  "5a2ff6e4f514972010a2620a",
       category : "Drama",
       votes : 5,
       images : [
        "./img/BookThief.jpg",
        "./img/BookThief2.jpg",
        "./img/BookThief3.jpg",
        "./img/BookThief4.jpg"
      ],
       blurb : "The extraordinary #1 New York Times bestseller that is now a major motion picture, Markus Zusak's unforgettable story is about the ability of books to feed the soul.It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will become busier still. Liesel Meminger is a foster girl living outside of Munich, who scratches out a meager existence for herself by stealing when she encounters something she can’t resist–books. With the help of her accordion-playing foster father, she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement. In superbly crafted writing that burns with intensity, award-winning author Markus Zusak, author of I Am the Messenger, has given us one of the most enduring stories of our time.",
       date : "2005"
    },
    {
      _id: "5a2fc6806528c71be815f936",
       votes : 0,
       authorId : "5a2ff6e4f514972010a2620d",
       title : "New Book",
       author : "New Author",
       images : [
        "./img/BookThief4.jpg"
      ],
       category : "Allegorical",
       date : "1999",
       blurb : "jhgfdcvbhjuytgv"
    }, function () {
        process.exit()
    });

 });


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
       username : "Joseph",
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
       username : "CPower",
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
