using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class Cs_Menu_item
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Item_Id { get; set; }
        public string Item_Name { get; set; }
        public bool Enable { get; set; }
        public string Item_Type { get; set; }
        public string Meta_Desc { get; set; }
        public string Meta_Key { get; set; }
        public string Language { get; set; }
        public string Item_Content { get; set; }
    }
}