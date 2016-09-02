﻿using BLL.Intefaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Interfaces;

namespace BLL.Servises
{
    public class TagService : ITagService
    {
        private IUnitOfWork _uow;

        public TagService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public IEnumerable<Tag> GetTags()
        {
            return _uow.Tags.GetAll().ToArray();
        }
    }
}
