const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const wordInput = $('.word__input')
const meanInput = $('.mean__input')
const submitBtn = $('.submit')
const checkBtn = $('.check')
const randomBtn = $('.random')
const outputList = $('.output__list')
const button = $$('button')

const arrayWord = []

submitBtn.onclick = () => {
    if(wordInput.value && meanInput.value) {
        const valueInput = {
            word: `${wordInput.value}`,
            mean: `${meanInput.value}`
        }

        arrayWord.push(valueInput)
    }

    wordInput.value = ''
    meanInput.value = ''
}

checkBtn.onclick = () => {
    const htmls = arrayWord.map((array,index) =>
        `<li>${index}. ${array.word} : ${array.mean}</li>`
    ).join('')
    outputList.innerHTML = htmls

    wordInput.value = ''
    meanInput.value = ''
}


randomBtn.onclick = () => {
    const randomNumber = Math.floor(Math.random() * arrayWord.length)
    const arrayWordRandom = arrayWord[randomNumber]
    outputList.innerHTML = `<li class='word__random'>${arrayWordRandom.word}</li>`

    const wordRandom = $('.word__random')
    wordRandom.onclick = () => {
        outputList.innerHTML = `<li class='word__random'>${arrayWordRandom.mean}</li>`
    }

    wordInput.value = ''
    meanInput.value = ''
}






