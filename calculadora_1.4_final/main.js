var painel = document.querySelector('#pai')

var rel

function numeros(num) {
    
    rel = pai.value = pai.value + num
    
    console.log(rel)
}

function apagar(ponto) {
    if (ponto == 2) {
       var _ponto = '.'
        pai.value = + pai.value + _ponto
    }
    else if (ponto == 1) {
        pai.value = ''
    }

}

function somar(sinal) {
    
    if (sinal == 1) {
        var mais = '+'
        pai.value = pai.value + mais
    }
    else if (sinal == 2) {
        var menos = '-'
        pai.value = pai.value + menos
    }
    else if (sinal == 3) {
        var vezes = '*'
        pai.value = pai.value + vezes
    }
    else if (sinal == 4) {
        var divi = '/'
        pai.value = pai.value + divi
    }
    else if (sinal == 19) {
        var resl = eval(rel)
        pai.value = resl
        console.log(resl)
    }
}
