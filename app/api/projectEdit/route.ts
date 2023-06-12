import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

export async function PUT(req: Request) {
    const session = await getServerSession();

    const data = await req.json();
    data.id = Number(data.id);
    data.createdAt = new Date(data.createdAt);
    data.published = Boolean(data.published);

    const record = await prisma.projects.update({
        where: {id: data.id},
        data,
    });

    return NextResponse.json(record);
}