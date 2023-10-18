document.addEventListener("DOMContentLoaded", function () {

    const buttonSend = document.getElementById("buttonSend");
    const inputLabel = document.getElementById("inputList");

    buttonSend.addEventListener("click", (event) => {
        event.preventDefault(); // Previene el envío del formulario

        fetch("/api/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Cambiado a JSON
            },
            body: JSON.stringify({ listNumbers: inputLabel.value }), // Enviando datos como JSON
        })
            .then((response) => response.json())
            .then((data) => {
                document.getElementById("containerResult").textContent = `Lista ordenada: ${data.lst_sort}`;
            });
    });
});