using BackEndCesde.Models;
using Microsoft.EntityFrameworkCore;

using BackEndCesde.Services.Contrato;
using BackEndCesde.Services.Implementacion;

using AutoMapper;
using BackEndCesde.DTOs;
using BackEndCesde.Utilidades;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.DependencyInjection;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<CesdeContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("cadenaSQL"));
});

builder.Services.AddScoped<IDocenteService, DocenteService>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("veryverysecret.....")),
        ValidateAudience = false,
        ValidateIssuer = false
    };
});

builder.Services.AddAutoMapper(typeof(AutoMapperProfile));

builder.Services.AddCors(options =>
{
    options.AddPolicy("NuevaPolitica", app =>
    {
        app.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

#region PETICIONES API
app.MapGet("/docentes", async (
    IDocenteService _docenteService,
    IMapper _mapper
    ) =>
{
    var listaDocente = await _docenteService.GetList();
    var listaDocenteDTO = _mapper.Map<List<DocenteDTO>>(listaDocente);

    if (listaDocenteDTO.Count > 0)
        return Results.Ok(listaDocenteDTO);
    else
        return Results.NotFound();

});

app.MapGet("/docentes/{Id}", async (
    int Id,
    IDocenteService _docenteService,
    IMapper _mapper
    ) =>
{
    var _encontrado = await _docenteService.Get(Id);
    if (_encontrado is null) 
        return Results.NotFound();
    else
        return Results.Ok(_mapper.Map<DocenteDTO>(_encontrado));


});

app.MapPost("/docentes/guardar", async (
    DocenteDTO modelo,
    IDocenteService _docenteService,
    IMapper _mapper
    ) => {
        var _docente = _mapper.Map<Docente>(modelo);
        var _docenteCreado = await _docenteService.Add(_docente);

        if(_docenteCreado.Id != 0)
            return Results.Ok(_mapper.Map<DocenteDTO>(_docenteCreado));
        else
            return Results.StatusCode(StatusCodes.Status500InternalServerError);

    });

app.MapPut("/docentes/actualizar/{Id}", async (
    int Id,
    DocenteDTO modelo,
    IDocenteService _docenteService,
    IMapper _mapper
    ) => { 
        var _encontrado = await _docenteService.Get(Id);
        if (_encontrado is null) return Results.NotFound();
        var _docente = _mapper.Map<Docente>(modelo);
        _encontrado.Id = _docente.Id;
        _encontrado.TipoIdentificacion = _docente.TipoIdentificacion;
        _encontrado.Nombres = _docente.Nombres;
        _encontrado.Apellidos = _docente.Apellidos;
        _encontrado.CorreoElectronico = _docente.CorreoElectronico;
        _encontrado.TelefonoCelular = _docente.TelefonoCelular;
        _encontrado.NumeroContrato = _docente.NumeroContrato;
        _encontrado.CiudadResidencia = _docente.CiudadResidencia;
        _encontrado.EscalafonTecnico = _docente.EscalafonTecnico;
        _encontrado.EscalafonExtension = _docente.EscalafonExtension;

        var respuesta = await _docenteService.Update(_encontrado);

        if (respuesta)
            return Results.Ok(_mapper.Map<DocenteDTO>(_encontrado));
        else
            return Results.StatusCode(StatusCodes.Status500InternalServerError);
    });
app.MapDelete("/docentes/eliminar/{Id}", async (
    int Id,
    IDocenteService _docenteService
    ) => {
        var _encontrado = await _docenteService.Get(Id);
        if (_encontrado is null) return Results.NotFound();
        var respuesta = await _docenteService.Delete(_encontrado);
        if (respuesta)
            return Results.Ok();
        else
            return Results.StatusCode(StatusCodes.Status500InternalServerError);
    });

app.MapPost("/usuarios/login", async (
    UsuarioDTO modelo,
    IUsuarioService _usuarioService,
    IMapper _mapper
    ) => {
        var _encontrado = await _usuarioService.IniciarSesio(_mapper.Map<Usuario>(modelo));
        
        if (_encontrado is null)
            return Results.NotFound();
        else
            _encontrado.Token = _usuarioService.CreateJWT(_encontrado);
            return Results.Ok(new { Token = _encontrado.Token, Message = "Usuario logeado"});

    });
#endregion

app.UseCors("NuevaPolitica");
app.Run();

