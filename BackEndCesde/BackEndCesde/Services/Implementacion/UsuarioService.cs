using BackEndCesde.Models;
using BackEndCesde.Services.Contrato;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BackEndCesde.Services.Implementacion
{
    public class UsuarioService : IUsuarioService
    {
        private CesdeContext _dbContext;
        public UsuarioService(CesdeContext dbContex)
        {
            _dbContext = dbContex;
        }

        public string CreateJWT(Usuario modelo)
        {
            try
            {
                var jwtTokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes("veryverysecret.....");
                var identity = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Role, "Docente"),
                    new Claim(ClaimTypes.Name, modelo.NombreUsuario)
                });

                var credentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = identity,
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials = credentials
                };
                var token = jwtTokenHandler.CreateToken(tokenDescriptor);
                return jwtTokenHandler.WriteToken(token);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            
        }

        public async Task<Usuario> IniciarSesio([FromBody] Usuario modelo)
        {
            try
            {
                Usuario? encontrado = new Usuario();
                encontrado = await _dbContext.Usuarios.FirstOrDefaultAsync(x => x.NombreUsuario == modelo.NombreUsuario && x.Contrasena == modelo.Contrasena);
                return encontrado;
            }
            catch (Exception ex)
            {
                throw ex;
            }


        }
    }
}
