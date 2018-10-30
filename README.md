# Biblioteca extrai Links v.1.0.0

**Biblioteca destinada a filtrar links em markdown linguagem**


## Os métodos utilizados na biblioteca são:

#### **getLinksFromMd(textMd);**

Exemplo de uso:

```
$node
> let getLink = require("sm-get-link")
> getLink.getLinksFromMd("este é o link do [google] (www.google.com)");
//[ {href: "www.google.com", text: "google"} ]
```


## versão 1.0.0

- Extrai links em markdown;
- É capaz de receber links que, além do domínio, possuam ou não protocolo e caminho;


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install sm-get-link`


## roadmap oficial do projeto

#### versão 3.0.0 (sem previsão, aceita-se contribuições)
- README translated to english;

#### versão 2.0.0 (previsão outubro/2018)
- Implementação de reconhecimento de URL mais complexa;

#### versão 1.0.0 (released)
- Extrai links em markdown;
- É capaz de receber links que, além do domínio, possuam ou não protocolo e caminho;
