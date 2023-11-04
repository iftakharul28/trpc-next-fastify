import toast from '../lib/toast';
import { trpc } from '../lib/trpc';

export default function HomePage() {
  const { data: greeting } = trpc.example.hello.useQuery({ name: 'From Dashboard' });
  const { data: user } = trpc.example.user.useQuery();
  const { mutate: add } = trpc.example.add.useMutation({
    onSuccess: (value) => {
      if (typeof value !== 'string') return;
      toast.success({
        position: { x: 'right', y: 'top' },
        message: value,
        duration: 3000,
      });
    },
  });
  return (
    <div className='max-w-7xl mx-auto md:p-0 p-6'>
      <h1>Vite + React</h1>
      <h2>{greeting}</h2>
      <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(user, null, 2)}</pre>
      <button
        type='button'
        onClick={() =>
          add({
            title: greeting,
          })
        }>
        say hello
      </button>
    </div>
  );
}
