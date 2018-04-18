using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace NERA_WEB_APP.Models
{
    public class AuthenContext : DbContext
    {
        public AuthenContext() : base("AuthenConnection")
        {
            Database.SetInitializer<DataContext>(null);
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new Nera_Role_Map());
            modelBuilder.Configurations.Add(new Nera_User_Map());

        }
        public DbSet<Nera_Role> Nera_Roles { set; get; }
        public DbSet<Nera_User> Nera_Users { set; get; }

    }

    public class Nera_Role
    {
        [Key]
        public int RoleId { set; get; }
        public string RoleName { set; get; }
        public string RoleCode { set; get; }
        public virtual ICollection<Nera_User> Users { set; get; }
    }
    public class Nera_Role_Map : EntityTypeConfiguration<Nera_Role>
    {
        public Nera_Role_Map()
        {
            this.HasKey(t => t.RoleId);

            // Table & Column Mappings
            this.ToTable("Nera_Role");
            this.Property(t => t.RoleId).HasColumnName("RoleId");
            this.Property(t => t.RoleCode).HasColumnName("RoleCode");
            this.Property(t => t.RoleName).HasColumnName("RoleName");

        }
    }
    public class Nera_User
    {
        [Key]
        public int UserId { set; get; }
        public string UserName { set; get; }
        public string FirstName { set; get; }
        public string LastName { set; get; }
        public string PasswordHash { set; get; }
        public String Email { set; get; }
        public string PhoneNumber { set; get; }
        public int RoleId { set; get; }
        //public string newpassword { get; set; }

        public bool IsEnable { set; get; }
        //public virtual Nera_Role Role { set; get; }
    }
    public class Nera_User_Map : EntityTypeConfiguration<Nera_User>
    {
        public Nera_User_Map()
        {
            this.HasKey(t => t.UserId);
            this.ToTable("nera_User");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.UserName).HasColumnName("UserName");
            this.Property(t => t.FirstName).HasColumnName("FirstName");
            this.Property(t => t.LastName).HasColumnName("LastName");
            this.Property(t => t.PasswordHash).HasColumnName("PasswordHash");
            this.Property(t => t.Email).HasColumnName("Email");
            this.Property(t => t.PhoneNumber).HasColumnName("PhoneNumber");
            this.Property(t => t.RoleId).HasColumnName("RoleId");
            this.Property(t => t.IsEnable).HasColumnName("IsEnable");

            //this.HasOptional(t => t.Role).WithMany(t=>t.Users).HasForeignKey(t => t.RoleId);
        }
    }

    public class NeraUserViewModel
    {
        public Nera_User Nera_User { get; set; }
        public Nera_Role Nera_Role { get; set; }
    }

    public class changePass
    {
        public string UserName { get; set; }
        public string oldPassword { get; set; }
        public string newPassword { get; set; }
        public string confirmPassword { get; set; }
    }
   

    public class LoginViewModel
    {
        [Required]
        [Display(Name = "Tên đăng nhập")]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Mật khẩu")]
        public string Password { get; set; }

        [Display(Name = "Ghi nhớ đăng nhập")]
        public bool RememberMe { get; set; }
    }
    public class SignUpModel
    {
        [Required]
        [Display(Name = "Tên đăng nhập")]
        public string UserName { get; set; }

        [Required]
        [Display(Name = "Họ ")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Tên")]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "Số điện thoại")]
        public string PhoneNumber { get; set; }

        [Required]
        [Display(Name = "Enable")]
        public string IsEnable { get; set; }

        [Required]
        [Display(Name = "Quyền")]
        public string RoleCode { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "Địa chỉ email")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Mật khẩu")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Điền lại mật khẩu")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        
    }

    
}