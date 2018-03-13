using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NERA_WEB_APP.Models;

namespace NERA_WEB_APP.Controllers
{
    public class App_Auto_NumberController : Controller
    {
        // GET: App_Auto_Number
        public static int GenID(String referKey)
        {
            DataContext db = new DataContext();
            try
            {
                APP_AUTO_NUMBER obj = db.App_Auto_numbers.Find(referKey);
                obj.Refer_Value += 1;
                db.Entry(obj);
                db.SaveChanges();
                return obj.Refer_Value;
            }
            catch (Exception ex)
            {
                APP_AUTO_NUMBER obj2 = new APP_AUTO_NUMBER();
                obj2.Refer_Key = referKey;
                obj2.Refer_Value = 1;
                db.App_Auto_numbers.Add(obj2);
                db.SaveChanges();
            }
            return 1;
        }
    }
}