﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class App_User_Info
    {
        public int User_Id { set; get; }
        public string User_Name { set; get; }

        public string Password { get; set; }
        public string Email { get; set; }
        public int Enable { get; set; }
        public string User_Full_Name { get; set; }
        public string Phone_Number { get; set; }
        public int Quyen_Id { get; set; }
        public string Quyen_Name { get; set; }
    }
}