﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class APP_Dic_Domain
    {
        public string Domain_Name { get; set; }
        public string  Parram_Key { get; set; }
        public string Parram_Value { get; set; }
        public int Parram_Order { get; set; }
        public int Enable { get; set; }
    }
}