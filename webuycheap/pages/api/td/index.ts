import { NextApiRequest, NextApiResponse } from "next";
import {getProductList, insertProductListIntoDatabase} from '../../../managers/TradeDoublerManager';

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  const result = await getProductList();

  await insertProductListIntoDatabase(result);
  
  res.status(200).json(result);
}

export default handler;