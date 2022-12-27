int[] Arr= new int[] {0,1,2,3,4,5,6,7,8,9};
string[] Names= new string[] {"Tim","Martin","Nikki","Sara"};
Boolean[] Bool= new Boolean[] {true,false,true};

List<string> Flavors = new List<string>();
Flavors.Add("chocolate");
Flavors.Add("strawberry");
Flavors.Add("pistache");
Flavors.Add("cafe");
Flavors.Add("mocca");


Console.WriteLine(Flavors.Count);
Console.WriteLine(Flavors[3]);
Flavors.Remove("mocca");
Console.WriteLine(Flavors.Count);

Random rand = new Random();

    int index=rand.Next(Flavors.Count);


Dictionery<string,string> Info =new Dictionery<string, string>();
foreach (var name in Names)
{
    Info[name]=Flavors[index];
}

foreach (KeyValuePair<string,string> entry in Info)
{
    Console.WriteLine(entry.Key + " - " + entry.Value);
}

