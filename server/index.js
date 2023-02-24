const { cartRouter } = require('./Users/Routes/cart.route');
const { userRouter } = require('./Users/Routes/users.routes');




app.use("/cart",cartRouter);
app.use('/users',userRouter);