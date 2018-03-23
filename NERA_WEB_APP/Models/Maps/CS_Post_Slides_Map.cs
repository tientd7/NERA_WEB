using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class CS_Post_Slides_Map: EntityTypeConfiguration<CS_Post_Slides>
    {
        public CS_Post_Slides_Map()
        {
            this.HasKey(t => t.Post_Id);
            this.ToTable("CS_Post_Slides");
            this.Property(t => t.Post_Id).HasColumnName("Post_Id");
            this.Property(t => t.Tbl_Id).HasColumnName("Tbl_Id");
            this.Property(t => t.Image_Title).HasColumnName("Image_Title");
            this.Property(t => t.Image_Url).HasColumnName("Image_Url");
            this.Property(t => t.Image_Link).HasColumnName("Image_Link");
            this.Property(t => t.Image_Order).HasColumnName("Image_Order");
            this.Property(t => t.Enable).HasColumnName("Enable");
            this.Property(t => t.Language).HasColumnName("Language");
        }
    }
}