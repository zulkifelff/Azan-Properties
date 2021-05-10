using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Azan_Properties.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }

        public ActionResult TermOfUser()
        {
            ViewBag.Message = "Your Terms of Use page.";
            return View();
        }

        public ActionResult Privacy()
        {
            ViewBag.Message = "Your Privacy Usage.";
            return View();
        }

        public ActionResult Inquiry()
        {
            ViewBag.Message = "Your Inquiry Page.";

            return View();
        }
    }
}
