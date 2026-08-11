# portfoliopdp
# Portfólio Profissional

Portfólio pessoal em estilo **dark tech minimalista**, desenvolvido como projeto acadêmico das sprints de Engenharia de Software. O site apresenta a trajetória de **Pedro Soares**, estudante de Engenharia de Software, com seções bilíngues (PT/EN) sobre formação, projetos, experiências e contato.

---

## Visão geral

O objetivo é construir um site moderno, responsivo e de fácil manutenção, servindo como vitrine profissional e ponto de partida para futuras funcionalidades (blog, CMS, formulário de contato com backend etc.).

### Principais características

- **Navegação clara** entre 4 seções: Sobre Mim, Projetos, Experiências e Contato.
- **Layout principal** com cabeçalho fixo, área de conteúdo e rodapé.
- **Internacionalização (PT/EN)** com persistência do idioma escolhido.
- **Responsividade** para desktop, tablet e mobile.
- **Formulário de contato** com validação em tempo real.
  
---

## Tecnologias previstas

| Camada | Tecnologia | Motivo |
|--------|-----------|--------|
| Linguagem | [TypeScript](https://www.typescriptlang.org/) | Tipagem estática para maior segurança e manutenibilidade. |
| Biblioteca UI | [React 19](https://react.dev/) | Componentes declarativos e reativos. |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com/) | Design tokens semânticos e utilitários consistentes. |
| Ícones | [Lucide React](https://lucide.dev/) | Ícones leves e customizáveis. |
| Deploy | Vercel / Render | Hospedagem na nuvem com CI/CD simples. |

> A primeira sprint foca no front-end estático. Back-end real (envio de e-mail, banco de dados) está previsto para sprints futuras.

---

## Estrutura inicial do site

```text
src/
├── components/
│   ├── SiteHeader.tsx      # Cabeçalho com navegação, toggle de idioma e menu mobile
│   ├── SiteFooter.tsx      # Rodapé com direitos autorais e links sociais
│   └── ui/                 # Componentes reutilizáveis de interface
├── data/
│   └── portfolio.ts        # Dados centralizados: perfil, projetos, experiências
├── lib/
│   ├── i18n.tsx            # Provider de idioma (PT/EN) + persistência no localStorage
│   └── utils.ts            # Helpers utilitários
├── routes/                 # Rotas file-based do TanStack Router
│   ├── __root.tsx          # Layout raiz (header + outlet + footer)
│   ├── index.tsx           # / (Sobre Mim)
│   ├── projetos.tsx        # /projetos (Timeline de projetos)
│   ├── experiencias.tsx    # /experiencias (Trajetória profissional/acadêmica)
│   └── contato.tsx         # /contato (Canais e formulário)
├── styles.css              # Tokens de cor, fontes e utilitários do Tailwind
└── router.tsx              # Configuração do roteador
```

---

## Protótipos de interface

### 1. Sobre Mim (`/`)

Hero com apresentação pessoal, links para GitHub/LinkedIn e seção de interesses/habilidades.

<img width="1168" height="506" alt="image" src="https://github.com/user-attachments/assets/eee61a9d-cbf5-4d16-9737-71ccbbb253f3" />

### 2. Projetos (`/projetos`)

Timeline vertical dos principais projetos, com descrição, tecnologias e link para repositório.

<img width="1148" height="596" alt="image" src="https://github.com/user-attachments/assets/ffaac658-3dea-4988-b9b9-4e7ba8e230f6" />

### 3. Experiências (`/experiencias`)

Grade de cards com formação, freelas e contribuições open source.

<img width="1182" height="550" alt="image" src="https://github.com/user-attachments/assets/b45233fe-16b8-4868-883a-e60669e61a21" />

### 4. Contato (`/contato`)

Canais de contato clicáveis e formulário validado.

<img width="1096" height="572" alt="image" src="https://github.com/user-attachments/assets/cb36677a-3c19-4431-bc49-f3569259cbc2" />

---

## Como rodar localmente

Requisitos: [Node.js](https://nodejs.org/)
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd <nome-do-repositorio>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:8080`.

---

## Autores

**Pedro Soares de Souza Garcia** 
**Daniel Vieira Verissimo**
**Pedro Henrique Carvalho Pereira**

[GitHub](https://github.com/pssgarcia) · [LinkedIn](https://www.linkedin.com/in/pedro-soares-b996a5263/)

---
