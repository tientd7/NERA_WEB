using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class ContractController : Controller
    {
        // GET: Contract
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult listContract()
        {
            return View();
        }

        public ActionResult detailContract()
        {
            return View();
        }
    }
}