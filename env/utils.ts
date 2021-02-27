export const { MONGO_URL, NODE_ENV, PORT } = process.env

export const isProd = NODE_ENV === 'production'
export const isDev = NODE_ENV === 'development'
