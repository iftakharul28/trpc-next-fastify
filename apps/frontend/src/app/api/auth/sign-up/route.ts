import { LuciaError } from 'lucia';
import * as context from 'next/headers';
import { NextResponse } from 'next/server';
import { auth } from '../../../../lib/auth/lucia';
import { signUpSchema } from '../../../../lib/schema/authSchema';
import type { NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');
  const password = formData.get('password');
  // basic check
  try {
    const authData = await signUpSchema.parseAsync({ email, firstname, lastname, password });
    const user = await auth.createUser({
      key: {
        providerId: 'email', // auth method
        providerUserId: authData.email.toLowerCase(), // unique id when using "username" auth method
        password: authData.password, // hashed by Lucia
      },
      attributes: {
        username: authData.firstname.toLowerCase(),
        name: authData.firstname + ' ' + authData.lastname,
        email: authData.email,
      },
    });
    const session = await auth.createSession({
      userId: user.userId,
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
    if (e instanceof LuciaError && e.message === 'AUTH_DUPLICATE_KEY_ID') {
      return NextResponse.json(
        {
          error: 'Username already taken',
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
