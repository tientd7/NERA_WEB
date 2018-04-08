using NERA_WEB_APP.CustomMemberShip;
using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
   
    public class BaiVietMVCController : Controller
    {
        DataContext db = new DataContext();
        // GET: BaiVietMVC

        [CustomAuthorize(Roles = "Mod,Admin")]
        public ActionResult Index()
        {
            var LST = (from obj in db.CS_Post_Info select obj).ToList();
            return View(LST);
        }

        [CustomAuthorize(Roles = "Mod,Admin")]
        public ActionResult Create()
        {
            ViewBag.CBXMenuItem = (from s in db.Cs_Menu_item where s.Item_Type.Equals("SP") && s.Enable==true select s).ToList();
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
            newObj.Item_ID = Request.Form["Item_Id"];
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

            return RedirectToAction("Index");
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
            Slide.Item_ID = Request.Form["Item_Id"];
            db.Entry(Slide).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        [CustomAuthorize(Roles = "Mod,Admin")]
        public ActionResult Edit1(int Post_Id)
        {
            var obj = db.CS_Post_Info.Find(Post_Id);
            return View(obj);
        }

        
       



        //public ActionResult Delete(int Post_Id)
        //{
        //    String er = "";
        //    try
        //    {
        //        CS_Post_Info de = db.CS_Post_Info.Where(x=>x.Post_Id == Post_Id).FirstOrDefault();
        //        db.CS_Post_Info.Remove(de);
        //        db.SaveChanges();
        //    }
        //    catch (Exception e)
        //    {
        //        er = e.StackTrace; 
        //    }

        //    return RedirectToAction("Index", "BaiVietMVC");
        //}
        //public ActionResult del(int Post_Id)
        //{
        //    CS_Post_Info de = db.CS_Post_Info.Where(x => x.Post_Id == Post_Id).FirstOrDefault();
        //    db.CS_Post_Info.Remove(de);
        //    db.SaveChanges();
        //    return RedirectToAction("Index", "BaiVietMVC");
        //}

        [CustomAuthorize(Roles = "Mod,Admin")]
        public ActionResult delete(int Post_Id)
        {
            CS_Post_Info de = db.CS_Post_Info.Where(x => x.Post_Id == Post_Id).FirstOrDefault();
            db.CS_Post_Info.Remove(de);
            db.SaveChanges();
            return RedirectToAction("Index", "BaiVietMVC");
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
            return RedirectToRoute("Home/index");
        }



        [AllowAnonymous]
        public ActionResult Index1()
        {
            var LST = (from obj in db.CS_Post_Info select obj).ToList();
            return View(LST);
        }
    }
}

