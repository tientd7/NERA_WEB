﻿using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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

        public JsonResult AllSlide()
        {
            var LST = from obj in db.CS_Post_Slides select obj;
            return Json(LST, JsonRequestBehavior.AllowGet);
        }
        public ActionResult ThemSlide()
        {
            return View();
        }
        [HttpPost]
        public JsonResult ThemSlide(CS_Post_Slides Obj)
        {
            CS_Post_Slides newObj = new CS_Post_Slides();
            int id = new App_Auto_NumberController().GenID("CS_Posts_Slides.Post_Id");
            newObj.Post_Id = id;
            newObj.Tbl_Id = Obj.Tbl_Id;
            newObj.Image_Title = Obj.Image_Title;
            newObj.Image_Url = Obj.Image_Url;
            newObj.Image_Link = Request.Form["LinkAnh"];
            newObj.Image_Order = Obj.Image_Order;
            newObj.Enable = Obj.Enable;
            newObj.Language = Obj.Language;
            db.CS_Post_Slides.Add(newObj);
            db.SaveChanges();
            return Json(newObj);

        }

        [HttpPost]
        public JsonResult Detail(int Id)
        {
            var obj = db.CS_Post_Slides.Where(i => i.Post_Id == Id).FirstOrDefault();
            return Json(obj, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Edit(int id)
        {
            var obj = db.CS_Post_Slides.Find(id);
            return View(obj);
        }
        [HttpPost]
        public JsonResult Edit(CS_Post_Slides Slide)
        {
            String er = "";
            try
            {

                db.Entry(Slide).State = EntityState.Modified;

                db.SaveChanges();
            }
            catch (Exception e)
            {
                er = e.StackTrace; ;
            }
            return Json(er);
        }

        [HttpPost]
        public JsonResult Delete(int Post_Id)
        {
            String er = "";
            try
            {
                var de = db.CS_Post_Slides.Where(i => i.Post_Id == Post_Id).FirstOrDefault();
                db.CS_Post_Slides.Remove(de);
                db.SaveChanges();
            }
            catch (Exception e)
            {
                er = e.StackTrace; ;
            }

            return Json(er);
        }
    }
}