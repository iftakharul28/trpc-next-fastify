'use client';
import { trpc } from '../helpers/trpc';
import toast from '../helpers/toast';

const ComponentsList = () => {
  const { data: response } = trpc.example.hello.useQuery({ name: 'From Frontend' });
  const { data: user } = trpc.example.user.useQuery();
  const { mutate: add } = trpc.example.add.useMutation({
    onSuccess: (value) => {
      if (typeof value !== 'string') return;
      console.log(value);
      toast.success(value);
    },
  });
  return (
    <div>
      <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(response, null, 2)}</pre>
      <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(user, null, 2)}</pre>
      <button
        type='button'
        onClick={() => {
          toast.success({
            position: { x: 'right', y: 'top' },
            message: 'Hello From Frontend',
            duration: 3000,
          });

          // add({
          //           title: response,
          //         })
        }}>
        say hello
      </button>
    </div>
  );
};

export default ComponentsList;
