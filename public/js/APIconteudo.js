let pesquisaDoIndex = window.location.search.replace('?search_bar=', '')
pesquisaDoIndex = 'kora'
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
                return resolve(breed)
            }
        }
    })

const CatInfo = async () => {
    const result = await InfoPromise()
    const APICatName = result.name
    const APICatDescription = result.description
    const characteristics = [
        result.health_issues, result.social_needs, result.intelligence, result.energy_level,
        result.stranger_friendly, result.affection_level, result.adaptability, result.grooming]
    return [APICatDescription, APICatName, characteristics]
}
const CatImgs = async () => {
    const imgs = await ImgsPromise()
    const APICatImgs = imgs.map(img => img.url)
    return APICatImgs
}
export {CatImgs, CatInfo}


