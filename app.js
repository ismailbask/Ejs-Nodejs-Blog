const express=require("express");
const app=express();
const ejs=require("ejs");
const expressLayout=require("express-ejs-layouts");
const path=require("path");
const blogRouter=require("./src/routers/blogRoter");
app.use(expressLayout);
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"./src/views"));//normalde views klasörüne bakacak fakat biz views klasörünü src klasörünün içine attık, yeni yol tanımlaması yapmak gerekti.
app.use(express.urlencoded({extended:true}));

app.use("/",blogRouter);
app.use("/blog",blogRouter);


app.listen(3000, () => {
    console.log("Server 3000 portunda çalışıyor...");
});
