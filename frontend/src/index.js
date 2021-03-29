// X grab all of the animals from the BE and render them
// 2. listen to form and add new animals to BE and FE



const main = () => {
  fetchAnimals()
  createFormListener()
}

const createFormListener = () => {
  const form = document.querySelector('form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const newAnimal = {
      name: event.target['name'].value,
      gender: event.target['gender'].value,
      species: event.target['species'].value,
    }

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAnimal)
    }

    event.target.reset()


    fetch('http://localhost:3000/animals', reqObj)
    .then(resp => resp.json())
    .then(animal => {
      renderAnimal(animal)
    })
  })



  // grab the form node
  // add eventlistener (submit)
  // once submitted:
  //    prevent default
  //    update the BE
  //      - scrape the form data 
  //      - assemble the requestObj to send with the fetch
  //      - make the fetch
  //    update the FE
}

const renderAnimal = (animal) => {  
  const row = document.createElement('tr')
  const nameCell = document.createElement('td')
  nameCell.textContent = animal.name

  const genderCell = document.createElement('td')
  genderCell.textContent = animal.gender

  const speciesCell = document.createElement('td')
  speciesCell.textContent = animal.species.name

  row.append(nameCell, genderCell, speciesCell)

  const tbody = document.querySelector('tbody')
  tbody.append(row)
}





const fetchAnimals = () => {
  fetch('http:/localhost:3000/animals')
  .then(resp => resp.json())
  .then(animals=> {

    // animals.forEach(animal => {
      // renderAnimal(animal)
    // })


    animals.forEach(renderAnimal)
  })
  
}


// function fetchAnimals() {
  // define the route i need to make GET req
  // when fetch comes back: 
    // find node where to start embedding new animal elements
    // iterate over animals 
    // for each animal
    // create the tr and td nodes for the animal 
    // append then to the dom 
// }




main()






























