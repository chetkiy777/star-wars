const refs = {
    humansList: document.querySelector('.humans__list'),
    infoList: document.querySelector('.info__list'),
    infoContainer: document.querySelector('.info'),
}

export default class RenderService {
    constructor() {

    }

    renderHumans(humansArr) {
        const markup = humansArr.map(({name}) => {
            return `<li class="human__item">${name}</li>`
        })

        refs.humansList.insertAdjacentHTML('afterbegin', markup)
    }

    renderHumanInfo(human) {
        const {name, height, mass, hair_color, eye_color, gender } = human
        const markup = `
            <li><span class="item_text">name: </span> ${name}</li>
            <li><span class="item_text>height: </span> ${height}</li>
            <li><span class="item_text">mass: </span> ${mass}</li>
            <li><span class="item_text">hair color: </span> ${hair_color}</li>
            <li><span class="item_text">eye color: </span> ${eye_color}</li>
            <li><span class="item_text">gender: </span> ${gender}</li>
        `
        refs.infoList.insertAdjacentHTML('afterbegin', markup)
    }

    resetHumansList() {
        refs.humansList.innerHTML = ''
    }

    resetInfoList() {
        refs.infoList.textContent = ''
    }

    infoHidden() {
        refs.infoContainer.classList.add('is-hidden')
    }

    infoVisible() {
        refs.infoContainer.classList.remove('is-hidden')
    }
}