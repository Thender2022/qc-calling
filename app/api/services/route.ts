// app/api/services/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const services = await prisma.service.findMany();
  return NextResponse.json(services);
}

export async function POST(req: Request) {
  const body = await req.json();
  const service = await prisma.service.create({ data: body });
  return NextResponse.json(service);
}
