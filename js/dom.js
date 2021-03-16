let movieList = [
    {
      id : 1,
      title:'Interstellar',
      year:2014,
      genre:'Science fiction',
      description:'description',
      imdbRating:8.6
    },
    {
      id: 2,
      title:'Martian',
      year:2015,
      genre:'Adventure  ',
      description:'description',
      imdbRating:8.0
    },
    {
      id: 3,
      title:'Avatar',
      year:2009,
      genre:'Action',
      description:'description',
      imdbRating:7.8
    },
    {
    id: 4,
    title:'Inception',
    year:2010,
    genre:'Action',
    description:'description',
    imdbRating:8.8
    },
    {
    id: 5,
    title:'The Avengers',
    year:2012,
    genre:'Action',
    description:'description',
    imdbRating:8.0
    },
  ]

//   let paragraph = document.querySelector('#title');
//   console.log(paragraph);
//   //textContent
//   let textContent = (paragraph.textContent ='upcoming list');
//   console.log(paragraph);
//   paragraph.textContent ='upcoming list'
//   //or replace its content from its html file
//   paragraph.textContent='Replacing list';

//   //para innerHtml
//   let divTesting = document.getElementById('testing');
//   console.log(divTesting);
// let mySentence = 'this is my sentence';
//   divTesting.innerHTML = "<strong> Some words </strong>"; // replaces the content inside the divTesting
//   divTesting.innerHTML = `<strong> ${mySentence} </strong>`; // replaces the content inside the divTesting
//   divTesting.innerText = "My inner Text";  // replaces the content inside the divTesting

// let  divTextNode = document.querySelector('#textNode');
//  let textNode = createTextNode('this will be a text node. add me to the doc.');
//  divTextNode.appendChild(textNode);

let myList = document.querySelector('#my-list');
myList.className = 'list-group';
let listItem = document.createElement('li');
listItem.className = 'list-group-item';
//console.log(listItem);
listItem.textContent = 'this is my first list item'; //alt
// let firstText = document.createTextNode('this is my first list item')//alt
// listItem.appendChild(firstText);//alt
myList.appendChild(listItem);
let secondListItem = document.createElement('li');
secondListItem.textContent = 'this is my second list';
secondListItem.className = 'list-group-item';
myList.appendChild(secondListItem);