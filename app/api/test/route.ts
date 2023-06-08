import { prisma } from "@/lib/prisma"
import { NextResponse } from 'next/server';

async function write() {
     // ... you will write your Prisma Client queries here
     await prisma.projects.create({
      data: {
        title: 'Alice',
        description: 'alice@prisma.io',
        content: 'alice@prisma.io',
        createdAt: new Date("2023-06-05"),
        tech: {
          create: { 
            name: 'Hello World',
            icon: 'something here',
         },
        },
      },
    })

  }

  export async function GET(request: Request) {
    write();
   const allProjects = await prisma.projects.findMany({
     include: {
       tech: true,
     },
   })
   console.log(allProjects, { depth: null })

   return NextResponse.json(allProjects);
 }