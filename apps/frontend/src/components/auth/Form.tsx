'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Action = '/api/auth/sign-in' | '/api/auth/sign-up' | '/api/auth/sign-out';

const AuthForm = ({ children, action }: { children?: React.ReactNode; action: Action }) => {
  const router = useRouter();
  const [errors, setErrors] = useState<{ error: string } | null>(null);
  const [loading, setLoading] = useState(false);
  return (
    <form
      action={action}
      method='post'
      className='mt-4'
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors(null);
        const formData = new FormData(e.currentTarget);
        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          redirect: 'manual',
        });

        if (response.status === 0) {
          // redirected
          // when using `redirect: "manual"`, response status 0 is returned
          return router.refresh();
        }
        setErrors(await response.json());
        setLoading(false);
      }}>
      {errors ? (
        <div className='bg-red-100 p-3 my-4'>
          <h3 className='font-bold text-md'>Error!</h3>
          <p className='text-sm'>{errors.error}</p>
        </div>
      ) : null}
      {children}
      <SubmitButton action={action} loading={loading} />
    </form>
  );
};

export default AuthForm;

const SubmitButton = ({ action, loading }: { action: Action; loading: boolean }) => {
  let buttonSuffix = '';
  switch (action) {
    case '/api/auth/sign-in':
      buttonSuffix = 'in';
      break;
    case '/api/auth/sign-out':
      buttonSuffix = 'out';
      break;
    case '/api/auth/sign-up':
      buttonSuffix = 'up';
      break;
  }
  return (
    <button
      type='submit'
      className={`p-2.5 rounded-md font-medium text-white text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed ${
        action === '/api/auth/sign-out' ? 'bg-red-500' : 'bg-slate-900 w-full'
      }`}
      disabled={loading}>
      Sign{loading ? 'ing' : ''} {buttonSuffix}
    </button>
  );
};
