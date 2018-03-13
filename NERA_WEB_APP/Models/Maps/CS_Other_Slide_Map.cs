using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class CS_Other_Slide_Map : EntityTypeConfiguration<CS_Other_Slide>
    {
        public  CS_Other_Slide_Map()
        {

            this.ToTable("CS_Other_Slide");
            this.Property(t => t.Image_Title).HasColumnName("Image_Title");
            this.Property(t => t.Image_URL).HasColumnName("Image_URL");
            this.Property(t => t.Image_Link).HasColumnName("Image_Link");
            this.Property(t => t.Image_Order).HasColumnName("Image_Order");
            this.Property(t => t.Enable).HasColumnName("Enable");
            this.Property(t => t.Slide_Type).HasColumnName("Slide_Type");
            this.Property(t => t.Language).HasColumnName("Language");
            
        }
    }
}