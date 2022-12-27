class Ninja
{
    private int calorieIntake;
    public List<Food> FoodHistory;
    // add a constructor
    public Ninja()
    {
        calorieIntake=0;
        FoodHistory = new List<Food>();
    }
    // add a public "getter" property called "IsFull"
    bool IsFull
    {
        get
        {
            return calorieIntake> 1200;
        }
    }
    // build out the Eat method
    public void Eat(Food item)
    {
        if (IsFull==false)
        {
            calorieIntake += item.Calories;
            FoodHistory.Add(item);
            Console.WriteLine($"The ninja ate a {item.Name}");
            if (item.IsSpicy)
            {
                Console.WriteLine($"The ninja ate a {item.Name} and it's spicy ");
            }
            if (item.IsSweet)
            {
                Console.WriteLine($"The ninja ate a {item.Name} and it's sweet");
            }
        }
        else
        {
            Console.WriteLine("❗This ninja can't eat any more❗");
        }
    }
}


