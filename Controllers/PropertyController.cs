using System.Web.Mvc;

namespace Azan_Properties.Controllers
{
    public class PropertyController : Controller
    {
        public ActionResult Apartment()
        {
            ViewBag.Message = "Your Apartment page.";

            return View();
        }

        public ActionResult Index()
        {
            ViewBag.Message = "Your Property page.";
            return View();
        }
    }
}
