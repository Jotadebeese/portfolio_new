import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Edit() {
    const session = await getServerSession();

    if (!session) {
        redirect('/api/auth/signin');
    }

    return (
        <div>
            <h3>Edit existing Project</h3>
            <form>
                <label>Hi</label>
                <input />
            </form>
        </div>
    )
}