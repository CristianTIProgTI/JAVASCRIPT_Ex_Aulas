/*var nome=prompt("Escreva seu nome:");
var cor=prompt("escreva sua cor favorita:");

var frase="A cor favorita de " + nome + " é " + cor + "."
console.log (frase);*/

//aula 5 ex 2
/* var frase2=prompt("Escreva uma frase");
console.log(frase2); //=escreva do portugol
const fraseMaiuscula = frase2.toUpperCase(); //console.log(frase2.toUpperCase()) [outra forma]
console.log(fraseMaiuscula);
const fraseI = fraseMaiuscula.replaceAll("O","I"); //console.log(frase2.replaceAll("O","I"))
console.log(fraseI);
console.log(fraseI.length); */
//a5e2 do prof (usou sempre a mesma varável)
/* var frase2 = prompt("Escreva uma frase");
console.log(frase2.toUpperCase());
console.log(frase2.replaceAll("o", "i"));
console.log(frase2.length); */

/*const listaDeCompras = ["Abacate","Banana","Tomate"]
const segundoItem = listaDeCompras[2] // "Tomate"
*/

//aula 5 ex 3
/*var i=prompt("Escolha uma raça entre 0 e 4");
const racaCao=["0-Caramelo", "1-Golden", "2-Dálmata", "3-Doberman", "4-Pinsher"];
var racaEscol=racaCao[i];
console.log (racaEscol);*/
// do prof 1:
/*var cach=["r1", "r2", "r3","r4", "r5"];
var escol=prompt("Escolha de 0 a 4");
console.log(cach[escol]);*/
// do prof 2:
/*var cach=["r1", "r2", "r3","r4", "r5"];
console.log(cach[prompt("digite de 0 a 4")]);*/


/*var array=["a","b","c","d","e","f","g","h"];
//          0   1   2   3   4   5   6   7
array.splice(3,3); //retira a partir do item 3, 3 itens
console.log(array);*/

//aula 5 ex 4
/*var array = [1,2,3,4,5,6];
console.log(array);
console.log(array.length);
array.push(7);
console.log(array);
console.log(array.length);
array.splice(3,2);
console.log(array);
console.log(array.length);*/

//aula 6
/*const altura=2
const largura=3
const area=altura*largura
console.log(area) //console é uma classe e log é uma função

function calculaArea(altura,largura)
    {
    const area = altura*largura
    console.log (area)
    }
calculaArea(2,3)*/

/*function imprimirOlaMundo(){console.log("Olá Mundo!")} //criando a função
imprimirOlaMundo(); //chamando a função */

//aula 6 ex 2
/*function OlaNome (nome)
{
console.log(`Olá ${nome}`) // `${}` substitui fecha aspas e vírgula entre texto e variáveis
}
OlaNome("Cris");
OlaNome("Collet");
OlaNome("Antônio");*/

/*const a=1
function imprimeVariavel () 
    {
    const b=2
    console.log('Variável a', a);
    console.log('Variável b', b);
    }
imprimeVariavel();
console.log('Variável a', a);
console.log('Variável b', b);*/

/*function calculaArea(altura,largura){
    const area=altura*largura
    return area
}
//atribui retorno a uma variável
const areaCalculada=calculaArea(2,3);
//imprime retorno no console
console.log(calculaArea(2,3));*/

//aula 6 ex3
/*function calcSoma(num1,num2){
    const soma=num1+num2
    return soma //ou susbstituir essas 2 linhas por return num1+num2
}
const numSomados=calcSoma(0,0);
console.log(calcSoma(4,5));*/
//do prof
/* function somaDoisNumeros(numa, numb){
    return numa + numb;
}
var resultado = somaDoisNumeros(3, 5);
console.log(resultado); */


//aula 6 ex 4
//teste 1 sem função funcionou
/*var array=[11,12,13,14,15,16];
var array2=[array[0],array[array.length-1]]
console.log(array2);
var div1=(array2[0])/2
var div2=(array2[1])/2

console.log(div2);
console.log(div1);*/

