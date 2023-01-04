#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;//to avoid passing data to db
namespace productAndCategorie.Models;
public class Product
{
    [Key]
    public int ProductId {get; set;}
    [Required]
    [MinLength(4)]
    [MaxLength(45)]
    public string Name { get; set; }
    [Required]
    [Range(0.00,Double.MaxValue)]
    public Double Price { get; set; }
    [Required]
    [MinLength(6)]
    [MaxLength(100)]
    public string Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}
