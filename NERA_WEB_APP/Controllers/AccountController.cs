using NERA_WEB_APP.CustomMemberShip;
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

        [CustomAuthorize(Roles = "Admin")]
        public ActionResult SignUp()
        {
            return View(new SignUpModel());
        }
        [HttpPost]
        [CustomAuthorize(Roles = "Admin")]
        public ActionResult SignUp(SignUpModel model)
        {
            if (ModelState.IsValid)
            {
                // Attempt to register the user
                Nera_User user = new Nera_User();
                user.UserName = model.UserName;
                user.PasswordHash = MD5_Hash(model.Password);
                user.Email = model.Email;
                user.RoleId = 2;//Tạm để mặc định là mod
                user.FirstName = "Test first name";
                user.LastName = "Test last name";
                user.IsEnable = true;
                try
                {
                    db.Nera_Users.Add(user);
                    db.SaveChanges();
                    signIn(user, false);
                    return RedirectToAction("Index", "Home");
                }
                catch (Exception ex)
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
        public JsonResult LogOn(LoginViewModel model, string returnUrl)
        {
            String message = "";
            if (ModelState.IsValid)
            {

                Nera_User user = checkUser(model.UserName, model.Password, ref message);
                if (!String.IsNullOrEmpty(message))
                {
                    //Lỗi đăng nhập
                    ViewBag.ErrMessage = message;
                    return Json(ViewBag.ErrMessage);
                }
                //FormsAuthentication.SetAuthCookie(model.UserName, model.RememberMe);
                signIn(user, model.RememberMe);
                //services.SignIn(model.UserName, model.RememberMe);
                //ViewData["Role"] = user.Role.RoleCode;
            }

            // If we got this far, something failed, redisplay form
            return Json("Login success!");
        }



        // lỗi đăng nhập

        [HttpPost]
        [AllowAnonymous]
        public JsonResult LogIn(LoginViewModel model)
        {

            if (ModelState.IsValid)
            {
                String message = "";
                Nera_User user = checkUser(model.UserName, model.Password, ref message);
                if (!String.IsNullOrEmpty(message))
                {
                    //Lỗi đăn g nhập
                    ViewBag.ErrMessage = message;
                    return Json(ViewBag.ErrMessage);
                }
                //FormsAuthentication.SetAuthCookie(model.UserName, model.RememberMe);
                // signIn(user, model.RememberMe);
                //services.SignIn(model.UserName, model.RememberMe);
                //ViewData["Role"] = user.Role.RoleCode;
                return Json("login success!");
            }
            else
            {
                return Json("login failed");
            }

            // If we got this far, something failed, redisplay form

        }

        private void signIn(Nera_User user, bool rememberme)
        {
            Nera_Role role = db.Nera_Roles.Find(user.RoleId);
            var model = new UserModel() { Password = MD5_Hash(user.PasswordHash), UserName = user.FirstName, RememberMe = rememberme, Role=role.RoleCode};
            var serializedUser = Newtonsoft.Json.JsonConvert.SerializeObject(model);


            FormsAuthenticationTicket authTck = new FormsAuthenticationTicket(1, user.FirstName, DateTime.Now, DateTime.Now.AddMinutes(20), rememberme, serializedUser);
            var cookie = new HttpCookie(FormsAuthentication.FormsCookieName, FormsAuthentication.Encrypt(authTck));
            Response.Cookies.Add(cookie);
        }
        //[HttpPost]
        [AllowAnonymous]
        public ActionResult LogOut()
        {
            services.LogOut();
            return RedirectToAction("Index", "Home");
        }


        [AllowAnonymous]
        private Nera_User checkUser(string UserName, string Password, ref string mess)
        {
            IQueryable<Nera_User> us1;
            List<Nera_User> us = new List<Nera_User>();
            using (var db2 = new AuthenContext())
            {
                us1 = (from s in db2.Nera_Users where s.UserName.Equals(UserName) select s);
                us = us1.ToList();
            }

            if (us.Count == 0)
            {
                mess = "user error";
                return new Nera_User();
            }
            else
            {
                if (!MD5_Hash(Password).Equals(us.First().PasswordHash) || !us.First().IsEnable)
                    mess = "pass error";
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
        public void SignIn(String UserName, bool RemeberMe, string role_code)
        {
            if (String.IsNullOrEmpty(UserName))
                throw new ArgumentException("Không thể để trống tên đăng nhập");

        }
        public void LogOut()
        {
            FormsAuthentication.SignOut();
        }
    }
    public class UserModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
        public string Role { get; set; }
    }
}