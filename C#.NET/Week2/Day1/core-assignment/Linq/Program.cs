List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46,"Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(citys => citys.Type == "Stratovolcano");
PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Execute Assignment Tasks here!
//** the first eruption that is in Chile**//
IEnumerable<Eruption> Chile = eruptions.Where(citys => citys.Location=="Chile");
PrintEach(Chile,"Chile");
//**the first eruption from the "Hawaiian Is" location and print it. If none is found, print "No Hawaiian Is Eruption found"**//
IEnumerable<Eruption> Hawaiian  = eruptions.Where(citys => citys.Location=="Hawaiian Is");
PrintEach(Hawaiian,"No Hawaiian Is Eruption found");
//**the first eruption that is after the year 1900 AND in "New Zealand"**//
IEnumerable<Eruption> NewZ  = eruptions.Where(y => y.Year>1900).Where(citys=>citys.Location=="New Zealand").Take(1);
PrintEach(NewZ,"Newz");
//**all eruptions where the volcano's elevation is over 2000m **//
IEnumerable<Eruption> Volcanos  = eruptions.Where(eve => eve.ElevationInMeters>2000);
PrintEach(Volcanos,"Volcanos");
//**all eruptions where the volcano's name starts with "L" and print them. Also print the number of eruptions found.**//
IEnumerable<Eruption> All = eruptions.Where(v => v.Volcano.StartsWith("L"));
int VolcanosCount = eruptions.Where(v => v.Volcano.StartsWith("L")).Count();
//***the highest elevation, and print only that integer (Hint: Look up how to use LINQ to find the max!)**//
int highest  = eruptions.Max(e => e.ElevationInMeters);
Console.WriteLine(highest);
IEnumerable<Eruption> elevation  = eruptions.Where(e => e.ElevationInMeters==highest);
PrintEach(elevation,"elevation");
//*** all Volcano names alphabetically.***//
IEnumerable<Eruption> VolcanoAlphabetically  = eruptions.OrderBy(e => e.Volcano);
PrintEach(VolcanoAlphabetically,"VolcanoAlphabetically");
//****all the eruptions that happened before the year 1000 CE alphabetically according to Volcano name***//
IEnumerable<Eruption> BeforAlpha  = eruptions.OrderBy(e => e.Volcano).Where(y=>y.Year<1000);
PrintEach( BeforAlpha," BeforAlpha");
//***the volcano's name so that only the names are printed***///
IEnumerable<string> names  = BeforAlpha.Select(v=>v.Volcano);
PrintEach(names,"names");
// Helper method to print each item in a List or IEnumerable.This should remain at the bottom of your class!
static void PrintEach(IEnumerable<dynamic> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (var item in items)
    {
        Console.WriteLine(item.ToString());
    }
}
