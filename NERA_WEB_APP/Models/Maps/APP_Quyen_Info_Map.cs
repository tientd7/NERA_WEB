using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class APP_Quyen_Info_Map: EntityTypeConfiguration<APP_Quyen_Info>
    {
        public  void APP_Quyen_Info()
        {
            this.HasKey(t => t.Quyen_Id);

            this.ToTable("APP_Quyen_Info");
            this.Property(t => t.Quyen_Id).HasColumnName("Quyen_Id");
            this.Property(t => t.Quyen_Name).HasColumnName("Quyen_Name");
            this.Property(t => t.Enable).HasColumnName("Enable");
        
        }
    }
}