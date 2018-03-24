using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
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
    }
}