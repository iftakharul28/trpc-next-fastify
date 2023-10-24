import { trpc } from './lib/trpc';
import { useState, useEffect } from 'react';
function App() {
  const [greeting, setGreeting] = useState('');
  const [user, setUser] = useState<unknown>();
  useEffect(() => {
    trpc.example.hello.query({ name: 'Iftakharul Alam' }).then((response) => {
      setGreeting(response);
    });
    trpc.example.user.query().then((response) => {
      setUser(response);
    });
  }, []);
  return (
    <>
      <h1>Vite + React</h1>
      <h2>{greeting}</h2>
      <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}

export default App;
