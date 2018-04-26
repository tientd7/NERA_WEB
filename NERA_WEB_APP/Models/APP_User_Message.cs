using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class APP_User_Message
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int message_id { get; set; }

        public string cus_name { get; set; }

        public int cus_phone { get; set; }
        public int Post_Id { get; set; }

        public string Post_Title { get; set; }

        public int Item_Id { get; set; }
        public DateTime create_date { get; set; }

        public bool unread { get; set; }

        public DateTime? read_date { get; set; }

    }
}