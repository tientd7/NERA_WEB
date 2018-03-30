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
        //public JsonResult showSP()
        //{
        //    db.Configuration.ProxyCreationEnabled = false;
        //    db.Configuration.LazyLoadingEnabled = false;
        //    var show = from i in db.CS_Menu_Item where i.Item_Type == "SP" select i;
        //    return new JsonResult { Data = show, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        //}


        public JsonResult hienthisanpham()
        {

            var hienthi = (from i in db.Cs_Menu_item where i.Item_Type == "SP" select i).ToList();
            return new JsonResult { Data = hienthi, JsonRequestBehavior = JsonRequestBehavior.AllowGet };


        }



        public ActionResult details()
        {
            return View();
        }


        public ActionResult addNewProduct()
        {
            return View();
        }


        // thêm mới sản phẩm
        [HttpPost]
        public JsonResult addNewProduct(Cs_Menu_item Obj)
        {
            Cs_Menu_item newObj = new Cs_Menu_item();
            int id = new App_Auto_NumberController().GenID("Cs_Menu_item.Item_Id");
            newObj.Item_Id = id;
            newObj.Item_Name = Obj.Item_Name;
            newObj.Enable = true;
            newObj.Item_Type = Obj.Item_Type;
            newObj.Meta_Desc = Obj.Meta_Desc;
            newObj.Meta_Key = Obj.Meta_Key;
            newObj.Language = Obj.Language;
            newObj.Item_Content = Obj.Item_Content;
            db.Cs_Menu_item.Add(newObj);
            db.SaveChanges();
            return Json(newObj);
        }

        // xóa sản phẩm dịch vụ
        public JsonResult delete(int Id)
        {
            var dt = db.Cs_Menu_item.Find(Id);
            db.Cs_Menu_item.Remove(dt);
            db.SaveChanges();
            return Json(dt);
        }


        //lấy danh sách Dịch vụ có trong bảng MenuItem 
        public JsonResult showDV()
        {
            db.Configuration.ProxyCreationEnabled = false;
            db.Configuration.LazyLoadingEnabled = false;
            var show = (from i in db.Cs_Menu_item where i.Item_Type == "DV" select i).Take(3);
            return Json(show, JsonRequestBehavior.AllowGet);
        }


        // Item service

        public ActionResult Services()
        {
            return View();
        }
    }

}