using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class Orther_SlideController : Controller
    {
        DataContext db = new DataContext();
        // GET: Orther_Slide
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetData()
        {

            List<CS_Other_Slide> List = db.CS_Other_Slide.ToList();
            return Json(List, JsonRequestBehavior.AllowGet);

        }

        public CS_Other_Slide getById(int Id)
        {
            return db.CS_Other_Slide.Find(Id);
        }
        [HttpPost]
        public JsonResult Insert(CS_Other_Slide item)
        {
            CS_Other_Slide obj = new CS_Other_Slide();
            obj.Tbl_Id = new App_Auto_NumberController().GenID("CS_Other_Slide.Tbl_Id");
            obj.Slide_Type = item.Slide_Type;
            obj.Language = item.Language;
            obj.Image_URL = item.Image_URL;
            obj.Image_Title = item.Image_Title;
            obj.Image_Order = item.Image_Order;
            obj.Image_Link = item.Image_Link;
            obj.Enable = item.Enable;
            db.CS_Other_Slide.Add(obj);
            db.SaveChanges();

            return Json("OK");
        }
        [HttpPost]
        public JsonResult Update(CS_Other_Slide Slide)
        {
            if (ModelState.IsValid)
            {
                db.Entry(Slide);
                db.SaveChanges();
                return Json("OK");
            }
            else
                return Json("ModelState Invalid!");
        }

        [HttpPost]
        public JsonResult Delete(int Delete_Id)
        {
            var obj = getById(Delete_Id);
            db.CS_Other_Slide.Remove(obj);
            db.SaveChanges();
            return Json("OK");
        }

    }
}