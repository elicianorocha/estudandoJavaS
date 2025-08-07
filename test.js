alert('Vamos começar a aprender de verdade!!');
let name = prompt('Pra começar bem, como posso te chamar?');
let idade = prompt('Sua idade, pro favor?');

///---Condição --- Definição das mensagens --- ///
if(idade >= 18) {mensagem = 'Você pode ver 18+';} else{mensagem = 'Desliga isso agora!';}
document.getElementById('output').textContent = `Olá, ${name}! ${mensagem}`;

///---Exibição no console ---///
console.log(`Nome: ${name}, Idade: ${idade}`);