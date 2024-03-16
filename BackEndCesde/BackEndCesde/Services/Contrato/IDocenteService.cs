using BackEndCesde.Models;

namespace BackEndCesde.Services.Contrato
{
    public interface IDocenteService
    {
        Task<List<Docente>> GetList();
        Task<Docente> Get(int idDocente);
        Task<Docente> Add(Docente modelo);
        Task<bool> Update(Docente modelo);
        Task<bool> Delete(Docente modelo);
    }
}
