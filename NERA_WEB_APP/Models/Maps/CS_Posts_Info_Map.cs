using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class CS_Posts_Info_Map: EntityTypeConfiguration<CS_Post_Info>
    {
        public  CS_Posts_Info_Map()
        {
            this.ToTable("CS_Post_Info");
            this.HasKey(t => t.Post_Id);
            this.Property(t => t.Post_Id).HasColumnName("Post_Id");
            this.Property(t => t.Post_Title).HasColumnName("Post_Title");
            this.Property(t => t.Post_Content).HasColumnName("Post_Content");
            this.Property(t => t.Meta_Desc).HasColumnName("Meta_Desc");
            this.Property(t => t.Meta_Key).HasColumnName("Meta_Key");
            this.Property(t => t.Enable).HasColumnName("Enable");
            this.Property(t => t.Item_ID).HasColumnName("Item_ID");
            this.Property(t => t.Create_By).HasColumnName("Create_By");
            this.Property(t => t.Create_Date).HasColumnName("Create_Date");
            this.Property(t => t.Update_By).HasColumnName("Update_By");
            this.Property(t => t.Update_Date).HasColumnName("Update_Date");
            this.Property(t => t.Language).HasColumnName("Language");
            this.Property(t => t.Gia).HasColumnName("Gia");
            this.Property(t => t.Dathue).HasColumnName("Dathue");
            this.Property(t => t.Avatar).HasColumnName("Avatar");


        }
    }
}