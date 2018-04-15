using System.Web;
using System.Web.Optimization;

namespace NERA_WEB_APP
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));


            bundles.Add(new ScriptBundle("~/bundles/scripts")
          .Include("~/Scripts/Controller/Filter/CustomFilter.js")
          .IncludeDirectory("~/Scripts/Controller/Account", "*.js", true)
          .IncludeDirectory("~/Scripts/Controller/chatbox", "*.js", true)
          .IncludeDirectory("~/Scripts/Controller/Orther_Slide", "*.js", true)
          .IncludeDirectory("~/Scripts/Controller/Post_Slide", "*.js", true)
          .IncludeDirectory("~/Scripts/Controller/Product", "*.js", true)
           .Include("~/Scripts/Controller/Product/product.js")
        );

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
