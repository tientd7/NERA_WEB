using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        AuthenContext db = new AuthenContext();
        public ActionResult user_infor()
        {
            return View();
        }

        public ActionResult SignIn()
        {
            return View();
        }

        public ActionResult update_user()
        {
            return View();
        }

    }
}