//teste 2 com função
/*function divArray (div2,div1){
var array=[11,12,13,14,15,16];
var array2=[array[0],array[array.length-1]]
//console.log(array2);
var div1=(array2[0])/2;
var div2=(array2[1])/2;
return [div2,div1];
}
console.log(divArray());*/

//prof
/*function recebeArray(arrayDeNumeros=[]){
    return[(arrayDeNumeros.lenght)/2 , (arrayDeNumeros[0])/2];

}
console.log(recebeArray([1,2,3,4,5,6,7,8,9]));*/

//aula 6 ex 5.1
/*
const OlaNome=function(nome){
    console.log(`Olá ${nome}`)   
}
const helWo=OlaNome("Cristian");
OlaNome("Collet");*/

//aula 6 ex5.2

/*const calcSoma=(num1,num2)=>{
    const soma=num1+num2
    return soma
}
//const numSomados=calcSoma(0,0);
console.log(calcSoma(4,5));*/


//Alt Shift A para comentar um trecho selecionado
//Aula 7 OBJETOS
/*const professor ={
    nome:'Vitor',
    idade:27,
    tarefas:['Dar aula','Responder dúvidas'],
    contarPiada:function(){
        console.log('É pa vê ou pa comê?')
    }
}
console.log(professor.idade); //notação de ponto (mais comum)
console.log(professor['nome']); //Vitor (notação de colchete)
professor.nome='Cristian';
console.log(professor['nome']); //Cristian
*/

//aula 7 ex 1
/* var filme={
    nome: 'Jurassic Park',
    ano:1993,
    diretor:'Steven Spielberg',
    elenco: ['Sam Neil','Laura Dern','Jeff Goldblum'],
    visto: true
}
console.log('Filme: ',filme.nome);
console.log('Lançamento: ',filme.ano);
console.log('Diretor: ',filme.diretor); //notação de ponto ou...
console.log('Elenco: ',filme['elenco']); //...notação de colchete
console.log('Assistido? ',filme['visto']); 
//aula 7 ex 3
filme.personagens=['Alan Grant','Ellie Sattler','Ian Malcom'];
console.log('Elenco e personagens:')
console.log(filme.elenco[0],'-',filme.personagens[0]); //ctrl D para selecionar o próximo índice igual [0] ao mesmo tempo
console.log(filme.elenco[1],'-',filme.personagens[1]);
console.log(filme.elenco[2],'-',filme.personagens[2]);
filme.elenco[0]='Xuxa';
console.log('Alteração: ',filme.elenco[0]);
console.log(filme); */



//aula 7 ex2
/* var pessoa={
    nome: 'Cristian',
    idade:46,
    genMus:'Heavy Metal'
}
console.log(`O nome da pessoa é ${pessoa.nome}, ele(a) tem ${pessoa.idade} anos e gosta muito de ${pessoa.genMus}.`); */

/* const donoDoPet= //objeto dentro de objeto
    {
    nome: 'Vitor',
    pet:
        {
        nomeDoPet:'Wanda',
        raca:'Vira-lata',
        idade:1
        }
    }
console.log(donoDoPet.pet.nomeDoPet); */

/* const curso={
    nome:'Noturno Frontend',
    linguagens:['JS','CSS','HTML'] //array dentro de objeto
}
console.log(curso.linguagens[0]);
curso.numeroEstudantes=50; //adicionando numeroEstudantes ao curso 
console.log(curso.numeroEstudantes);  */


//Array de objetos (muito utilizado)
/* const professores =[ //objetos dentro de um array
    {nome:'Andrei',modulo:1},
    {nome:'Vitor',modulo:2},
    {nome:'Mina',modulo:3},
    ]
console.log(professores[1].nome); */ //Vitor

