function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value <= 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let fcor = document.getElementsByName('radcor')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked && fcor[0].checked) {
            if (idade >=0 && idade <5) {
                // Bebê
                genero = 'Bebê'
                img.setAttribute('src', 'imagens/foto-bebe-h-b.png')
            } else if (idade <10) {
                // Criança
                genero = 'Criança'
                img.setAttribute('src', 'imagens/foto-crianca-h-b.png')
            } else if (idade < 20) {
                // Jovem
                genero = 'Jovem'
                img.setAttribute('src', 'imagens/foto-jovem-h-b.png')
            } else if (idade < 50) {
                // Adulto
                genero = 'Adulto'
                img.setAttribute('src', 'imagens/foto-adulto-h-b.png')
            } else {
                // Idoso
                genero = 'Idoso'
                img.setAttribute('src', 'imagens/foto-idoso-h-b.png')
            }               
        } else if (fsex[0].checked && fcor[1].checked) {
            if (idade >=0 && idade <5) {
                // Bebê
                genero = 'Bebê'
                img.setAttribute('src', 'imagens/foto-bebe-h-n.png')
            } else if (idade <10) {
                // Criança
                genero = 'Criança'
                img.setAttribute('src', 'imagens/foto-crianca-h-n.png')
            } else if (idade < 20) {
                // Jovem
                genero = 'Jovem'
                img.setAttribute('src', 'imagens/foto-jovem-h-n.png')
            } else if (idade < 50) {
                // Adulto
                genero = 'Adulto'
                img.setAttribute('src', 'imagens/foto-adulto-h-n.png')
            } else {
                // Idoso
                genero = 'Idoso'
                img.setAttribute('src', 'imagens/foto-idoso-h-n.png')
            }               
        } else if (fsex[1].checked && fcor[0].checked) {
            if (idade >=0 && idade <5) {
                // Bebê
                genero = 'Bebê'
                img.setAttribute('src', 'imagens/foto-bebe-m-b.png')
            } else if (idade <10) {
                // Criança
                genero = 'Criança'
                img.setAttribute('src', 'imagens/foto-crianca-m-b.png')
            } else if (idade < 20) {
                // Jovem
                genero = 'Jovem'
                img.setAttribute('src', 'imagens/foto-jovem-m-b.png')
            } else if (idade < 50) {
                // Adulto
                genero = 'Adulto'
                img.setAttribute('src', 'imagens/foto-adulto-m-b.png')
            } else {
                // Idoso
                genero = 'Idoso'
                img.setAttribute('src', 'imagens/foto-idoso-m-b.png')
            }               
        } else if (fsex[1].checked && fcor[1].checked) {
            if (idade >=0 && idade <5) {
                // Bebê
                genero = 'Bebê'
                img.setAttribute('src', 'imagens/foto-bebe-m-n.png')
            } else if (idade <10) {
                // Criança
                genero = 'Criança'
                img.setAttribute('src', 'imagens/foto-crianca-m-n.png')
            } else if (idade < 20) {
                // Jovem
                genero = 'Jovem'
                img.setAttribute('src', 'imagens/foto-jovem-m-n.png')
            } else if (idade < 50) {
                // Adulto
                genero = 'Adulto'
                img.setAttribute('src', 'imagens/foto-adulto-m-n.png')
            } else {
                // Idoso
                genero = 'Idoso'
                img.setAttribute('src', 'imagens/foto-idoso-m-n.png')
            }               
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}