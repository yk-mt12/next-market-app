import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../utils/ database";
import { ItemModel } from "../../../../utils/schemaModels";

type Data = {
  message: string;
};

const createItem = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await connectDB();

    console.log(req.body);
    ItemModel.create(req.body);

    return res.status(200).json({ message: "アイテム作成成功" });
  } catch (err) {
    res.status(400).json({ message: "アイテム作成失敗" });
  }
};

export default createItem;
