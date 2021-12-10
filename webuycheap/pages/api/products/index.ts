import { product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { NextApiRequest, NextApiResponse } from "next";
import { getTopProducts, insertProducts } from "../../../managers/ProductManager";

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  // const products = await getTopProducts(100);

  const productsToInsert: product[] = [{
    name:  'TestProduct',
    description: 'TestDescription',
    price: new Decimal(5),
    link: 'TestLink'
  },{
    name:  'TestProduct',
    description: 'TestDescription',
    price: new Decimal(5),
    link: 'TestLink'}
]

  insertProducts(productsToInsert);
  
  res.status(200).json('Hello there!');
}

export default handler;