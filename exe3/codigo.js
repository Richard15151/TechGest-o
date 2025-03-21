function calcular(){
    let funcionarios = Number(document.getElementById("funcionarios").value)
    let dias = Number(document.getElementById("dias").value)
    let res = document.getElementById("res")

    if (funcionarios && dias ){
        if (funcionarios <= 0 || dias <= 0){
            res.innerHTML = '<p>Por favor, insira valores maiores que 0</p>'
            return
        }else{
            if (funcionarios >= 150){
                let valorpessoa = 3.60 * dias
                let valorfinal = funcionarios * dias * 3.60
                res.innerHTML += `<p>
                O custo por pessoa é de R$${valorpessoa} </br>
                O custo deste transporte é de R$${valorfinal}
                </p>`
            } else if(funcionarios>=100){
                let valorpessoa = 3.80 * dias
                let valorfinal = funcionarios * dias * 3.80
                res.innerHTML += `<p>
                O custo por pessoa é de R$${valorpessoa} </br>
                O custo deste transporte é de R$${valorfinal}
                </p>`
            } else if(funcionarios>=50){
                let valorpessoa = 4.10 * dias
                let valorfinal = funcionarios * dias * 4.10
                res.innerHTML += `<p>
                O custo por pessoa é de R$${valorpessoa} </br>
                O custo deste transporte é de R$${valorfinal}
                </p>`
            }else{
                let valorpessoa = 4.50 * dias
                let valorfinal = funcionarios * dias * 4.50
                res.innerHTML += `<p>
                O custo por pessoa é de R$${valorpessoa} </br>
                O custo deste transporte é de R$${valorfinal}
                </p>`
            }
        }
    }else{
        res.innerHTML = '<p>Por favor, insira os valores</p>'
        return
    }
}
function limpar(){
    res.innerHTML =''
}