using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using React_Weather_App.Data.Entities;
using React_Weather_App.Helpers;

namespace React_Weather_App.Data.Repositories
{
    public interface IUserRepository
    {
        void createUser(User newUser);
        void deleteUser(int ID);
        IQueryable<User> getAllUsers();
        Task<User> getUser(int ID);
        IQueryable<Favorite> getUsersFavorites(int ID);
        bool SaveAll();
        bool SaveChanges();
        void UpdateUser(User updatedUser);
    }
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _userContext;
        private readonly DataContext _favoriteContext;

        public UserRepository(DataContext appContext)
        {
            _userContext = appContext;
            _favoriteContext = appContext;
        }

        public IQueryable<User> getAllUsers()
        {
            return _userContext.Users.Include(s => s.Favorites).OrderBy(p => p.Email);
        }

        public async Task<User> getUser(int ID)
        {

            var result = await _userContext.Users.Include(s => s.Favorites).Where(I => I.ID == ID).ToListAsync();
            return result.First();
        }
        public void createUser(User newUser)
        {

            _userContext.Users.Add(newUser);
            _userContext.SaveChanges();
        }
        public void deleteUser(int ID)
        {
            User userToDelete = _userContext.Users.ToList().Where(I => I.ID == ID).First();

            _userContext.Remove(userToDelete);
            _userContext.SaveChanges();
        }
        public void UpdateUser(User updatedUser)
        {
            User userToUpdate = _userContext.Users.ToList().Where(I => I.ID == updatedUser.ID).First();

            userToUpdate.Email = updatedUser.Email;
            userToUpdate.Password = updatedUser.Password;
            userToUpdate.Phone = updatedUser.Phone;
            _userContext.SaveChanges();
        }
        public IQueryable<Favorite> getUsersFavorites(int ID)
        {
            var listOfFavorites = _favoriteContext.Favorites.Where(I => I.User.ID == ID);
            return listOfFavorites;
        }
        public bool SaveAll()
        {
            return _userContext.SaveChanges() > 0;
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }
    }
}
