
var pessoas = {};
var itens = ["nome", "idade", "profissão", "estado civil", "escolaridade"];
var totalDeItens = itens.length;
var i = 0;


$(window).load(function() {

	if (localStorage.getItem("Pessoas") == null) {
		localStorage.setItem( "Pessoas" ,JSON.stringify([]));
	}
	pessoas = JSON.parse(localStorage.getItem("Pessoas"));
	return pessoas;
});


$("#avancar").on("click", function() {

	var pessoa = {
		nome: $("#valorItens").val()
	};

	salvar(pessoa);
});

function salvar(pessoa) {
	pessoas.push(pessoa);
	localStorage.setItem( "Pessoas" ,JSON.stringify(pessoas));
	location.reload();
}



		
$("#valorItens").focus();




// $("#voltar").on('click', function() {
// 	salvar(itens[i]);

// 	if(i > 0) {
// 		decrementar();
// 	}

// 	tratarMensagem(itens[i]);
// 	pegarValor(itens[i]);
// 	status();
// 	$("#valorItens").focus();
// });


$("#avancar").on('click', function() {
	salvar(itens[i]);

	if (i < totalDeItens){
		incrementar();
	} if (i === totalDeItens) {
		$(".dialogo").show();
		$(".nomePersona").empty().append(pessoa.nome + " - " + pessoa.profissão);
	}
	tratarMensagem(itens[i]);
	$("#valorItens").val("");
	status();
});





$(".fecharDialogo").on('click', function() {
	$(".dialogo").toggle();
});

$(".persona").on("click", function(){
	window.location.pathname = "persona.html";
	
});

function montarPersona(){
	$(".nome").html("Some text and markup");
}

// $( document ).ready(function() {
//     $(".nome").html("Bruno Guazina");
//     $(".profissao").html(pessoa.profissao);
// });

function pegarValor(item) {
	console.log(pessoa[item]);
	$("#valorItens").val(pessoa[item]);
}

// function salvar(item){
// 	pessoa[item] = $("#valorItens").val();
// }

function tratarMensagem(item) {
	$("#nomeDoItem").html(item);
	$("#valorItens").attr('placeholder', item);
}

function status() {
	var valorDeCadaItem = i/totalDeItens;
	var resultado = valorDeCadaItem * 100;
	$("#barraDeProgresso").css( "width", resultado + "%");
}

function incrementar() {
	i++;
}

function decrementar() {
	i--;
}

