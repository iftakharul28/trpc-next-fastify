import { trpc } from '../lib/trpc';

export default async function Home() {
  const response = await trpc.example.hello.query({ name: 'Iftakharul Alam' });
  const user = await trpc.example.user.query();
  return (
    <div className='max-w-5xl mx-auto md:p-0 p-6'>
      <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(response, null, 2)}</pre>
      <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
