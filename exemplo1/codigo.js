
//Seleciona os elementos HTML com os IDs específicos e atribui-os a variáveis
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')

function verificarEntradas() {
    if (n1.value.trim() === "" || n2.value.trim() === "") {
      res.innerHTML = '<p>Por favor, insira valores em ambos os campos.</p>';
      return false;
    }
    if (isNaN(parseFloat(n1.value)) || isNaN(parseFloat(n2.value))) {
      res.innerHTML = '<p>Por favor, insira apenas números nos campos.</p>';
      return false;
    }
    return true;
}

function somar(){
    if (verificarEntradas()) {
        let num1 = parseFloat(n1.value);
        let num2 = parseFloat(n2.value);
        res.innerHTML = `<p>O resultado da soma entre ${num1} e ${num2} é ${num1 + num2}</p>`;
      }
}
function subtrair(){
    if (verificarEntradas()) {
        let num1 = parseFloat(n1.value);
        let num2 = parseFloat(n2.value);
        res.innerHTML = `<p>O resultado da subtração entre ${num1} e ${num2} é ${num1 - num2}</p>`;
      }
}
function multiplicar(){
    if (verificarEntradas()) {
        let num1 = parseFloat(n1.value);
        let num2 = parseFloat(n2.value);
        res.innerHTML = `<p>O resultado da multiplicação entre ${num1} e ${num2} é ${num1 * num2}</p>`;
      }
}
function dividir(){
    if (verificarEntradas()) {
        let num1 = parseFloat(n1.value);
        let num2 = parseFloat(n2.value);
        if (num1 == 0 || num2 == 0){
            res.innerHTML += `<p>Número inválido!</p>`
        }else{
            res.innerHTML += `<p>O resultado da divisão entre ${n1.value} e ${n2.value} é ${Number(n1.value) / Number(n2.value)}</p>`
        }
      }
    }

function exponenciar(){
    if (verificarEntradas()) {
        let base = parseFloat(n1.value)
        let expoente = parseFloat(n2.value)
        let resultado = Math.pow(base,expoente)
        res.innerHTML += `<p>O resultado da exponenciação entre ${n1.value} e ${n2.value} é ${resultado}</p>`
    }
}

function raiz(){
    if (verificarEntradas()) {
        let radicando = parseFloat(n1.value)
        let indice = parseFloat(n2.value)
        if (indice<=0){
            res.innerHTML = '<p>Insira um indíce maior que 0</p>'
            return
        }else{
            let resultado = Math.pow(radicando, 1 / indice);
            res.innerHTML += `<p>O resultado da raiz entre ${n1.value} e ${n2.value} é ${resultado}</p>`
        }
    }
}
function limpar(){
    res.innerHTML = '';
}