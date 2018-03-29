using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class APP_Quyen_Info
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Quyen_Id { get; set; }
        public string Quyen_Name { get; set; }
        public bool  Enable { get; set; }
    }
}