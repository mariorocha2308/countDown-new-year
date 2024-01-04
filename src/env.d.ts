/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NEW_YEAR: string
  readonly VITE_CONFETTI_END: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}