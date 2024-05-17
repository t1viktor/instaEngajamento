const follow = document.querySelector (".follow")
const view = document.querySelector(".view")
const button = document.querySelector(".button")
const engaja = document.querySelector(".engaja")

let solucao = document.querySelector(".solucao")


button.addEventListener("click", function(){
   
    let followResult = parseInt(follow.value.trim());
    let viewResult = parseInt(view.value.trim());

  
    let porcentagem = (viewResult / followResult) * 100;
    

    
    let resultado = "";
    if (porcentagem >= 10) {
        resultado = "Você está arrasando! Seu engajamento está nas alturas! Mantenha seu crescimento vendo as dicas para engajamento.";
        document.querySelector('.img1').style.display = 'block';
        document.querySelector('.img2').style.display = 'none';
        document.querySelector('.img3').style.display = 'none';
        engaja.style.display = "none";
        document.querySelector(".dicas").style.display = 'block';
    } else if (porcentagem >= 5 && porcentagem <= 9.99) {
        resultado = "Está no caminho certo! Seu engajamento é motivo para comemorar! Veja como elevar seu engajamento nas dicas sobre engajamento.";
        document.querySelector('.img1').style.display = 'none';
        document.querySelector('.img2').style.display = 'block';
        document.querySelector('.img3').style.display = 'none';
        engaja.style.display = "none";
        document.querySelector(".dicas").style.display = 'block';
    } 
     else {
        resultado = "Hora de ajustar as velas! alguns motivos para baixo engajamento em Dicas.";
        document.querySelector('.img1').style.display = 'none';
        document.querySelector('.img2').style.display = 'none';
        document.querySelector('.img3').style.display = 'block';
        engaja.style.display = "none";
        document.querySelector(".dicas").style.display = 'block';
    } 



    solucao.innerHTML = '';

  
    let li = document.createElement("li");
   
    li.textContent = resultado;
    
    solucao.appendChild(li);
});
