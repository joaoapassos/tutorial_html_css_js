const modal = document.getElementById(`modal_1`);
const xbtn = document.getElementById('xbtn');
function abrirModal(){
    // console.log(md)
    modal.style.display = "flex";
}
function fecharModal(e){

    // console.log(e)

    if(e === undefined){
        return modal.style.display = "none";
    }

    if(e.target == modal){
        return modal.style.display = "none";
    }
    
}

// document.addEventListener('mousemove', (e)=>{
//     console.log(e);

// })

function handleSubmitAddTicket(e){
    e.preventDefault();
    console.log(e)//event
    
    const cardList = document.getElementById('card-list');

    const form = e.target;
    const nameCompany = e.target.nameCompany.value;
    const urlLogo = e.target.urlLogo.value;
    const ticker = e.target.ticker.value;
    const quantity = e.target.quantity.value;
    const closeValue = e.target.closeValue.value;
    // console.log(form)
    // console.log(nameCompany)
    // console.log(ticker)
    // console.log(quantity)
    // console.log(closeValue)

    cardList.innerHTML += `
        <div class="card-ticker">
            <header>
                <img src="${urlLogo}" alt="${nameCompany} Logo">
                <h4>${nameCompany}</h4>
                <span>${ticker}</span>
            </header>
            <main>
                <p>Valor: <span style="color: rgb(36, 209, 88)">R$ ${closeValue} <span class="setinhas" style="color: rgb(36, 209, 88)">▲▼</span></span></p>
            </main>
            <footer>
                <p>QTD: <span>${quantity}</span></p>
                <p>Posição: <span>${(+quantity)*(+closeValue)}</span></p>
            </footer>
        </div>
    `

    fecharModal();

    form.reset();//Função de reset do formulario
}