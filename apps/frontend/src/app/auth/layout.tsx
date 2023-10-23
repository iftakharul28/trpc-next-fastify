import { getUserAuth } from '@frontend/src/lib/auth/utils';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { session } = await getUserAuth();
  if (session?.user) redirect('/');
  return <section className='grid place-items-center min-h-screen'>{children}</section>;
}
