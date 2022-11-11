using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Enitites;


namespace API.Interfaces
{
    public interface ILikesRepository
    {
        Task<UserLike> GetUserLike(int sourceUserId, int likerdUserId);
        Task<AppUser> GetUserWithLikes(int userId);
        Task<IEnumerable<LikesDTO>> GetUserLikes(string predicate, int userId);
    }
}