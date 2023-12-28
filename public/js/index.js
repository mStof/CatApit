let searchBar = document.querySelector('#search_bar')
let resultBar = document.querySelector('pre.result')
let form = document.querySelector('.search')

const myPromise = async () => {
    try{
        const dadosConvertidos = await fetch('https://api.thecatapi.com/v1/breeds').then( res => res.json())
        const getResult = () => {
        resultBar.innerHTML = ``
        const breedsFilter = dadosConvertidos.filter((breeds) => {
            let breedsName = breeds.name.toLowerCase() 
            let searchValue = searchBar.value.toLowerCase()
            return breedsName.includes(searchValue) && !(searchValue == '') ? breeds : false
        
        })
        for (let i = 0; i < breedsFilter.length; i++) {
            resultBar.innerHTML+= `\n<p class="option" tabindex="0">${breedsFilter[i].name}</p>\n`
        }
        const options = document.querySelectorAll('.option')
        options.forEach((opt) => {
            opt.addEventListener('keyup', ({ key }) => {
                console.log(key)
                if(key == ' ' || key == 'Enter'){
                    opt.click()
                    const test = dadosConvertidos.filter((e) => {return e.name == searchBar.value})
                    searchBar.value = test[0].id
                    form.submit()
                }
            })
        })
        form.addEventListener('submit', () => {
            
            const test = dadosConvertidos.filter((e) => {return e.name == searchBar.value})
            searchBar.value = test[0].id
        })
        }
        return getResult
    }
    catch(error){
        console.log(`Ops! Algo deu errado => ${error}`)
    }
}
myPromise().then(getResult => searchBar.addEventListener('keyup', getResult))

resultBar.addEventListener('click', (e) => {
    searchBar.value = e.target.textContent
})

