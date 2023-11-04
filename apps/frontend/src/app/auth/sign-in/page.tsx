import AuthForm from '@frontend/src/components/form/AuthForm';
import Link from 'next/link';

const SignInPage = async () => {
  return (
    <main className='max-w-lg lg:w-full mx-auto bg-slate-100 p-10'>
      <h1 className='text-2xl font-bold text-center'>Sign in to your account</h1>
      <AuthForm action='/api/auth/sign-in'>
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
      <div className='mt-4 text-sm text-center text-slate-500'>
        Don&apos;t have an account yet?{' '}
        <Link href='/auth/sign-up' className='text-black underline hover:opacity-70'>
          Create an account
        </Link>
      </div>
    </main>
  );
};

export default SignInPage;
