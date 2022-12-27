class Buffet
{
        public List<Food> Menu;

    //constructor
    public Buffet()
    {
        Menu = new List<Food>()
        {
            new Food("Koskos", 700, true, false),
            new Food("Lasagne", 1200, true, false),
            new Food("Bolonese", 1000, true, false),
            new Food("Kunafa", 1600, false, true),
            new Food("Lablabi", 950, true, false),
            new Food("Black forest", 850, false, true),
            new Food("Hot chocalate", 450, false, true)

        };
    }

    public Food Serve()
    {
        Random rand = new Random();
        Food objet = Menu[rand.Next(Menu.Count())];
        return objet;
    }
}