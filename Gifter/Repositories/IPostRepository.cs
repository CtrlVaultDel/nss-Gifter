using Gifter.Models;
using System.Collections.Generic;
using System;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        List<Post> GetAllWithComments();
        Post GetById(int id);
        Post GetByIdWithComments(int id);
        List<Post> Search(string criterion, bool sortDescending);
        List<Post> SearchByDate(DateTime date);
        void Add(Post post);
        void Delete(int id);
        void Update(Post post);
    }
}