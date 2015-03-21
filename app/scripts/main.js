
var pessoa = {}
var itens = ["nome", "idade", "profissão", "estado civil", "escolaridade", "renda"];
var i = 0;

$("#salvar").on('click', function() {
	salvar(itens[i]);
	tratarMensagem(itens[i +1]);
	i++;
	$("#valorItens").val("");

	status();
});

function salvar(item){
	pessoa[item] =  $("#valorItens").val();
}

function tratarMensagem(item) {
	$("#nomeDoItem").html(item);
	$("#valorItens").attr('placeholder', item);
}

function status() {
	var totalDeItens = itens.length;
	var valorDeCadaItem = i/totalDeItens;
	var resultado = valorDeCadaItem*100;
	$("div#quantidade").css( "width", resultado + "%");
}