//aula 7-espalhamento spread
/* const usuario={
    nome:'Prof',
    idade:25,
    email:'prof@senacrs.com.br',
    cidade:'São Paulo'
}
console.log(usuario);
const novoUsuario={ 
    ...usuario, //criando um novo objeto a partir do anterior e alterando alguns dados
    nome:'João',
    idade:28
}
console.log(novoUsuario); */

//aula 7 copiando array
/* const listaDeNomes=['Mika','Paula','Vitor']
const copiaListaDeNomes=[...listaDeNomes]
console.log(copiaListaDeNomes); */

//aula 7 ex 4
//aula 7 ex2 (cópia)
/* var pessoa={
    nome: 'Cristian',
    idade:46,
    genMus:'Heavy Metal'
}
//console.log(`O nome da pessoa é ${pessoa.nome}, ele(a) tem ${pessoa.idade} anos e gosta muito de ${pessoa.genMus}.`); 

function novaPessoa()
            {
              const pessoa2={...pessoa, 
              comidas:['Churasco','Pizza','Cheeseburguer']  ,
              amigo:{nomeAmigo:'Anselmo',idadeAmigo:40}
            }
            console.log(`O nome da pessoa é ${pessoa2.nome} e suas comidas preferidas são ${pessoa2.comidas[0]}, ${pessoa2.comidas[1]} e ${pessoa2.comidas[2]}. Seu melhor amigo se chama ${pessoa2.amigo.nomeAmigo} e tem ${pessoa2.amigo.idadeAmigo} anos.`);   
        }
novaPessoa() */


//aula 8 (EM CASA)--------------------------------------------------------------------
//aula 8 ex 1
/* function compara (num1,num2){
var num1=prompt("Digite o 1º número para comparação");
var num2=prompt("Digite o 2º número para comparação");
if(num1===num2){console.log('OS NÚMEROS SÃO IGUAIS!')};
if(num1!==num2){console.log('OS NÚMEROS SÃO DIFERENTES!')};
console.log(num1, 'e', num2) 
}
compara(); */
//do prof
/* function comparaDoisNumeros (num, num2){
    if(num === num2){console.log("sucesso");}
}
comparaDoisNumeros(prompt("Digite num 1"), prompt("Digite num 2")); */


//aula 8 ex1.1
/* function cnh (){
        var nome=prompt("Digite seu nome");
    var idade=prompt("Digite sua idade");  
    if(idade>=18){console.log(nome,', você PODE dirigir')};
    if(idade<18){console.log(nome,', você NÃO pode dirigir!')}; //aqui coloquei o console.log dentro da função
    
}
cnh()  */
//chame a função dentro de um console.log ...??? ver ex do prof a seguir
//do prof
/* function podeDirigir(nome, idade){
    if(idade >= 18){
        return `${nome}, voce pode dirigir`;
    }
}

console.log(podeDirigir(prompt("Digite seu nome"), prompt("digite sua idade")));//função dentro do console.log
//                     "...passe como parâmetros as informações que foram inseridas pelo usuário através do prompt
 */

//aula 8 ex 2
/* function compara (num1,num2){
    var num1=prompt("Digite o 1º número para comparação");
    var num2=prompt("Digite o 2º número para comparação");
    if(num1===num2){console.log('OS NÚMEROS SÃO IGUAIS!')} //não pode ter ";" (ponto e vírgula) aqui entre o if e o else
    else{console.log('OS NÚMEROS SÃO DIFERENTES!')};
    console.log(num1, 'e', num2) 
    }
    compara(); */

//aula 8 ex 3
 /*    function compara (num1,num2){
        var num1=prompt("Digite o 1º número para comparação");
        var num2=prompt("Digite o 2º número para comparação");
        
        if(num1===num2){console.log('OS NÚMEROS SÃO IGUAIS!')} //não pode ter ";" (ponto e vírgula) aqui entre o if e o else
        else if(num1>num2){console.log('O PRIMEIRO NÚMERO É MAIOR QUE O SEGUNDO NÚMERO!')}
        else{console.log('O SEGUNDO NÚMERO É MAIOR QUE O PRIMEIRO NÚMERO!')};
        console.log(num1, 'e', num2) 
        }
        compara(); */
