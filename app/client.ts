// @filename: client.ts
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './server';

// Notice the <AppRouter> generic here.
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

const user = await trpc.userById.query('1');
// Inferred types
user.id;
user.name;

const createdUser = await trpc.userCreate.mutate({ name: 'sachinraja' });

createdUser.id;
createdUser.name;
trpc.
