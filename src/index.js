import ApiService from "./js/api/apiService";
import RenderService from "./js/render/renderService";

const api = new ApiService()
const render = new RenderService()

const btns = {
    nextBtn: document.querySelector('[data-forward]'),
    backBtn: document.querySelector('[data-back]'),
    closeBtn: document.querySelector('[data-close]'),
    humansList: document.querySelector('.humans__list'),
}

btns.nextBtn.addEventListener('click', nextPage)
btns.backBtn.addEventListener('click', prevPage)
btns.humansList.addEventListener('click', getInfo)
btns.closeBtn.addEventListener('click', hideInfo)

function nextPage() {
    render.resetHumansList()
    api.incrementPage()
    api.getHumans().then(render.renderHumans)
}

function prevPage() {
    render.resetHumansList()
    api.decrementPage()
    api.getHumans().then(render.renderHumans)
}

function getInfo(e) {
    if (e.target.nodeName !== 'LI') {
        return
    }
    render.infoVisible()
    api.searchQuery = e.target.textContent
    api.getInfoHuman().then(results => {
        console.log(results)
        render.resetInfoList()
        render.renderHumanInfo(results[0])
    })
}

function hideInfo() {
    render.infoHidden()
}




