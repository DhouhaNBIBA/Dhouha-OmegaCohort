#pragma warning disable CS82168
abstract class Character
{
    // *** Atribute ****//
    public string Name{get; set;}
    public int Age{get; set;}
    public double Power{get; set;}
    public double Health{get; set;}
    public double Strenght{get; set;}

    //***Constractor***/
    public Character(string name, int age)
    {
        Name= name;
        Age= age;
        Power= 0.5;
        Health=0.5;
        Strenght= 0.5;
    }
    public virtual void Attack(Character target)
    {
        target.Health -= 0.1;
    }
    
}