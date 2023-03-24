using System.ComponentModel.DataAnnotations;

namespace eMDs
{
    public class RegistrationForm
    {
        [Required]
        public string Firstname { get; set; } = "";
        [Required]
        public string Lastname { get; set; } = "";
        [Required]
        public string Email { get; set; } = "";
        [Required]
        public string Username { get; set; } = "";
        [Required]
        public string Password { get; set; } = "";
        public string ConfirmPassword { get; set; } = "";
    }
}