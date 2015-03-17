using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace wallet.Models
{
    // Models used as parameters in UserController actions.
    // Questi sono modelli usato con gli azioni di UserController. 

    public class LoginUserBindingModel
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }

    public class RegisterUserBindingModel
    {
        // Later, add properties for Name(first,last)
        // Somma propritie di nome e cognome, dopo. 
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
