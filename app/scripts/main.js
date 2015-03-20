
var pessoa = {}
var itens = ["nome", "idade", "profissão", "estado civil", "escolaridade", ];
var i = 0;

$("#salvar").on('click', function() {
	salvar(itens[i]);
	tratarMensagem(itens[i +1]);
	i++;
	$("#valorItens").val("");
});

function salvar(item){
	pessoa[item] =  $("#valorItens").val();
}

function tratarMensagem(item) {
	$("#nomeDoItem").html(item);
	$("#valorItens").attr('placeholder', item);
}
