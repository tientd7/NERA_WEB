using System.Data.Entity;
using NERA_WEB_APP.Models.Maps;
namespace NERA_WEB_APP.Models
{
    public class DataContext : DbContext
    {
        public DataContext() :base("SimpleConnection")
        {
            Database.SetInitializer<DataContext>(null);
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new App_Auto_Number_Map());//Chỗ kia em làm ra cái map nào thì gắn vào đây thôi, coppy thôi =))1 
            modelBuilder.Configurations.Add(new APP_User_Info_Map());
            modelBuilder.Configurations.Add(new Cs_Menu_item_Map());
            modelBuilder.Configurations.Add(new APP_Dic_Domain_Map());
            modelBuilder.Configurations.Add(new APP_Quyen_Info_Map());
            modelBuilder.Configurations.Add(new CS_Posts_Info_Map());
            modelBuilder.Configurations.Add(new CS_ChatBox_Info_Map());
            modelBuilder.Configurations.Add(new APP_SYS_Parrams_Map());
            modelBuilder.Configurations.Add(new APP_User_Permission_Map());
            modelBuilder.Configurations.Add(new CS_Post_Slides_Map());
            modelBuilder.Configurations.Add(new CS_Other_Slide_Map());
            modelBuilder.Configurations.Add(new APP_Email_Info_Map());
            modelBuilder.Configurations.Add(new CS_Tariff_Manager_Map());
            modelBuilder.Configurations.Add(new Cs_Price_Info_Map());
            modelBuilder.Configurations.Add(new Cs_Tariff_Price_Map());
        }
        public DbSet<APP_AUTO_NUMBER> App_Auto_numbers { set; get; }
        public DbSet<App_User_Info> App_User_Info { set; get; }

        public DbSet<Cs_Menu_item> Cs_Menu_item { set; get; }
        public DbSet<APP_Dic_Domain> APP_Dic_Domain { set; get; }
        public DbSet<APP_Quyen_Info> APP_Quyen_Info { set; get; }
        public DbSet<CS_Post_Info> CS_Post_Info { set; get; }
        public DbSet<CS_ChatBox_Info> CS_ChatBox_Info{ set; get; }
        public DbSet<APP_SYS_Parrams> APP_SYS_Parrams { set; get; }

        public DbSet<APP_User_Permission> APP_User_Permission{ set; get; }

        public DbSet<CS_Post_Slides> CS_Post_Slides { set; get; }

        public DbSet<CS_Other_Slide> CS_Other_Slide{ set; get; }

        public DbSet<APP_Email_Info> APP_Email_Info { set; get; }

        public DbSet<CS_Tariff_Manager> CS_Tariff_Managers { set; get; }
        public DbSet<Cs_Price_Info> CS_Price_Infos { set; get; }
        public DbSet<Cs_Tariff_Price> CS_Tariff_Prices { set; get; }

    }
}