public class Cards
{
    public string Name;
    public string Suit;
    public int Val;

    public Cards(string suit, int val)
    {
        if (Val== 1) Name="Ace";
        else if (Val==13) Name="King";
        else if (Val==12) Name="Queen";
        else if (Val==11) Name="Jack";
        else
        {
            Name=Val.ToString();
        } 
    
        Suit = suit;
        Val = val;
    }
    public override string ToString()
    {
        return $@"
        Name: {Name}
        Suit: {Suit}
        Value: {Val}";
    }

}
