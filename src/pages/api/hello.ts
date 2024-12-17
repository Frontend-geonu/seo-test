import type { NextApiRequest, NextApiResponse } from "next";

const DELAY_TIME = 100000;

export default async function handler(req: any, res: any) {
  // 100ms 뒤에 응답 반환
  setTimeout(() => {
    res
      .status(200)
      .json({ message: `This response was delayed by ${DELAY_TIME}ms` });
  }, DELAY_TIME);
}