//do prof:
/* function compararNumeros(num1, num2) {
    if (num1 > num2) {
      return `O primeiro número (${num1}) é maior que o segundo número (${num2}).`;
    } else if (num1 < num2) {
      return `O primeiro número (${num1}) é menor que o segundo número (${num2}).`;
    } else {
      return `Os dois números são iguais: ${num1}.`;
    }
  }
    const num1 = prompt("Digite o primeiro número:");
    const num2 = prompt("Digite o segundo número:");
    const resultado = compararNumeros(num1, num2); //a const vai ser a frase resultante da função
        alert(resultado); */ //alert-comando que vai exibir o resultado (em vez de console.log)

//aula 8 ex 4 (switch case) (ficou = vers prof)
/* var pokemon=prompt('DIGITE O NOME DE UM POKEMON: Bulbasauro, Charmander ou Squirtle, PARA SABER O SEU TIPO:')
switch (pokemon) {
    case 'Bulbasauro':console.log('Planta e veneno') ;
    break;
    case 'Charmander':console.log('Fogo') ;
    break;
    case 'Squirtle':console.log('Água') ;
    break;
    default: console.log('Pokemon não encontrado');
} */




//consultar no github / gdbarros94 / repositories / RSTI-doisirmaos / index.js as resoluções das aulas anteriores...
//... copiar, colar e comparar com as minhas




//aula 8 ex 5 (operadores lógicos) //MINHA VERSÃO, ver a seguir a solução do prof (MELHOR!)
/* function faculdade (){
var ensMed=prompt('Você concluiu o ensino médio? Digite S para sim ou N para não!'); // Evitar prompt dentro de função
var idade=prompt('Qual é a sua idade?'); //"passar variáveis como parâmetros" ver versão correta do prof
var facul=prompt('Você está cursando alguma faculdade no momento? Digite S para sim ou N para não!');
if(ensMed==='S' && idade>=18 && facul==='N'){console.log('Você PODE estudar nesta faculdade')}
else{console.log('Você NÃO pode estudar nesta faculdade')}
}
faculdade(); */

//prof fez de outra forma (esta tem um ERRO de lógica intencional do prof, ver a próxima versão)
/* function podeEntrarNaFaculdade (ensinoMedio, idade, faculdade){
    if(idade>=18){
        if(ensinoMedio==='sim'){
            if(faculdade !=='sim'){
                return 'Você PODE entrar na faculdade';
            }
        }
    }
    else{return 'Você NÃO pode entrar na faculdade';}
}
console.log(
    podeEntrarNaFaculdade(
        prompt('Você concluiu o ensino médio?'),
        Number(prompt('Qual sua idade?')),
        prompt('Você já estuda em uma faculdade?')
    )
); */

//segunda do professor funcionando CORRETAMENTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!.......................................
/* function podeEntrarNaFaculdade (ensinoMedio, idade, faculdade) //parâmetros  da função entre parentesis ()...
//...para não precisar criar as variáveis depois dentro da função
//estas 3 var só existem dentro desta função
{ 
if(ensinoMedio==='sim'|| ensinoMedio==='Sim')
{ensinoMedio=true;}else{ensinoMedio=false}

if(faculdade==='sim'|| faculdade==='Sim')
{faculdade=true;}else{faculdade=false}

if(idade>=18 && ensinoMedio && !faculdade){
    return 'Você PODE entrar na faculdade';
}
else{return 'Você NÃO pode entrar na faculdade';}
} 
console.log(
    podeEntrarNaFaculdade( //função dentro de console.log
        prompt('Você concluiu o ensino médio?'), //prompt FORA da criação da função conforme orientação do prof
        Number(prompt('Qual sua idade?')), //prompts na mesma ordem das variáveis criadas na função ()
        prompt('Você já estuda em uma faculdade?') //estes valores serão passados como parâmetro para a função
    )
);    */

