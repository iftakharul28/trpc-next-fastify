import { trpc } from './lib/trpc';
function App() {
  const { data: greeting } = trpc.example.hello.useQuery({ name: 'From Server' });
  const { data: user } = trpc.example.user.useQuery();
  const { mutate: add } = trpc.example.add.useMutation({
    onSuccess: (value) => {
      alert(value);
    },
  });

  return (
    <div className='max-w-5xl mx-auto md:p-0 p-6'>
      <h1>Vite + React</h1>
      <h2>{greeting}</h2>
      <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(user, null, 2)}</pre>
      <button
        type='button'
        onClick={() =>
          add({
            title: 'hi there',
          })
        }>
        add{' '}
      </button>
    </div>
  );
}

export default App;
