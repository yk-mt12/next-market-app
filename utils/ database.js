import { connect, set } from "mongoose";

const connectDB = async () => {
  try {
    set("strictQuery", true);
    await connect(
      "mongodb+srv://82u9tLCfMPEa3:UpfyRgSaJfE2TArn@cluster0.kgevfyl.mongodb.net/appDataBase?retryWrites=true&w=majority"
    );

    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
