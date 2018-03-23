using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class Orther_SlideController : Controller
    {
        DataContext db = new DataContext();
        // GET: Orther_Slide
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetData()
        {

            List<CS_Other_Slide> List = db.CS_Other_Slide.ToList();
            return Json(List, JsonRequestBehavior.AllowGet);

        }
    }
}