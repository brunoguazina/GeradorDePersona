

var pessoa = {}
var passos = ["Nome", "Idade", "Profissão", "Estado Civil", "Escolaridade"];

var i = 1;

$("#salvar").on('click', function() {
		
	$(".campoDeTexto").attr({
		id: passos[i],
		placeholder: passos[i]
	});;
	
	var item = passos[i];
	console.log(item);
	pessoa[i]  = $(".campoDeTexto").val();

	incrementar(i);

});


function incrementar(){
	i++;
}

