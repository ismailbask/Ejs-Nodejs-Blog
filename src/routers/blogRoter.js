const router=require("express").Router();
const blogController=require("../controllers/blogController");
router.get("/", blogController.tumMakaleleriGetir);
router.get("/blog", blogController.tumMakaleleriGetir);
router.get("/:makaleID", blogController.tekMakaleGetir);
router.post("/",blogController.aramaYap);

module.exports=router;