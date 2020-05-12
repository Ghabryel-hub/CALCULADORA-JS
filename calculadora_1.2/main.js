var painel = document.querySelector('#pai')



function numeros(num) {
    
    pai.value = num + pai.value
    console.log(num)
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
        vezes = '-'
        pai.value = vezes + pai.value
    }
    else if (sinal == 4) {
        divi = '-'
        pai.value = divi + pai.value
    }
}