// exemp adicionais do prof
/* function calculaArea(base,altura) {
    return base*altura; //return serve para 
    
}
function calculaAreaTotal(valores=[]) { //este parâmetro 'valores' é diferente de 'valores' da próxima função
  var resultado=valores[0]+valores[1]+valores[2]+valores[3] ;
  return resultado;
}

function CalcularValores(valores=[]) {
  valores[0]=Number(valores[0]);
  valores[1]=Number(valores[1]);


var areaCalculada=calculaArea(valores[0],valores[1]);
var areaTotal=calculaAreaTotal([areaCalculada,areaCalculada,areaCalculada,areaCalculada]);
return areaTotal
}
function pegaValores() {
  return CalcularValores([prompt('Digite a base')  ,
  prompt('Digite a altura')])
}
console.log(pegaValores()) */


//AULA LÓGICA DE PROGRAMAÇÃO \/____\/_____\/_________________________________________________________________________________
//EXERCÍCIOS E ATIVIDADES
//ETAPA 1: Introdução à Lógica de Programação
//1.EXERCÍCIO MENTAL (ALGORITMO SIMPLES)
/*
FAZER UMA SALADA:
abrir a geladeira
pegar os ingredientes desejados
fechar a geladeira
abrir a torneira da pia
lavar cada ingrediente
colocar o ingrediente lavado em uma tábua de corte
fechar a torneira da pia
cortar cada ingrediente
colocar os ingredientes cortados em um prato
temperar os ingredientes com sal
adicionar azeite sobre a salada
comer a salada
*/

//2.ESCREVA UM CÓDIGO (MÉDIA DE 3 NÚMEROS)
/*  function calcularMedia(){
    var num1=prompt('Digite o 1º número') 
    num1=Number(num1);
    var num2=prompt('Digite o 2º número') 
    num2=Number(num2);
    var num3=prompt('Digite o 3º número') 
    num3=Number(num3);
    var numeros=[num1,num2,num3]
    media=(numeros[0]+numeros[1]+numeros[2])/numeros.length

    console.log('A média dos números é ',media)
}
calcularMedia();*/

//outra forma MELHOR! (com o prompt fora da função, assim a função só executa o cálculo)
/* function calcularMedia(num1,num2,num3){
    var numeros=[num1,num2,num3]
    media=(numeros[0]+numeros[1]+numeros[2])/numeros.length
    return `A média dos números é ${media}`
}
console.log(calcularMedia(
    Number(prompt('Digite o 1º número')),
    Number(prompt('Digite o 2º número')),
    Number(prompt('Digite o 3º número'))
    )); */
 

//3.EXPLIQUE O CÓDIGO 
/* numero = int(input("Digite um número: ")) //cria a variável numero que recebe um valor digitado pelo usuário
if numero % 2 == 0:                       //testa se o resto da divisaõ do numero por 2 é=0 (se é par)
print("O número é par.")                  //se for par imprime "O número é par."
else:                                     //caso contrário...
print("O número é ímpar.")   */              //... imprime "O número é ímpar."

//ETAPA 2: Estruturas de Controle
//1.EXERCÍCIO MENTAL (Explicação diferença for e while)
/*o while repete um trecho de código {} enquanto uma condição for verdadeira (), quando a condição se tornar falsa o loop se encerrará.
O while é usado quando não se sabe quantas vezes precisa repetir uma ação e se deseja repeti-la enquanto uma condição específica for verdadeira.
No while, primeiramente é determinada a condição (Ex (i<=1000)) e depois são determinados os comandos {} a serem executados enquanto a condição for verdadeira 

O for tem um comportamento parecido mas é mais utilizado para procedimentos muito repetitivos, normalmente envolvendo contagens, ele possui uma sintaxe mais simplificada também;
Usar o for quando se sabe o número de vezes que se deseja repetir uma ação
No for, primeiramente são determinados os seguintes 3 itens:
o valor inicial do loop (Ex i=0);
o valor final do loop (Ex i=1000); e
o incremento do valores do loop (Ex i=i+10).
Depois é determinado um comando a ser executado (Ex {console.log(i)})
*/

