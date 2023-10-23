import { auth } from '../../../../lib/auth/lucia';
import * as context from 'next/headers';
import { NextResponse } from 'next/server';
import { LuciaError } from 'lucia';
import type { NextRequest } from 'next/server';
import { signInSchema } from '../../../../lib/schema/authSchema';

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    const authData = await signInSchema.parseAsync({ email, password });
    const key = await auth.useKey('email', authData?.email.toLowerCase(), authData?.password);
    const session = await auth.createSession({
      userId: key.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest(request.method, context);
    authRequest.setSession(session);
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/', // redirect to profile page
      },
    });
  } catch (e: any) {
    if (e instanceof LuciaError && (e.message === 'AUTH_INVALID_KEY_ID' || e.message === 'AUTH_INVALID_PASSWORD')) {
      // user does not exist or invalid password
      return NextResponse.json(
        {
          error: 'Incorrect username or password',
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(
      {
        error: e.message,
      },
      {
        status: 500,
      }
    );
  }
};
