using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class APP_Dic_Domain_Map: EntityTypeConfiguration<APP_Dic_Domain>
    {
        public  void APP_Dic_Domain()
        {
            this.HasKey(t => t.Tbl_Id);

            this.ToTable("APP_Dic_Domain");
            this.Property(t => t.Domain_Name).HasColumnName("Domain_Name");
            this.Property(t => t.Tbl_Id).HasColumnName("Tbl_Id");
            this.Property(t => t.Parram_Key).HasColumnName("Parram_Key");
            this.Property(t => t.Parram_Value).HasColumnName("Parram_Value");
            this.Property(t => t.Parram_Order).HasColumnName("Parram_Order");
            this.Property(t => t.Enable).HasColumnName("Enable");
        }
    }
}