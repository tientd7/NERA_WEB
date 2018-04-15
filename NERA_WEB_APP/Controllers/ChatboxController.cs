using NERA_WEB_APP.CustomMemberShip;
using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace NERA_WEB_APP.Controllers
{
    [CustomAuthorize(Roles = "Mod,Admin")]
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
        [HttpPost]
        public JsonResult GetData(string filter, string order, bool? unread, bool desc = false, int pageIndex = 0, int pageSize = 20)
        {
            //Lấy ds từ db

            #region filter
            Expression<Func<CS_ChatBox_Info, bool>> filterExp = (t => 1 == 1);
            String Filter = (String.IsNullOrEmpty(filter))?"":filter;

            if (unread.HasValue)
                filterExp = obj => (obj.Request_Content.Contains(Filter)
                        || obj.Request_Name.Contains(Filter)
                        || obj.Request_Phone.Contains(Filter))
                        && obj.Unread == unread.Value
                        ;
            else
                filterExp = obj => (obj.Request_Content.Contains(Filter)
                        || obj.Request_Name.Contains(Filter)
                        || obj.Request_Phone.Contains(Filter));


            #endregion

            var LST = (from obj in db.CS_ChatBox_Info select obj).Where(filterExp);

            int totalRows = LST.Count();

            #region Order 
            String Order = "";
            if (!String.IsNullOrEmpty(order))
                Order = order.ToUpper();
            //order
            switch (Order)
            {
                case "REQUEST_NAME":
                    if (desc)
                        LST = LST.OrderByDescending(t => t.Request_Name);
                    else
                        LST = LST.OrderBy(t => t.Request_Name);
                    break;
                case "REQUEST_PHONE":
                    if (desc)
                        LST = LST.OrderByDescending(t => t.Request_Phone);
                    else
                        LST = LST.OrderBy(t => t.Request_Phone);
                    break;
                case "REQUEST_CONTENT":
                    if (desc)
                        LST = LST.OrderByDescending(t => t.Request_Content);
                    else
                        LST = LST.OrderBy(t => t.Request_Content);
                    break;
                case "UNREAD":
                    if (desc)
                        LST = LST.OrderByDescending(t => t.Unread);
                    else
                        LST = LST.OrderBy(t => t.Unread);
                    break;
                default:
                    //Mac dinh order theo create date
                    LST = LST.OrderByDescending(t => t.Create_date);
                    break;
            }

            #endregion
            LST = LST.Skip(pageIndex * pageSize).Take(pageSize);
            return Json(new object[] { LST.ToList(),totalRows }, JsonRequestBehavior.AllowGet);
        }


        public void addData(CS_ChatBox_Info cs)
        {
            CS_ChatBox_Info cscb = new CS_ChatBox_Info();
            //cscb.Chat_Id = cs.Chat_Id; Ve sau id thi lam the nay nhe
            int id = new App_Auto_NumberController().GenID("CS_ChatBox_Info.Chat_Id");
            cscb.Chat_Id = id;
            cscb.Request_Name = cs.Request_Name;
            cscb.Request_Content = cs.Request_Content;
            cscb.Request_Phone = cs.Request_Phone;
            cscb.Unread = true;
            cscb.Create_date = Convert.ToDateTime(DateTime.Now.ToShortDateString());
            db.CS_ChatBox_Info.Add(cscb);
            db.SaveChanges();
            //return Json(cscb);

        }


    }
}


