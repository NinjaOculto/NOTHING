const prompt = require('prompt-sync')();
const startBot = require("./bot");

(function getDate(){
  const nome = prompt('Insira o nome da conta: ');
  if(nome.trim()!=""){
      startBot(nome);
  }  
})()

