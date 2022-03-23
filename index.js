const fetchData = async url => {
    const response = await fetch(url)
    return await response.json()
}

fetchData('./api.json').then(res => {
    let trasportadoras = document.getElementById('transportadora');
    res.transportadoras.forEach((transportadora,i) => {
        trasportadoras.innerHTML += `
            <option value="${i}">${transportadora}</option>
        `;
    });
})

const containerCard = document.getElementById('cardContainer');

let quantidadeProduto = 0;

const json = fetchData('./api.json')
    .then(res => {
        let modelos = document.getElementById('modeloPersiana'+ quantidadeProduto);
        let tecidos = document.getElementById('tecidoPersiana'+ quantidadeProduto);

        res.modelos.forEach((modelo) => {
            modelos.innerHTML += `
                <option value="${modelo.id}">${modelo.nome}</option>
            `;
        });

        modelos.addEventListener("change", ()=>{
            let modeloAtual = modelos.options[modelos.selectedIndex].value;
            tecidos.innerHTML = '<option selected>Escolha o tecido...</option>';
            
            for ( let tipo in res.tipos) {
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

            if (tecidos.childElementCount == 1) {
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
    quantidadeProduto++;

    containerCard.innerHTML += `
        <div id="card${quantidadeProduto}" class="col">
            <div class="card rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Persiana <span id="idPersiana${quantidadeProduto}">${quantidadeProduto}</span></h4>
                </div>
                <div class="card-body row g-2">
                    <div class="col-sm-6">
                        <label class="visually-hidden" for="modeloPersiana">Modelo Persiana</label>
                        <select class="form-select" id="modeloPersiana${quantidadeProduto}">
                            <option selected="">Escolha o modelo...</option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <label class="visually-hidden" for="tecidoPersiana">Tecido Persiana</label>
                        <select class="form-select" id="tecidoPersiana${quantidadeProduto}" disabled=""><option selected="">Escolha o tecido...</option></select>
                    </div>
                    <div class="col-sm-4">
                        <label class="visually-hidden" for="quantidade">Quantidade por peça</label>
                        <input type="number" class="form-control" id="quantidade${quantidadeProduto}" placeholder="Quantidade por peça">
                    </div>
                    <div class="col-sm-4">
                        <label class="visually-hidden" for="largura">Largura por peça</label>
                        <input type="number" class="form-control" id="largura${quantidadeProduto}" placeholder="Largura por peça">
                    </div>
                    <div class="col-sm-4">
                        <label class="visually-hidden" for="altura">Altura por peça</label>
                        <input type="number" class="form-control" id="altura${quantidadeProduto}" placeholder="Altura por peça">
                    </div>
                </div>
            </div>
        </div>
    `;

    json;
}

adicionarNovaPersiana();