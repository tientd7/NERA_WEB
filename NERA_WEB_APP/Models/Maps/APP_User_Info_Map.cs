using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;
namespace NERA_WEB_APP.Models.Maps
{
    public class APP_User_Info_Map: EntityTypeConfiguration<App_User_Info>
    {
        public APP_User_Info_Map()
        {
            this.HasKey(t => t.User_Id);

            this.ToTable("APP_User_Info");
            this.Property(t => t.User_Id).HasColumnName("User_Id");
            this.Property(t => t.User_Name).HasColumnName("User_Name");
            this.Property(t => t.Password).HasColumnName("Password");
            this.Property(t => t.Email).HasColumnName("Email");
            this.Property(t => t.Enable).HasColumnName("Enable");
            this.Property(t => t.User_Full_Name).HasColumnName("User_Full_Name");
            this.Property(t => t.Phone_Number).HasColumnName("Phone_Number");
            this.Property(t => t.Quyen_Id).HasColumnName("Quyen_Id");
            this.Property(t => t.Quyen_Name).HasColumnName("Quyen_Name");
        }

    }
}