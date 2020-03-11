using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using React_Weather_App.Data.Entities;
using React_Weather_App.Helpers;

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
    public class FavoriteRepository : IFavoriteRepository
    {

        private readonly DataContext _favorites;

        public FavoriteRepository(DataContext appContext)
        {
            _favorites = appContext;
        }

        public IQueryable<Favorite> getAllfavorites()
        {
            var favorites = _favorites.Favorites.Include(f => f.User);
            return favorites;
        }

        public IQueryable<Favorite> getUsersWhoFavoritedCity(string city)
        {

            var result = _favorites.Favorites.Include(s => s.User).Where(I => I.City == city);
            return result;
        }
        public void createFavorite(Favorite newFavorite)
        {
            var existingFavorites = _favorites.Favorites.Where(I => I.UserId == newFavorite.UserId).Where(I => I.City.Equals(newFavorite.City)).ToArray();
            if (existingFavorites.Length == 0)
            {
                _favorites.Favorites.Add(newFavorite);
                _favorites.SaveChanges();
            }

        }
        public void deleteFavorite(int ID)
        {
            Favorite favoriteToDelete = _favorites.Favorites.FirstOrDefault(I => I.ID == ID);

            _favorites.Remove(favoriteToDelete);
            _favorites.SaveChanges();
        }
        public bool SaveAll()
        {
            return _favorites.SaveChanges() > 0;
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

    }
}
