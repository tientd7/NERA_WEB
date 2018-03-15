using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class MenuController : Controller
    {
        DataContext db = new DataContext();
        // GET: Menu
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetAllMenu()
        {
            //Lấy ds từ db
            var LST = (from obj in db.CS_Menu_Item select obj).ToList();
            return Json(LST, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Edit(int id)
        {
            var obj = db.CS_Menu_Item.Find(id);
            return View(obj);
        }
        [HttpPost]
        public JsonResult Edit(CS_Menu_Item csitem)
        {
            String Rs = "";
                if (csitem.Item_Id> 0)
                {
                    
                    db.Entry(csitem);
                    db.SaveChanges();
                }
            return Json(Rs);


            }
        public ActionResult CreatMenu()
        {

            return View();
        }
        [HttpPost]
        public JsonResult CreatMenu(CS_Menu_Item Obj)
        {
            CS_Menu_Item newObj = new CS_Menu_Item();
            int id = new App_Auto_NumberController().GenID("CS_Menu_Item.Item_Id");
            newObj.Item_Id = Obj.Item_Id;
            newObj.Item_Name = Obj.Item_Name;
            newObj.Enable = Obj.Enable;
            newObj.Item_Type = Obj.Item_Type;
            newObj.Meta_Desc = Obj.Meta_Desc;
            newObj.Meta_Key = Obj.Meta_Key;
            newObj.Language = Obj.Language;


            db.CS_Menu_Item.Add(newObj);
            db.SaveChanges();
            return Json(newObj);
        }

        [HttpPost]
        public JsonResult delete(int Item_Id)
        {
            String er = "";
            try
            {
                var de = db.CS_Menu_Item.Find(Item_Id);
                db.CS_Menu_Item.Remove(de);
                db.SaveChanges();
            }
            catch (Exception e)
            {
                er = e.StackTrace; ;
            }

            return Json(er);
        }
        public JsonResult Detail(int? Id)
        {
            var obj = db.CS_Menu_Item.Find(Id);
            return Json(obj, JsonRequestBehavior.AllowGet);
        }
    }
}

