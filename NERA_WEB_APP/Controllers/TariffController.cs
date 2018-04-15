using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class TariffController : Controller
    {
        // GET: Tariff
        public ActionResult Index()
        {
            return View();
        }

        // GET: Tariff/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Tariff/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Tariff/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Tariff/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Tariff/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Tariff/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Tariff/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
