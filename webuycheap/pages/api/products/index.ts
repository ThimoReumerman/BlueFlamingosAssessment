import { NextApiRequest, NextApiResponse } from "next";
import { getTopProducts, insertProducts } from "../../../managers/ProductManager";

type Query = {
  count?: number
}

const maxProducts = 100;

const handler = async(req: NextApiRequest, res: NextApiResponse) => {

  // Parse query into Query type
  const count: number = parseInt(req.query.count?.toString());

  console.log(count);

  // Get top products limited to count
  const products = await getTopProducts(count > 0 ? count : maxProducts);
  
  // Return products
  res.status(200).json(products);
}

export default handler;