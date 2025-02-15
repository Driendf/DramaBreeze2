(function() {
    let adUrl = "https://paddlefidget.com/f4tjqapy6?key=e137dada6feb540b3b05ddb545e055da";

    // Crear el modal de anuncio
    let adModal = document.createElement("div");
    adModal.id = "adModal";
    adModal.style.display = "none";
    adModal.style.position = "fixed";
    adModal.style.top = "0";
    adModal.style.left = "0";
    adModal.style.width = "100%";
    adModal.style.height = "100%";
    adModal.style.background = "rgba(0, 0, 0, 0.7)";
    adModal.style.justifyContent = "center";
    adModal.style.alignItems = "center";
    adModal.style.zIndex = "1000";

    let adContent = document.createElement("div");
    adContent.id = "adContent";
    adContent.style.background = "white";
    adContent.style.padding = "20px";
    adContent.style.textAlign = "center";
    adContent.style.maxWidth = "400px";
    adContent.style.width = "80%";
    adContent.style.position = "relative";
    adContent.style.borderRadius = "10px";

    let skipBtn = document.createElement("button");
    skipBtn.id = "skipAd";
    skipBtn.textContent = "Omitir en 5s";
    skipBtn.disabled = true;
    skipBtn.style.position = "absolute";
    skipBtn.style.top = "10px";
    skipBtn.style.right = "10px";
    skipBtn.style.background = "red";
    skipBtn.style.color = "white";
    skipBtn.style.border = "none";
    skipBtn.style.padding = "5px 10px";
    skipBtn.style.fontSize = "14px";
    skipBtn.style.borderRadius = "5px";
    skipBtn.style.cursor = "not-allowed";
    skipBtn.style.opacity = "0.5";

    let adFrame = document.createElement("iframe");
    adFrame.id = "adFrame";
    adFrame.width = "100%";
    adFrame.height = "250px";
    adFrame.frameBorder = "0";
    adFrame.src = "about:blank";

    // Añadir elementos al modal
    adContent.appendChild(skipBtn);
    adContent.appendChild(adFrame);
    adModal.appendChild(adContent);
    document.body.appendChild(adModal);

    function showAd() {
        adFrame.src = adUrl;
        adModal.style.display = "flex";
        skipBtn.disabled = true;
        skipBtn.style.cursor = "not-allowed";
        skipBtn.style.opacity = "0.5";
        
        let timeLeft = 5;
        skipBtn.textContent = `Omitir en ${timeLeft}s`;

        let countdown = setInterval(() => {
            timeLeft--;
            skipBtn.textContent = `Omitir en ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(countdown);
                skipBtn.textContent = "Omitir";
                skipBtn.disabled = false;
                skipBtn.style.cursor = "pointer";
                skipBtn.style.opacity = "1";
            }
        }, 1000);
    }

    // Cerrar anuncio al hacer clic en "Omitir"
    skipBtn.addEventListener("click", function() {
        adModal.style.display = "none";

        // Volver a mostrar el anuncio en 10 segundos
        setTimeout(showAd, 10000);
    });

    // Mostrar el primer anuncio al cargar la página
    showAd();
})();
