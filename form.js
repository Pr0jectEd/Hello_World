document.querySelector("#dataForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent normal form submission

    const formData = new FormData(this);

    fetch("https://projected.alwaysdata.net/PHPlogic/process.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.querySelector("#message").innerHTML = data;
        this.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        document.querySelector("#message").innerHTML = "Erreur lors de l'envoi.";
    });
});
