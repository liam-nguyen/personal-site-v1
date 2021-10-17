import { NextApiRequest, NextApiResponse } from 'next';
import data from '@data/skills.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const skills = data;

        return res.status(200).json(skills);
    }
};
