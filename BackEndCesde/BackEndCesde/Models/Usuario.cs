using System;
using System.Collections.Generic;

namespace BackEndCesde.Models;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string NombreUsuario { get; set; } = null!;

    public string Contrasena { get; set; } = null!;
    public string? Token { get; set; }
}
