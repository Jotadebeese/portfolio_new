import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

export async function POST(req: Request) {
    const session = await getServerSession();

    const data = await req.json();
    data.createdAt = new Date(data.createdAt);
    data.published = Boolean(data.published);

    const record = await prisma.projects.create({
        data,
    });

    return NextResponse.json(record);
}