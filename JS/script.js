$(document).ready(function() {
    $(".select-btn").click(function() {
        $(".select-menu").toggleClass("active");
    });

    $(".option").click(function() {
        let selectedOption = $(this).find(".option-text").text();
        $(".sBtn-text").text(selectedOption);
        $(".select-menu").removeClass("active");
    });

    $("#calcular").click(function() {
        const numberOne = parseFloat($("#numberOne").val());
        const numberTwo = parseFloat($("#numberTwo").val());
        const operacion = $(".sBtn-text").text();
        let resultado;

        switch (operacion) {
            case "Suma":
                resultado = numberOne + numberTwo;
                break;
            case "Resta":
                resultado = numberOne - numberTwo;
                break;
            case "Multiplicación":
                resultado = numberOne * numberTwo;
                break;
            case "División":
                resultado = numberOne / numberTwo;
                break;
            default:
                resultado = "Operación no válida";
        }
        $("#result").text(resultado);
    });

    $("#reiniciar").click(function() {
        $("#numberOne").val("");
        $("#numberTwo").val("");
        $("#result").text("0");
    });
});