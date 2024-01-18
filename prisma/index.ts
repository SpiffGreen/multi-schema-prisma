import { PrismaClient as PrismaClient1 } from "../prisma_clients/client1";
import { PrismaClient as PrismaClient2 } from "../prisma_clients/client2";

export const db1 = new PrismaClient1();
export const db2 = new PrismaClient2();

export default {
  db1,
  db2,
};
