import { AddNewForm } from '@/components/AddNewForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function New() {
    const session = await getServerSession();

    if (!session) {
        redirect('/api/auth/signin');
    }
    return (
        <div className='box-container'>
            <h3>Add new Project</h3>
            <AddNewForm />
        </div>
    )
}