using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class APP_User_Permission
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Tbl_Id { set; get; }
        public int Quyen_Id { get; set; }
        public string Function_Name { get; set; }
        public bool Enable { get; set; }
    }
}