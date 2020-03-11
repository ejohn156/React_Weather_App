using System;
using AutoMapper;
using React_Weather_App.Data.Entities;
using React_Weather_App.Models.FavoriteModels;
using React_Weather_App.Models.UserModels;

namespace React_Weather_App.Helpers
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<CreateUser, User>();
            CreateMap<CreateFavorite, Favorite>();
            CreateMap<Favorite, GetFavorite>();
            CreateMap<Favorite, UserFavoriteReference>();
            CreateMap<User, GetUser>();
            CreateMap<Favorite, RequestGetUsersFavorites>();
            CreateMap<Favorite, getCityUserFavoriteList>();
            CreateMap<User, FavoriteUserReference>();
        }
    }
}
