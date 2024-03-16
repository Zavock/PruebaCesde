using BackEndCesde.Models;

namespace BackEndCesde.Services.Contrato
{
    public interface IUsuarioService
    {
        Task<Usuario> IniciarSesio(Usuario modelo);
        string CreateJWT(Usuario modelo);
    }
}

