using System.Linq;
using React_Weather_App.Data.Entities;

namespace React_Weather_App.Data.Repositories
{
    public interface IFavoriteRepository
    {
        void createFavorite(Favorite newFavorite);
        void deleteFavorite(int ID);
        IQueryable<Favorite> getAllfavorites();
        IQueryable<Favorite> getUsersWhoFavoritedCity(string city);
        bool SaveAll();
        bool SaveChanges();
    }
}