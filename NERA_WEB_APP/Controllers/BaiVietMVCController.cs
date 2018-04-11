﻿using NERA_WEB_APP.CustomMemberShip;
using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace NERA_WEB_APP.Controllers
{

    public class BaiVietMVCController : Controller
    {
        DataContext db = new DataContext();
        // GET: BaiVietMVC


        // get cookie
        private void getCookie()
        {

            string cookieName = FormsAuthentication.FormsCookieName;
            var authCookie = HttpContext.Request.Cookies[cookieName];
            var authTicket = FormsAuthentication.Decrypt(authCookie.Value);
            if (authTicket != null)
            {
                ViewBag.show = authTicket.Name;
            }
            else
            {
                ViewBag.show = "not ok";
            }
        }


        //[CustomAuthorize(Roles = "Mod,Admin")]
        //public ActionResult Index(int id)
        //{
        //    Session["id"] = id;
        //    var LST = (from obj in db.CS_Post_Info where obj.Item_ID == id select obj).ToList();
        //    return View(LST);
        //}


        [CustomAuthorize(Roles = "Mod,Admin")]
        public ActionResult Index()
        {
            var LST = (from obj in db.CS_Post_Info  select obj).ToList();
            return View(LST);
        }

        [CustomAuthorize(Roles = "Mod,Admin")]
        public ActionResult Create()
        {
            ViewBag.CBXMenuItem = (from s in db.Cs_Menu_item where s.Item_Type.Equals("SP") && s.Enable == true select s).ToList();
            return View();
        }

        [CustomAuthorize(Roles = "Mod,Admin")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        [ValidateInput(false)]
        public ActionResult Create(CS_Post_Info objInfo, List<String> slides)
        {
            

            CS_Post_Info newObj = new CS_Post_Info();
            int id = new App_Auto_NumberController().GenID("CS_Posts_Info.Post_Id");
            newObj.Post_Id = id;
            newObj.Create_By = 1;
            newObj.Create_Date = DateTime.Now;
            newObj.Update_By = 1;
            newObj.Update_Date = DateTime.Now;
            newObj.Enable = objInfo.Enable;
            newObj.Item_ID = Convert.ToInt32(Request.Form["Item_Id"]);
            newObj.Language = Request.Form["Language"];
            newObj.Meta_Desc = Request.Form["MetaDesc"];
            newObj.Meta_Key = Request.Form["MetaKey"];
            newObj.Post_Content = Request.Unvalidated["Post_Content"];
            newObj.Post_Title = objInfo.Post_Title;
            newObj.Gia = objInfo.Gia;
            newObj.Dathue = objInfo.Dathue;
            db.CS_Post_Info.Add(newObj);
            db.SaveChanges();
            foreach (string s in slides)
            {
                if (!String.IsNullOrEmpty(s))
                {

                    CS_Post_Slides Post = new CS_Post_Slides();
                    Post.Tbl_Id = new App_Auto_NumberController().GenID("CS_Post_Slides.Tbl_Id");
                    Post.Post_Id = id;
                    Post.Image_Link = s;
                    db.CS_Post_Slides.Add(Post);
                    db.SaveChanges();
                }
            }
            return RedirectToAction("Index","BaiVietMVC",new { id = Session["id"]});
        }

        [CustomAuthorize(Roles = "Mod,Admin")]
        public ActionResult Edit(int Post_Id)
        {
            var obj = db.CS_Post_Info.Find(Post_Id);
            ViewBag.CBXMenuItem = (from s in db.Cs_Menu_item where s.Item_Type.Equals("SP") select s).ToList();
            return View(obj);
        }

        [CustomAuthorize(Roles = "Mod,Admin")]
        [HttpPost]
        public ActionResult Edit(CS_Post_Info Slide)
        {
            Slide.Create_By = 1;
            Slide.Create_Date = DateTime.Now;
            Slide.Update_By = 1;
            Slide.Update_Date = DateTime.Now;
            Slide.Meta_Desc = Request.Form["MetaDesc"];
            Slide.Meta_Key = Request.Form["MetaKey"];
            Slide.Item_ID = Convert.ToInt32(Request.Form["Item_Id"]);
            db.Entry(Slide).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Index", new { id = Session["id"] });
        }

        [CustomAuthorize(Roles = "Mod,Admin")]
        public ActionResult Edit1(int Post_Id)
        {
            var obj = db.CS_Post_Info.Find(Post_Id);
            return View(obj);
        }






       


        [CustomAuthorize(Roles = "Mod,Admin")]
        public ActionResult dele(int Post_Id)
        {


            var post = db.CS_Post_Info.Where(i => i.Post_Id == Post_Id).FirstOrDefault();
            post.Enable = false;
            db.Entry(post).State = EntityState.Modified;
            db.SaveChanges();
            return Content("<script language='javascript' type='text/javascript'>comfirm('Thanks for Feedback!');</script>");

            //return RedirectToAction("Index", "BaiVietMVC", new { id = Session["id"]});
        }


        [AllowAnonymous]
        public ActionResult Details(int Post_Id)
        {
            var obj = db.CS_Post_Info.Where(t => t.Enable && t.Post_Id == Post_Id);
            if (obj.Count() > 0)
            {
                var slides = from s in db.CS_Post_Slides where s.Post_Id == Post_Id && s.Enable select s;
                PostDetailViewModel objView = new PostDetailViewModel(obj.First(), slides.ToList());
                return View(objView);
            }
            return RedirectToRoute("BaiVietMVC/index");

        }



        [AllowAnonymous]
        public ActionResult Index1()
        {
            var LST = (from obj in db.CS_Post_Info where obj.Enable == true select obj).ToList();
            return View(LST);
        }
        [AllowAnonymous]
        public JsonResult delete(int Post_Id)
        {
            String er = "";
            try
            {
                var de = db.CS_Post_Info.Find(Post_Id);
                de.Enable = false;
                db.Entry(de).State = EntityState.Modified;
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

