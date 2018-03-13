using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class CS_ChatBox_Info
    {
        public int Chat_Id { get; set; }
        public string Request_Name { get; set; }
        public string Request_Phone { get; set; }
        public string Request_Content { get; set; }
        public int Unread { get; set; }
    }
}