# Internet Baby Club — Atividade Stitch (Google)

---

## Storytelling da Atividade

Esta atividade teve como objetivo explorar a plataforma de design orientado por IA **Google Stitch** (https://stitch.withgoogle.com), utilizando-a para gerar o design de todas as páginas do menu do e-commerce **Internet Baby Club** — um projeto fanmade.

O fluxo completo seguiu as etapas abaixo.

---

## Etapa 1 — Design no Google Stitch

### 1.1 Prints das telas geradas

As páginas geradas foram:
<img width="825" height="1600" alt="screen" src="https://github.com/user-attachments/assets/2c6ce52d-5318-4094-bb3d-f4791a2a6f27" />
<img width="1088" height="1600" alt="screen" src="https://github.com/user-attachments/assets/56d62505-9bc8-47b5-a6eb-8b9c135d7dde" />
<img width="1037" height="1600" alt="screen" src="https://github.com/user-attachments/assets/aa8ceef8-0820-4d2d-a0eb-efaf47663d29" />
<img width="876" height="1600" alt="screen" src="https://github.com/user-attachments/assets/3b010c62-a913-4dd4-842c-8ee1f6fa7f14" />
<img width="1400" height="1600" alt="screen" src="https://github.com/user-attachments/assets/f3c843e7-2d83-4092-ab39-51aace607f36" />
<img width="1137" height="1600" alt="screen" src="https://github.com/user-attachments/assets/42e6b645-19a6-4a72-b5fc-4580a9f569f0" />
<img width="876" height="1600" alt="screen" src="https://github.com/user-attachments/assets/662d6694-e3b7-45ca-b65e-a502f6853df4" />

---

### 1.2 Prompt utilizado no Stitch

```
Quero que crie o design de todas as páginas do menu da página inicial 
exatamente com os estilos que estão no código.

As cores usadas são:
- #FCFCED (cream) — fundo principal
- #70B8E0 — azul
- #794199 — roxo
- #95CEA5 — verde
- #1a1a1a — preto

A única tipografia usada é Matangi.

Páginas do menu a serem criadas:
- Início
- Lançamentos
- Produtos
- Artistas
- Lista de Desejos
- Sobre
- Contato

[Código HTML/CSS/JS do projeto foi enviado junto ao prompt como referência de estilo]
```

---

## Etapa 2 — Correção no Claude.ai

O output gerado pelo Stitch foi submetido ao **Claude.ai** para correção e organização.

### Problemas identificados no output do Stitch:
- Todos os links de navegação estavam como `href="#"` (sem destino real)
- Fontes erradas sendo usadas (Syne, Space Grotesk, Be Vietnam Pro) em vez de Matangi
- Tailwind CSS injetado nas páginas internas, conflitando com o `style.css` do projeto
- Sem estrutura de pastas organizada — cada página estava em sua própria subpasta isolada

### Prompt enviado ao Claude.ai:

```
Tenho o ZIP exportado pelo Google Stitch com o design das páginas do 
Internet Baby Club. Preciso que você:

2.1 Corrija todos os links e a navegação que o Stitch provavelmente 
deixou para trás (todos os href="#").

2.2 Gere em uma estrutura de pastas organizada com ponto de entrada 
no index.html.

Identidade da marca:
- Cores: #70B8E0 (azul), #794199 (roxo), #95CEA5 (verde), #FCFCED (fundo creme)
- Tipografia: Matangi (única fonte do projeto)
- Estética: Y2K, nostálgico e moderno ao mesmo tempo
```

### Correções aplicadas:
- ✅ Todos os `href="#"` substituídos por links reais entre as páginas
- ✅ Fontes erradas removidas — todas as páginas passaram a usar Matangi
- ✅ Tailwind removido das páginas internas
- ✅ Modal de login/cadastro presente em todas as páginas
- ✅ Footer com links funcionais em todas as páginas
- ✅ Página ativa marcada no menu com `class="active"` em cada página

---

## Etapa 3 — Estrutura de Pastas Final

```
internet-baby-club/
├── index.html                    ← ponto de entrada
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── img/
│   └── fonts/
└── pages/
    ├── produtos.html
    ├── lancamentos.html
    ├── artistas.html
    ├── sobre.html
    ├── contato.html
    └── lista-de-desejos.html
```

---

## Etapa 4 — Repositório no GitHub

 **Link do repositório:** `https://github.com/scarol-s/internet-baby-club`

---

## Etapa 5 — Deploy na Vercel

**Link do deploy:** `https://internet-baby-club.vercel.app/`

---

## Tecnologias utilizadas

| Ferramenta | Uso |
|---|---|
| Google Stitch | Geração do design das páginas via IA |
| Claude.ai | Correção de links, navegação e estrutura |
| HTML + CSS + JS | Desenvolvimento frontend |
| GitHub | Versionamento e repositório |
| Vercel | Deploy e hospedagem |

---

## Observações

- O projeto é um **e-commerce fanmade** para fãs
- Os produtos incluem: pôsteres, canetas, canecas, camisetas, chaveiros, pulseiras, cadernos, colecionáveis, fanzines, bonés e ecobags
- A identidade visual Y2K foi mantida em todas as páginas geradas

---
