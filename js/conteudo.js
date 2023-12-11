const catNameNav = document.querySelector('.nav_cat_name')

const catName = document.querySelector('.cat_name')
const container = document.querySelector('.container')

const attrCatName = document.querySelector('.characteristics h2')
const catsAttr = document.querySelectorAll('.characteristic .stars')

const catDescription = document.querySelector('.description p')

const pictureCatName = document.querySelector('.pictures h2')
const catsPicture = document.querySelectorAll('.pictures_grid img')

// doq eu preciso? nome do gato, atributos, imagens e descrição
axios.get('https://api.thecatapi.com/v1/breeds')
    .then((result) => {
        const breed = result.data.filter((breeds) => {return breeds.id == "kora"})[0]
        const ApiCatName = breed.name
        const ApiCatDescription = breed.description
        
        axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=kora')
        .then((imgs) => {
            const ApiGridImgs = imgs.data.map((img) => {
                return img.url
            })
            console.log(ApiCatName)
            console.log(ApiCatDescription)
            console.log(ApiGridImgs)
        })
})
