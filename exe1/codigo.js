function calcular(){
    let salario = Number(document.getElementById('salario').value);
    let horasnormais = Number(document.getElementById('horasnormais').value);
    let horasfds = Number(document.getElementById('horasfds').value);
    let res = document.getElementById('res')
    
    if (salario <= 0 || horasnormais <= 0 || horasfds <= 0) {
        res.innerHTML = '<p>Por favor, insira valores maiores que zero.</p>'
        return
    }else{
        let valorhora = salario/200
        let valornormais = horasnormais * valorhora
        let valorfds = horasfds * (valorhora + valorhora/2)
        let resultado = valornormais + valorfds
        res.innerHTML += `<p>O valor de cada hora é de R$${valorhora}</p>
        <p>O resultado de pagamento de horas extras normais é de: R$${valornormais}</p>
        <p>O resultado de pagamento de horas extras no final de semana é de: R$${valorfds}</p>
        <p>O resultado de pagamento de horas extras no total é de: R$${resultado}</p>`
    }
}

function limpar(){
    res.innerHTML = '';
}