function validateEmailPassword() {
  const buttonLogin = document.querySelector('.btn-login');

  buttonLogin.addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email !== 'tryber@teste.com' || password !== '123456') {
      alert('Email ou senha inválidos.');
    } else if (email === 'tryber@teste.com' && password === '123456') {
      alert('Olá, Tryber!');
    }
  });
}

validateEmailPassword();

function limitTextarea() {
  const textArea = document.querySelector('#textarea');

  textArea.addEventListener('keypress', (event) => {
    const imputLength = textArea.value.length;
    const maxChars = 500;

    if (imputLength >= maxChars) {
      event.preventDefault();
    }
  });
}

limitTextarea();

/* Requisito 18 */
/* Pesquisado sites https://cursos.alura.com.br/forum/topico-como-desabilitar-botao-apos-clicar-nele-mesmo-65004
https://pt.stackoverflow.com/questions/25332/verificar-se-tem-algum-checkbox-checado-e-habilitar-bot%C3%A3o */

const agreement = document.getElementById('agreement');
const habilitCheckbox = document.getElementById('submit-btn');
agreement.addEventListener('click', () => {
  habilitCheckbox.removeAttribute('disabled');
});

// Requisito 20
function counterTextarea() {
  const textArea = document.querySelector('#textarea');
  const counter = document.querySelector('#counter');

  textArea.addEventListener('input', () => {
    let updater = 0;
    updater = textArea.value.length;
    counter.innerText = 500 - updater;
  });
}

counterTextarea();

// Requisito 21

/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 * https://developer.mozilla.org/pt-BR/docs/Web/API/FormData
*/

function submitForms() {
  const formElement = document.querySelector('#evaluation-form');
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formElement);
    const subtjects = formData.getAll('subject');
    const fullName = `Nome: ${formData.get('name')} ${formData.get('lastName')}`;
    const observacoesForms = `Observações: ${formData.get('textComment')}`;
    document.querySelector('#input-name').innerHTML = fullName;
    document.querySelector('#input-lastname').innerHTML = '';
    document.querySelector('#input-email').innerHTML = `Email: ${formData.get('inputEmail')}`;
    document.querySelector('#input-casa').innerHTML = `Casa: ${formData.get('house')}`;
    document.querySelector('#input-family').innerHTML = `Família: ${formData.get('family')}`;
    document.querySelector('#input-subject').innerHTML = `Matérias: ${subtjects.join(', ')}`;
    document.querySelector('#input-avaliacao').innerHTML = `Avaliação: ${formData.get('rate')}`;
    document.querySelector('#input-textarea').innerHTML = observacoesForms;
  });
}
submitForms();
