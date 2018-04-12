using NERA_WEB_APP.CustomMemberShip;
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
    public class ServicesController : Controller
    {
        // GET: Services
        DataContext db = new DataContext();
        [CustomAuthorize(Roles = "Admin")]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult details(int id)
        {
            var hienthi = db.Cs_Menu_item.Where(i => i.Item_Id == id && i.Item_Type.Equals("DV") && i.Enable == true).FirstOrDefault();
            return View(hienthi);
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
        public ActionResult Edit(int id)
        {
            var obj = db.Cs_Menu_item.Find(id);
            return View(obj);
        }
        [HttpPost]
        public ActionResult Edit(Cs_Menu_item menu)
        {
            menu.Item_Type = Request.Form["Type"];
            menu.Language = Request.Form["Language"];
            menu.Meta_Desc = Request.Form["MetaDesc"];
            menu.Meta_Key = Request.Form["MetaKey"];
            menu.Item_Content = Request.Unvalidated["Item_Content"];
            db.Entry(menu).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Index");

        }
    }

}
  
