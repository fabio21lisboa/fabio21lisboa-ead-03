function media(num1,num2) {
	console.log(num1,num2);
	var media =  (num1+num2)/2;
	alert("A média é: "+ media);
	
}

function escreverNumerosAte(num) {
	var d = document.getElementById("numerosAte");
	
	for (var i=1; i<=num; i++){
		console.log(i);

	}
}

function divisiveisPor(x,y) {
	for (var i = x; i<=y; i++){
		if (i % x === 0){
			console.log(i);
			
		}
	}	
}

function maiorMenor(vetor) {
	var maior = vetor[0];
	var menor = vetor[0];
	for (var i = 0; i<vetor.length; i++){
		if (vetor[i] > maior)
			maior = vetor[i]
		if (vetor[i] < menor)
			menor = vetor[i]
	}
	alert("O maior número é: " + maior + "\n" + "O menor número é: " + menor);
}