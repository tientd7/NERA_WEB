using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NERA_WEB_APP.Models;

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
        public JsonResult GetAllBaiViet()
        {
            //Tạo tạm 1 list để show ra
            List < CS_Posts_Info > LST = new List<CS_Posts_Info>();
            CS_Posts_Info objInfo = new CS_Posts_Info();
            objInfo.Create_By = 1;
            objInfo.Create_Date = DateTime.Now;
            objInfo.Enable = '1';
            objInfo.Item_ID = 1;
            objInfo.Language = "EN";
            objInfo.Meta_Desc = "DESCRIPTION";
            objInfo.Meta_Key = "KEY";
            objInfo.Post_Content = "abcsgajkfhKLJF";
            objInfo.Post_Id = 1;
            objInfo.Post_Title = "Test";
            objInfo.Update_By = 1;
            objInfo.Update_Date = DateTime.Now;

            LST.Add(objInfo);

            return Json(LST);
        }
    }
}