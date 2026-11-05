export default function Panel() {

  const inputCls = "w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400";

  return (


    <div className="min-h-screen bg-gray-100">


      <h1 className='font-black text-2xl text-gray-500'>Métricas generales</h1>
      <hr className='my-4 border-t-2 border-gray-300' />



      {/* Resultados generales */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">

        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Clientes</p>
          <p className="text-3xl font-semibold text-gray-800">120</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Mascotas</p>
          <p className="text-3xl font-semibold text-gray-800">185</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Citas hoy</p>
          <p className="text-3xl font-semibold text-gray-800">5</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Tratamientos</p>
          <p className="text-3xl font-semibold text-gray-800">5</p>
        </div>

      </section>



      <h1 className='font-black text-2xl text-gray-500'>Automatizaciones con IA</h1>
      <hr className='my-4 border-t-2 border-gray-300' />


      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-lg shadow p-4">

          <h2 className="text-xl font-semibold text-gray-700 mb-3">Agendar cita</h2>
          <hr className="mb-4" />

          {/* Formulario */}
          <form className="space-y-3">

            <div>
              <label htmlFor="cliente" className="text-sm text-gray-600">Cliente</label>
              <input id="cliente" className={inputCls} placeholder="Ingresa el nombre del cliente" />
            </div>

            <div>
              <label htmlFor="mascota" className="text-sm text-gray-600">Mascota</label>
              <input id="mascota" className={inputCls} placeholder="Nombre de la mascota" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="fecha" className="text-sm text-gray-600">Fecha</label>
                <input id="fecha" type="date" className={inputCls} />
              </div>
              <div>
                <label htmlFor="hora" className="text-sm text-gray-600">Hora</label>
                <input id="hora" type="time" className={inputCls} />
              </div>
            </div>

            <div>
              <label htmlFor="motivo" className="text-sm text-gray-600">Motivo (opcional)</label>
              <input id="motivo" className={inputCls} placeholder="Vacuna, control, etc." />
            </div>

            <button type="button" className="w-full bg-gray-800 text-white rounded-md py-2 hover:bg-gray-700">
              Guardar cita
            </button>

          </form>

        </div>



        {/* Listar citas */}
        <div className="bg-white rounded-lg shadow p-4">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <h2 className="text-xl font-semibold text-gray-700">
              Citas para el día de hoy:{" "}
              <span className="font-normal">
                {new Date().toLocaleDateString("es-EC")}
              </span>
            </h2>

            <button type="button" className="bg-gray-800 text-white rounded-md py-2 
              px-4 hover:bg-gray-700 w-full sm:w-auto">Consultar
            </button>
          </div>

          <hr className="mb-4" />

          <ul className="divide-y">
            <li className="py-3 flex justify-between">
              <div>
                <p className="font-medium text-gray-800">Hora: 09:30</p>
                <p className="text-sm text-gray-600">Propietario: Luna</p>
                <p className="text-sm text-gray-600">Mascota: Luna</p>
                <p className="text-sm text-gray-600">Motivo: Vacuna</p>
              </div>
              <span className="text-xs bg-gray-300 font-bold px-2 py-1 rounded self-center">
                2025-08-28
              </span>
            </li>
          </ul>

        </div>
        
      </section>

    </div>
  )
}
