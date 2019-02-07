var simbolo = 'X';

function play(bloco) {
	document.getElementById(bloco).innerHTML = simbolo;
	verifica();
	if (simbolo == 'X') simbolo = 'O';
	else simbolo = 'X';
}

function verifica() {
	let horizontal = 0;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (document.getElementById('b-'+i+'-'+j).innerHTML == simbolo)
				horizontal++;
		}		
		if (horizontal == 3) return win();
		else horizontal = 0;
	}
	return velha();
}

function win() {
	alert('Parabéns jogador: '+simbolo+'. Você ganhou!');
	location.reload();
}

function velha() {

}