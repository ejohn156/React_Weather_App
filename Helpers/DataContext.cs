using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using React_Weather_App.Data.Entities;

namespace React_Weather_App.Helpers
{
    public class DataContext : DbContext
    {
    public DataContext(DbContextOptions<DataContext> options) : base(options){ }
    public DbSet<Favorite> Favorites { get; set; }
    public DbSet<User> Users { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Favorite>()
            .HasOne(s => s.User)
            .WithMany(s => s.Favorites);



        modelBuilder.Entity<User>()
            .HasMany(s => s.Favorites)
            .WithOne(s => s.User);
    }
}
}