//2.ESCREVA UM CÓDIGO (CONTAGEM 1 A 10 COM for)
/* for (var i=1; i<=10; i++) {console.log(i)} */

//3.EXPLIQUE O CÓDIGO 
/* contador = 0                    //a variável contador inicia em zero
while contador < 5:             //enquanto a variáver for menor que 5
print("Contador:", contador)    //será impresso a mensagem 'Contador:' e a variável...
contador += 1  */                  //...que terá um incremento de 1, ou seja, o contador vai de 0 a 4 (por exemplo: Contador: 1)

//Etapa 3: Estruturas de Dados
//1.EXERCÍCIO MENTAL (MATRIZ)
/*
tabelas de preços
listas de dados de funcionários
listas de tarefas com observações, datas, etc
listas de contatos
produtos e preços
ingredientes e quantidades
tabelas em geral
*/

//2.ESCREVA UM CÓDIGO (IMPRIME MAIOR NÚMERO)
//2.1 ChatGPT
/* function encontrarMaiorNumero() 
{
    var numeros = []; // Array para armazenar os números fornecidos pelo usuário

    // Pedir ao usuário para inserir os números
    for (var i = 0; i < 3; i++) {
        var numero = parseFloat(prompt("Insira o " + (i + 1) + "º número:"));
        numeros.push(numero); // Adiciona o número ao array
    }

    // Encontrar o maior número
    var maiorNumero = numeros[0]; // Assume que o primeiro número é o maior
    for (var j = 1; j < numeros.length; j++) {
        if (numeros[j] > maiorNumero) {
            maiorNumero = numeros[j];
        }
    }

    // Retornar o maior número
    return maiorNumero;
}
// Chamar a função e exibir o resultado
var resultado = encontrarMaiorNumero();
console.log("O maior número é: " + resultado); */

//2.2 copiando exemplo do prof de portugol e adaptando ao js
/* var n=3
var i=0
var numeros=[]
var maior=0
for(i = 1; i <= n; i++) //faz o prompt e armazena o número no array números
    {
    var numero =Number(prompt(`Digite o  ${i}  º número: `));
    numeros.push(numero);
    }
  
  for(i = 0; i <= n; i++) //descobre o maior número
    {
     if(numeros[i] > maior){maior = numeros[i]}
    }
console.log('O maior número é', maior) */ //exibe o maior número


//3.EXPLIQUE O CÓDIGO
/* matriz = [                      //criação da matriz
    [1, 2, 3],                  //linha 0 com 3 colunas
    [4, 5, 6],                  //linha 1 com 3 colunas
    [7, 8, 9]                   //linha 2 com 3 colunas
    ]                           //fim da matriz
    for linha in matriz:        //para cada linha da matriz...
    for elemento in linha:      //...e cada elemento da linha...
    print(elemento, end=' ')    //...será impresso a variável elemento e um espaço em branco ' '
    print()  */                    //???


//Etapa 4: Funções e Modularização
//1.EXERCÍCIO MENTAL (FUNÇÃO-SITUAÇÕES)
/*
situações repetitivaas
procedimentos que devam ser repetidos novamente mais adiante no sistema
para facilitar a organização de uma programação
para repetir cálculos
*/

