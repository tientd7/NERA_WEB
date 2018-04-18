using NERA_WEB_APP.CustomMemberShip;
using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace NERA_WEB_APP.Controllers
{
    public class ServicesController : Controller
    {
        // GET: Services
        DataContext db = new DataContext();
        [CustomAuthorize(Roles = "Admin,Mod")]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult details(int id)
        {
            var obj = db.Cs_Menu_item.Where(i => i.Item_Id == id).FirstOrDefault();
            return View(obj);
        }


        // chi tiet 
        [CustomAuthorize(Roles = "Admin,Mod")]
        public JsonResult getDetails(int Id)
        {
            db = new DataContext();
            Cs_Menu_item menu = new Cs_Menu_item();
            menu = db.Cs_Menu_item.Find(Id);
            return Json(menu, JsonRequestBehavior.AllowGet);
        }

        [CustomAuthorize(Roles = "Admin")]
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
            newObj.Item_Type = "DV".ToString();
            newObj.Language = Request.Form["Language"];
            newObj.Meta_Desc = Request.Form["MetaDesc"];
            newObj.Meta_Key = Request.Form["MetaKey"];
            newObj.Item_Content = Request.Unvalidated["Item_Content"];
            db.Cs_Menu_item.Add(newObj);
            db.SaveChanges();
            return RedirectToAction("Index");
        }


        public ActionResult Edit(int id)
        {
            var obj = db.Cs_Menu_item.Where(i => i.Item_Id==id).FirstOrDefault();
            return View(obj);
        }

       
        [HttpPost]
        [CustomAuthorize(Roles = "Mod,Admin")]
        public ActionResult Edit(Cs_Menu_item menu)
        {
            
            menu.Item_Type = "DV".ToString();
            menu.Language = Request.Form["Language"];
            menu.Meta_Desc = Request.Form["MetaDesc"];
            menu.Meta_Key = Request.Form["MetaKey"];
            menu.Item_Content = Request.Unvalidated["Item_Content"];
            db.Entry(menu).State = EntityState.Modified;
            db.SaveChanges();
            return Redirect("Index");
            
            

        }

        public JsonResult showDV()
        {
            var hienthi = (from i in db.Cs_Menu_item where i.Item_Type == "DV" select i).ToList();
            return new JsonResult { Data = hienthi, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public JsonResult showDvEnable()
        {
            var hienthi = (from i in db.Cs_Menu_item where i.Item_Type == "DV" && i.Enable == true select i).ToList();
            return new JsonResult { Data = hienthi, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public JsonResult del(Cs_Menu_item menuItem)
        {
            db = new DataContext();
            menuItem.Enable = false;
            db.Entry(menuItem).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json(menuItem);
        }
        //public ActionResult Edit1(int id)
        //{
        //    var obj = db.Cs_Menu_item.Find(id);
        //    return View(obj);
        //}

        //[CustomAuthorize(Roles = "Mod,Admin")]
        //[HttpPost]
        //public ActionResult Edit1(Cs_Menu_item menu)
        //{
        //    menu.Language = Request.Form["Language"];
        //    menu.Meta_Desc = Request.Form["MetaDesc"];
        //    menu.Meta_Key = Request.Form["MetaKey"];
        //    menu.Item_Content = Request.Unvalidated["Item_Content"];
        //    UpdateModel(menu);
        //    db.SaveChanges();
        //    return RedirectToAction("Index");
        //}


    }

}
    