import { NextApiRequest, NextApiResponse } from 'next';

//TODO: JUST SAMPLE CODE - TO BE DELETED

export default (req: NextApiRequest, res: NextApiResponse): void => {
    res.status(200).json({ text: 'Hello' });
};
