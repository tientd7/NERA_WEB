using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class CS_Posts_Slides
    {
        public int Post_Id { get; set; }
        public string Image_Title { get; set; }
        public string Image_URL { get; set; }
        public string Image_Link { get; set; }
        public int Image_Order { get; set; }
        public int Enable { get; set; }
        public string Language { get; set; }
    }
}