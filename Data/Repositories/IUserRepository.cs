using System.Linq;
using System.Threading.Tasks;
using React_Weather_App.Data.Entities;

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
}