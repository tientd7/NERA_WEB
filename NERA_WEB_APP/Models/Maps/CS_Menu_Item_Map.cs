using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models.Maps
{
    public class Cs_Menu_item_Map : EntityTypeConfiguration<Cs_Menu_item>
    {
       public Cs_Menu_item_Map()
        {
            this.HasKey(t => t.Item_Id);

            this.ToTable("Cs_Menu_item");
            this.Property(t => t.Item_Id).HasColumnName("Item_Id");
            this.Property(t => t.Item_Name).HasColumnName("Item_Name");
            this.Property(t => t.Enable).HasColumnName("Enable");
            this.Property(t => t.Item_Type).HasColumnName("Item_Type");
            this.Property(t => t.Meta_Desc).HasColumnName("Meta_Desc");
            this.Property(t => t.Meta_Key).HasColumnName("Meta_Key");
            this.Property(t => t.Language).HasColumnName("Language");
            this.Property(t => t.Item_Content).HasColumnName("Item_Content");
        }
    }
}
          