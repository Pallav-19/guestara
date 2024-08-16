import mongoose from 'mongoose';

const connectDb = (callback = () => {}) => {
  mongoose
    .connect(process.env.ATLAS_URI)
    .then(() => callback(true))
    .catch((err) => callback(false, err));
};

export default connectDb;
