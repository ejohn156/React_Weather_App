using System;
using React_Weather_App.Models.UserModels;

namespace React_Weather_App.Models.FavoriteModels
{
    public class GetFavorite
    {
        public int ID { get; set; }
        public string City { get; set; }
        public FavoriteUserReference User { get; set; }
    }
}
