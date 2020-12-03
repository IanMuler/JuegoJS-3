const changeTower = () => {
   /* if (location.hash.slice(2).includes("tower")) {
        setTimeout(() => {
            location.hash = "/"
        }, 5000);
    }
*/
    if (location.hash.slice(2) === "tower/1") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
            towerImg.classList.add('towerimg1');
        }, 1000);
    } else if (location.hash.slice(2) === "tower/2") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
            towerImg.classList.add('towerimg2');
        }, 1000);
    } else if (location.hash.slice(2) === "tower/3") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
            towerImg.classList.add('towerimg3');
        }, 1000);
    } else if (location.hash.slice(2) === "tower/4") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
            towerImg.classList.add('towerimg4');
        }, 1000);
    } else if (location.hash.slice(2) === "tower/5") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
            towerImg.classList.add('towerimg5');
        }, 1000);
    } else if (location.hash.slice(2) === "tower/6") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
            towerImg.classList.add('towerimg6');
        }, 1000);
    } else if (location.hash.slice(2) === "tower/7") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
            towerImg.classList.add('towerimg7');
        }, 1000);
    } else if (location.hash.slice(2) === "tower/8") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
            towerImg.classList.add('towerimg8');
        }, 1000);
    } else if (location.hash.slice(2) === "tower/9") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
            towerImg.classList.add('towerimg9');
        }, 1000);
    } else if (location.hash.slice(2) === "tower/10") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
            towerImg.classList.add('towerimg10');
        }, 1000);
    } else if (location.hash.slice(2) === "tower/11") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
          towerImg.classList.add('towerimg11');
        }, 1000);
    } else if (location.hash.slice(2) === "tower/12") {
        setTimeout(() => {
            const pictureImg = document.getElementById('tower-picture-img');
            pictureImg.classList.remove('traslateright');
            const towerImg = document.getElementById('towerimg');
            towerImg.classList.add('towerimg12');
        }, 1000);
    }

}
export default changeTower;