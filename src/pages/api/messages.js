import dbConnect from '@/lib/mongodb';
import User from '@/models/message';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();
      const message = await User.create(req.body);
      return res.status(201).json({ message: 'Message sent', message });
    } catch (error) {
      console.error('MongoDB error:', error);
      return res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
