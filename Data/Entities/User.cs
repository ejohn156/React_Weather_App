using System;
using System.Collections.Generic;

namespace React_Weather_App.Data.Entities
{
    public class User
    {
        public int ID { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public ICollection<Favorite> Favorites { get; set; }
    }
}
