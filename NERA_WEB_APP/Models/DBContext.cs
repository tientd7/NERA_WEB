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
            modelBuilder.Configurations.Add(new App_Auto_Number_Map());
        }
        public DbSet<APP_AUTO_NUMBER> App_Auto_numbers { set; get; }
    }
}