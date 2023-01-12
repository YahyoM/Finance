import DotEnv from 'dotenv'
import path from 'path'

DotEnv.config({
    path: path.resolve('../../.env')
})

export const ENV = {
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/FINANCE',
    PORT: process.env.PORT || 9000
}
