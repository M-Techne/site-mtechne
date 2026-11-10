# Site institucional M Techne (mtechne.com.br)

Código do site (HTML, CSS, JavaScript e imagens). Cópia feita do servidor (cPanel) em 10/11/2026 e conferida: os arquivos são idênticos aos do site no ar.

## O que NÃO está aqui
- **Vídeos** (`Src/Videos/`, 4 arquivos, ~390 MB): ficam só no servidor. Ver `Src/Videos/LEIA-ME.txt`.
- `wp-content/home/index.html`: página antiga guardada no servidor, sem uso no site. Está no repositório mas **não é publicada** pelo `.cpanel.yml`.

## Como atualizar o site
1. Editar os arquivos aqui (pelo GitHub, num branch, com Pull Request) e mesclar na `main`.
2. No cPanel › **Git Version Control** › Gerenciar o repositório › **Update from Remote** e depois **Deploy HEAD Commit**.
3. O `.cpanel.yml` copia o código para `/home/mtechnec/public_html/` **sem apagar nada**.
4. Conferir o site no ar.

## Cuidados
- Nunca apontar o repositório do cPanel para a própria `public_html`: clonar numa pasta nova (ex.: `repositorios/site-mtechne`).
- Não colocar senhas, chaves ou dados de clientes aqui.
- O `.cpanel.yml` ainda não foi testado no servidor real.
