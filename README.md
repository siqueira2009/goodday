# 🌱 GoodDay

> ### v.1.0.0: cópia de telas para a aula de PAM
> App mobile de bem-estar com fluxo de splash, boas-vindas, autenticação e onboarding

Projeto acadêmico desenvolvido em **React Native + Expo** para a disciplina de **PAM (Programação para Aplicativos Móveis)**, reproduzindo o fluxo de telas de um app de bem-estar/saúde: splash, boas-vindas, login, cadastro e apresentação de funcionalidades (onboarding).

---

## 📑 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Tecnologias](#️-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Scripts disponíveis](#-scripts-disponíveis)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Telas](#️-telas)
- [Componentes](#-componentes)
- [Navegação](#-navegação)
- [Identidade visual](#-identidade-visual)
- [Build e distribuição (EAS)](#-build-e-distribuição-eas)
- [Limitações conhecidas](#️-limitações-conhecidas)
- [Autor](#-autor)

---

## 📖 Sobre o projeto

O GoodDay é a reprodução da interface de um app de bem-estar, focado em **hábitos saudáveis, treinos, alimentação e motivação**. O projeto cobre o fluxo completo de entrada de um usuário:

`Splash → Welcome → Login/Cadastro → Onboarding (Features)`

Todas as telas foram construídas com componentes reutilizáveis próprios (botão, input, checkbox, título, divisor e indicador de passos), sem uso de bibliotecas de UI prontas.

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Expo](https://expo.dev/) | `~57.0.9` | Tooling e runtime do projeto |
| [React](https://react.dev/) | `19.2.3` | Biblioteca base |
| [React Native](https://reactnative.dev/) | `0.86.2` | Renderização mobile |
| [React Navigation](https://reactnavigation.org/) (Stack) | `^7.10.17` | Navegação entre telas |
| [Lucide React Native](https://lucide.dev/) | `^1.28.0` | Ícones |
| `expo-checkbox` | `~57.0.0` | Checkbox nativo |
| `expo-navigation-bar` | `~57.0.2` | Customização da barra de navegação Android |
| `expo-status-bar` | `~57.0.1` | Customização da status bar |
| `react-native-gesture-handler` | `~2.32.0` | Gestos (necessário para o React Navigation) |
| `react-native-safe-area-context` | `~5.7.0` | Áreas seguras de tela |
| `react-native-screens` | `~4.26.0` | Otimização de telas nativas |
| `react-native-web` | `^0.21.2` | Suporte a execução web |

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (recomendado LTS)
- [Git](https://git-scm.com/)
- App **Expo Go** instalado no celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779)), **ou** um emulador Android/iOS configurado

---

## 📲 Instalação

```bash
# Clone o repositório
git clone https://github.com/siqueira2009/goodday.git
cd goodday

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento do Expo
npm start
```

Com o servidor rodando, escaneie o QR Code exibido no terminal/navegador usando o app **Expo Go**, ou utilize um dos comandos de plataforma específica abaixo.

---

## 📜 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o Metro Bundler / Expo Dev Tools |
| `npm run android` | Abre o projeto em um emulador ou dispositivo Android |
| `npm run ios` | Abre o projeto em um simulador ou dispositivo iOS |
| `npm run web` | Executa o projeto no navegador |

---

## 📁 Estrutura do projeto

```
goodday/
├── app.json              # Configuração do app Expo (nome, ícone, package, plugins)
├── eas.json               # Perfis de build para o Expo Application Services
├── index.js                # Ponto de entrada, registra o componente raiz
├── package.json
└── src/
    ├── App.js               # Componente raiz: NavigationContainer + Gesture Handler
    ├── assets/               # Imagens, logo e ícones sociais
    ├── components/            # Componentes reutilizáveis de UI
    │   ├── Button.jsx
    │   ├── Checkbox.jsx
    │   ├── Hr.jsx
    │   ├── Input.jsx
    │   ├── Steps.jsx
    │   └── Title.jsx
    ├── routes/
    │   └── index.js            # Stack Navigator com todas as telas
    └── screens/
        ├── Splash.jsx
        ├── Welcome.jsx
        ├── Login.jsx
        ├── Cadastro.jsx
        └── Features.jsx
```

---

## 🖥️ Telas

### 🌀 Splash
Exibe a logo do app sobre fundo verde (`#14c871`) por 3 segundos e redireciona automaticamente (`navigation.replace`) para a tela **Welcome**.

### 👋 Welcome
Tela de boas-vindas com ilustração, título e dois botões: acesso rápido (visual, com ícone do Google) e "Outras opções", que leva para **Login**.

### 🔐 Login
Formulário com campos de e-mail e senha, checkbox "Lembrar senha?", link "Esqueci minha senha" e opções de login social (Google/Facebook, apenas visuais). O botão "Acessar" navega para **Features**; o botão "Cadastrar" leva para **Cadastro**.

### 📝 Cadastro
Formulário de criação de conta com e-mail, senha e confirmação de senha, seguindo o mesmo padrão visual da tela de Login. O botão "Cadastrar" navega direto para **Features**.

### 🧭 Features (onboarding)
Carrossel de 4 passos com imagem, título, texto e indicador de progresso (`Steps`), navegável por setas (`MoveLeft`/`MoveRight`):

1. **Viva bem** - hábitos de equilíbrio e energia no dia a dia
2. **Treine bem** - treinos guiados e adaptados ao nível do usuário
3. **Divirta-se** - desafios, metas e conquistas
4. **Coma bem** - planos alimentares simples e saborosos

---

## 🧩 Componentes

| Componente | Descrição |
|---|---|
| `Button` | Botão configurável com cor de fundo, borda, ícone opcional e ação de `onPress` |
| `Checkbox` | Caixa de seleção customizada com label |
| `Hr` | Linha divisória horizontal (usada em "Ou continue com") |
| `Input` | Campo de texto com label, placeholder e suporte a modos (`email`, `password`, `text`) |
| `Steps` | Indicador de progresso em barras, usado no onboarding |
| `Title` | Título com subtítulo opcional e alinhamento configurável |

---

## 🧭 Navegação

A navegação é feita com **React Navigation (Stack Navigator)**, configurada em `src/routes/index.js`, sem header nativo (`headerShown: false`) e com animação `slide_from_right`. A tela inicial é a `Splash`.

```
Splash → Welcome → Login ⇄ Cadastro → Features
```

---

## 🎨 Identidade visual

- **Cor principal:** `#14c871` (verde)
- **Fundo:** branco, com áreas de destaque em verde (Splash e topo do Features)
- **Ícone do app:** `src/assets/favicon.png`
- **Android adaptive icon:** fundo `#14c871`
- **Package Android:** `com.siqueira2009.gd`

---

## 📦 Build e distribuição (EAS)

O projeto já possui um `eas.json` configurado com três perfis de build via [EAS Build](https://docs.expo.dev/build/introduction/):

- `development` - cliente de desenvolvimento, distribuição interna
- `preview` - build interno para testes
- `production` - build de produção com incremento automático de versão

Para gerar um build (requer conta Expo/EAS configurada):

```bash
npx eas build --profile preview --platform android
```

---

## ⚠️ Limitações conhecidas

- Não há integração real com backend, autenticação ou login social - os formulários e botões apenas navegam entre telas para fins de demonstração.
- Nenhuma validação de formulário foi implementada.
- Ainda não há um `.apk`/`.ipa` publicado na seção **Releases** do repositório.

---

## 👤 Autor

Desenvolvido por [**siqueira2009**](https://github.com/siqueira2009) como exercício da disciplina de PAM.
