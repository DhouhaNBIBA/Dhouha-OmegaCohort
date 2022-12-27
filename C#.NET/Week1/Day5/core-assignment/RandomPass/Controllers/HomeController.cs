using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using RandomPass.Models;

namespace RandomPass.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index(Passcode NewCode)
    {
        return View();
    }
    [HttpPost("generate")]
    public IActionResult Generate(Passcode NewCode)
    {
        //*** Your Code Goes Here ***//
        return RedirectToAction(actionName:"Index" , routeValues: NewCode);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
