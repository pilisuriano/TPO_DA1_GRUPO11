import jwt from 'jsonwebtoken'
import User from "../models/user.model.js"

export const protectRoute = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    const token = authHeader.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !token) {
			return res.status(401).json({ error: "Unauthorized: Invalid Token" });
		}
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();

  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}