const { NODE_ENV } = process.env
export const isProd = NODE_ENV === 'production'
export const isDev = NODE_ENV === 'development'
