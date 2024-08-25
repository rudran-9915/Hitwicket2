import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://vijayakaran348:P$WR5*j_sbD5Vm7@cluster0.irkik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log("Error while connecting to DB", err.message);
  });

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vijayakaran348:P$WR5*j_sbD5Vm7@cluster0.irkik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("connected to database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDatabase();
