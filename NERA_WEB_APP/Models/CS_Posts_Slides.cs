using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class CS_Posts_Slides
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Post_Id { get; set; }
        public int Tbl_Id { set; get; }
        public string Image_Title { get; set; }
        public string Image_URL { get; set; }
        public string Image_Link { get; set; }
        public int Image_Order { get; set; }
        public bool Enable { get; set; }
        public string Language { get; set; }
    }
}