let searchBar = document.querySelector('#search_bar')
let resultBar = document.querySelector('pre.result')


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
