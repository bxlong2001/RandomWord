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

let arrayWordCopy = [...arrayWord]
randomBtn.onclick = () => {
    randomNumber = Math.floor(Math.random() * arrayWordCopy.length)

    const arrayWordRandom = arrayWordCopy.find((array,index) => index == randomNumber)

    if(arrayWordCopy.length != 0){
        outputList.innerHTML = `<li class='word__random'>${arrayWordRandom.word}</li>`
        arrayWordCopy.splice(randomNumber, 1)
    }else {
        outputList.innerHTML = `<li class='word__random'>Done!</li>`
        arrayWordCopy = [...arrayWord]
    }
    const wordRandom = $('.word__random')
    
    wordRandom.onclick = () => {
        outputList.innerHTML = `<li class='word__random'>${arrayWordRandom.mean}</li>`
    }

    wordInput.value = ''
    meanInput.value = ''
}






