const submit = document.querySelector('#btnAddImagem');
let idImg = 0;

submit.addEventListener('click', (event) => {
    event.preventDefault(); 
    addImgs();
});


function addImgs(){
    const grupCabeca = document.querySelector('#grupCabeca');
    const grupTronco = document.querySelector('#grupTronco');
    const grupPernas = document.querySelector('#grupPernas');
    const select = document.querySelector('#tipoImagem').value;
    const inputUrl = document.querySelector('#url').value;
    let inputReset = document.querySelector('#url');
    idImg++;

    const btnImg = document.createElement('button');
    btnImg.classList.add('imgsContainer');

    const img = document.createElement('img');
    img.setAttribute('src', inputUrl);
    img.setAttribute('id', `Img_${idImg}`);
    btnImg.appendChild(img);

    inputReset.value = '';

    if(select === 'cabeca'){
        grupCabeca.appendChild(btnImg);
        img.setAttribute('alt', `Imagem de Cabeça ${idImg}`);
        img.setAttribute('title', `Imagem de Cabeça ${idImg}`);
        btnImg.addEventListener('click', () => selecionarImg(img, 0));
    }
    else if(select === 'tronco'){
        grupTronco.appendChild(btnImg);
        img.setAttribute('alt', `Imagem de Tronco ${idImg}`);
        img.setAttribute('title', `Imagem de Tronco ${idImg}`);
        btnImg.addEventListener('click', () => selecionarImg(img, 1));
    }
    else if(select === 'pernas'){
        grupPernas.appendChild(btnImg);
        img.setAttribute('alt', `Imagem de Pernas ${idImg}`);
        img.setAttribute('title', `Imagem de Pernas ${idImg}`);
        btnImg.addEventListener('click', () => selecionarImg(img, 2));
    }
    else{
        alert('Selecione uma parte do corpo para adicionar');
    }
    // console.log(select, idImg, btnImg);
}

function selecionarImg(img, op){
    // console.log(url, op);

    if(op === 0){
        const avatarCabeca = document.querySelector('#avatarCabecaImg');
        avatarCabeca.src = img.src;
        avatarCabeca.alt = img.alt;
        avatarCabeca.title = img.title;
    }
    else if(op === 1){
        const avatarTronco = document.querySelector('#avatarTroncoImg');
        avatarTronco.src = img.src;
        avatarTronco.alt = img.alt;
        avatarTronco.title = img.title;
    }
    else{
        const avatarPernas = document.querySelector('#avatarPernasImg');
        avatarPernas.src = img.src;
        avatarPernas.alt = img.alt;
        avatarPernas.title = img.title;
    }
}

function resetarAvatar(){
        const avatarCabeca = document.querySelector('#avatarCabecaImg');
        avatarCabeca.src = "./imgs/head.jpg";
        avatarCabeca.alt = "Imagem de Cabeça Padrão";
        avatarCabeca.title = "Imagem de Cabeça Padrão";
        const avatarTronco = document.querySelector('#avatarTroncoImg');
        avatarTronco.src = "./imgs/body.jpg";
        avatarTronco.alt =  "Imagem de Tronco Padrão";
        avatarTronco.title = "Imagem de Tronco Padrão";
        const avatarPernas = document.querySelector('#avatarPernasImg');
        avatarPernas.src = "./imgs/legs.jpg";
        avatarPernas.alt = "Imagem de Pernas Padrão";
        avatarPernas.title = "Imagem de Pernas Padrão";
}