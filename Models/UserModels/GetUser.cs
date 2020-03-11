using System;
using System.Collections.Generic;
using React_Weather_App.Models.FavoriteModels;

namespace React_Weather_App.Models.UserModels
{
    public class GetUser
    {
        public int ID { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public List<UserFavoriteReference> Favorites { get; set; }
    }
}
