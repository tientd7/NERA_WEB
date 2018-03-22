using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class ProductController : Controller
    {
        DataContext db = new DataContext();
        // GET: Product
        public ActionResult product()
        {
            return View();
        }


        //lấy danh sách sản phẩm có trong bảng MenuItem 
        public JsonResult showSP()
        {
            var show = from i in db.CS_Menu_Item where i.Item_Type == "SP" select i;
            return Json(show, JsonRequestBehavior.AllowGet);
        }

        public ActionResult details()
        {
            return View();
        }

        public ActionResult addNewProduct()
        {
            return View();
        }

        [HttpPost]
        public JsonResult addNewProduct(CS_Menu_Item Obj)
        {
            CS_Menu_Item newObj = new CS_Menu_Item();
            int id = new App_Auto_NumberController().GenID("CS_Menu_Item.Item_Id");
            newObj.Item_Id = id;
            newObj.Item_Name = Obj.Item_Name;
            newObj.Enable = true;
            newObj.Item_Type = Obj.Item_Type;
            newObj.Meta_Desc = Obj.Meta_Desc;
            newObj.Meta_Key = Obj.Meta_Key;
            newObj.Language = Obj.Language;
            db.CS_Menu_Item.Add(newObj);
            db.SaveChanges();
            return Json(newObj);
        }

        public JsonResult delete(int Id) {
            var dt = db.CS_Menu_Item.Find(Id);
            db.CS_Menu_Item.Remove(dt);
            db.SaveChanges();
            return Json(dt);
        }



    

        //lấy danh sách Dịch vụ có trong bảng MenuItem 
        public JsonResult showDV()
        {
            var show = from i in db.CS_Menu_Item where i.Item_Type == "DV" select i;
            return Json(show, JsonRequestBehavior.AllowGet);
        }




        // Item service

        public ActionResult Services()
        {
            return View();
        }
    }

}