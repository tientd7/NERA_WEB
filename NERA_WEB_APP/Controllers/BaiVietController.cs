using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NERA_WEB_APP.Models;
using System.Threading;

namespace NERA_WEB_APP.Controllers
{
    public class BaiVietController : Controller
    {
        DataContext db = new DataContext();
        // GET: BaiViet
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Create(int? id)
        {
            if (id.HasValue)
            {
                ViewBag.Post_Id = id.Value;
            }
            return View();
        }

        public JsonResult GetAllBaiViet()
        {
            //Lấy ds từ db
            var LST = (from obj in db.CS_Posts_Info select obj).ToList();
            return Json(LST, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Detail(int Post_Id)
        {
            var obj = db.CS_Posts_Info.Find(Post_Id);
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult ConfirmEdit(CS_Posts_Info objInfo)
        {
            String Rs = "";
            try
            {
                if (objInfo.Post_Id > 0)
                {
                    db.Entry(objInfo);
                    db.SaveChanges();
                }
                else
                {
                    objInfo.Post_Id = App_Auto_NumberController.GenID("CS_Posts_Info.Post_Id");
                    objInfo.Create_By = 1;
                    objInfo.Create_Date = DateTime.Now;
                    db.CS_Posts_Info.Add(objInfo);
                    db.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                Rs = ex.StackTrace;
            }

            return Json(Rs);
        }
        [HttpPost]
        public JsonResult ConfirmDelete(int Post_Id)
        {
            String Rs = "";
            try
            {
                var objInfo = db.CS_Posts_Info.Find(Post_Id);
                db.CS_Posts_Info.Remove(objInfo);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                Rs = ex.StackTrace;
            }

            return Json(Rs);
        }
    }
}