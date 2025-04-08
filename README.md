# bToast - React

> Uma biblioteca de toasts para React

O `b-toast` é uma biblioteca de toasts simples e personalizáveis para React. Ele fornece um componente React fácil de usar para exibir notificações no estilo toast em seu aplicativo.

![](./example.gif)

# Vue

O bToast tambem é oferecido para Vue [B-toast-vue](https://github.com/BtreeDevelopers/b-toast)

## Recursos

- Exibe notificações de estilo toast de forma simples e elegante.
- Personalizável para atender às necessidades do seu aplicativo.
- Suporte a tipos de toasts: sucesso, erro, aviso, informativo, etc.
- Fácil integração com projetos React existentes.

## NPM

https://www.npmjs.com/package/b-toast-react

## Demonstração

Precisa de exemplos: `DEMO PENDENTE`

## Instalação

```bash
$ npm install b-toast-react
```

## Uso

### Registro do plugin

Instancie o container `b-toast-react` globalmente em seu aplicativo React:

```jsx
// main.js ou main.ts
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "b-toast-react";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);

```

Em seguida, você pode usar o componente `b-toast-react` em qualquer lugar em seu aplicativo:

```javascript
import { useToast } from "b-toast-react";
const toast = useToast();
toast.show("Olá sou um toast!");

// Ou com opções
const id = toast.show("Conteúdo do toast", {
  isDark: true,
});
// Ao invocar o toast, é retornado um ID único que
// pode ser usado para removê-lo da tela, se necessário.

//Removendo todos os toasts
toast.clear();

//Removendo um dos toasts (por id)
toast.dismiss(id);
```

#### `toast.show(conteudo,?props)`

#### `toast.clear()`

#### `toast.dismiss(id)`

## Props

Aqui estão as propriedades disponíveis para o componente `b-toast`:

| Atributo |  Tipo   |  Inicial  | Descrição                                                                                                                       |
| :------- | :-----: | :-------: | :------------------------------------------------------------------------------------------------------------------------------ |
| content  | String  |    --     | Define o conteúdo no toast. (requerido)                                                                                         |
| type     | String  | `success` | Define o tipo de toast. Pode ser `success`, `error`, `warning`, `info`.                                                         |
| title    | String  |    --     | Inserir um titulo personalizado ao toast.                                                                                       |
| duration | Number  |  `5000`   | Define a duração em milissegundos que o toast ficará visível antes de ser fechado automaticamente. Padrão: `5000` (5 segundos). |
| isDark   | Boolean |  `false`  | Define o tema padrão do toast. Padrão: `false`.                                                                                 |

## Design Baseado em Pine UI

O design deste projeto de toasts, `b-toast`, foi desenvolvido com base no Pine UI, um design system moderno e flexível para design de front-end. O Pine UI fornece um conjunto abrangente de componentes e estilos consistentes que ajudaram a moldar a aparência e a experiência do b-toast.

Para obter mais informações sobre o Pine UI, você pode visitar o [Pine UI](https://www.behance.net/gallery/161882269/Design-System-Pine-UI-v1-bTree) e explorar os recursos e a documentação fornecidos.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
