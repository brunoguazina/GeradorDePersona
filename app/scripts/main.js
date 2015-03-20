

var pessoa = {}
var itens = ["Nome", "Idade", "Profissão", "Estado Civil", "Escolaridade"];
var i = 0;


$("#salvar").on('click', function() {
	salvar(itens[i]);	
	i++;
	$("#valorItens").val("");
});


function salvar(item){
	pessoa[item] =  $("#valorItens").val();
}

 