import { db1, db2 } from "./prisma";

async function main() {
  try {
    const todos = await db1.todo.findMany();
    const users = await db2.user.findMany();

    console.log(todos, users);
  } catch (err) {
    console.log(err);
  }
}

main();