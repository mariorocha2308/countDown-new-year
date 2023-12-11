/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NEW_YEAR: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}