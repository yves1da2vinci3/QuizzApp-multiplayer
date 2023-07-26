const codingQuestions = [
    {
      id: 1,
      question: 'What does HTML stand for?',
      options: ['Hypertext Markup Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language', 'Hypertext and Text Markup Language'],
      correctOption: 0,
    },
    {
      id: 2,
      question: 'Which CSS property is used to change the text color of an element?',
      options: ['background-color', 'color', 'text-color', 'font-color'],
      correctOption: 1,
    },
    {
      id: 3,
      question: 'In JavaScript, what is the correct way to create a new array?',
      options: ['var colors = [];', 'var colors = new Array();', 'var colors = {};', 'var colors = Array();'],
      correctOption: 0,
    },
    {
      id: 4,
      question: 'What is the output of the following code?\nconsole.log(2 + "2" + 2);',
      options: ['222', '6', '22', 'Error'],
      correctOption: 2,
    },
    {
      id: 5,
      question: 'Which programming language is often used for building interactive web pages?',
      options: ['Python', 'Java', 'JavaScript', 'C++'],
      correctOption: 2,
    },
    {
      id: 6,
      question: 'What is the purpose of the "for" loop in programming?',
      options: ['To declare variables', 'To execute code only once', 'To repeat a block of code a specific number of times', 'To perform mathematical operations'],
      correctOption: 2,
    },
    {
      id: 7,
      question: 'What does the acronym "API" stand for in web development?',
      options: ['Application Programming Interface', 'Automated Programming Interface', 'Advanced Programming Interface', 'Application Protocol Interface'],
      correctOption: 0,
    },
    {
      id: 8,
      question: 'Which symbol is used for single-line comments in most programming languages?',
      options: ['//', '--', '/*', '##'],
      correctOption: 0,
    },
    {
      id: 9,
      question: 'What does CSS stand for in web development?',
      options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets'],
      correctOption: 1,
    },
    {
      id: 10,
      question: 'What is the purpose of the "return" keyword in a function?',
      options: ['To stop the execution of the function', 'To declare a variable', 'To display a message on the screen', 'To specify the value that the function should return'],
      correctOption: 3,
    },
  ];
  const mathQuestions = [
    {
      id: 1,
      question: 'What is the square root of 144?',
      options: ['10', '12', '14', '16'],
      correctOption: 1,
    },
    {
      id: 2,
      question: 'What is the value of π (pi) to two decimal places?',
      options: ['3.14', '3.16', '3.12', '3.18'],
      correctOption: 0,
    },
    {
      id: 3,
      question: 'Solve the equation: 2x + 5 = 15',
      options: ['x = 5', 'x = 10', 'x = 15', 'x = 20'],
      correctOption: 0,
    },
    {
      id: 4,
      question: 'What is the area of a rectangle with length 10 units and width 5 units?',
      options: ['25 square units', '50 square units', '15 square units', '30 square units'],
      correctOption: 1,
    },
    {
      id: 5,
      question: 'What is the value of 3! (factorial of 3)?',
      options: ['3', '6', '9', '12'],
      correctOption: 1,
    },
    {
      id: 6,
      question: 'Which trigonometric ratio gives the ratio of the length of the side opposite an angle to the length of the hypotenuse in a right triangle?',
      options: ['Sine', 'Cosine', 'Tangent', 'Cotangent'],
      correctOption: 0,
    },
    {
      id: 7,
      question: 'What is the next number in the sequence: 2, 4, 6, 8, ...?',
      options: ['10', '12', '14', '16'],
      correctOption: 1,
    },
    {
      id: 8,
      question: 'What is the value of 5 raised to the power of 3?',
      options: ['25', '100', '125', '150'],
      correctOption: 2,
    },
    {
      id: 9,
      question: 'What is the largest prime number less than 20?',
      options: ['17', '18', '19', '20'],
      correctOption: 2,
    },
    {
      id: 10,
      question: 'If an angle measures 90 degrees, what type of angle is it?',
      options: ['Acute angle', 'Right angle', 'Obtuse angle', 'Straight angle'],
      correctOption: 1,
    },
  ];
  const sportsQuestions = [
    {
      id: 1,
      question: 'In which sport is the term "slam dunk" commonly used?',
      options: ['Soccer', 'Basketball', 'Tennis', 'Baseball'],
      correctOption: 1,
    },
    {
      id: 2,
      question: 'How many players are there in a standard soccer team on the field during a match?',
      options: ['7', '10', '11', '12'],
      correctOption: 2,
    },
    {
      id: 3,
      question: 'Which country won the FIFA World Cup in 2018?',
      options: ['Brazil', 'Germany', 'France', 'Spain'],
      correctOption: 2,
    },
    {
      id: 4,
      question: 'Which sport is known as "the gentleman’s game"?',
      options: ['Cricket', 'Rugby', 'Golf', 'Tennis'],
      correctOption: 0,
    },
    {
      id: 5,
      question: 'How many Grand Slam tennis tournaments are there in a calendar year?',
      options: ['2', '3', '4', '5'],
      correctOption: 2,
    },
    {
      id: 6,
      question: 'Which sport is played at the Super Bowl?',
      options: ['Basketball', 'Baseball', 'American Football', 'Ice Hockey'],
      correctOption: 2,
    },
    {
      id: 7,
      question: 'Which country is famous for inventing the modern sport of basketball?',
      options: ['USA', 'Canada', 'England', 'France'],
      correctOption: 0,
    },
    {
      id: 8,
      question: 'Which athlete is often referred to as "The Greatest of All Time" (GOAT) in boxing?',
      options: ['Muhammad Ali', 'Mike Tyson', 'Floyd Mayweather Jr.', 'Manny Pacquiao'],
      correctOption: 0,
    },
    {
      id: 9,
      question: 'Which city hosted the 2016 Summer Olympics?',
      options: ['Rio de Janeiro', 'Tokyo', 'London', 'Beijing'],
      correctOption: 0,
    },
    {
      id: 10,
      question: 'Which sport uses a shuttlecock?',
      options: ['Badminton', 'Table Tennis', 'Volleyball', 'Squash'],
      correctOption: 0,
    },
  ];
  
  const animeQuestions = [
    {
      id: 1,
      question: 'Which anime series features a young ninja named Naruto Uzumaki?',
      options: ['Dragon Ball Z', 'Naruto', 'One Piece', 'Bleach'],
      correctOption: 1,
    },
    {
      id: 2,
      question: 'What is the name of the pirate crew in the anime "One Piece"?',
      options: ['Straw Hat Pirates', 'Blackbeard Pirates', 'Whitebeard Pirates', 'Heart Pirates'],
      correctOption: 0,
    },
    {
      id: 3,
      question: 'Which anime series follows the adventures of Monkey D. Luffy in his quest to become the Pirate King?',
      options: ['Naruto', 'One Piece', 'Bleach', 'Fairy Tail'],
      correctOption: 1,
    },
    {
      id: 4,
      question: 'In the anime "Dragon Ball Z," what transformation allows the Saiyan Goku to become significantly stronger?',
      options: ['Super Saiyan', 'Kaioken', 'Super Saiyan Blue', 'Ultra Instinct'],
      correctOption: 0,
    },
    {
      id: 5,
      question: 'Which anime features the story of a young boy named Gon Freecss who wants to become a Hunter?',
      options: ['Naruto', 'One Piece', 'Bleach', 'Hunter x Hunter'],
      correctOption: 3,
    },
    {
      id: 6,
      question: 'In the anime "Attack on Titan," what are the giant humanoid creatures that threaten humanity called?',
      options: ['Titans', 'Ghouls', 'Zombies', 'Hollows'],
      correctOption: 0,
    },
    {
      id: 7,
      question: 'Which anime series revolves around the adventures of a young alchemist named Edward Elric?',
      options: ['Fullmetal Alchemist', 'Naruto', 'One Piece', 'Bleach'],
      correctOption: 0,
    },
    {
      id: 8,
      question: `In "My Hero Academia," what is the main protagonist Izuku Midoriya's superhero name?`,
      options: ['Kacchan', 'Deku', 'Shoto', 'Todoroki'],
      correctOption: 1,
    },
    {
      id: 9,
      question: 'Which anime features the adventures of a young sorcerer named Lucy Heartfilia in a guild of wizards?',
      options: ['Fairy Tail', 'Naruto', 'One Piece', 'Bleach'],
      correctOption: 0,
    },
    {
      id: 10,
      question: 'In the anime "Death Note," what is the supernatural notebook that grants the power to kill anyone whose name is written in it?',
      options: ['Demon Slayer', 'Soul Eater', 'Death Note', 'Bleach'],
      correctOption: 2,
    },
  ];
  const storyQuestions = [
    {
      id: 1,
      question: 'Who is the author of the famous play "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Leo Tolstoy'],
      correctOption: 0,
    },
    {
      id: 2,
      question: 'In which novel is the character "Sherlock Holmes" created by Sir Arthur Conan Doyle?',
      options: ['Pride and Prejudice', 'To Kill a Mockingbird', 'Dracula', 'The Adventures of Sherlock Holmes'],
      correctOption: 3,
    },
    {
      id: 3,
      question: 'Which novel tells the story of a man named Ebenezer Scrooge and his transformation after being visited by ghosts on Christmas Eve?',
      options: ['A Christmas Carol', 'Great Expectations', 'Wuthering Heights', 'Moby-Dick'],
      correctOption: 0,
    },
    {
      id: 4,
      question: 'In "Alice in Wonderland," what is the name of the creature that leads Alice down the rabbit hole?',
      options: ['Mad Hatter', 'Cheshire Cat', 'White Rabbit', 'Caterpillar'],
      correctOption: 2,
    },
    {
      id: 5,
      question: 'Which classic novel features the character Jay Gatsby and explores themes of wealth, love, and the American Dream?',
      options: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice'],
      correctOption: 0,
    },
    {
      id: 6,
      question: 'Which novel is a coming-of-age story set in the American South and deals with issues of racial injustice?',
      options: ['The Catcher in the Rye', 'Brave New World', 'To Kill a Mockingbird', 'Fahrenheit 451'],
      correctOption: 2,
    },
    {
      id: 7,
      question: 'In "The Lord of the Rings" trilogy, who is the bearer of the One Ring?',
      options: ['Frodo Baggins', 'Gandalf', 'Aragorn', 'Sauron'],
      correctOption: 0,
    },
    {
      id: 8,
      question: 'Which Shakespearean play features the characters of Macbeth and Lady Macbeth?',
      options: ['Hamlet', 'Othello', 'Macbeth', 'King Lear'],
      correctOption: 2,
    },
    {
      id: 9,
      question: 'Who wrote the epic fantasy novel series "A Song of Ice and Fire," which inspired the TV series "Game of Thrones"?',
      options: ['J.R.R. Tolkien', 'J.K. Rowling', 'George R.R. Martin', 'C.S. Lewis'],
      correctOption: 2,
    },
    {
      id: 10,
      question: 'In "The Chronicles of Narnia," which of the Pevensie children is known as the "Just King" of Narnia?',
      options: ['Peter', 'Susan', 'Edmund', 'Lucy'],
      correctOption: 0,
    },
  ];
  
  const fashionQuestions = [
    {
      id: 1,
      question: 'Who is the founder of the famous fashion brand "Chanel"?',
      options: ['Christian Dior', 'Ralph Lauren', 'Coco Chanel', 'Giorgio Armani'],
      correctOption: 2,
    },
    {
      id: 2,
      question: 'Which city is known as the "Fashion Capital of the World"?',
      options: ['Paris', 'Milan', 'New York', 'London'],
      correctOption: 0,
    },
    {
      id: 3,
      question: 'What do you call a type of high-heeled shoe where the heel is designed in the shape of a stiletto?',
      options: ['Platform', 'Wedge', 'Stiletto', 'Clog'],
      correctOption: 2,
    },
    {
      id: 4,
      question: 'Which iconic fashion designer is known for creating the "Little Black Dress"?',
      options: ['Donatella Versace', 'Coco Chanel', 'Valentino Garavani', 'Vera Wang'],
      correctOption: 1,
    },
    {
      id: 5,
      question: 'In fashion, what does "Haute Couture" refer to?',
      options: ['Ready-to-wear clothing', 'High-end luxury fashion', 'Handmade custom-designed clothing', 'Vintage fashion'],
      correctOption: 2,
    },
    {
      id: 6,
      question: 'Which fashion magazine is famous for its September issue, known as the most important and largest of the year?',
      options: ['Vogue', 'Elle', 'Harper\'s Bazaar', 'Glamour'],
      correctOption: 0,
    },
    {
      id: 7,
      question: 'Which fashion designer is often referred to as the "King of Cling" for his form-fitting designs?',
      options: ['Calvin Klein', 'Marc Jacobs', 'Karl Lagerfeld', 'Azzedine Alaïa'],
      correctOption: 3,
    },
    {
      id: 8,
      question: 'What is the name of the traditional Japanese robe-like garment that is known for its beautiful patterns?',
      options: ['Sari', 'Kimono', 'Cheongsam', 'Dirndl'],
      correctOption: 1,
    },
    {
      id: 9,
      question: 'Which fashion accessory is a small decorative item that is typically worn on the lapel of a suit jacket?',
      options: ['Pocket square', 'Ascot tie', 'Bow tie', 'Cummerbund'],
      correctOption: 0,
    },
    {
      id: 10,
      question: 'What type of fabric is famous for its smooth, shiny surface and is often used in evening gowns and formal wear?',
      options: ['Velvet', 'Satin', 'Lace', 'Chiffon'],
      correctOption: 1,
    },
  ];
  
  
  
export const Quizzes = [
codingQuestions,
mathQuestions,
sportsQuestions,
animeQuestions,
storyQuestions,
fashionQuestions
]
