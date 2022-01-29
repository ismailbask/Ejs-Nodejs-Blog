const axios=require("axios");
const tumMakaleleriGetir=async (req,res)=>{
    let sayfalama = "";
    aktifPage = 1;
    if (req.query.page) {
        sayfalama = "page=" + req.query.page;
        aktifPage = req.query.page;
    }
    try {
        const blogAPI=await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts?per_page=20&"+sayfalama);//istek axios ile birlikte gelen datanın içinde olacak.
        // console.log(blogAPI.headers);//sayfalama
        res.render('./makaleler/index',{makaleler:blogAPI.data,sayfalama:blogAPI.headers,aktifPage:aktifPage});//layoutun indexinden sonra nereye bakacağını burada söyledik.
    } catch (err) {
        // console.log(err.response.data);
        // console.log(err.response.status);
        // console.log(err.response.header);
        res.json({
            message:"Hata oluştu: "+err.response.data
        })
    }
    
};
const tekMakaleGetir=async(req,res)=>{
    let makaleID=req.params.makaleID;
    try {
        const tekMakale=await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts/"+makaleID);
        res.render("./makaleler/makale",{makale:tekMakale.data});
    } catch (err) {
        // console.log(err.response.data);
        // console.log(err.response.status);
        // console.log(err.response.header);
        res.json({
            message:"Hata oluştu: "+err.response.data
        })
    }
};
//sadasd
//değiştirildi
const aramaYap = async (req, res) => {
    aranacakKelime = req.body.search;
    
    //Türkçe harfleri ingilizce harflere dönüştürür, mesela çekiliş'i cekilis yapar. arama yaparken hata çıkmaz böylelikle.
    let combining = /[\u0300-\u036F]/g;
    aranacakKelime = aranacakKelime.normalize('NFKD').replace(combining, '');
    let sayfalama = "";
    aktifPage = 1;
    if (req.query.page) {
        sayfalama = "page=" + req.query.page;
        aktifPage = req.query.page;
    }
     
    try {
        const blogAPI=await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts?search="+aranacakKelime);//istek axios ile birlikte gelen datanın içinde olacak.
        // console.log(blogAPI.data);
        res.render('./makaleler/index',{makaleler:blogAPI.data,sayfalama:blogAPI.headers,aktifPage:aktifPage});//layoutun indexinden sonra nereye bakacağını burada söyledik.
    } catch (err) {
        // console.log(err.response.data);
        // console.log(err.response.status);
        // console.log(err.response.header);
        res.json({
            message:"Hata oluştu: "+err.response.data
        })
    }
  
}
module.exports={
    tumMakaleleriGetir,
    tekMakaleGetir,
    aramaYap
}