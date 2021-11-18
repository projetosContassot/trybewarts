const btnLogin = document.getElementById('btnLogin');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnEnviar = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
const contador = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const divLeft = document.getElementById('divLeft');

btnEnviar.disabled = true;

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function ativaBtnEnviar() {
  if (checkBox.checked) {
    btnEnviar.disabled = false;
    btnEnviar.classList.add('colorBtn');
    btnEnviar.classList.remove('btnDisabled');
  } else {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('btnDisabled');
    btnEnviar.classList.remove('colorBtn');
  }
}

function updateCounter() {
  const tamanhoText = textArea.value;
  contador.innerHTML = 500 - Number(tamanhoText.length);
}

function exibeForm(obj) {
  const inscricao = document.createElement('div');
  inscricao.id = 'evaluation-form';
  inscricao.innerText = `Nome: ${obj.nome} ${obj.sobrenome}
  Email: ${obj.email}
  Casa: ${obj.casa}
  Família: ${obj.familia}
  Matérias: ${obj.materias}
  Avaliação: ${obj.nota}
  Observações: ${obj.observacoes}`;
  divLeft.appendChild(inscricao);
}

function verificaFamilia() {
  const familiaRadio = document.querySelector('input[name="family"]:checked').value;
  return familiaRadio;
}

function verificaMateria() {
  let conteudo = [];
  const conteudoCheckBox = document.querySelectorAll('input[class="subject"]:checked');
  for (let i = 0; i < conteudoCheckBox.length; i += 1) {
    conteudo.push(conteudoCheckBox[i].value);
  }
  conteudo = conteudo.join(', ');
  return conteudo;
}

function verificaNota() {
  const nota = document.querySelector('input[name="rate"]:checked').value;
  return nota;
}

function salvaForm() {
  const nomeValor = document.getElementById('input-name').value;
  const sobrenomeValor = document.getElementById('input-lastname').value;
  const emailValor = document.getElementById('input-email').value;
  const casaValor = document.getElementById('house').value;
  const comentario = document.getElementById('textarea').value;
  const familiaValor = verificaFamilia();
  const conteudo = verificaMateria();
  const notaValor = verificaNota();
  const formulario = { nome: nomeValor,
    sobrenome: sobrenomeValor,
    email: emailValor,
    casa: casaValor,
    familia: familiaValor,
    materias: conteudo,
    nota: notaValor,
    observacoes: comentario,
  };
  return formulario;
}

function sendForm() {
  const formSalvo = salvaForm();
  let deletar = divLeft.lastElementChild;
  while (deletar) {
    divLeft.removeChild(deletar);
    deletar = divLeft.lastChild;
  }
  exibeForm(formSalvo);
}

btnLogin.addEventListener('click', login);
checkBox.addEventListener('click', ativaBtnEnviar);
textArea.addEventListener('input', updateCounter);
btnEnviar.addEventListener('click', sendForm);
