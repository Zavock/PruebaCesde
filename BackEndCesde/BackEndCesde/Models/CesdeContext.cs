using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BackEndCesde.Models;

public partial class CesdeContext : DbContext
{
    public CesdeContext()
    {
    }

    public CesdeContext(DbContextOptions<CesdeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Docente> Docentes { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Docente>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Docente__3213E83FC7CBD33D");

            entity.ToTable("Docente");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Apellidos)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("apellidos");
            entity.Property(e => e.CiudadResidencia)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ciudadResidencia");
            entity.Property(e => e.CorreoElectronico)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("correoElectronico");
            entity.Property(e => e.EscalafonExtension)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("escalafonExtension");
            entity.Property(e => e.EscalafonTecnico)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("escalafonTecnico");
            entity.Property(e => e.Nombres)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombres");
            entity.Property(e => e.NumeroContrato)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("numeroContrato");
            entity.Property(e => e.TelefonoCelular)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("telefonoCelular");
            entity.Property(e => e.TipoIdentificacion)
                .HasMaxLength(5)
                .IsUnicode(false)
                .HasColumnName("tipoIdentificacion");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuario__645723A6DC972877");

            entity.ToTable("Usuario");

            entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");
            entity.Property(e => e.Contrasena)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("contrasena");
            entity.Property(e => e.NombreUsuario)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombreUsuario");
            entity.Property(e => e.Token)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("token");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
