namespace BackEndCesde.DTOs
{
    public class DocenteDTO
    {
        public int Id { get; set; }

        public string TipoIdentificacion { get; set; } = null!;

        public string Nombres { get; set; } = null!;

        public string Apellidos { get; set; } = null!;

        public string CorreoElectronico { get; set; } = null!;

        public string TelefonoCelular { get; set; }

        public string NumeroContrato { get; set; }

        public string? CiudadResidencia { get; set; }

        public string EscalafonTecnico { get; set; } = null!;

        public string EscalafonExtension { get; set; } = null!;
    }
}
