namespace BackEndCesde.DTOs
{
    public class UsuarioDTO
    {
        public string NombreUsuario { get; set; } = null!;

        public string Contrasena { get; set; } = null!;
        public string? Token { get; set; }
    }
}
