﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class CS_Menu_Item
    {
        public int Item_Id { get; set; }
        public string Item_Name { get; set; }
        public int Enable { get; set; }
        public string Item_Type { get; set; }
        public string Meta_Desc { get; set; }
        public string Meta_Key { get; set; }
        public string Language { get; set; }

    }
}