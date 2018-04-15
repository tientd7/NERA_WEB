using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class CS_Tariff_Manager
    {
        [Key]
        public int TM_Id { set; get; }
        public string TM_Name { set; get; }
        public string TM_Description { set; get; }
        public DateTime Effect_From { set; get; }
        public DateTime? Effect_To { set; get; }
        public DateTime Create_Date { set; get; }
        public int Create_By { set; get; }
        public string Create_By_User_Name { set; get; }
    }

    public class Cs_Price_Info
    {
        [Key]
        public string Price_Code { set; get; }
        public string Price_Name { set; get; }
        public string Price_Description { set; get; }
        public string Price_Unit { set; get; }
        public bool Enable { set; get; }
    }

    public class Cs_Tariff_Price
    {
        [Key, Column(Order = 0)]
        public int TM_Id { set; get; }
        [Key, Column(Order = 1)]
        public int Price_Code { set; get; }
        public string Price_Name { set; get; }
        public string Price_Description { set; get; }
        public string Price_Unit { set; get; }
        public int Price { set; get; }

    }
    public class CS_Tariff_ViewModel
    {
        public int TM_Id { set; get; }
        public int Price_Code { set; get; }
        public string Price_Name { set; get; }
        public string Price_Description { set; get; }
        public int Price { set; get; }
        public string Price_Unit { set; get; }

    }
}