using AutoMapper;
using BackEndCesde.DTOs;
using BackEndCesde.Models;
using System.Globalization;

namespace BackEndCesde.Utilidades
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Docente, DocenteDTO>().ReverseMap();
            CreateMap<Usuario, UsuarioDTO>().ReverseMap();

        }
    }
}
