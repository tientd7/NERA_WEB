using System.Data.Entity;

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
            
        }
    }
}