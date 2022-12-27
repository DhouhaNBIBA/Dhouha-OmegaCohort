public class Fighter: Hunter
{
    public double Skills {get; set;}

    public Fighter(string name, int age, double skills): base(name, age)
    {
        Skills= skills;
    }

}