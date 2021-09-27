import { Component } from '../core/component'

export class FavoriteComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('click', linkClickHandler.bind(this))
    }

    onShow() {
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        const html = renderList(favorites)
        this.$el.insertAdjacentHTML('afterbegin', html)
    }
}

function linkClickHandler(event) {
    event.preventDefault()
}

function renderList(list = []) {
    if (list.length) {
        return `
        <ul>
            ${list.map(i => `<li><a href="#">${i}</a></li>`).join(' ')}
        </ul>
        `
    }

    return `<p class="center">Вы пока ничего не добавили</p>`
}