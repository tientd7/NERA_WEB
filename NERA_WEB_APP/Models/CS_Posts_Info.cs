using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class CS_Posts_Info
    {
         public int Post_Id { get; set; }
        public string Post_Title { get; set; }
        public string Post_Content { get; set; }
        public string Meta_Desc { get; set; }
        public string Meta_Key { get; set; }
        public int Enable { get; set; }
        public int Item_ID { get; set; }
        public int Create_By { get; set; }
        public DateTime Create_Date { get; set; }
        public int Update_By { get; set; }
        public DateTime Update_Date { get; set; }
        public string Language { get; set; }
    }
}