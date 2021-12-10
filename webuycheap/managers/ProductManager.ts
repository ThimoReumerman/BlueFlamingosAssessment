import {PrismaClient, product } from '@prisma/client';

const prisma = new PrismaClient();

const getTopProducts = async (count: number): Promise<product[]> => {
  const products = await prisma.product.findMany({take: count});

  return products;
}

const insertProducts = async (products: product[]): Promise<boolean> => {
  const created = await prisma.product.createMany({
    data: products,
    skipDuplicates: true
  } );
  
  if (created.count == 0) return false;

  return true;
}

export {getTopProducts, insertProducts};