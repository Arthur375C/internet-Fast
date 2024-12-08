document.getElementById('startButton').addEventListener('click', function() {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Calculando...';

    var startTime = new Date().getTime();
    var image = new Image();
    image.onload = function() {
        var endTime = new Date().getTime();
        var duration = (endTime - startTime) / 1000;
        var imageSize = 1024 * 1024 * 3; // Tamanho da imagem em bytes (3MB)
        var speedBps = (imageSize * 8) / duration; // Bits por segundo
        var speedKbps = speedBps / 1024; // Kilobits por segundo
        var speedMbps = speedKbps / 1024; // Megabits por segundo

        var speedMessage = 'Velocidade: ' + speedMbps.toFixed(2) + ' Mbps';
        resultElement.innerHTML = speedMessage;

        document.getElementById('shareButtons').style.display = 'flex';
    };
    image.onerror = function() {
        resultElement.innerHTML = 'Erro ao calcular a velocidade. Tente novamente.';
    };

    image.src = 'https://via.placeholder.com/1024x1024.png'; // URL da Imagem
});

window.addEventListener('error', function(event) {
    alert('O site não está respondendo. Por favor, tente novamente mais tarde.');
    console.error('Erro detectado:', event.message);
});

setTimeout(function() {
    if (document.readyState !== 'complete') {
        alert('O site está demorando para responder. Por favor, verifique sua conexão.');
    }
}, 10000);

// Função para verificar o status da conexão
function checkConnection() {
    if (!navigator.onLine) {
        window.location.href = 'error.html'; // Redireciona para a página de erro
    }
}

// Adiciona ouvintes de eventos para detectar mudanças no status da conexão
window.addEventListener('offline', checkConnection);

// Verifica a conexão no carregamento inicial da página
checkConnection();

document.getElementById('copyButton').addEventListener('click', function() {
    var pixKey = document.getElementById('pixKey').innerText;

    var tempInput = document.createElement('textarea');
    tempInput.value = pixKey;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis

    try {
        document.execCommand('copy');
        alert('Chave Pix copiada com sucesso!');
    } catch (err) {
        alert('Não foi possível copiar a chave Pix.');
    }

    document.body.removeChild(tempInput);
});
document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    grecaptcha.execute().then(function(token) {
        // Continue com a execução do teste
        iniciarTeste();
    }).catch(function(error) {
        console.error('Erro no reCAPTCHA:', error);
    });
});

function iniciarTeste() {
    // Seu código para iniciar o teste de velocidade
}
