const fetchData = async url => {
    const response = await fetch(url)
    return await response.json()
}

const trasportadoras = document.getElementById('transportadora');
const modelos = document.getElementById('modeloPersiana');
const tecidos = document.getElementById('tecidoPersiana');

json = fetchData('./api.json')
    .then(res => {
        res.transportadoras.forEach((transportadora,i) => {
            trasportadoras.innerHTML += `
                <option value="${i}">${transportadora}</option>
            `;
        });

        res.modelos.forEach((modelo) => {
            modelos.innerHTML += `
                <option value="${modelo.id}">${modelo.nome}</option>
            `;
        });

        modelos.addEventListener("change", ()=>{
            let modeloAtual = modelos.options[modelos.selectedIndex].value;
            tecidos.innerHTML = '<option selected>Escolha o tecido...</option>';
            
            for ( let tipo in res.tipos) {
                console.log(tipo)
                if (tipo == modeloAtual) {
                    res.tipos[tipo].forEach((tipo) => {
                        tecidos.innerHTML += `
                            <option value="${tipo.id}">${tipo.nome}</option>
                        `;
                    });
                    tecidos.disabled = false;
                    break;
                }
            }
            if (tecidos.childElementCount == 0) {
                tecidos.disabled = true;
            } 
        });
    })

const calculaPersiana = ( modeloPersiana, tecidoPersiana, qtde, largura, altura, frete, prazo, transp ) => {
    let preco = valor * (altura * l)
    let valor_total = (qtde * preco) + frete 

    return valor_total
}

const adicionarNovaPersiana = () => {

}