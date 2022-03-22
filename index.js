const fetchData = async url => {
    const response = await fetch(url)
    return await response.json()
}

const trasportadoras = document.getElementById('transportadora');
const modelos = document.getElementById('modeloPersiana');
const tecido = document.getElementById('tecidoPersiana');

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
        
    })

const calculaPersiana = ( modeloPersiana, tecidoPersiana, qtde, largura, altura, frete, prazo, transp ) => {
    let preco = valor * (altura * l)
    let valor_total = (qtde * preco) + frete 

    return valor_total
}

const adicionarNovaPersiana = () => {

}