using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class BaiVietMVCController : Controller
    {
        DataContext db = new DataContext();
        // GET: BaiVietMVC
        public ActionResult Index()
        {
            var LST = (from obj in db.CS_Post_Info select obj).ToList();
            return View(LST);
        }
        public ActionResult Create()
        {
            return View();
        }
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
            newObj.Item_ID = Convert.ToInt32(Request.Form["Item"]);
            newObj.Language = Request.Form["Language"];
            newObj.Meta_Desc = Request.Form["MetaDesc"];
            newObj.Meta_Key = Request.Form["MetaKey"];
            newObj.Post_Content = Request.Unvalidated["Post_Content"];
            newObj.Post_Title = objInfo.Post_Title;
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
            var showmn = from i in db.Cs_Menu_item select i;

            ViewBag.data = showmn;
            return View(showmn);
        }
        public ActionResult Edit(int id)
        {
            var obj = db.CS_Post_Info.Find(id);
            return View(obj);
        }
        [HttpPost]
        public ActionResult Edit(CS_Post_Info Slide)
        {

            var obj = db.CS_Post_Info.Find(Slide.Post_Id);
            bool saveFailed;
          

                try
                {
                    db.Entry(Slide).State =EntityState.Modified; 
                    db.SaveChanges();
                }
                catch (DbUpdateConcurrencyException ex)
                {
                    

                    // Update the values of the entity that failed to save from the store 
                    ex.Entries.Single().Reload();
                }

             
            return View(Slide);

        }
        [HttpPost]
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
        public ActionResult del(int Post_Id)
        {
            CS_Post_Info de = db.CS_Post_Info.Where(x => x.Post_Id == Post_Id).FirstOrDefault();
            db.CS_Post_Info.Remove(de);
            db.SaveChanges();
            return RedirectToAction("Index", "BaiVietMVC");
        }

        public ActionResult delete(int Post_Id)
        {
            CS_Post_Info de = db.CS_Post_Info.Where(x => x.Post_Id == Post_Id).FirstOrDefault();
            db.CS_Post_Info.Remove(de);
            db.SaveChanges();
            return RedirectToAction("Index", "BaiVietMVC");
        }
    }
}

