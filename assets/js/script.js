var simbolo = 'X';

function play(bloco) {
	if (document.getElementById(bloco).innerHTML == '') {
		document.getElementById(bloco).innerHTML = simbolo;

		verifica();
		
		if (simbolo == 'X') simbolo = 'O';
		else simbolo = 'X';
	}
}

function verifica() {
	let velha = true;
	let horizontal = 0, vertical = 0;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (document.getElementById('b-'+i+'-'+j).innerHTML == simbolo)
				horizontal++;

			if (document.getElementById('b-'+j+'-'+i).innerHTML == simbolo)
				vertical++;

			if (document.getElementById('b-0-0').innerHTML == simbolo && document.getElementById('b-1-1').innerHTML == simbolo && document.getElementById('b-2-2').innerHTML == simbolo)
				return win();
			else if (document.getElementById('b-0-2').innerHTML == simbolo && document.getElementById('b-1-1').innerHTML == simbolo && document.getElementById('b-2-0').innerHTML == simbolo)
				return win();

			if (document.getElementById('b-'+i+'-'+j).innerHTML == '')
				velha = false;
		}

		if (horizontal == 3 || vertical == 3) return win();
		else horizontal = 0, vertical = 0;
	}

	if (velha)
		return old();
}

function win() {
	alert('Parabéns jogador: '+simbolo+'. Você ganhou!');
	location.reload();
}

function old() {
	alert('Hii, Deu Velha!');
	location.reload();
}