using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class APP_User_Permission_Map: EntityTypeConfiguration<APP_User_Permission>
    {
        public APP_User_Permission_Map()
        {
           
            this.ToTable("APP_User_Permission");
            this.Property(t => t.Quyen_Id).HasColumnName("Quyen_Id");
            this.Property(t => t.Function_Name).HasColumnName("Function_Name");
            this.Property(t => t.Enable).HasColumnName("Enable");
        }
    }
}