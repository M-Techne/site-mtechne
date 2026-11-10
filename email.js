const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const telefone = document.querySelector('input[name=telefone]').value;
    const cargo = document.querySelector('input[name=cargo]').value;
    const tipo_empresa = document.querySelector('select[name=tipo_empresa]').value;
    const nome_empresa = document.querySelector('select[name=empresa]').value;

    const padrão_médio = document.querySelector('select[name=padrão_médio]').value;
    const indicação = document.querySelector('select[name=indicação]').value;

    const uso_imagem = document.querySelector('input[name=politica_de_privacidade]').value;
    const compartilhamento_contato = document.querySelector('input[name=politica_de_privacidade]').value;
    const proteção_dados = document.querySelector('input[name=politica_de_privacidade]').value;


    try {
        const response = await fetch('https://api.sheetmonkey.io/form/gfjFNpA3qxzSaYZS3ToUT5', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, telefone, cargo, tipo_empresa, nome_empresa, padrão_médio, indicação, uso_imagem, compartilhamento_contato, proteção_dados }),
        });

        if (response.ok) {
            window.location.href = "./obrigado.html";
        } else {
            alert("Erro ao enviar. Tente novamente.");
        }

    } catch (error) {
        console.error(error);
        alert("Erro de conexão.");
    }
}

document.querySelector('form').addEventListener('submit', handleSubmit);

