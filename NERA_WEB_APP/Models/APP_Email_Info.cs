using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class APP_Email_Info
    {
        public int  Email_Id {get;set;}

        public string Email_Subject { get; set; }


        public string Email_Body { get; set; }

        public string Email_Receiver{get;set;}
        public string Email_Status  { get; set; } 

        public DateTime Sent_Date { get; set; }
        public string  Request_By { get; set; }
    }
}