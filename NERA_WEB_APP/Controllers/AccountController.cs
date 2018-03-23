using NERA_WEB_APP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace NERA_WEB_APP.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {

        AuthenContext db = new AuthenContext();
        CustomAuthenServices services = new CustomAuthenServices();
        // GET: Account
        public ActionResult Index()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult SignUp()
        {
            return View(new SignUpModel());
        }
        [HttpPost]
        [AllowAnonymous]
        public ActionResult SignUp(SignUpModel model)
        {
            if (ModelState.IsValid)
            {
                // Attempt to register the user
                Nera_User user = new Nera_User();
                user.UserName = model.UserName;
                user.PasswordHash = MD5_Hash(model.Password);
                user.Email = model.Email;
                user.RoleId = 1;
                user.FirstName = "Test first name";
                user.LastName = "Test last name";
                user.IsEnable = true;
                try
                {
                    db.Nera_Users.Add(user);
                    db.SaveChanges();
                    services.SignIn(model.UserName, false);
                    return RedirectToAction("Index", "Home");
                }catch(Exception ex)
                {
                }
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }
        //
        // GET: /Account/Login
        [AllowAnonymous]
        public ActionResult LogOn(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            LoginViewModel model = new LoginViewModel();
            return View(model);
        }

        //
        // POST: /Account/Login
        [HttpPost]
        [AllowAnonymous]
        public ActionResult LogOn(LoginViewModel model, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                String message = "";
                Nera_User user = checkUser(model.UserName, model.Password, ref message);
                if (!String.IsNullOrEmpty(message))
                {
                    //Lỗi đăng nhập
                    ViewBag.ErrMessage = message;
                    return View(new LoginViewModel());
                }
                services.SignIn(model.UserName, model.RememberMe);
                //ViewData["Role"] = user.Role.RoleCode;
            }

            // If we got this far, something failed, redisplay form
            return RedirectToRoute(returnUrl);
        }

        [HttpPost]
        public ActionResult LogOut()
        {
            services.LogOut();
            return RedirectToAction("LogOn");
        }
        private Nera_User checkUser(string UserName, string Password, ref string mess)
        {
            var us = (from s in db.Nera_Users where s.UserName == UserName select s).ToList();
            if (us.Count == 0)
            {
                mess = "Tên đăng nhập không đúng!";
                return new Nera_User();
            }
            else
            {
                if (!MD5_Hash(Password).Equals(us.First().PasswordHash)|| !us.First().IsEnable)
                    mess = "Sai mật khẩu!";
            }
            return us.First();
        }

        private string MD5_Hash(String password)
        {
            MD5 md5Hasher = MD5.Create();
            byte[] data = md5Hasher.ComputeHash(Encoding.Default.GetBytes(password));
            StringBuilder sBuilder = new StringBuilder();
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }
            return sBuilder.ToString();
        }
    }

    public class CustomAuthenServices
    {
        public void SignIn(String UserName, bool RemeberMe)
        {
            if (String.IsNullOrEmpty(UserName))
                throw new ArgumentException("Không thể để trống tên đăng nhập");
            FormsAuthentication.SetAuthCookie(UserName, RemeberMe);
        }
        public void LogOut()
        {
            FormsAuthentication.SignOut();
        }
    }
}