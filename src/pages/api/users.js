import dbConnect from '@/lib/mongodb';  // Make sure path is correct
import User from '@/models/user';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();

      const user = await User.create(req.body);
      return res.status(201).json({ message: 'User saved', user });
    } catch (error) {
      console.error('MongoDB error:', error);
      return res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
