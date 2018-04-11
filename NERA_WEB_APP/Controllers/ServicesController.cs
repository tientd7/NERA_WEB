using NERA_WEB_APP.CustomMemberShip;
using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace NERA_WEB_APP.Controllers
{
    public class ServicesController : Controller
    {
        // GET: Services
        DataContext db = new DataContext();
        [CustomAuthorize(Roles = "Admin")]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult details(int id)
        {
            var hienthi = db.Cs_Menu_item.Where(i => i.Item_Id == id && i.Item_Type.Equals("DV") && i.Enable == true).FirstOrDefault();
            return View(hienthi);
        }
    }
}