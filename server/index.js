const express=require("express")
const { connection } = require("./configs/db")
const { adminRouter } = require("./routes/admin.routes")
const {productRouter} =  require("./routes/product.route")
const { cartRouter } = require("./routes/cart.route");
const { userRouter } = require("./routes/user.route")
const { productRouter } = require("./routes/ProductRoute");
const cors= require("cors")

const app= express()
app.use(express.json())
app.use(cors({
    origin:"*"
}))
// if endpoint is "admin" then redirect it to the "adminRouter"
app.use("/admin",adminRouter)
//if endpoint if "product" then redirect it to the "productRouter"
app.use("/product",productRouter)
//if endpoint is "users" then redirect it to the "userRouter"
app.use("/users",userRouter)

//if endpoint is "cart" then redirect it to the "cartRouter"
app.use("/cart", cartRouter);

app.use("/products",productRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to the db");
  } catch {
    console.log("can not connect to the db");
  }

  console.log("server is running at port", process.env.PORT);
});
