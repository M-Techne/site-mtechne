# Site institucional M Techne (mtechne.com.br)

Código do site (HTML, CSS, JavaScript e imagens). Cópia feita do servidor (cPanel) em 10/11/2026 e conferida: os arquivos são idênticos aos do site no ar.

## O que NÃO está aqui
- **Vídeos** (`Src/Videos/`, 4 arquivos, ~390 MB): ficam só no servidor. Ver `Src/Videos/LEIA-ME.txt`.
- `wp-content/`: **não pertence ao site**. Em 10/11/2026 foi achada no servidor uma página de spam (cassino) em `wp-content/home/`, criada em 18/10/2026 por invasão. Foi tirada daqui; precisa ser apagada também no servidor (o deploy não apaga nada).
- `google6175b10362d76f84.html`: arquivo de verificação do Google gravado pelo invasor (18/10 e 11/11/2026). Removido daqui e do `.cpanel.yml`; apagar também no servidor. A verificação legítima é a `google7a49ec715ab3be6a.html`.

## Como atualizar o site
1. Editar os arquivos aqui (pelo GitHub, num branch, com Pull Request) e mesclar na `main`.
2. No cPanel › **Git Version Control** › Gerenciar o repositório › **Update from Remote** e depois **Deploy HEAD Commit**.
3. O `.cpanel.yml` copia o código para `/home/mtechnec/public_html/` **sem apagar nada**.
4. Conferir o site no ar.

## Cuidados
- Ícone do site (favicon): `favicon.ico` na raiz e `Src/Logos/MTechne/favicon-96.png` / `favicon-192.png`, quadrados, gerados de `FavMTechne.png`. As páginas usam caminho a partir da raiz (`/favicon.ico`).
- Nunca apontar o repositório do cPanel para a própria `public_html`: clonar numa pasta nova (ex.: `repositorios/site-mtechne`).
- Não colocar senhas, chaves ou dados de clientes aqui.
- O `.cpanel.yml` ainda não foi testado no servidor real.
