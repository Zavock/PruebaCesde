USE [master]
GO
/****** Object:  Database [CESDE]    Script Date: 15/03/2024 8:28:38 p. m. ******/
CREATE DATABASE [CESDE]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CESDE', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\CESDE.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CESDE_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\CESDE_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [CESDE] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CESDE].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CESDE] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CESDE] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CESDE] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CESDE] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CESDE] SET ARITHABORT OFF 
GO
ALTER DATABASE [CESDE] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [CESDE] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CESDE] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CESDE] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CESDE] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CESDE] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CESDE] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CESDE] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CESDE] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CESDE] SET  ENABLE_BROKER 
GO
ALTER DATABASE [CESDE] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CESDE] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CESDE] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CESDE] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CESDE] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CESDE] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CESDE] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CESDE] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [CESDE] SET  MULTI_USER 
GO
ALTER DATABASE [CESDE] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CESDE] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CESDE] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CESDE] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CESDE] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CESDE] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [CESDE] SET QUERY_STORE = ON
GO
ALTER DATABASE [CESDE] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [CESDE]
GO
/****** Object:  Table [dbo].[Docente]    Script Date: 15/03/2024 8:28:38 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Docente](
	[id] [int] NOT NULL,
	[tipoIdentificacion] [varchar](5) NOT NULL,
	[nombres] [varchar](50) NOT NULL,
	[apellidos] [varchar](50) NOT NULL,
	[correoElectronico] [varchar](100) NOT NULL,
	[telefonoCelular] [varchar](15) NOT NULL,
	[numeroContrato] [varchar](15) NOT NULL,
	[ciudadResidencia] [varchar](50) NULL,
	[escalafonTecnico] [varchar](50) NOT NULL,
	[escalafonExtension] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 15/03/2024 8:28:38 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[idUsuario] [int] IDENTITY(1,1) NOT NULL,
	[nombreUsuario] [varchar](50) NOT NULL,
	[contrasena] [varchar](50) NOT NULL,
	[token] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[idUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Docente] ([id], [tipoIdentificacion], [nombres], [apellidos], [correoElectronico], [telefonoCelular], [numeroContrato], [ciudadResidencia], [escalafonTecnico], [escalafonExtension]) VALUES (1000632543, N'CC', N'Juan', N'Ospina', N'juan@gmail.com', N'3152675323', N'837232', N'Medellin', N'Profesional', N'Profesional')
INSERT [dbo].[Docente] ([id], [tipoIdentificacion], [nombres], [apellidos], [correoElectronico], [telefonoCelular], [numeroContrato], [ciudadResidencia], [escalafonTecnico], [escalafonExtension]) VALUES (1000761505, N'CC', N'Jaime', N'Osorio', N'jaime@gmail.com', N'3156807653', N'3421', N'Santo Domingo', N'Tecnico', N'Profesional')
INSERT [dbo].[Docente] ([id], [tipoIdentificacion], [nombres], [apellidos], [correoElectronico], [telefonoCelular], [numeroContrato], [ciudadResidencia], [escalafonTecnico], [escalafonExtension]) VALUES (1000761507, N'CE', N'Mario', N'Libertad', N'mario@gmail.com', N'3156807643', N'3422', N'Manrique', N'Tecnico', N'Profesional')
INSERT [dbo].[Docente] ([id], [tipoIdentificacion], [nombres], [apellidos], [correoElectronico], [telefonoCelular], [numeroContrato], [ciudadResidencia], [escalafonTecnico], [escalafonExtension]) VALUES (1000761509, N'CC', N'Juan', N'Zuleta', N'juanz@gmail.com', N'3156807623', N'3423', N'Envigado', N'Tecnico', N'Profesional')
INSERT [dbo].[Docente] ([id], [tipoIdentificacion], [nombres], [apellidos], [correoElectronico], [telefonoCelular], [numeroContrato], [ciudadResidencia], [escalafonTecnico], [escalafonExtension]) VALUES (1888323490, N'CE', N'Mario', N'Roman', N'mario@gmail.com', N'3152235323', N'934923', N'Envigado', N'Tecnico', N'Técnico experiencia superior 1 año')
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([idUsuario], [nombreUsuario], [contrasena], [token]) VALUES (1, N'Admin', N'1234', NULL)
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
USE [master]
GO
ALTER DATABASE [CESDE] SET  READ_WRITE 
GO
