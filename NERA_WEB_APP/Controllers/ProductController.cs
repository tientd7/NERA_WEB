using NERA_WEB_APP.CustomMemberShip;
using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{

    public class ProductController : Controller
    {
        DataContext db = new DataContext();
        // GET: Product
        public ActionResult product(int id)
        {
            Session["id"] = id;
            var hienthi = (from i in db.CS_Post_Info where i.Item_ID == id && i.Enable == true select i).ToList();
            ViewBag.MenuName = db.Cs_Menu_item.Where(i => i.Item_Id == id).Select(i => i.Item_Name).FirstOrDefault();
            //ViewBag.MenuName = from name in db.Cs_Menu_item where name.Item_Id == id select name.Item_Name;
            return View(hienthi);
        }


        [CustomAuthorize(Roles = "Admin")]
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult hienthisanpham()
        {
            var hienthi = (from i in db.Cs_Menu_item where i.Item_Type == "SP" select i).ToList();
            return new JsonResult { Data = hienthi, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

        // hiển thị sản phẩm tồn tại
        public JsonResult productEnable()
        {
            var hienthi = (from i in db.Cs_Menu_item where i.Item_Type == "SP" && i.Enable == true select i).ToList();
            return new JsonResult { Data = hienthi, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }


        // chi tiet 
        public ActionResult details(int id)
        {
            var detail = db.CS_Post_Info.Where(x => x.Post_Id == id).FirstOrDefault();
            Session["Post_Id"] = detail.Post_Id;
            Session["Post_Title"] = detail.Post_Title;
            ViewBag.listImg =(
                from i in db.CS_Post_Slides
                select i).Take(3);
                
            return View(detail);
        }

        // get src images
        public JsonResult getImages()
        {
            var showImg = (from i in db.CS_Post_Slides select i).ToList();
            return new JsonResult {Data = showImg, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }


        public ActionResult addNewProduct()
        {
            return View();
        }


        // thêm mới sản phẩm
        [CustomAuthorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult addNewProduct(Cs_Menu_item Obj)
        {
            Cs_Menu_item newObj = new Cs_Menu_item();
            int id = new App_Auto_NumberController().GenID("Cs_Menu_item.Item_Id");
            newObj.Item_Id = id;
            newObj.Item_Name = Obj.Item_Name;
            newObj.Enable = true;
            newObj.Item_Type = "SP";
            newObj.Meta_Desc = Obj.Meta_Desc;
            newObj.Meta_Key = Obj.Meta_Key;
            newObj.Language = Obj.Language;
            newObj.Item_Content = Obj.Item_Content;
            db.Cs_Menu_item.Add(newObj);
            db.SaveChanges();
            return Json(newObj);
        }

        [CustomAuthorize(Roles = "Admin")]
        [HttpPost]
        public JsonResult getDetails(int Id)
        {
            db = new DataContext();
            Cs_Menu_item menu = new Cs_Menu_item();
            menu = db.Cs_Menu_item.Find(Id);
            return Json(menu, JsonRequestBehavior.AllowGet);
        }
        [CustomAuthorize(Roles = "Admin")]
        public JsonResult update(Cs_Menu_item Menu)
        {
            string str = "";
            try
            {
                db = new DataContext();
                db.Entry(Menu).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                str = "success";
                return Json(str);
            }
            catch (Exception e)
            {
                str = "error " + e;
                return Json(str);
            }

        }

        // xóa sản phẩm dịch vụ
        //public JsonResult delete(int Id)
        //{
        //    var dt = db.Cs_Menu_item.Find(Id);
        //    db.Cs_Menu_item.Remove(dt);
        //    db.SaveChanges();
        //    return Json(dt);
        //}

        // Update enable to false

        [CustomAuthorize(Roles = "Admin")]
        public JsonResult del(Cs_Menu_item menuItem)
        {
            db = new DataContext();
            menuItem.Enable = false;
            db.Entry(menuItem).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json(menuItem);
        }


       

        public JsonResult getDetails()
        {
            List<CS_Post_Info> listInfo = db.CS_Post_Info.ToList();
            List<CS_Post_Slides> listSlide = db.CS_Post_Slides.ToList();
            List<PostDetailViewModel> listdetail = listInfo.Select(x => new PostDetailViewModel
            {
                Post_Id = x.Post_Id,
                Slides = listSlide
            }).ToList();
            return Json(listdetail, JsonRequestBehavior.AllowGet);
        }

   
        public ActionResult Create()
        {
            return View();
        }
        [CustomAuthorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult Create(Cs_Menu_item Obj)
        {
            Cs_Menu_item newObj = new Cs_Menu_item();
            int id = new App_Auto_NumberController().GenID("Cs_Menu_item.Item_Id");
            newObj.Item_Id = id;
            newObj.Item_Name = Obj.Item_Name;
            newObj.Enable = true;
            newObj.Item_Type = Request.Form["Type"];
            newObj.Language = Request.Form["Language"];
            newObj.Meta_Desc = Request.Form["MetaDesc"];
            newObj.Meta_Key = Request.Form["MetaKey"];
            newObj.Item_Content = Request.Unvalidated["Item_Content"];
            db.Cs_Menu_item.Add(newObj);
            db.SaveChanges();
            return View(newObj);
        }
        [AllowAnonymous]
        [HttpPost]
        public JsonResult CreateUse(APP_User_Message obj)
        {
            APP_User_Message newobj = new APP_User_Message();
            int id = new App_Auto_NumberController().GenID("APP_User_Message.message_id");
            newobj.message_id = id;
            newobj.cus_name = obj.cus_name;
            newobj.cus_phone = obj.cus_phone;
            newobj.Item_Id = Convert.ToInt32(Session["id"]);
            newobj.Post_Id =Convert.ToInt32(Session["Post_Id"]);
            newobj.Post_Title =Convert.ToString(Session["Post_Title"]);
            newobj.create_date = DateTime.Now;
            newobj.unread = true;
            newobj.read_date = DateTime.Now;
            db.APP_User_Message.Add(newobj);
            db.SaveChanges();
            return Json("");

        }

        public ActionResult ThueNha()
        {
            return View();
        }

        public JsonResult HienThi()
        {
            var lstKH = (from obj in db.APP_User_Message select obj).ToList(); 
            return new JsonResult { Data = lstKH, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

    }

}