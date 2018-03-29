using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NERA_WEB_APP.CustomMemberShip;
using NERA_WEB_APP.Models;
namespace NERA_WEB_APP.Controllers
{
    [CustomAuthorize(Roles = "Admin,Mod")]
    public class QLSanPhamController : Controller
    {
        DataContext db = new DataContext();
        #region Menu SP
        // GET: QLSanPham
        public ActionResult Index()
        {
            ViewBag.Title = "Danh mục sản phẩm";
            return View();
        }
        public JsonResult GetDanhMucSanPham()
        {
            var Lst = from s in db.CS_Menu_Item where s.Item_Type == "SP" select s;
            return Json(Lst.ToList());
        }
        public JsonResult ThemMenuItem(CS_Menu_Item item)
        {
            try
            {
                int id = new App_Auto_NumberController().GenID("CS_Menu_Item.Item_Id");
                item.Item_Id = id;
                db.CS_Menu_Item.Add(item);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                return Json(ex.StackTrace);
            }

            return Json("OK");
        }
        public JsonResult GetMenuById(int id)
        {
            var item = db.CS_Menu_Item.Find(id);
            return Json(item);
        }
        public JsonResult SuaMenuItem(CS_Menu_Item item)
        {
            try
            {
                db.Entry(item);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                return Json(ex.StackTrace);
            }
            return Json("OK");
        }
        public JsonResult XoaMenuItem(int id)
        {
            try
            {
                var item = db.CS_Menu_Item.Find(id);
                item.Enable = false;
                db.Entry(item);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                return Json(ex.StackTrace);
            }
            return Json("OK");
        }
        #endregion

        
    }
}