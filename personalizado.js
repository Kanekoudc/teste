function nome_funcao(){
    alert("login ou senha incorreto!!");
}

function troca(a, b){
 var aux  =  a;
     a = b;
     b = aux;
     alert(" o valor de "+ a + " o outro valor "+ b);
}

function quadrado( n ){
    var quad = n * n;
    return quad;
}

function desconto(valor, desc){
var liquido = valor - desc;
//  document.write(" o valor "+valor+ " com desconto de "+desc+" ficou liquido de "+liquido);
  return liquido;
}
var resultliq = desconto(100, 10);
document.write(" o valor 100,00 com desconto de 10,00 ficou liquido de "+resultliq);
