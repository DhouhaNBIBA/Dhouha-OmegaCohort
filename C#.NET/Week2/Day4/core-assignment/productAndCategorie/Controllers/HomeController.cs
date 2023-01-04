using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using productAndCategorie.Models;

namespace productAndCategorie.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;

    }

    public IActionResult Index()
    {
        ViewBag.AllProducts = _context.Products.ToList();
        return View();
    }
    public IActionResult Categories()
    {
        ViewBag.AllCategories = _context.Categories.ToList();
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }
    [HttpPost("create/product")]
    public IActionResult addProduct(Product newProduct)
    {
        if( ModelState.IsValid)
            {
                _context.Add(newProduct);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
        return View("Index");
    }
    [HttpPost ("create/categorie")]
    public IActionResult addCategorie(Categorie newCategorie)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newCategorie);
            _context.SaveChanges();
            return RedirectToAction("Categories");
        }
        return View("Categories");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
