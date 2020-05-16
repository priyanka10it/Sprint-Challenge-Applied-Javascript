// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


const cardContainer = document.querySelector('.cards-container');

function cardMaker (object){
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imageConatiner = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imageConatiner.classList.add('img-container');
    
    headLine.textContent = object.headline;
    image.src = object.authorPhoto;
    authorName.textContent = object.authorName;

    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imageConatiner);
    imageConatiner.appendChild(image);
    author.appendChild(authorName);

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) =>{
    console.log('response', response)
    const list =[response.data.articles.bootstrap,
        response.data.articles.javascript,
        response.data.articles.jquery,
        response.data.articles.node,
        response.data.articles.technology
        ];
    list.forEach((element)=>{
        element.forEach((element)=>{
            const newCard = cardMaker(element);
            cardContainer.appendChild(newCard);
        })
    })
})
.catch((err) =>{
    console.log('Something happend!!')
})