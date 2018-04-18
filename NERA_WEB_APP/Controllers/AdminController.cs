using System;
using NERA_WEB_APP.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NERA_WEB_APP.CustomMemberShip;

namespace NERA_WEB_APP.Controllers
{
    [CustomAuthorize(Roles = "Admin,Mod")]
    public class AdminController : Controller
    {
        // GET: Admin
        DataContext db = new DataContext();
        public ActionResult Index()
        {
            ViewBag.slideImageTop = (from i in db.CS_Other_Slide where i.Image_URL != ("") && i.Slide_Type.Equals("0") select i).ToList();
            ViewBag.slideImagefeedback = (from i in db.CS_Other_Slide where i.Image_URL != ("") && i.Slide_Type.Equals("1") select i).ToList();
            return View();
        }
    }
}