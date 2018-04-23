using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class App_User_Message:EntityTypeConfiguration<APP_User_Message>
    {
        public App_User_Message()
        {
            this.HasKey(t => t.message_id);

            this.ToTable("App_User_Message");
            this.Property(t => t.message_id).HasColumnName("message_id");
            this.Property(t => t.cus_name).HasColumnName("cus_name");
            this.Property(t => t.cus_phone).HasColumnName("cus_phone");
            this.Property(t => t.Post_Id).HasColumnName("Post_Id");
            this.Property(t => t.Post_Title).HasColumnName("Post_Title");
            this.Property(t => t.Item_Id).HasColumnName("Item_Id");
            this.Property(t => t.create_date).HasColumnName("create_date");
            this.Property(t => t.unread).HasColumnName("unread");
            this.Property(t => t.read_date).HasColumnName("read_date");
        }
    }
}