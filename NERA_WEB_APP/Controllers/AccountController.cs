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
        [CustomAuthorize(Roles = "Admin")]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult user()
        {

            return View();
        }

        [CustomAuthorize(Roles = "Admin,Mod")]
        public ActionResult user_infor(string username)
        {
            var _username = Request.Cookies["username"];
            if (!String.IsNullOrEmpty(_username.ToString()))
            {
                var infor = db.Nera_Users.Where(x => x.UserName.Equals(_username.Value.ToString())).FirstOrDefault();
                return View(infor);
            }
            else
            {
                return RedirectToAction("LogOn", "Account");
            }

        }

        public JsonResult getInforUser(int id)
        {
            var infor = db.Nera_Users.Where(x => x.UserId == id).FirstOrDefault();

            return Json(infor, JsonRequestBehavior.AllowGet);
        }


        public JsonResult UserUpdate(Nera_User user)
        {
            string er = "";
            try
            {
                db.Entry(user).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }
            catch (Exception e)
            {
                er = "" + e;
            }

            return Json(er);
        }

        public JsonResult changePass(changePass user, string msg)
        {

            String message = "";
            try
            {
                var _username = Request.Cookies["username"].Value;
                Nera_User newUser = new Nera_User();
                newUser = checkUser(_username, user.oldPassword, ref message);
                if (!String.IsNullOrEmpty(message))
                {
                    //Lỗi đăng nhập
                    ViewBag.ErrMessage = message;

                }
                else
                {
                    if (user.newPassword.Length < 6)
                    {
                        message = "error_min_length";
                    }
                    else if (user.newPassword != user.confirmPassword)
                    {
                        message = "confirm_password_incorrect";
                    }
                    else
                    {
                        newUser.PasswordHash = MD5_Hash(user.newPassword);
                        db.Entry(newUser).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                    }

                }
            }
            catch (Exception e)
            {
                message = "" + e;
            }

            return Json(message);
        }

        public JsonResult resetPassword(int id)
        {
            string msg = "";
            try
            {
                var user = db.Nera_Users.Where(i => i.UserId == id).FirstOrDefault();
                user.PasswordHash = MD5_Hash("123456");
                db.Entry(user).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }
            catch (Exception e)
            {
                msg = "" + e;
            }
            return Json(msg);
        }


        public ActionResult user_update()
        {
            return View();
        }


        public JsonResult showData()
        {
            var listUsers = (
                from nerauser in db.Nera_Users
                join nerarole in db.Nera_Roles
                on nerauser.RoleId equals nerarole.RoleId
                select new NeraUserViewModel { Nera_User = nerauser, Nera_Role = nerarole }
                ).ToList();
            return Json(listUsers, JsonRequestBehavior.AllowGet);
        }

        [CustomAuthorize(Roles = "Admin")]
        public ActionResult SignUp()
        {
            return View(new SignUpModel());
        }

        #region signup
        ////[HttpPost]
        ////[CustomAuthorize(Roles = "Admin")]
        ////public ActionResult SignUp(SignUpModel model)
        ////{
        ////    if (ModelState.IsValid)
        ////    {
        ////        // Attempt to register the user
        ////        Nera_User user = new Nera_User();
        ////        user.UserName = model.UserName;
        ////        user.PasswordHash = MD5_Hash(model.Password);
        ////        user.Email = model.Email;
        ////        user.RoleId = 2;//Tạm để mặc định là mod
        ////        user.FirstName = "Test first name";
        ////        user.LastName = "Test last name";
        ////        user.IsEnable = true;
        ////        try
        ////        {
        ////            db.Nera_Users.Add(user);
        ////            db.SaveChanges();
        ////            signIn(user, false);
        ////            return RedirectToAction("Index", "Home");
        ////        }
        ////        catch (Exception ex)
        ////        {
        ////        }
        ////    }

        ////    // If we got this far, something failed, redisplay form
        ////    return View(model);
        ////}

        #endregion



        #region json signup
        [HttpPost]
        [CustomAuthorize(Roles = "Admin")]
        public JsonResult SignUp(SignUpModel model)
        {
            string er = "";
            try
            {

                // Attempt to register the user
                Nera_User user = new Nera_User();
                Nera_Role role = new Nera_Role();
                var countUsername = (from us in db.Nera_Users where us.UserName == model.UserName select us).ToList().Count();
                if (countUsername > 0)
                {
                    return Json("existed_username");
                }

                else if (string.IsNullOrEmpty(model.UserName) || model.UserName.Trim().Length < 5)
                {
                    return Json("username_error");
                }
                else if (model.Password.Trim().Length < 6 || string.IsNullOrEmpty(model.Password) || model.Password == null)
                {
                    return Json("error_min_length");
                }
                else if (model.Password != model.ConfirmPassword)
                {
                    return Json("confirm_password_incorrect");
                }
                else if (model.RoleCode == "")
                {
                    return Json("rolecodenull");
                }
                else
                {
                    user.UserName = model.UserName;
                    user.PasswordHash = MD5_Hash(model.Password);
                    user.Email = model.Email;
                    user.FirstName = model.FirstName;
                    user.LastName = model.LastName;
                    user.PhoneNumber = model.PhoneNumber;
                    user.IsEnable = true;
                    role.RoleCode = model.RoleCode;
                    if (model.RoleCode == "Admin")
                    {
                        role.RoleName = "Quản trị hệ thống";
                    }
                    else if (model.RoleCode == "Mod")
                    {
                        role.RoleName = "Nhân viên";
                    }
                    else if (model.RoleCode == "User")
                    {
                        role.RoleName = "Khách hàng";

                    }

                    db.Nera_Users.Add(user);
                    db.Nera_Roles.Add(role);
                    db.SaveChanges();
                    //signIn(user, false);
                    return Json("success");
                }
            }
            catch (Exception ex)
            {
                return Json("" + er + " " + ex);
            }

            // If we got this far, something failed, redisplay form

        }

        #endregion




        // chi tiết thông tin người dùng
        public JsonResult getdetailUser(int id)
        {
            var user = db.Nera_Users.Where(u => u.UserId == id).FirstOrDefault();
            return Json(user, JsonRequestBehavior.AllowGet);
        }


        // sửa thông tin người dùng
        public JsonResult updateRole_User(NeraUserViewModel user)
        {
            Nera_User nerauser = new Nera_User();
            nerauser = user.Nera_User;

            //Nera_Role nerarole = new Nera_Role();
            //nerarole = user.Nera_Role;

            //if (nerarole.RoleName == "Nhân viên")
            //{
            //    nerarole.RoleCode = "Mod";
            //}
            //else if (nerarole.RoleName == "Quản trị hệ thống")
            //{
            //    nerarole.RoleCode = "Admin";
            //}

           


            db.Entry(nerauser).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json("");

        }

        public JsonResult deleteUser(int RoleId)
        {
            var nereuser = db.Nera_Users.Where(i => i.RoleId == RoleId).FirstOrDefault();
            nereuser.IsEnable = false;
            db.Entry(nereuser).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return Json("");
        }
        //
        // GET: /Account/Login
        [AllowAnonymous]
        public ActionResult LogOn(string returnUrl)
        {
            string cookieName = FormsAuthentication.FormsCookieName;
            var authCookie = HttpContext.Request.Cookies[cookieName];
            if (authCookie != null)
            {
                return Redirect(returnUrl);
            }
            else
            {
                ViewBag.ReturnUrl = returnUrl;
                LoginViewModel model = new LoginViewModel();
                return View(model);
            }

        }

        public void getcookie(string username)
        {
            HttpCookie _username = new HttpCookie("username");
            _username.Value = username;
            _username.Expires = DateTime.Now.AddDays(1);
            Response.Cookies.Add(_username);

        }

        //
        // POST: /Account/Login
        [HttpPost]
        [AllowAnonymous]
        public JsonResult LogOn(LoginViewModel user, string returnUrl)
        {
            String message = "";
            if (ModelState.IsValid)
            {




                Nera_User nerauser = checkUser(user.UserName, user.Password, ref message);
                if (!String.IsNullOrEmpty(message))
                {
                    //Lỗi đăng nhập
                    ViewBag.ErrMessage = message;
                    return Json(ViewBag.ErrMessage);
                }
                //FormsAuthentication.SetAuthCookie(model.UserName, model.RememberMe);
                signIn(nerauser, user.RememberMe);
                //services.SignIn(model.UserName, model.RememberMe);
                //ViewData["Role"] = user.Role.RoleCode;
                getcookie(user.UserName);

                return Json("login success!");
            }

            // If we got this far, something failed, redisplay form
            return Json("Login failed!");
        }


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
            var model = new UserModel() { Password = MD5_Hash(user.PasswordHash), UserName = user.FirstName, RememberMe = rememberme, Role = role.RoleCode };
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