// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const newTab = document.querySelector('.topics');
function topicMaker(text){
    const topic = document.createElement('div');

    topic.classList.add('tab');

    topic.textContent = text;

    newTab.appendChild(topic);

    return topic;

    }
axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then((response) =>{
    console.log('response', response)
    response.data.topics.forEach((element) =>{
    const newTopic = topicMaker(element);
    newTab.appendChild(newTopic)
    })
    
})
.catch((err) =>{
    console.log('Something happend!')
})
