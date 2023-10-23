import AuthForm from '@frontend/src/components/auth/Form';
import { getUserAuth } from '@frontend/src/lib/auth/utils';
import { trpc } from '../lib/trpc';

import { redirect } from 'next/navigation';
export default async function Home() {
  const { session } = await getUserAuth();
  if (!session) redirect('/auth/sign-up');
  const response = await trpc.example.hello.query({ name: 'Iftakharul Alam' });
  const user = await trpc.example.user.query();
  // const user = await trpc.example.addUser.mutate();
  return (
    <div className='max-w-5xl mx-auto md:p-0 p-6'>
      <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(response, null, 2)}</pre>
      <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(user, null, 2)}</pre>
      <AuthForm action='/api/auth/sign-out' />
    </div>
  );
}
