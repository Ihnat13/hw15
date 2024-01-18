const userInput = document.getElementById('name-input-modal');
const statsModal = document.getElementById('welcome-modal');
const modalInput = document.querySelector(`.modal-content`);
const modalShowStats = document.getElementById(`modal-content2`);
showUserInputValue();
function showUserInputValue() {
userInput.style.display = 'block';
document.body.classList.add('modal-open');
}

modalInput.addEventListener(`click`, ({ target }) => {
    if(target.tagName === `BUTTON`){
        saveUserInput();
    }
})

function saveUserInput() {
    const inputElement = document.getElementById('name-input');
    const enteredValue = inputElement.value.toLowerCase().trim();
    if (enteredValue === '') {
        alert('Введите хотя бы одно слово.');
        return;
    }

    const wordsArray = enteredValue.split(' ').filter(Boolean);
    const res = wordsArray.reduce((prevGroup, el) => {
        if (!prevGroup.has(el)) {
            prevGroup.set(el, []);
        }
        prevGroup.get(el).push(el);
        return prevGroup;
    }, new Map());

    showUniqueWords(res);
}

function showUniqueWords(username) { 
    statsModal.style.display = 'block';
    userInput.style.display = 'none';
    document.body.classList.remove('modal-open');

    const res2 = username.forEach((value, key) => {
        const createEl = document.createElement(`p`)
        createEl.innerHTML = `Слово: ${key}, Количество: ${value.length}`;
        modalShowStats.append(createEl)
    });
}
