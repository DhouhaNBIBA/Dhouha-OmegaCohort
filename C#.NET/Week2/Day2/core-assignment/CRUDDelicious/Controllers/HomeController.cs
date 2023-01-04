using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDDelicious.Models;
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace CRUDDelicious.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    // here we can "inject" our context service into the constructor
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }
    //****** Show Dishes Page *******//
    [HttpGet("Dishes")]
    public IActionResult Dishes()
    {
        return View();
    }
    //**** Add to Data Base ****//
    [HttpPost("add")]
    public IActionResult Add(Delicious newDish)
    {
    if(ModelState.IsValid)
    {
    // We can take the User object created from a form submission
	// And pass this object to the .Add() method
        _context.Add(newDish);
        // OR _context.Users.Add(newUser);
        _context.SaveChanges();
        // Other code
        return RedirectToAction("Index");
    }
        return View("Dishes");
    }
//**************************** Affiche All dishes order by name ************************//
public IActionResult  Index()
    {
        IEnumerable<Delicious> All=_context.Deliciouss.OrderByDescending(c=>c.CreatedAt);
        return View(All);
    }
    //********* Affiche one *********//
    [HttpGet("dishes/{DeliciousId}")]
    public IActionResult Show( int DeliciousId)
    {
        Delicious ? ShowDish= _context.Deliciouss.FirstOrDefault(p=>p.DeliciousId==DeliciousId);

        return View(ShowDish);
    }
    //*************** DELETE  ************//
    [HttpGet("delete/{DeliciousId}")]
    public IActionResult DeleteDish(int DeliciousId)
    {
        Delicious? DishToDelete = _context.Deliciouss.SingleOrDefault(s=> s.DeliciousId == DeliciousId);
        _context.Remove(DishToDelete);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }
//******************* EDIT **********************//
[HttpGet("/dishes/{DeliciousId}/edit")]
    public IActionResult EditDish(int DeliciousId)
    {
        Delicious? UpdateDish = _context.Deliciouss.FirstOrDefault(q=>q.DeliciousId == DeliciousId);
        return View("Edit", UpdateDish);
    }
[HttpPost("/dishes/{DeliciousId}")]
    public IActionResult UpdateDish(int DeliciousId ,Delicious DishToUpdate)
    {
            Delicious? oldDish = _context.Deliciouss.FirstOrDefault(z=>z.DeliciousId == DishToUpdate.DeliciousId);
            oldDish.Name = DishToUpdate.Name;
            oldDish.Chef = DishToUpdate.Chef;
            oldDish.Tastiness = DishToUpdate.Tastiness;
            oldDish.Calories = DishToUpdate.Calories;
            oldDish.Description = DishToUpdate.Description;
            oldDish.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
            return RedirectToAction("Show",DishToUpdate);
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
