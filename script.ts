import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
 // const user = await prisma.user.create({ data: { name: "marsya" }})
 // const users = await prisma.user.findMany()
 // const users = await prisma.user.deleteMany()
 /* 
  const users = await prisma.user.createMany({
    data: [
      {
        name: "aden",
        email: "aden@gmail.com",
        age: 18,
        isAdmin: true
      },
      {
        name: "asengdev",
        email: "asengdev@gmail.com",
        age: 20,
        isAdmin: false,
      },
      {
        name: "pedro",
        email: "pedro@gmail.com",
        age: 23,
        isAdmin: false
      }
    ],
  })
  
  */

  const user = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 20,
        name: "asengdev"
      }
    }
  })

  console.log(user)
}

main()
  .catch(e => {
    console.log(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

