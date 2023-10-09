import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  //Obtener
  const tasks = await prisma.task.findMany();
//   console.log(tasks);
  return NextResponse.json(tasks);
}

export async function POST(request) { //request --> informacion proveniente del cliente
  //Agregar
  const { title, description } = await request.json();
  // console.log(data)
  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(newTask);
}
