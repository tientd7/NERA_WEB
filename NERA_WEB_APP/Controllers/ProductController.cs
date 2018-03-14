using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult product()
        {
            return View();
        }

        public ActionResult details()
        {
            return View();
        }
    }
}