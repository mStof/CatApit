import { CatImgs, CatInfo } from "./APIconteudo.js";



const placeImgs = async () => {
    const imgs = await CatImgs()
    const container = document.querySelector('section.container')
    const gridImgs = document.querySelectorAll('.pictures_grid img')

    container.style.backgroundImage = `url(${imgs[0]})`
    for (let i = 0; i < 10; i++) {
        if(imgs.length > i){
            gridImgs[i].setAttribute('src', imgs[i])
        }
        else{
            gridImgs[i].setAttribute('src', '../images/Conteudo/default.jpg')
        }
        
    }
}
const placeInfo = async () => {
    const info = await CatInfo()
    const description = document.querySelector('.description p') 
    description.textContent = info[0]

    const catName = Array.from(document.querySelectorAll('.change'))
    catName.map((nome) => nome.textContent = info[1])

}
placeImgs()
placeInfo()