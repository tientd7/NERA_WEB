using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class HomeController : Controller
    {
        DataContext db = new DataContext();
        public ActionResult Index()
        {

            ViewBag.slideImageTop = (from i in db.CS_Other_Slide where  i.Image_URL != ("") && i.Slide_Type.Equals("Slide main") select i).ToList();
            ViewBag.slideImagefeedback = (from i in db.CS_Other_Slide where i.Image_URL != ("") && i.Slide_Type.Equals("Slide feedback") select i).ToList();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Tamnhin()
        {
            return View();
        }

        public ActionResult Nha_dau_tu()
        {
            return View();
        }

        public ActionResult Introduce()
        {
            return View();
        }

        public ActionResult recruit()
        {
            return View();
        }

        public ActionResult project()
        {
            return View();
        }

        public ActionResult Event()
        {
            return View();
        }

        public ActionResult Utility()
        {
            return View();
        }
    }
}