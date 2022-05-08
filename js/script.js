var x = 0;

function Checked() {

    if(x === 0) {/* Condição para execução do passo 1 */

        onclick: [
            document.querySelector("body").style.backgroundColor = "#2F4858",/* Alterado a cor de fundo */
            document.getElementById("toogle").style.cssText = 
                "transform: translateX(185px); background-color: #F6AE2D;"/* deslocando o botão e alternando a cor */
        ]

        return(x = 1); /* retornando um valor para garantir a execução do próximo passo */

    } else if(x === 1){/* Condição para retornar ao estado inicial */

        onclick: [
            document.querySelector("body").style.backgroundColor = "#F6AE2D",/* Alternando a cor de fundo */
            document.getElementById("toogle").style.cssText = 
                "transform: translateX(0); background-color: #2F4858;"/* deslocando o botão e alternando a cor */
        ]

        return(x = 0); /* retornando um valor para garantir o retorno ao estado inicial*/

    }        
}