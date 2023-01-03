#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace CRUDDelicious.Models;
public class Delicious
{
    [Key]
    public int DeliciousId {get; set;}
    [Required]
    [MinLength(4)]
    [MaxLength(45)]
    public string Name { get; set; }
    [Required]
    [MinLength(4)]
    [MaxLength(45)]
    public string Chef { get; set; } 
    [Required]
    [Range(0,6)]
    public int Tastiness { get; set; }
    [Required]
    [Range(1,int.MaxValue)]
    public int Calories { get; set; }
    [Required]
    [MinLength(10)]
    [MaxLength(100)]
    public string Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}
