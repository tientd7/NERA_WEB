﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class PriceController : Controller
    {
        // GET: Price
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult listPrice()
        {
            return View();
        }

        public ActionResult addNewListPrice()
        {
            return View();
        }
    }
}