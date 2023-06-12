import { EditForm } from '@/components/EditForm';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface Props {
    params: {
        id: string;
    }
}

export default async function Edit({ params }: Props) {
    const session = await getServerSession();

    if (!session) {
        redirect('/api/auth/signin');
    }

    const project = await prisma.projects
    .findUnique({
        where: { id: parseInt(params.id)},
    });

    return (
        <div className='box-container'>
            <h3>Edit Project</h3>
            <EditForm project={project} />
        </div>
    )
}