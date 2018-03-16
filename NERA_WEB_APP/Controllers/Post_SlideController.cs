using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class Post_SlideController : Controller
    {
        DataContext db = new DataContext();
        // GET: Post_Slide
        public ActionResult Index()
        {
            return View();
        }   
          public JsonResult GetAllSlide()
            {
                //Lấy ds từ db
                var LST = (from obj in db.CS_Posts_Slides select obj).ToList();
                return Json(LST, JsonRequestBehavior.AllowGet);
            }
        public ActionResult CreateSlide()
        {
            return View();
        }
        [HttpPost]
        public JsonResult CreateSlide(CS_Posts_Slides Obj)
        {
            CS_Posts_Slides newObj = new CS_Posts_Slides();
            int id = new App_Auto_NumberController().GenID("CS_Posts_Slides.Post_Id");
            newObj.Post_Id = Obj.Post_Id;
            newObj.Tbl_Id = Obj.Tbl_Id;
            newObj.Image_Title = Obj.Image_Title;
            newObj.Image_URL = Obj.Image_URL;
            newObj.Image_Link = Obj.Image_Link;
            newObj.Image_Order = Obj.Image_Order;
            newObj.Enable = Obj.Enable;
            newObj.Language = Obj.Language;


            db.CS_Posts_Slides.Add(newObj);
            db.SaveChanges();
            return Json(newObj);
        }


        public ActionResult abc()
        {
            return View();
        }


    }
}
