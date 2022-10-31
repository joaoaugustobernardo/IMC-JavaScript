//IMC
var calcular = document.getElementById('calcular');



function imc () {
var nome = document.getElementById('nome').value;
var altura = document.getElementById('altura').value;
var peso = document.getElementById('peso').value;
var resultado = document.getElementById('resultado');

if(nome !== '' && altura !== '' && peso !== ''){
   ///alert ('nome vazio!')
   //alert('valor preenchido');

   var valorIMC = (peso / (altura * altura)).toFixed(2);
   let  classificacao = '';

   if(valorIMC < 17){
       classificacao = 'muito abaixo do peso';
   }else if (valorIMC < 18.49){
       classificacao = 'abaixo do peso';

   }else if(valorIMC < 24.99){
       classificacao = 'Peso Normal';

   }else if(valorIMC < 29.99){
       classificacao ='Sobrepeso';
   }else if(valorIMC < 34.99){
       classificacao ='Obesidade I';
   }else if(valorIMC < 39.99){
       classificacao ='Obesidade II severa';
   }else{
       classificacao = 'Obesidade III morbida';
   }




resultado.textContent = `${nome} seu IMC é ${valorIMC} você está  ${classificacao}`;
   

}else{
 
    resultado.textContent = 'preencha todos os campos';
}

}
calcular.addEventListener('click', imc);

// VALIADR CAMPOS

function validar(){
  var nome  = validarj.nome.value;
  var sexo  = validarj.sexo.value;
  var idade  = validarj.idade.value;
  var altura  = validarj.altura.value;
  var peso  = validarj.peso.value;

  if(nome ==''){
      alert('Informe-nos seu Nome!!');
      validarj.nome.focus();
      return false;
  }
  if(sexo == ''){
    alert('Informe-nos seu sexo!!');
    validarj.sexo.focus();
    return false;

  }
  if(idade == ''){
    alert('Informe-nos sua idade!!');
    validarj.idade.focus();
    return false;
  }

  if(altura == ''){
    alert('Informe-nos sua altura!!');
    validarj.altura.focus();
    return false;
  }
  if(peso == ''){
    alert('Informe-nos seu  peso!!');
    validarj.peso.focus();
    return false;
  }

    
}
//tentar listar ARRAY

var meuarray = [];
//iria fazer so que iria ter que usar outro button ou esqueci como colocar dois onclick ne um button ou não sei se pode.
//conseguiria fazer se pudesse colocar +1 button so que fiquei em duvida se pode ou não pode.
function add(){
  console.log('add');
  var  nadanome = document.getElementById('nome').value;
  var  nadasexo = document.getElementById('sexo').value;
  var  nadaidade = document.getElementById('idade').value;
  var  nadaaltura = document.getElementById('altura').value;
  var  nadapeso = document.getElementById('peso').value;

var produto = 
nadanome +
' - ' +
nadasexo +
' - ' +
nadaidade + 
' - ' +
nadaaltura +
' - ' +
nadapeso +
' - ' +
 (nadapeso / (nadaaltura * nadaaltura));
meuarray.push(produto);
console.log(meuarray);



}





