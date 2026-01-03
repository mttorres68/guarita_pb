# 🚛 Guarita PB - Sistema de Gestão de Portaria

Sistema web para controle e gerenciamento de movimentações de veículos em portarias, com foco em operações de embarque e recebimento de produtos agrícolas e insumos.

## 📋 Sobre o Projeto

O **Guarita PB** é uma aplicação moderna desenvolvida para controlar o fluxo de veículos de carga em portarias de unidades agrícolas. O sistema permite gerenciar embarques e recebimentos de diversos produtos, oferecendo visibilidade em tempo real das operações e status dos veículos.

## ✨ Funcionalidades Principais

### 🎯 Dashboard

- Visualização em tempo real das movimentações
- Estatísticas por status (aguardando, em operação, finalizados)
- Gráficos de movimentações
- Listagem de movimentações recentes

### 📦 Gestão de Embarques

Controle de expedição de produtos:

- **Soja** - Gerenciamento de embarque de soja
- **Milho** - Gerenciamento de embarque de milho
- **Algodão em Pluma** - Controle específico para algodão
- **Diversos** - Outros produtos diversos

### 📥 Gestão de Recebimentos

Controle de entrada de insumos:

- **SSP** (Superfosfato Simples)
- **KCL** (Cloreto de Potássio)
- **Ureia**
- **Calcário**
- **Sementes**
- **Diversos**

### 🔄 Controle de Status

Sistema completo de rastreamento com 5 estados:

- ⏳ **Aguardando Embarque** - Veículo na fila para carregamento
- ⏳ **Aguardando Desembarque** - Veículo na fila para descarregamento
- 🔄 **Embarcando** - Processo de carga em andamento
- 🔄 **Descarregando** - Processo de descarga em andamento
- ✅ **Finalizado** - Operação concluída

### 📊 Gerenciamento de Dados

- Cadastro e acompanhamento de veículos (placa, eixos)
- Controle de motoristas (CPF)
- Registro de transportadoras
- Cadastro de fornecedores
- Catálogo de produtos
- Instruções de embarque
- Controle de número de fardos (algodão)

## 🛠️ Tecnologias Utilizadas

### Frontend Core

- **React 19. 2.0** - Biblioteca principal
- **TypeScript 5.9.3** - Tipagem estática
- **Vite 7.2.4** - Build tool e dev server
- **React Router 7.11.0** - Roteamento

### Estilização

- **TailwindCSS 4.1.18** - Framework CSS utilitário
- **Tailwind Merge** - Mesclagem de classes
- **Class Variance Authority** - Variantes de componentes
- **Lucide React** - Biblioteca de ícones

### UI Components

- **Radix UI** - Componentes acessíveis e sem estilo
  - Dialog
  - Dropdown Menu
  - Separator
  - Slot
  - Tooltip
  - Sidebar

### Utilities

- **date-fns 4.1.0** - Manipulação de datas
- **clsx** - Construção condicional de classes

### Development

- **ESLint 9.39.1** - Linter
- **React Compiler** - Otimizações de compilação
- **TypeScript ESLint** - Regras TypeScript para ESLint

## 📁 Estrutura do Projeto

```
guarita_pb/
├── src/
│   ├── components/        # Componentes React reutilizáveis
│   │   ├── ui/           # Componentes de interface (shadcn/ui)
│   │   ├── app-sidebar. tsx
│   │   ├── theme-provider.tsx
│   │   ├── mode-toggle.tsx
│   │   └── icons.tsx
│   ├── pages/            # Páginas da aplicação
│   │   ├── home/
│   │   ├── about/
│   │   ├── auth/
│   │   ├── movement-page/
│   │   ├── DashboardPage.tsx
│   │   └── MovimentacaoPage.tsx
│   ├── routes/           # Configuração de rotas
│   ├── services/         # Serviços e APIs
│   │   └── mockApi.ts    # Mock de dados para desenvolvimento
│   ├── hooks/            # Custom hooks
│   │   └── store/        # Gerenciamento de estado
│   ├── lib/              # Bibliotecas e utilitários
│   │   ├── types.ts      # Definições de tipos
│   │   └── utils.ts      # Funções utilitárias
│   ├── utils/            # Utilitários auxiliares
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Entry point
│   └── style.css         # Estilos globais
├── public/               # Arquivos estáticos
├── . devcontainer/        # Configuração Dev Container
├── components.json       # Configuração shadcn/ui
├── tailwind.config.ts    # Configuração Tailwind
├── vite.config.ts        # Configuração Vite
├── tsconfig.json         # Configuração TypeScript
└── package.json          # Dependências do projeto
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/mttorres68/guarita_pb.git
cd guarita_pb
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse a aplicação:

```
http://localhost:5173
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Lint do código
npm run lint

# Preview da build
npm run preview
```

## 🎨 Temas

O sistema possui suporte para temas claro/escuro com detecção automática das preferências do sistema:

- **Light** - Tema claro
- **Dark** - Tema escuro
- **System** - Segue preferências do SO

## 📱 Features da Interface

- **Design Responsivo** - Funciona em desktop, tablet e mobile
- **Sidebar Colapsável** - Menu lateral otimizado
- **Tema Customizável** - Alternância entre modo claro/escuro
- **Componentes Acessíveis** - Baseados em Radix UI
- **Animações Suaves** - Transições fluidas
- **Ícones Modernos** - Lucide React icons

## 🔐 Tipos de Dados

### Movement (Movimentação)

```typescript
{
  id: string
  order: string
  type:  MovementType (EMBARQUE | RECEBIMENTO)
  category: Category
  dateTime: string
  status: Status
  licensePlate: string
  cpf: string
  axles: number
  carrier: string
  supplier: string
  product: string
  invoiceKey?: string
  instruction?: string
  bundles?: number
}
```

## 🌐 Deploy

O projeto está configurado para deploy no **Vercel** (veja `vercel.json`).

### Deploy Automático

```bash
# Via Vercel CLI
vercel
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto é privado e de propriedade de mttorres68.

## 👤 Autor

**mttorres68**

- GitHub: [@mttorres68](https://github.com/mttorres68)

## 🔄 Roadmap

- [ ] Integração com API backend
- [ ] Sistema de autenticação completo
- [ ] Relatórios em PDF
- [ ] Notificações em tempo real
- [ ] Dashboard com mais métricas
- [ ] Exportação de dados
- [ ] Histórico de movimentações
- [ ] Gestão de usuários e permissões

---

Desenvolvido com ❤️ para otimização de operações logísticas
