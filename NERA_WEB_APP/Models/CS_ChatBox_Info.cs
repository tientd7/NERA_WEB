﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class CS_ChatBox_Info
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        public int Chat_Id { get; set; }
        public string Request_Name { get; set; }
        public string Request_Phone { get; set; }
        public string Request_Content { get; set; }
        public bool Unread { get; set; }
        public DateTime? Create_date { get; set; }
        public DateTime? Read_date { get; set; }
    }
}