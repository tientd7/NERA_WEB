using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;
using NERA_WEB_APP.Models;
namespace NERA_WEB_APP.Models.Maps
{
    public class CS_Tariff_Manager_Map: EntityTypeConfiguration<CS_Tariff_Manager>
    {
        public CS_Tariff_Manager_Map()
        {
            this.HasKey(t => t.TM_Id);

            this.ToTable("CS_Tariff_Manager");
            this.Property(t => t.TM_Id).HasColumnName("TM_Id");
            this.Property(t => t.Create_By).HasColumnName("Create_By");
            this.Property(t => t.Create_By_User_Name).HasColumnName("Create_By_User_Name");
            this.Property(t => t.Create_Date).HasColumnName("Create_Date");
            this.Property(t => t.Effect_From).HasColumnName("Effect_From");
            this.Property(t => t.Effect_To).HasColumnName("Effect_To");
            this.Property(t => t.TM_Description).HasColumnName("TM_Description");
            this.Property(t => t.TM_Name).HasColumnName("TM_Name");
        }

        
    }
    public class Cs_Price_Info_Map : EntityTypeConfiguration<Cs_Price_Info>
    {
        public Cs_Price_Info_Map()
        {
            this.HasKey(t => t.Price_Code);

            this.ToTable("Cs_Price_Info");
            this.Property(t => t.Price_Code).HasColumnName("Price_Code");
            this.Property(t => t.Enable).HasColumnName("Enable");
            this.Property(t => t.Price_Description).HasColumnName("Price_Description");
            this.Property(t => t.Price_Name).HasColumnName("Price_Name");
            this.Property(t => t.Price_Unit).HasColumnName("Price_Unit");
        }
    }

    public class Cs_Tariff_Price_Map : EntityTypeConfiguration<Cs_Tariff_Price>
    {
        public Cs_Tariff_Price_Map()
        {
            this.HasKey(t => new { t.Price_Code, t.TM_Id });

            this.ToTable("Cs_Tariff_Price");
            this.Property(t => t.Price_Code).HasColumnName("Price_Code");
            this.Property(t => t.Price).HasColumnName("Price");
            this.Property(t => t.Price_Description).HasColumnName("Price_Description");
            this.Property(t => t.Price_Name).HasColumnName("Price_Name");
            this.Property(t => t.Price_Unit).HasColumnName("Price_Unit");
            this.Property(t => t.TM_Id).HasColumnName("TM_Id");
        }
    }
}