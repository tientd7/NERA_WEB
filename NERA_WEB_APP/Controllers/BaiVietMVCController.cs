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
        public ActionResult Create(CS_Post_Info objInfo)
        {
            CS_Post_Info newObj = new CS_Post_Info();
            int id = new App_Auto_NumberController().GenID("CS_Posts_Info.Post_Id");
            newObj.Post_Id = id;
            newObj.Create_By = 1;
            newObj.Create_Date = DateTime.Now;
            newObj.Update_By = 1;
            newObj.Update_Date = DateTime.Now;
            newObj.Enable = objInfo.Enable;
            newObj.Item_ID = objInfo.Item_ID;
            newObj.Language = objInfo.Language;
            newObj.Meta_Desc = objInfo.Meta_Desc;
            newObj.Meta_Key = objInfo.Meta_Key;
            newObj.Post_Content = Request.Unvalidated["Post_Content"];
            newObj.Post_Title = objInfo.Post_Title;
            db.CS_Post_Info.Add(newObj);
            db.SaveChanges();
            return View(newObj);
        }
        public ActionResult Edit(int id)
        {
            var obj = db.CS_Post_Info.Find(id);
            return View(obj);
        }
        [HttpPost]
        public ActionResult Edit(CS_Post_Info Slide)
        {
            
                var obj = db.CS_Post_Info.Find(1);
            Slide.Post_Content = Request.Unvalidated["Post_Content"];



            bool saveFailed;
                do
                {
                    saveFailed = false;

                    try
                    {
                        db.SaveChanges();
                    }
                    catch (DbUpdateConcurrencyException ex)
                    {
                        saveFailed = true;

                        // Update the values of the entity that failed to save from the store 
                        ex.Entries.Single().Reload();
                    }

                } while (saveFailed);
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

