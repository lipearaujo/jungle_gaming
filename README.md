# jungle_gaming
Repositório criado para o desafio frontend da Jungle Gaming

# Kurio — NFT Marketplace

A **Kurio** é uma aplicação frontend de marketplace de NFTs, desenvolvida para simular a experiência de explorar, descobrir e adquirir ativos digitais. O projeto apresenta um catálogo de NFTs, filtros combinados, páginas de detalhes, autenticação simulada, gerenciamento de carrinho e fluxo de checkout.

O principal objetivo foi desenvolver uma aplicação completa no frontend, utilizando ferramentas modernas do ecossistema React e boas práticas de organização, gerenciamento de estado, roteamento e comunicação com APIs.

## Demonstração

- **Deploy:** [Acesse a aplicação](INSIRA_A_URL_DA_VERCEL)
- **Repositório:** [GitHub](INSIRA_A_URL_DO_REPOSITORIO)

## Tecnologias

| Tecnologia | Utilização |
|---|---|
| React | Construção da interface |
| TypeScript | Tipagem estática e segurança no desenvolvimento |
| Vite | Build e ambiente de desenvolvimento |
| Tailwind CSS | Estilização e responsividade |
| shadcn/ui e Base UI | Componentes de interface |
| TanStack Router | Roteamento e navegação |
| TanStack Query | Gerenciamento de requisições e cache |
| Axios | Comunicação HTTP |
| MSW | Simulação da API e dos endpoints |
| Zod | Validação de dados |
| React Hook Form | Gerenciamento de formulários |

## Funcionalidades

### Catálogo de NFTs

- Exibição de um catálogo com 162 NFTs distribuídos em 9 categorias.
- Visualização de informações dos ativos, como nome, preço, imagem, coleção, criador e rede.
- Filtros por categoria, faixa de preço, disponibilidade e rede.
- Visualização de todos os itens, lançamentos recentes e NFTs em destaque.
- Ordenação dos resultados por data de criação.
- Paginação com 9 itens por página.

### Detalhes do NFT

- Página individual para cada NFT.
- Exibição de descrição, coleção, criador, rede, endereço do contrato e atributos.
- Informações sobre edição e disponibilidade do ativo.

### Autenticação

- Fluxos de cadastro e login.
- Validação dos formulários.
- Simulação de autenticação utilizando tokens.
- Persistência do token da sessão no armazenamento local.
- Recuperação e validação da sessão por meio do endpoint de usuário autenticado.
- Proteção das rotas que exigem autenticação.

### Carrinho de compras

- Adição e remoção de NFTs.
- Controle de quantidade dos itens.
- Atualização dos valores conforme as quantidades selecionadas.
- Persistência do carrinho no localStorage, permitindo manter os itens após atualizar a página.

### Checkout e histórico de compras

- Validação dos itens antes da finalização da compra.
- Envio dos itens e respectivas quantidades para o endpoint de checkout.
- Simulação da criação de compras.
- Exibição do histórico de compras do usuário autenticado.

### Interface responsiva

- Layout adaptável a diferentes tamanhos de tela.
- Componentes e elementos reorganizados conforme o espaço disponível.
- Experiência de navegação para dispositivos móveis, tablets e desktops.

## Arquitetura e decisões técnicas

### Gerenciamento de requisições

O TanStack Query é utilizado para gerenciar as requisições, cache e estado assíncrono dos dados.

As operações de consulta e mutação são organizadas em hooks, permitindo separar a lógica de comunicação com a API dos componentes de interface.

### Roteamento

O TanStack Router gerencia as rotas da aplicação, incluindo páginas de listagem, detalhes dos NFTs, autenticação e áreas protegidas.

### API simulada com MSW

Como o projeto não possui um backend real, o Mock Service Worker (MSW) é utilizado para interceptar requisições HTTP e simular os endpoints da aplicação.

Os dados dos NFTs são estáticos, enquanto operações como autenticação e compras são simuladas por handlers específicos.

A configuração permite executar os mocks tanto durante o desenvolvimento quanto na versão de produção, utilizando o Service Worker do MSW.

### Gerenciamento de estado

O TanStack Query gerencia o estado assíncrono e os dados obtidos pela API.

O Context API é utilizado para compartilhar o estado do carrinho entre diferentes componentes.

O localStorage mantém informações necessárias entre atualizações da página, como os itens do carrinho e o token da sessão.

### Validação

O Zod é utilizado para validar estruturas de dados e formulários, garantindo que as informações enviadas para as operações respeitem os formatos esperados.

## Como executar o projeto

### Pré-requisitos

- Node.js
- npm

### Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd NOME_DA_PASTA
```

Instale as dependências:

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

### Build de produção

```bash
npm run build
```

### Pré-visualização do build

```bash
npm run preview
```

## Observações

Este projeto é uma demonstração frontend. A API é simulada com MSW, não existe integração com uma blockchain ou carteira digital, e as compras não representam transações financeiras reais.

A autenticação também é simulada e não deve ser utilizada como mecanismo de segurança em uma aplicação real.

## Autor

Desenvolvido como projeto de portfólio para demonstrar conhecimentos em desenvolvimento frontend com React, TypeScript e ferramentas modernas do ecossistema JavaScript.
