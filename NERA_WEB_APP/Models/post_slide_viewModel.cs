﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class post_slide_viewModel
    {
        public int Tbl_Id { set; get; }
        public string Image_Title { get; set; }
        public string Image_URL { get; set; }
        public string Image_Link { get; set; }
        public int Image_Order { get; set; }
        public bool Enable { get; set; }
        public string Slide_Type { get; set; }
        public string Language { get; set; }
        
        public virtual CS_Post_Info CS_Post_Info { get; set; }
    }
}