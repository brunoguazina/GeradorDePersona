var pessoa = {}
var itens = ["nome", "idade", "profissão", "estado civil", "escolaridade", "necessidades", "motivações", "expectativas"];
var totalDeItens = itens.length;
var i = 0;

(function(){

	$("#valorItens").focus();

	$("#voltar").on('click', function() {
		salvar(itens[i]);

		if(i > 0) {
			decrementar();
		}

		tratarMensagem(itens[i]);
		pegarValor(itens[i]);
		status();
		$("#valorItens").focus();
	});

	$("#avancar").on('click', function() {
		salvar(itens[i]);

		if (i < totalDeItens){
			incrementar();
		} if (i === totalDeItens) {
			$(".dialogo").show();
			$(".nomePersona").empty().append(pessoa.nome + " - " + pessoa.profissão);
		}

		mensagemCondicional(itens[i]);
		tratarMensagem(itens[i]);

		$("#valorItens").val("");
		status();
		$("#valorItens").focus();
	});

	$(".fecharDialogo").on('click', function() {
		$(".dialogo").toggle();
	});

	$(".persona").on("click", function(){
		window.location.pathname = "persona.html";
		
	});

	function pegarValor(item) {
		console.log(pessoa[item]);
		$("#valorItens").val(pessoa[item]);
	}

	function salvar(item){
		pessoa[item] = $("#valorItens").val();
		localStorage.setItem( "Pessoa" ,JSON.stringify(pessoa));
	}

	function mensagemCondicional(item) {

		if(item == "necessidades" || item == "motivações" || item == "expectativas"){
			console.log("haaaaa");
			$("#campos .mensagemCondicao").show();
		}
	}

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

})();
