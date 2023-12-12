const pesquisaDoIndex = window.location.search.replace('?search_bar=', '')

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
    xhr.send()
    xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                const breeds = JSON.parse(xhr.responseText)
                const breed = breeds.find((breeds) => {return breeds.id == pesquisaDoIndex})
                return resolve(breeds)
            }
        }
    })

const CatInfo = async () => {
    const result = await InfoPromise()
    console.dir(result)
    const APICatName = result.name
    const APICatDescription = result.description
}
const CatImgs = async () => {
    const imgs = await ImgsPromise()
    const APICatImgs = imgs.map(img => img.url)
    console.log(APICatImgs)
}
CatImgs()
CatInfo()
export { CatImgs, CatInfo }

