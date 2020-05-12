var res = document.querySelector('.painel')
var num = []


function numeros(n) {
    
    num.push(n)
    
    for (var i = 0; i < num.length; i++) {
        res.innerHTML = num[i]
        res.innerHTML = num.join('')
        
        console.log(num)
    }
    
       
}

function apagar() {
    var tecla = event.keyCode
    
    res.innerHTML = num.pop()
    res.innerHTML = num
    res.innerHTML = num.join('')
    
    if (res.innerHTML == 'undefined') {
        res.innerHTML = ''
    }

    if (tecla == 8) {
        res.innerHTML = num.pop()
        res.innerHTML = num
        res.innerHTML = num.join('')
    
    if (res.innerHTML == 'undefined') {
        res.innerHTML = ''
        }
    }
}

function somar(s, item, index) {
    
    if (s == 1) {
        mais = '+'
        num.push(mais)
        console.log('posição ' + num.lastIndexOf(mais))
    }
    else if (s == 2) {
        menos = '-'
        num.push(menos)
        console.log('posição ' + num.lastIndexOf(menos))
    }
    else if (s == 3) {
        vezes = '×'
        num.push(vezes)
        console.log('posição ' + num.lastIndexOf(vezes))
    }
    else if (s == 4) {
        dividi = '/'
        num.push(dividi)
        console.log('posição ' + num.lastIndexOf(dividi)) 
    }
    
    if (s == 19) {
        var posicão_mais = num.lastIndexOf(mais)
        console.log(posicão_mais)
        num.forEach( (item, index)=> {
            if (num.lastIndexOf(mais) == posicão_mais) {
                res.innerHTML = num[index] + num[index]
            }
        })
    }
    
}

window.addEventListener('keydown', apagar)

