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

        public JsonResult showSP()
        {
            var show = from i in db.CS_Menu_Item where i.Item_Type == "SP" select i;
            return Json(show,JsonRequestBehavior.AllowGet);
        }

        public ActionResult details()
        {
            return View();
        }
    }
}