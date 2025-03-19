import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import * as categories from './assets/categories.json'
import * as niches from './assets/niches.json'
import * as recipientTypes from './assets/recipientTypes.json'

async function main() {

    const dataSimple = {
        categorias: {
            table: prisma.category,
            data: categories
        },
        nichos: {
            table: prisma.nicho,
            data: niches
        },
        tiposRecipientes: {
            table: prisma.recipientTypes,
            data: recipientTypes
        }
    }

    for(const [key, value] of Object.entries(dataSimple)){
        console.group(key)
        for(const cat of value.data){
            await (value.table as any).upsert({
                where: {
                    name: cat.title
                },
                update: {},
                create: {
                    name: cat.title
                }
            })
            console.info('salvo', key, cat.title)
        }
        console.groupEnd()
    }
    
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })