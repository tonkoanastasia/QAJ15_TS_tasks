import { readFileSync } from 'fs';

type User = {
  id: number;
  username: string;
  role: string;
};

type RoleInfo = {
  count: number;
  users: { id: number; username: string }[];
};

const users: User[] = JSON.parse(readFileSync('users.json', 'utf8'));

const result = users.reduce((acc, { id, username, role }) => {
  if (!acc[role]) {
    acc[role] = {
      count: 0,
      users: [],
    };
  }

  acc[role].count += 1;
  acc[role].users.push({ id, username });

  return acc;
}, {});

console.dir(result, { depth: 6 });
