using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NERA_WEB_APP.Controllers
{
    public class ChatboxController : Controller
    {
        // GET: Chatbox
        DataContext db = new DataContext();
        public ActionResult chat_box()
        {
            return View();
        }

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult addData(CS_ChatBox_Info cs)
        {
            CS_ChatBox_Info cscb = new CS_ChatBox_Info();
            cscb.Chat_Id = cs.Chat_Id;
            cscb.Request_Name = cs.Request_Name;
            cscb.Request_Content = cs.Request_Content;
            cscb.Request_Phone = cs.Request_Phone;
            db.CS_ChatBox_Info.Add(cscb);
            db.SaveChanges();
            return Json(cscb);
        }



        [HttpPost]
        public JsonResult add(){
            String er = "";
            CS_ChatBox_Info cscb = new CS_ChatBox_Info();
            //if (cscb == null)
            //{
                cscb.Chat_Id = 1;
                cscb.Request_Content = "sfđf";
                cscb.Request_Name = "sdfdsf";
                cscb.Request_Phone = "555555";
                db.CS_ChatBox_Info.Add(cscb);
                db.SaveChanges();
            //}else
            //{
            //    cscb.Chat_Id = cscb.Chat_Id++;
            //    cscb.Request_Content = cs.Request_Content;
            //    cscb.Request_Name = cs.Request_Name;
            //    cscb.Request_Phone = cs.Request_Phone;
            //    db.CS_ChatBox_Info.Add(cscb);
            //    db.SaveChanges();
            //}

            return Json(er);
       }
    }
}