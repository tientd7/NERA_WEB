using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class TestController : Controller
    {
        // GET: Test
        AuthenContext db = new AuthenContext();

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Login(Nera_User user)
        {
            var data = from i in db.Nera_Users where i.UserName == user.UserName && i.PasswordHash ==user.PasswordHash select i;
            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}