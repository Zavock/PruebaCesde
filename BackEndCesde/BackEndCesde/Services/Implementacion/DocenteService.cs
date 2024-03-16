using Microsoft.EntityFrameworkCore;
using BackEndCesde.Models;
using BackEndCesde.Services.Contrato;

namespace BackEndCesde.Services.Implementacion
{
    public class DocenteService: IDocenteService
    {
        private CesdeContext _dbContex;

        public DocenteService(CesdeContext dbContex)
        {
            _dbContex = dbContex;
        }

        public async Task<List<Docente>> GetList()
        {
            try {
                List<Docente> lista = new List<Docente>();
                lista = await _dbContex.Docentes.ToListAsync();
                return lista;
            }catch(Exception ex) { 
                throw ex;
            }
        }

        public async Task<Docente> Get(int idDocente)
        {
            try
            {
                Docente? encontrado = new Docente();
                encontrado = await _dbContex.Docentes.FirstOrDefaultAsync(x => x.Id == idDocente);
                return encontrado;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<Docente> Add(Docente modelo)
        {
            try
            {
                _dbContex.Docentes.Add(modelo);
                await _dbContex.SaveChangesAsync();
                return modelo;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<bool> Update(Docente modelo)
        {
            try
            {
                _dbContex.Docentes.Update(modelo);
                await _dbContex.SaveChangesAsync();
                return true;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<bool> Delete(Docente modelo)
        {
            try
            {
                _dbContex.Docentes.Remove(modelo);
                await _dbContex.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



  

    }
}
