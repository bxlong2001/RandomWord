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
let arrayWordCopy = []

const resetInput = () => {
    wordInput.value = ''
    meanInput.value = ''
}

const checkArray = () => {
    const arrayWordLength = arrayWord.length
    if (arrayWordLength >= 0) {
        checkBtn.removeAttribute('disabled')
        if (arrayWordLength >= 2) {
            randomBtn.removeAttribute('disabled')
        }
    }
}

submitBtn.onclick = () => {
    if(wordInput.value && meanInput.value) {
        const valueInput = {
            word: `${wordInput.value}`,
            mean: `${meanInput.value}`
        }
        
        arrayWord.push(valueInput)
        arrayWordCopy = [...arrayWord]

        checkArray()
    }
    
    resetInput()
}


checkBtn.onclick = () => {
    resetInput()

    const htmls = arrayWord.map((array,index) =>
    `<li>${index}. ${array.word} : ${array.mean}</li>`
    ).join('')
    outputList.innerHTML = htmls
    
}

randomBtn.onclick = () => {
    resetInput()

    randomNumber = Math.floor(Math.random() * arrayWordCopy.length)
    const arrayWordRandom = arrayWordCopy.find((array,index) => index == randomNumber)
    if(arrayWordCopy.length != 0){
        outputList.innerHTML = `<li class='word__random'>${arrayWordRandom.word}</li>`
        arrayWordCopy.splice(randomNumber, 1)
        const wordRandom = $('.word__random')
        wordRandom.onclick = () => {
            outputList.innerHTML = `<li class='word__random'>${arrayWordRandom.mean}</li>`
        }
    }else {
        outputList.innerHTML = `<li class='word__random'>Done!</li>`
        arrayWordCopy = [...arrayWord]
    }

}






