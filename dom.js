//Função de calculo de media
function calcularMedia(){

        // == Comparacão SE VALOR IGUAL = TRUE
        // & Um valor e outro OS DOIS VERDADE = TRUE
        // || um valor ou outro SOMENTE UM VERDADE = TRUE

        
        //sintaxe Query Selector
        document.querySelector("#seletor-css")
        const inputValor1Query = document.querySelector('#valor1')

        //sintaxe Query Selector pela TAG ´button´
        const botao = document.querySelector('button')

        const todosInputs = document.querySelectorAll('input[type="text"]');

        todosInputs.forEach(input => {
            input.classList.add('destaque-input');
        });


        //Captando valores de entrada STRING
        const inputValor1 = document.getElementById('valor1');
        const inputValor2 = document.getElementById('valor2');

        //Convertendo valores STRING em FLOAT || Converte "texto" para "numeros"
        const valor1 = parseFloat(inputValor1.value);
        const valor2 = parseFloat(inputValor2.value);

        //Se valor1 OU valor2 nao for um numero
        if(isNaN(valor1) || isNaN(valor2)){
            alert("Por favor, insira apenas numeros!")
            return; //Interrompendo a função
        }

        const soma = valor1 + valor2;
        const media = soma / 2;

        //Exibe o resultado no elemento H2
        const elementoResultado = document.getElementById('resultado');
        elementoResultado.textContent = "Sua média é: " + media.toFixed(2);
}