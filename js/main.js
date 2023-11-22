$(document).ready(function() { //Chamando a função do carrossel no jquerty
    $('#carrossel-imagens').slick({
        autoplay: true, //inserindo a função autoplay no carrossel
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle(); //Efeito de aparecer e sumir o menu de navegação quando clica no menu hamburguer
    });

    $('#telefone').mask('(00) 0 0000-0000', { //ativando a máscara para preenchimento
        placeholder: '(00) 0 0000-0000'
    });

    $('form').validate({ //ativando a validação de formulário
        rules: { //inserindo as regras para o fomulário
            nome: {
                required: true,
            },
            email: {
                required: true, //Campo obrigatório
                email: true //insere uma validação persolizada do tipo email
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {//Alterando as mensagens de alerta do formulário
            nome: 'Por favor, insira o seu nome!'
        },
        submitHandler: function(form) { //Alterando as mensagens de submit do formulário
            console.log(form)
        },
        invalidHandler: function(evento, validador) { //Alterando as mensagens de submit errado do formulário
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`) //Uso de crase e não aspas
            }
        },
    });

    $('.lista-veiculos button').click(function() { //Efeito para rolar a página
        const destino = $('#contatos');
        const nomeVeiculo = $(this).parent().find('h3').text(); //Comando que vai auto preencher o campo interesse, quando clicar no botão

        $('#veiculo-interesse').val(nomeVeiculo);
        
        $('html').animate({ //Inserindo a função que cuida da animação
            scrollTop: destino.offset().top //o destino
        }, 1000); //tempo em milisegundos
    });
});
