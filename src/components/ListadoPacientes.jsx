import Pacientes from "./Pacientes"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
            <>
                
                <h2 className="text-3xl font-black text-center">Listado Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus {""}
                    <span className="font-bold text-indigo-600">Pacientes y Citas.</span>
                </p>

            {pacientes.map( paciente => (   
                <Pacientes
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
                ))}
                
            </>            
            ) : (
            <>
                <h2 className="text-3xl font-black text-center">No hay pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Comienza agrengado pacientes {""}
                    <span className="font-bold text-indigo-600">y aparecerán en este lugar.</span>
                </p>
            </>
            )}

        </div>
    )
}

export default ListadoPacientes