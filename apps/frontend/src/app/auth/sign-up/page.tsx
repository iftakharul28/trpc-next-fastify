import AuthForm from '@frontend/src/components/form/AuthForm';

import Link from 'next/link';

const SignUpPage = async () => {
  return (
    <main className='max-w-lg lg:w-full mx-auto bg-slate-100 p-10'>
      <h1 className='text-2xl font-bold text-center'>Create an account</h1>
      <AuthForm action='/api/auth/sign-up'>
        <label htmlFor='firstname' className='block font-medium text-sm text-slate-500'>
          First Name
        </label>
        <input name='firstname' id='firstname' placeholder='First Name' className='block w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-slate-700' />
        <br />
        <label htmlFor='lastname' className='block font-medium text-sm text-slate-500'>
          Last Name
        </label>
        <input name='lastname' id='lastname' placeholder='Last Name' className='block w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-slate-700' />
        <br />
        <label htmlFor='email' className='block font-medium text-sm text-slate-500'>
          Email
        </label>
        <input name='email' id='email' placeholder='Email' className='block w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-slate-700' />
        <br />
        <label htmlFor='password' className='block font-medium text-sm text-slate-500'>
          Password
        </label>
        <input type='password' name='password' id='password' placeholder='*****' className='block w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-slate-700' />
        <br />
      </AuthForm>
      <div className='mt-4 text-slate-500 text-center text-sm'>
        Already have an account?{' '}
        <Link href='/auth/sign-in' className='text-black underline hover:opacity-70'>
          Sign in
        </Link>
      </div>
    </main>
  );
};

export default SignUpPage;
