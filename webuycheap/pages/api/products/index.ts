import { NextApiRequest, NextApiResponse } from "next";
import { getTopProducts, insertProducts } from "../../../managers/ProductManager";

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  const products = await getTopProducts(100);
  
  res.status(200).json(products);
}

export default handler;