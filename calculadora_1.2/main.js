var painel = document.querySelector('#pai')

var rel

function numeros(num) {
    
    rel = pai.value = pai.value + num
    
    console.log(rel)
}

function apagar() {

}

function somar(sinal) {
    
    if (sinal == 1) {
        mais = '+'
        pai.value = mais + pai.value
    }
    else if (sinal == 2) {
        menos = '-'
        pai.value = menos + pai.value
    }
    else if (sinal == 3) {
        vezes = '×'
        pai.value = vezes + pai.value
    }
    else if (sinal == 4) {
        divi = '/'
        pai.value = divi + pai.value
    }
    else if (sinal == 19) {
        resl = eval(rel)
        pai.value = resl
        console.log(resl)
    }
}