function aumento(){
    let salario = Number(document.getElementById("salario").value)
    let res = document.getElementById("res")
    if (salario <= 0){
        res.innerHTML = '<p>Por favor, insira valores maiores que 0</p>'
        return
    }else{
        if(salario > 3000){
            let aumento = salario * 0.05
            let salariofinal = salario * 1.05
            res.innerHTML += `<p>
            O aumento é de R$${aumento} </br>
            O salário final é de R$${salariofinal}
            </p>`
        }else if (salario > 2100){
            let aumento = salario * 0.10
            let salariofinal = salario * 1.10
            res.innerHTML += `<p>O aumento é de R$${aumento} </br>O salário final é de R$${salariofinal}</p>`
        }else if (salario > 1200){
            let aumento = salario * 0.13
            let salariofinal = salario * 1.13
            res.innerHTML += `<p>O aumento é de R$${aumento} </br>O salário final é de R$${salariofinal}</p>`
        }else{
            let aumento = salario * 0.16
            let salariofinal = salario * 1.16
            res.innerHTML += `<p>O aumento é de R$${aumento} </br>O salário final é de R$${salariofinal}</p>`
        }
    }
}

function limpar(){
    res.innerHTML = '';
}