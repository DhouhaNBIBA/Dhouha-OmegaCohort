using Microsoft.AspNetCore.Mvc;
namespace DojoSurvey.Controllers;     //be sure to use your own project's namespace!
    public class DojoController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public ViewResult Index()
        {
            return View();
        }
        [HttpPost("/process")]
        // [Route("process")]
        public IActionResult Process(string Name, string Location, string FavoriteLanguage, string Comment)
        {
            ViewBag.Name= Name;
            ViewBag.Location= Location;
            ViewBag.FavoriteLanguage = FavoriteLanguage;
            ViewBag.Comment = Comment;

            return View("Result");
        }
    }

