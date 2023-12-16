const inputEl = document.querySelector("input");

const validEL = document.querySelector(".valid");

const submitBtnEl = document.querySelector(".sub-btn");

const userEmail = document.querySelector('#user-email');

const containerEl = document.querySelector('.container');

const thanksEl = document.querySelector('.thanks-content');

const dismissMsgEl = document.querySelector('.dismiss-btn')


  function formSuccess() {
    thanksEl.classList.remove('active');
    containerEl.classList.add('active');
}

function validadteEmail(email) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(email);
}



  submitBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    const email = inputEl.value.trim();

    if (validadteEmail(email)) {
        formSuccess();
        userEmail.innerText = email;
        validEL.style.visibility = "hidden";
        validEL.style.opacity = 0;
        inputEl.classList.remove('active');
    } else {
        validEL.style.visibility = "visible";
        validEL.style.opacity = 1;
        inputEl.classList.add('active');
    }
  });

  dismissMsgEl.addEventListener('click', () => {
    thanksEl.classList.add('active');
    containerEl.classList.remove('active');
    inputEl.value = "";
})






