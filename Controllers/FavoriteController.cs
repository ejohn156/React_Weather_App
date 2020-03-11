using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using React_Weather_App.Data.Entities;
using React_Weather_App.Data.Repositories;
using React_Weather_App.Helpers;
using React_Weather_App.Models.FavoriteModels;

namespace React_Weather_App.Controllers
{
    [ApiController]
    [Route("api/favorite")]
    public class FavoriteController : ControllerBase
    {
       
            private readonly IUserRepository _user;
            private readonly IFavoriteRepository _favorites;
            private readonly IMapper _mapper;

            public FavoriteController(IFavoriteRepository favorites, IMapper mapper, IUserRepository user)
            {
                _favorites = favorites;
                _mapper = mapper;
                _user = user;
            }
            [HttpGet]
            public IActionResult GetAllFavorites()
            {
                try
                {
                    var favorites = _favorites.getAllfavorites();
                    var model = _mapper.Map<IList<GetFavorite>>(favorites);
                    return Ok(model);
                }
                catch (AppException ex)
                {
                    // return error message if there was an exception
                    return BadRequest(new { message = ex.Message });
                }

            }
            [HttpPost("create")]
            public IActionResult CreateFavorite([FromBody]CreateFavorite newFavorite)
            {

                try
                {

                    var favorite = _mapper.Map<Favorite>(newFavorite);
                    _favorites.createFavorite(favorite);
                    return Ok(favorite);

                }
                catch (AppException ex)
                {
                    // return error message if there was an exception
                    return BadRequest(new { message = ex.Message });
                }

            }
            [HttpPost("delete/{ID}")]
            public IActionResult DeleteFavorite(int ID)
            {
                try
                {

                    _favorites.deleteFavorite(ID);
                    return Ok();
                }
                catch (AppException ex)
                {
                    // return error message if there was an exception
                    return BadRequest(new { message = ex.Message });
                }

            }
            [HttpGet("{City}")]
            public IActionResult listOfUsersWhoFavorited(string city)
            {

                try
                {
                    var favorites = _favorites.getUsersWhoFavoritedCity(city);
                    Console.WriteLine(favorites.ToList());
                    var model = _mapper.Map<IList<getCityUserFavoriteList>>(favorites);

                    return Ok(model);
                }
                catch (AppException ex)
                {
                    // return error message if there was an exception
                    return BadRequest(new { message = ex.Message });
                }
            }
        }
    }

