// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    const body = req.body;

    const newUser = {
      _ID: 1,
      ...body,
    };

    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: "Allowed methods: [POST]" });
  }
}
