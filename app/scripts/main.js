
var pessoa = {}
var itens = ["nome", "idade", "profissão", "estado civil", "escolaridade", "renda"];
var totalDeItens = itens.length;
var i = 0;




$("#status").html(i +"/"+ totalDeItens)




$("#voltar").on('click', function() {
	decrementar();
	tratarMensagem(itens[i]);
	pegarValor(itens[i]);
	status();
	$("#status").html(i +"/"+ totalDeItens)
});

$("#avancar").on('click', function() {
	salvar(itens[i]);
	
	if (i < totalDeItens){
		incrementar();
	} else {
		console.log(pessoa);
	}

	tratarMensagem(itens[i]);
	$("#valorItens").val("");
	status();
	//TODO: ajustar a posicao inicial
	$("#status").html(i +"/"+ totalDeItens)
});


function pegarValor(item) {
	console.log(pessoa[item]);
	$("#valorItens").val(pessoa[item]);
}

function salvar(item){
	pessoa[item] = $("#valorItens").val();
}

function tratarMensagem(item) {
	$("#nomeDoItem").html(item);
	$("#valorItens").attr('placeholder', item);
}

function status() {
	var valorDeCadaItem = i/totalDeItens;
	var resultado = valorDeCadaItem*100;
	$("#quantidade").css( "width", resultado + "%");
}

function incrementar() {
	i++;
}

function decrementar() {
	i--;
}