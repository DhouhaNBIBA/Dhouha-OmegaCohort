class Human
{
    // Properties for Human
    public string Name {get; set;}
    public int Strength{get; set;}
    public int Intelligence{get; set;}
    public int Dexterity{get; set;}
    public int Health{get; set;}
    // Add a constructor that takes a value to set Name, and set the remaining fields to default values
    public Human(string Name)
    {
        Name= Name;
        Strength=3;
        Intelligence=3;
        Dexterity=3;
        Health=100;
    }
    // Add a constructor to assign custom values to all fields
    public Human( string Name, int Strength,int Intelligence, int Dexterity, int Health )
    {
        Name= Name;
        Strength=Strength;
        Intelligence=Intelligence;
        Dexterity=Dexterity;
        Health=Health;
    }
    // Build Attack method
    public int Attack(Human target)
    {
        target.Health -= (3* this.Strength);
        return target.Health;
    }
}

