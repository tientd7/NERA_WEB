using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}