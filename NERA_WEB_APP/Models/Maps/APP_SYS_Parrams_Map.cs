using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class APP_SYS_Parrams_Map: EntityTypeConfiguration<APP_SYS_Parrams>
    {
        public APP_SYS_Parrams_Map()
        {
            this.HasKey(t => t.Parram_Key);

            this.ToTable("APP_SYS_Parrams");
            this.Property(t => t.Parram_Key).HasColumnName("Parram_Key");
            this.Property(t => t.Parram_Value).HasColumnName("Parram_Value");
            this.Property(t => t.Enable).HasColumnName("Enable");
        }
    }
}