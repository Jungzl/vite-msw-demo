import type { HttpHandler } from 'msw'

const all = import.meta.glob<{ default: HttpHandler[] }>('./modules/**/*.ts', { eager: true })

export const handlers: HttpHandler[] = []

Object.keys(all).forEach(key => {
  handlers.push(...all[key].default)
})
