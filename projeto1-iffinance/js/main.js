// const modal = document.getElementById(`addTicket`);
// const modal2 = document.getElementById(`editTicker`);
// const xbtn = document.getElementById('xbtn');
function abrirModal(e){
    // console.log(md)
    const modal = document.querySelector(e);
    modal.style.display = "flex";
}
function fecharModal(id, e){

    const modal = document.querySelector(id);

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

function addTicket(e){
    e.preventDefault();
    // console.log(e)//event

    const modal = e.target.parentElement.parentElement;
    // console.log(modal.id)
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
        <div class="card-ticker" onmouseenter="showCardOptions(event)" onmouseleave="closeCardOptions(event)" id="${ticker}">
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

            <div class="card-options">
                <button class="card-btn-edit" onclick="editTicker(event)">
                    <image><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></image>
                </button>

                <button class="card-btn-delete" onclick="deleteCard(event)">
                    <image><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></image>
                </button>
                
            </div>
        </div>
    `

    fecharModal(`#${modal.id}`);

    form.reset();//Função de reset do formulario
}

function showCardOptions(e){
    // const card = e.target;
    const optionDiv = e.target.querySelector('.card-options');
    // const btnDelete = optionDiv.querySelector('.card-btn-delete');
    // console.log(btnDelete);
    // btnDelete.addEventListener('click', (e)=>{
    //     e.preventDefault();
    //     console.log(card);
    // });
    optionDiv.style.display = "flex";
}
function closeCardOptions(e){
    // const card = e.target;
    const optionDiv = e.target.querySelector('.card-options');
    optionDiv.style.display = "none";
}

function deleteCard(e){
    const card = e.target.closest('.card-ticker');
    // console.log(card);
    card.remove();
}

function editTicker(e){
    // modal2.style.display = "flex";

    const card = e.target.closest('.card-ticker');
    abrirModal('#editTicker');

}