import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <div className='h-screen flex'>
      <main className='h-full w-full overflow-auto bg-card-4'>
        <Suspense fallback={<p>loading</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
