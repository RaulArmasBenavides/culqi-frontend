# culqi-frontend
## Project setup
npm install
### Compiles and hot-reloads for development
npm run serve
### Compiles and minifies for production
npm run build
### Lints and fixes files
npm run lint
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Vue Form 
![image](https://github.com/RaulArmasBenavides/culqi-frontend/assets/20383126/e607c047-490b-40af-938b-3351f344d6a2)

The API response, this token will have 15 minutes expiration:
![image](https://github.com/RaulArmasBenavides/culqi-frontend/assets/20383126/10622bb0-21db-4467-af08-850a3426381c)

You can test with the token in order to retrieve the card data 
![image](https://github.com/RaulArmasBenavides/culqi-frontend/assets/20383126/1adfdf27-cc47-4f4a-93a0-bb1ab9be5864)







Ese archivo es un shim de tipos para TypeScript. Sirve para que TS entienda las importaciones de archivos .vue.

TypeScript, por sí solo, no sabe qué es import App from './App.vue'.

Con declare module '*.vue' { ... } le dices: “cada vez que importes un .vue, trátalo como un componente de Vue”.

El DefineComponent<{}, {}, any> es un tipo genérico amplio: exporta un componente sin forzar props/emits/slots (por eso usa any).

/* eslint-disable */ evita que ESLint se queje en un archivo de declaraciones globales.

Sin este shim, verías errores tipo: “Cannot find module './App.vue' or its corresponding type declarations”.

¿Puedo mejorarlo?

Si quieres ser un poco más estricto, cambia any por unknown:

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, unknown>
  export default component
}

¿Cuándo ya no lo necesito?

En proyectos con Vite, normalmente se usa /// <reference types="vite/client" /> en env.d.ts, que ya incluye la declaración para *.vue.

En Vue CLI (webpack), sí necesitas este shim (y que esté incluido en tsconfig.json → "include").