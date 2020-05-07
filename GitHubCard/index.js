/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/cameron-kirby')
  .then(response => {
    document.querySelector('.cards').appendChild(createCard(response.data))
  })
  .catch()

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers','justsml','luishrd','bigknell'];

followersArray.forEach(function(item){
  axios.get(`https://api.github.com/users/${item}`)
    .then(response => {
      document.querySelector('.cards').appendChild(createCard(response.data))
    })
    .catch()
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard(userObj){
  console.log(userObj)
  // Create Elements
  const card = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardInfoName = document.createElement('h3')
  const cardInfoUsername = document.createElement('p')
  const cardInfoLocation = document.createElement('p')
  const cardInfoProfile = document.createElement('p')
  const cardInfoProfileLink = document.createElement('a')
  const cardInfoFollowers = document.createElement('p')
  const cardInfoFollowing = document.createElement('p')
  const cardInfoBio = document.createElement('p')
  // Setup Structure
  card.appendChild(cardImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(cardInfoName)
  cardInfo.appendChild(cardInfoUsername)
  cardInfo.appendChild(cardInfoLocation)
  cardInfo.appendChild(cardInfoProfile)
  cardInfo.appendChild(cardInfoFollowers)
  cardInfo.appendChild(cardInfoFollowing)
  cardInfo.appendChild(cardInfoBio)
  // Setup Element Styles
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  cardInfoName.classList.add('name')
  cardInfoUsername.classList.add('username')
  // Setup Element Content from data
  cardImg.src = userObj.avatar_url
  cardInfoName.textContent = `${userObj.name}`
  cardInfoUsername.textContent = `${userObj.login}`
  cardInfoLocation.textContent = `${userObj.location}`
  cardInfoProfile.textContent = `Profile: `
  cardInfoProfileLink.textContent = `${userObj.html_url}`
  cardInfoProfileLink.href = userObj.html_url
  cardInfoFollowers.textContent = `Followers: ${userObj.followers}`
  cardInfoFollowing.textContent = `Following: ${userObj.following}`
  cardInfoBio.textContent = `Bio: ${userObj.bio}`
  // Append Link
  cardInfoProfile.appendChild(cardInfoProfileLink)
  // Return card
  return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
