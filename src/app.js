import { format } from 'date-fns'

const today = new Date()
const formatDate = format(today, 'dd/MM/yyyy')

console.log(today)
console.log(formatDate)

console.log('hello')

let counter = 1

let reviews = [
    {
        id: counter++,
        image: '/src/images/Ariel.jpg',
        name: 'Ariel',
        review: 'Принц на белом коне не умел плавать, хоть показался мне очень симпатичным, поэтому я осталась разочарована. '
    },
    {
        id: counter++,
        image: '/src/images/Aurora.jpg',
        name: 'Aurora',
        review: 'Прекрасный принц очень хорошо целуется, он помог мне проснуться за секунду, так что, девочки, рекомендую!'
    },
    {
        id: counter++,
        image: '/src/images/Cinderella.jpg',
        name: 'Cinderella',
        review: 'На балу я познакомилась с очень красивым молодым человеком, и он оказался настоящим принцем. Он был очень внимателен и любезен, и даже доставил мне лично на следующий день потерянную мною туфельку. '
    },
    {
        id: counter++,
        image: '/src/images/Jasmine.jpg',
        name: 'Jasmine',
        review: 'Всю ночь я каталась с прекрасным принцем на ковре самолете. Он оказался очень эрудированным и рассказал мне про звезды и планеты, а в конце предложил бесплатный расклад Таро. '
    },
    {
        id: counter++,
        image: '/src/images/Jasmine.jpg',
        name: 'Mulan',
        review: 'I dont speak Russian'
    }
]

let container = document.getElementById('container')

let index = 0

function renderReview() {
    container.innerHTML = `
      <div class="review">
         <img class="review__image" src="${reviews[index].image}"/>
         <p class="review__name">${reviews[index].name}</p>
         <p class="review__review">${reviews[index].review}</p>
        
         <div class="review__buttons">
         
           <button class="review__buttons_arrow_last_next review__button" id="review_last"><i class="fa-solid fa-chevron-left"></i></button>
           <button class="review__buttons_surprise review__button" id="review_surprise">Surprise</button>
           <button class="review__buttons_arrow_last_next review__button" id="review_next"><i class="fa-solid fa-chevron-right"></i></button>
         </div>
      </div>
         `
    const buttonLastReview = document.getElementById('review_last')
    buttonLastReview.addEventListener('click', renderReviewLast)

    const buttonNextReview = document.getElementById('review_next')
    buttonNextReview.addEventListener('click', renderReviewNext)

    const buttonSurpriseReview = document.getElementById('review_surprise')
    buttonSurpriseReview.addEventListener('click', renderReviewSurprise)
}

function renderReviewNext() {
    index++

    let final = reviews.length - 1
    console.log(final)

    if (index <= final) {
        console.log(index)
        renderReview()
    } else {
        index = 0
        renderReview()
    }
}

function renderReviewLast() {
    index--
    console.log(index)

    let final = reviews.length - 1
    console.log(final)

    if (index >= 0) {
        renderReview()
    } else {
        index = final
        renderReview()
    }
}

function renderReviewSurprise() {
    let surpriseReview = Math.floor(Math.random() * reviews.length)
    index = surpriseReview
    console.log(surpriseReview)
    console.log(index)

    renderReview()
}

renderReview()
