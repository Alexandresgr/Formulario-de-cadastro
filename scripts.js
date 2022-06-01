function ValidaCPF(){	
	var RegraValida=document.getElementById("RegraValida").value; 
	var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;	 
	if (cpfValido.test(RegraValida) == true)	{ 
	console.log("CPF Válido");	
	} else	{	 
	console.log("CPF Inválido");	
	}
    }
  function fMasc(objeto,mascara) {
obj=objeto
masc=mascara
setTimeout("fMascEx()",1)
}

  function fMascEx() {
obj.value=masc(obj.value)
}

   function mCPF(cpf){
cpf=cpf.replace(/\D/g,"")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
return cpf
}

function Mascara(objeto){
    if(objeto.value.length == 0)
      objeto.value = '(' + objeto.value;
 
    if(objeto.value.length == 3)
       objeto.value = objeto.value + ')';
 
  if(objeto.value.length == 9)
      objeto.value = objeto.value + '-';
 }
 
 function MascaraCep(objeto){
    if(objeto.value.length == 5)
    objeto.value = objeto.value + '-';

 }

function ApenasLetras(e, t) {
    try {
    if (window.event) {
        var charCode = window.event.keyCode;
    } else if (e) {
        var charCode = e.which;
    } else {
        return true;
    }
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
        return true;
    else
        return false;
    } catch (err) {
        alert(err.Description);
    }
}

function executar(){

    var texto= document.getElementById('texto').value;
    var lista= document.getElementById('browsers');
    var adicionar = true;
    
    var opt = document.createElement('option');

    for(i=0; i <lista.options.length;i++){
        if(texto==lista.options[i].value){
        adicionar=false;   
        }
    }
         
    if(adicionar==true){
        opt.value=texto;
        lista.appendChild(opt)
    }
}
