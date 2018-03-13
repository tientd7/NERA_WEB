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
            var LST = (from obj in db.CS_Post_Info select obj).ToList();
            return Json(LST, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Detail(int id)
        {
            var obj = db.CS_Post_Info.Find(id);
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult ConfirmEdit(CS_Post_Info objInfo)
        {
            String Rs = "";
            try
            {
                if (objInfo.Post_Id > 0)
                {
                    objInfo.Update_By = 1;
                    objInfo.Update_Date = DateTime.Now;
                    db.Entry(objInfo);
                    db.SaveChanges();
                }
                else
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
                    newObj.Post_Content = objInfo.Post_Content;
                    newObj.Post_Title = objInfo.Post_Title;
                    db.CS_Post_Info.Add(newObj);
                    db.SaveChanges();
                }
            }
            catch (System.Data.Entity.Validation.DbEntityValidationException dbEx)
            {
                Exception raise = dbEx;
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        Rs = string.Format("{0}:{1}",
                            validationErrors.Entry.Entity.ToString(),
                            validationError.ErrorMessage);
                        // raise a new exception nesting
                        // the current instance as InnerException
                        raise = new InvalidOperationException(Rs, raise);
                    }
                }
            }

            return Json(Rs);
        }
        [HttpPost]
        public JsonResult ConfirmDelete(int id)
        {
            String Rs = "";
            try
            {
                var objInfo = db.CS_Post_Info.Find(id);
                db.CS_Post_Info.Remove(objInfo);
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