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
  /*
  const user = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 20,
        name: "asengdev"
      }
    }
  })
  */

  /*const user = await prisma.user.findFirst({
    where: {
      name: "pedro"
    }
  }) */

  /*
  const users = await prisma.user.createMany({
    data: [
      {
        name: "pedro2",
        email: "pedro2@gmail.com",
        age: 22,
        isAdmin: false
      },
      {
        name: "pedro3",
        email: "pedro3@gmail.com",
        age: 23,
        isAdmin: false
      },
      {
        name: "pedro4",
        email: "pedro4@gmail.com",
        age: 24,
        isAdmin: false
      }
    ]
  })
  */
  /*
  const users = await prisma.user.findMany({
    where: {
      name: "pedro",
      // lt berarti data umur yang dibawah dari 19
      age: { lt: 19 }
    },
    orderBy: {
      age: "desc"
    },
    take: 2,
    skip: 1
  })
  */  
 /* 
  const users = await prisma.user.findMany({
    where: {
      name: { contains: "pedro" },
      AND: [
        { email: { startsWith: "pedro"}},
        { email: { endsWith: "@gmail.com"}}
      ] 
    }
  })
  */
  
  const user = await prisma.user.update({
    where: {
      email: "asengdev@gmail.com"
    },
    data: {
      age: {
        multiply: 10
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

