import { defineConfig } from 'orval'

//o orval gera um arquivo que contem todos os codigos typescript para saber os parametros que cada rota da aplicacao recebe
//traz todo o necessario para se comunicar com o backend
export default defineConfig({
  api: {
    input: 'http://localhost:3333/docs/json',
    output: {
      target: './src/http/api.ts', //gera um arquivo
      client: 'fetch',
      httpClient: 'fetch',
      clean: true, //Evita conflitos
      baseUrl: 'http://localhost:3333',
      override: {
        fetch: {
          includeHttpResponseReturnType: false, //nao retorna status code, apenas dados
        },
      },
    },
  },
})
