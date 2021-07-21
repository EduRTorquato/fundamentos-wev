// Case sensitive - Letras maiusculas fazem diferença

/*
    Declaração de variáveis
    var edu - 
    let edu - varíavel classica: 5/ true/ batatas/ somente no escopo local
    const edu - valores fixos

    por Tag: getElementByTagName(h1)
    por Id: getElementById()
    por Nome: getElementsByName()
    por Classe: getElementsByClassName()
    por Selector: querySelector()

let texto = geteElementByTagName(h1)
let menu = getElementById('#menu')
let classe = getELementByClassName('.classe')
let nome = geteElementByName('nome')
let thiago = querySelector('thiago')

texto = 'batatinha'
*/
let titulo = document.querySelector('#titulo')
titulo.style.color = 'purple'
let nome = document.querySelector('#nome')
nome.style.width = '95%'
let email = document.getElementById('#email')
email.style.width = '95%'



function validaNome(){
    let txtNome  = document.querySelector('#txtNome')
    if(nome.value.length < 5){
        nome.style.border = '2px solid red'
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else{
        nome.style.border = '2px solid green'
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }
    function validaEmail(){
        let txtEmail = document.querySelector('#email')
        if(email.value.indexOf('@') == -1){
          txtEmail.innerHTML = 'Email inválido'
          txtEmail.style.color = 'red'
        }
    }
    
}