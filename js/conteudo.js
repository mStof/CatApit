const pesquisaDoIndex = 'kora'
// doq eu preciso? nome do gato, atributos, imagens e descrição
axios.get('https://api.thecatapi.com/v1/breeds')
    .then((result) => {
        const breed = result.data.filter((breeds) => {return breeds.id == pesquisaDoIndex})[0]
        const ApiCatName = breed.name
        const ApiCatDescription = breed.description
        
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${pesquisaDoIndex}`)
        .then((imgs) => {
            const ApiGridImgs = imgs.data.map((img) => {
                return img.url
            })
            // export const Api = {
            //     ApiCatName,
            //     ApiCatDescription,
            //     ApiGridImgs,
            // }
        })
})
