using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class App_Auto_Number_Map : EntityTypeConfiguration<APP_AUTO_NUMBER>
    {
        public App_Auto_Number_Map()
        {
            //Set primary key
            this.HasKey(t=>t.Refer_Key);

            // Table & Column Mappings
            this.ToTable("APP_AUTO_NUMBER");
            this.Property(t => t.Refer_Key).HasColumnName("Refer_Key");
            this.Property(t => t.Refer_Value).HasColumnName("Refer_Value");
        }
    }
}