// EFEITO SCROLL MENU

window.addEventListener("scroll", function(){

  var header = document.querySelector("nav");
  header.classList.toggle("menu-scroll", window.scrollY > 0)
})

// CALCULO IMC

let modal = document.getElementById('camp');
let closeModal = document.getElementById('closeModal');

function calcImc(){

  // PEGANDO INPUTS

  let nome = document.getElementById('nome').value;
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value;

  // CALCULANDO IMC

  let valores = peso / (altura * altura);

  // FORMATANDO RESULTADO DO CALCULO

  let valueFormat = valores.toFixed(1)

  // VERIFICAÇÃO DAS TABELAS

  // MENOR QUE 18,5
  if(valueFormat < 18.5){

    document.getElementById('camp').innerHTML = 
    '<section class="box-imc-result"><h2>Olá <b>'+ nome + "</b>"
    +
    ' Seu IMC é <b>' 
    + valueFormat + 
    "</b></h2>"+
    "<div class='teste'>"
    +
    "<h3>Abaixo de <b>18.5</b></h3>"
    +
    "<h1>Abaixo do Peso</h1>"
    +
    "<p>Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico.</p>"
    +
    "<h6>Cálculos válidos apenas para pessoas adultas.</h6>"
    +
    "</div></section>";

  }
  // ENTRE 18,5 e 24,9
  else if(valueFormat > 18.6 && valueFormat < 24.9){

    document.getElementById('camp').innerHTML = 
    '<section class="box-imc-result"><h2>Olá <b>'+ nome + "</b>"
    +
    ' Seu IMC é <b>' 
    + valueFormat + 
    "</b></h2>"+
    "<div class='teste'>"
    +
    "<h3>Abaixo de <b>24.9</b></h3>"
    +
    "<h1>Peso Normal</h1>"
    +
    "<p>Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.</p>"
    +
    "<h6>Cálculos válidos apenas para pessoas adultas.</h6>"
    +
    "</div></section>";

  }
  // ENTRE 25,0 e 29,9
  else if(valueFormat >= 25.0 && valueFormat <= 29.9){

    document.getElementById('camp').innerHTML = 
    '<section class="box-imc-result"><h2>Olá <b>'+ nome + "</b>"
    +
    ' Seu IMC é <b>' 
    + valueFormat + 
    "</b></h2>"+
    "<div class='teste'>"
    +
    "<h3>IMC entre <b>25.0</b> e <b>29.9</b></h3>"
    +
    "<h1>Sobrepeso</h1>"
    +
    "<p>Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.</p>"
    +
    "<h6>Cálculos válidos apenas para pessoas adultas.</h6>"
    +
    "</div></section>";

  }
  // ENTRE 30,0 e 34,9
  else if(valueFormat >= 34.0 && valueFormat <= 34.9){

    document.getElementById('camp').innerHTML = 
    '<section class="box-imc-result"><h2>Olá <b>'+ nome + "</b>"
    +
    ' Seu IMC é <b>' 
    + valueFormat + 
    "</b></h2>"+
    "<div class='teste'>"
    +
    "<h3>IMC entre <b>30.0</b> e <b>34.9</b></h3>"
    +
    "<h1>Obesidade grau I</h1>"
    +
    "<p>Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você.</p>"
    +
    "<h6>Cálculos válidos apenas para pessoas adultas.</h6>"
    +
    "</div></section>";

  }
  // ENTRE 35,0 e 39,9
  else if(valueFormat >= 30.0 && valueFormat <= 40.0){

    document.getElementById('camp').innerHTML = 
    '<section class="box-imc-result"><h2>Olá <b>'+ nome + "</b>"
    +
    ' Seu IMC é <b>' 
    + valueFormat + 
    "</b></h2>"+
    "<div class='teste'>"
    +
    "<h3>IMC entre <b>35.0</b> e <b>39.9</b></h3>"
    +
    "<h1>Obesidade grau II</h1>"
    +
    "<p>Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo</p>"
    +
    "<h6>Cálculos válidos apenas para pessoas adultas.</h6>"
    +
    "</div></section>";

  }
  // MAIOR QUE 40
  else if(valueFormat > 40){

    document.getElementById('camp').innerHTML = 
    '<section class="box-imc-result"><h2>Olá <b>'+ nome + "</b>"
    +
    ' Seu IMC é <b>' 
    + valueFormat + 
    "</b></h2>"+
    "<div class='teste'>"
    +
    "<h3>IMC acima de <b>40</b></h3>"
    +
    "<h1>Obesidade grau III</h1>"
    +
    "<p>Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.</p>"
    +
    "<h6>Cálculos válidos apenas para pessoas adultas.</h6>"
    +
    "</div></section>";

  }

  // IMPRIMINDO NA TELA



  // FAZENDO MODAL APARECER

  modal.style.display = 'flex';
  modal.style.animation = "";
  setTimeout(modal.style.animation = "deslizar .6s")
  
  closeModal.style.display = 'block';
  closeModal.style.animation = "";
  setTimeout(modal.style.animation = "deslizar 1s")

}

// function fecharComCamp(){
//   modal.style.display = "none"
// }

function menuModalFechar(){

  modal.style.display = 'none';

  closeModal.style.display = 'none';

}
