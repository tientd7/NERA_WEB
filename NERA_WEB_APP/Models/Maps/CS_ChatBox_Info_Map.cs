using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class CS_ChatBox_Info_Map: EntityTypeConfiguration<CS_ChatBox_Info>
    {
       public CS_ChatBox_Info_Map()
        {
            this.HasKey(t => t.Chat_Id);
            this.ToTable("CS_ChatBox_Info");
            this.Property(t => t.Chat_Id).HasColumnName("Chat_Id");
            this.Property(t => t.Request_Name).HasColumnName("Request_Name");
            this.Property(t => t.Request_Phone).HasColumnName("Request_Phone");
            this.Property(t => t.Request_Content).HasColumnName("Request_Content");
            this.Property(t => t.Unread).HasColumnName("Unread");
            this.Property(t => t.Create_date).HasColumnName("Create_date");

        }

    }
}