//2.ESCREVA UM CÓDIGO (SOMA)
 /* function calcularSoma(num1,num2){
    var numeros=[num1,num2]
    soma=(numeros[0]+numeros[1])
    return `A soma dos números é ${soma}`
}
console.log(calcularSoma(
    Number(prompt('Digite o 1º número')),
    Number(prompt('Digite o 2º número')),
    )); */
 

//3.EXPLIQUE O CÓDIGO 
/* def fatorial(n):            //é criada a função fatorial com a variável n
if n == 0:                  //se n for igual a zero... 
return 1                    //...retornará 1
else:                       //caso contrário...
return n * fatorial(n - 1) */  //retornará n*(n-1), por exemplo 5*(5-1), o resultado (20) será o novo valor de n e a operação será reiniciada (20*(4-1)) até chegar em zero
//é isso mesmo ou acontecerá (20*(20-1))???

//FIM DA AULA LÓGICA DE PROGRAMAÇÃO ^^^^^^__________________________________________________________________________________________


//AULA 8 EX COMPLEMENTAR 1 CALCULADORA SIMPLES
/* function calculadora (){
    var num1=prompt("Digite o 1º número");
    var oper=prompt('Digite a operação:+ ou - ou * ou /')
    var num2=prompt("Digite o 2º número"); 
    var num1=Number(num1)
    var num2=Number(num2)
    var soma=num1+num2
    var sub=num1-num2
    var mult=num1*num2
    var div=num1/num2
    if(oper==='+') {console.log(soma)}
    else if(oper==='-') {console.log(sub)}
    else if(oper==='*') {console.log(mult)}
    else if(oper==='/') {console.log(div)}
    else{console.log('ERRO')}
}
calculadora() */

//AULA 8 EX COMPLEMENTAR 2 MÉDIA DE NOTAS
/* function calcularMedia(){
    var notaGeo=prompt('Digite a nota de Geografia') 
    notaGeo=Number(notaGeo);
    var notaHist=prompt('Digite a nota de História') 
    notaHist=Number(notaHist);
    var notaMat=prompt('Digite a nota de Matemática') 
    notaMat=Number(notaMat);
    var notas=[notaGeo,notaHist,notaMat]
    media=(notas[0]+notas[1]+notas[2])/notas.length

    console.log('A média do aluno é ',media)
}
calcularMedia(); */

//AULA 8 EX COMPLEMENTAR 3 VERIFICADOR DE PALÍNDROMOS
/* function verifPalin() {
    var palavra=prompt('Digite uma palavra para verificar se esta é um palíndromo');
    console.log(palavra);
    palavra = palavra.toLowerCase().replace(/\s/g, ''); //utilizando ChatGpt para solução
    console.log(palavra);
    var palInver = palavra.split('').reverse().join(''); //utilizando ChatGpt para solução
    //var palInvInv=palInver.split('').reverse().join('');
    console.log(palInver);
    //console.log(palInvInv);
    if(palavra===palInver){console.log(`A palavra ${palavra} é um palíndromo pois seu inverso é ${palInver}-`,true)}
    else{console.log(`A palavra ${palavra} NÃO é um palíndromo pois seu inverso é ${palInver}-`,false)}
    ///CONCLUIR!!!
    
}
verifPalin()  */


//aula 9 ----------------------------------------------------------------------------
//exemplo 1 
/* var i=0
while (i<10){console.log(i);i++} */

//exemplo 2
/* var estomago =0
while (estomago<100){console.log('Quero comer mais coxinhas');
estomago=estomago+10;} */

//aula 9 ex 1 1a tentativa-NÃO CONSEGUI!!!!!!!!!!!!
/* var num=1
var soma=0
var num1=0
while (num!==0) {
    num=prompt('Digite um número');
    num1=Number(num);
    soma=soma+num1;
};
console.log(num1);
console.log(soma) ; */

