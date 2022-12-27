public class Deck
{
    public List<Cards> cards = new List<Cards>();

    public Deck()
    {
        Reset();
    }
    public List<Cards> Reset()
    {
        cards.Clear();

        string[] suits =
        {
            "Hearts❤",
            "Diamonds🔹",
            "Spades",
            "Clubs"
        };
        foreach (string suit in suits)
        {
            for (int i = 1; i <= 13; i++)
            {
                cards.Add(new Cards(suit, i));
            }
        }
        return cards;
    }
    public Cards Deal()
    {
        Cards cardDealt = cards[0];
        cards.RemoveAt(0);
        return cardDealt;
    }
    public void Shuffle()
    {
        List<Cards> unshuffled = this.cards;
        List<Cards> shuffled = new List<Cards>();
        Random rand = new Random();
        while (unshuffled.Count > 0)
        {
            int index = rand.Next(0, unshuffled.Count);
            shuffled.Add(unshuffled[index]);
            unshuffled.RemoveAt(index);

        }
        this.cards = shuffled;
    }

}