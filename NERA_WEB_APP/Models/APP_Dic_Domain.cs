using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class APP_Dic_Domain
    { 
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Tbl_Id { set; get; }
        public string Domain_Name { get; set; }
        public string  Parram_Key { get; set; }
        public string Parram_Value { get; set; }
        public int Parram_Order { get; set; }
        public bool Enable { get; set; }
    }
}