//aula 9 ex 1 2a tentativa com função-NÃO CONSEGUI!!!!!!!!!!!!
/* var num=1
var soma=0
var num1=0
function soma0 (num){
while (num!==0) {
    num=prompt('Digite um número');
    num1=Number(num);
    soma=soma+num1;
    return soma
};
}
//console.log(soma0(prompt('Digite um número diferente de zero')))

//console.log(num1);
console.log(soma0()) ; */

//aula 9 ex 1 3a tentativa com ChatGPT
/* let soma = 0;
let numero;

console.log("Insira vários números. Digite '0' para finalizar e calcular a soma.");

// Loop para solicitar números e calcular a soma
while (true) {
    numero = parseInt(prompt("Insira um número:"));

    // Verifica se o número digitado é 0 para parar o loop
    if (numero === 0) {
        break;
    }

    // Adiciona o número à soma
    soma += numero;
}

console.log("A soma de todos os números indicados é:", soma); */

//aula 9 ex 1 do prof 1
/* function somarNumeros () {
    let soma=0;
    let numero=1;
    while (numero!==0){
        numero=Number(prompt('Digite um número (ou zero para sair): '));
        soma+=numero;
    }
    console.log(`A soma dos números digitados é: ${soma}`);
}
somarNumeros() */

//aula 9 ex 1 3a tentativa, adapatando a do prof
/* function soma0 (){
var num=1;
var soma=0;
//var num1=0
while (num!==0) {
    num=Number(prompt('Digite um número diferente de zero para somar ou zero para concluir'));
    //num1=Number(num);
    soma=soma+num;
    //return soma
};
console.log(`A soma é ${soma}`);
}
soma0() ; */

//for
/* for(let i=0; i<10; i++){
    console.log(i)
} */


/* const numeros=[14,67,89,15,23]
for (let i=0;i<numeros.length;i++){
    const elemento=numeros[i]
    console.log(elemento)
} */

//AULA 9 EX 2 não funcionou!, retorna zero!?--------------

/* let array=[11,15,18,14,12,13];
    //let maiorNum=0;
    //var i=0
    //let numAt=array[i];
function DevMaiorNum()
{
    //let array=[11,15,18,14,12,13];
    let numAt=array[i];
    let maiorNum=0;
    var i=0
    
    for( i=0;i<array.lenght;i++)
        {
            //let maiorNum=0;
        if(numAt>=maiorNum) {maiorNum=numAt} 
        };
console.log(`O maior número do array é ${maiorNum}`);
}
DevMaiorNum(); */

//AULA 9 EX 2 do prof 
/* function valorMaior(array){
    var numeroMaior = array[0];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element > numeroMaior){
            numeroMaior = element
        }
    }
    return numeroMaior;
}
var meuArray = [10,20,30,50,80,1,99,4,60]
console.log(valorMaior(meuArray)); */

//ditado prog prof
/* function somarNumerosComArray(){
    var numeros =[];
    var numero =1;
    
while (numero!==0) {
    numero=Number(prompt('Digite um número ou 0 pra sair')) ;
    numeros.push(numero);
}
var soma=numeros.reduce((acumulador,numero)=>acumulador+numero,0);
return soma;
}
console.log(somarNumerosComArray()); */


//aula 9 ex 2 usando ChatGPT
/* function maiorNumero(array) {
    // Verifique se o array está vazio
    if (array.length === 0) {
        return "O array está vazio.";
    }
    // Inicialize o maior número com o primeiro elemento do array
    let maior = array[0];
    // Percorra o array para encontrar o maior número
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}
// Exemplo de uso:
const numeros = [10, 5, 20, 8, 15];
console.log("O maior número é:", maiorNumero(numeros)); // Saída: O maior número é: 20 */

//for of
/* const numeros=[14,67,89,15,23]
for(let numero of numeros){console.log(numero)} */

//aula 9 ex 2
/* var array=['Olá','amigo,','como','você','está?']
//for(let mens of array){console.log(mens)}
for(let i=0;i<=array.length;i++){
    var pal=array[i]
    console.log(pal)
} */