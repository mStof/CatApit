let searchBar = document.querySelector('#search_bar')
let resultBar = document.querySelector('pre.result')
let btn = document.querySelector('.search')


axios.get('https://api.thecatapi.com/v1/breeds')
.then((result) => {
    console.log('carregou')
    function getResult () {
        resultBar.innerHTML = ``
        const breedsFilter = result.data.filter((breeds) => {
            let breedsName = breeds.name.toLowerCase() 
            let searchValue = searchBar.value.toLowerCase()
            if(searchValue == ''){
                return
            }else if(breedsName.includes(searchValue)){
                return breeds
            }
        
        })
       for (let i = 0; i < breedsFilter.length; i++) {
            resultBar.innerHTML+= `\n<p>${breedsFilter[i].name}</p>\n`
        }
    }
    btn.addEventListener('submit', () => {
        
        const test = result.data.filter((e) => {return e.name == searchBar.value})
        searchBar.value = test[0].id
    })
    searchBar.addEventListener('keyup', getResult)
})
.catch((error) => {
    console.log(
        `Ops! Algo deu errado =>
        ${error}` )
})

resultBar.addEventListener('click', (e) => {
    searchBar.value = e.target.textContent
})
