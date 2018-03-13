using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class APP_Email_Info_Map: EntityTypeConfiguration<APP_Email_Info>
    {
        public APP_Email_Info_Map()
        {
            this.HasKey(t => t.Email_Id);

            this.ToTable("APP_Email_Info");
            this.Property(t => t.Email_Id).HasColumnName("Email_Id");
            this.Property(t => t.Email_Subject).HasColumnName("Email_Subject");
            this.Property(t => t.Email_Body).HasColumnName("Email_Body");
            this.Property(t => t.Email_Receiver).HasColumnName("Email_Receiver");
            this.Property(t => t.Email_Status).HasColumnName("Email_Status");
            this.Property(t => t.Sent_Date).HasColumnName("Sent_Date");
            this.Property(t => t.Request_By).HasColumnName("Request_By");
        }
    }
}