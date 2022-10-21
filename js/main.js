axios('pessoas.json')
.then(resposta => carregaDadosUsuario(resposta.data))

function carregaDadosUsuario(json) {
    const table = document.createElement('table')

    for(let pessoas of json) {
        const tr = document.createElement('tr')
        table.appendChild(tr)

        let td = document.createElement('td')
        td.innerHTML = `${pessoas.nome} ${pessoas.sobrenome}`
        tr.appendChild(td)

        let td1 = document.createElement('td')
        td1.innerHTML = `${pessoas.idade} anos`
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerHTML = `Sexo: ${pessoas.sexo}`
        tr.appendChild(td2)
    }
    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}