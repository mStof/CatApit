// class Data {
//     constructor(name, description, imgs){
//         this.CatName = name,
//         this.CatDescription = description,
//         this.Catimgs = imgs
//     }        
// }

const pesquisaDoIndex = window.location.search.replace('?search_bar=', '')
// doq eu preciso? nome do gato, atributos, imagens e descrição
// axios.get('https://api.thecatapi.com/v1/breeds')
//     .then((result) => {
//         const breed = result.data.filter((breeds) => {return breeds.id == pesquisaDoIndex})[0]
//         const ApiCatName = breed.name
//         const ApiCatDescription = breed.description
        
//         axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${pesquisaDoIndex}`)
//         .then((imgs) => {
//             const ApiGridImgs = imgs.data.map((img) => {
//                 return img.url
//             })
//         })
//     })


const ImgsPromise = () => new Promise((resolve, reject) => {
        const xhrImgs = new XMLHttpRequest()
        xhrImgs.open('GET', `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${pesquisaDoIndex}`)
        xhrImgs.send()
        xhrImgs.onreadystatechange = () => {
            if(xhrImgs.readyState === 4){     
                return resolve(JSON.parse(xhrImgs.responseText))
            }
        }

})
const InfoPromise = () => new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.thecatapi.com/v1/breeds')
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                const breed = JSON.parse(xhr.responseText).filter((breeds) => {return breeds.id == pesquisaDoIndex})[0]
                return resolve(breed)
            }
        }
    })



const CatInfo = async () => {
    const result = await InfoPromise()
    const APICatName = result.name
    const APICatDescription = result.description
    console.log(result, APICatName, APICatDescription)
}
const CatImgs = async () => {
    const imgs = await ImgsPromise()
    const APICatImgs = imgs.map(img => img.url)
    console.log(APICatImgs)
}
CatImgs()
CatInfo()
export { CatImgs, CatInfo }

