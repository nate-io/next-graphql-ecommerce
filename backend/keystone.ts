import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { User } from './schemas/User';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://locahost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long to stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseUrl,
    // TODO: add data seeding to db prop
  },
  lists: createSchema({
    // TODO: schema items here
    User,
  }),
  ui: {
    // TODO: RBAC goes here
    isAccessAllowed: () => true,
  },
});
