import { Component } from '../core/component'
import { apiService } from '../services/api.service'

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

async function linkClickHandler(event) {
    event.preventDefault()

    if (event.target.classList.contains('js-link')) {
        const postId = event.target.textContent

        const post = await apiService.fetchPostById(postId)
    }
}

function renderList(list = []) {
    if (list.length) {
        return `
        <ul>
            ${list.map(i => `<li><a href="#" class="js-link">${i}</a></li>`).join(' ')}
        </ul>
        `
    }

    return `<p class="center">Вы пока ничего не добавили</p>`
}