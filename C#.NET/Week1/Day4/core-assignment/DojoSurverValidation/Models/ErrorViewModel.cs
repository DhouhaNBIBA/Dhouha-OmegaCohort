using System.ComponentModel.DataAnnotations;
namespace DojoSurverValidation.Models;

public class ErrorViewModel
{
    public string? RequestId { get; set; }

    public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
}
public class DojoSurverValidation
{
    // Class definition
    [Required]
    [MinLength(3)]
    public string Name { get; set; }
    [Required]
    [MinLength(3)]
    public string Comment { get; set; }
    
    [Required]
    public string FavoriteLanguage { get; set; }

    [Required]
    public string Location { get; set; }
}
