

var pessoa = {}
var itens = ["Nome", "Idade", "Profissão", "Estado Civil", "Escolaridade"];
var i = 0;


$("#salvar").on('click', function() {
	salvar(itens[i]);

	$(".campoDeTexto").attr({
		id: itens[i],
		placeholder: itens[i]
	});
		
	incrementar(i);

	$('.campoDeTexto').val('');
});


function salvar(item){
	pessoa[item] =  $('.campoDeTexto').val();
}


function incrementar(){
	i++;
}

 