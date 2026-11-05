import { Link, Outlet, useLocation } from 'react-router'


const Dashboard = () => {
    const location = useLocation()
    const urlActual = location.pathname


    return (
    
        <div className='md:flex md:min-h-screen'>


            {/* Menú de navegación lateral */}
            <div className='md:w-1/5 px-5 py-4' style={{ background: 'linear-gradient(135deg, #1F4E5F 0%, #183D4A 0%, #112C36 0%)' }}>

                <h2 className='text-4xl font-black text-center text-slate-200'>SMARTVET</h2>

                <img src="https://cdn-icons-png.flaticon.com/512/2138/2138508.png" alt="img-client" className="m-auto mt-8 
                    p-1 border-2 border-slate-500 rounded-full" width={120} height={120} />


                {/* Nombre de usuario */}
                <p className='text-slate-400 text-center my-4 text-sm'> <span className='bg-green-600 w-3 h-3 
                    inline-block rounded-full'></span> Bienvenido - </p>
                

                {/* Rol de usuario */}
                <p className='text-slate-400 text-center my-4 text-sm'> Rol - </p>
                
                
                <hr className="mt-5 border-slate-500" />


                {/* Enlaces de navegación*/}
                <ul className="mt-5">

                    {/* Enlaces a Dashboard*/}
                    <li className="text-center">
                        <Link to='/dashboard' 
                        className={`${urlActual === '/dashboard' ? 'text-slate-200 bg-gray-900 px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}>Dashboard</Link>
                    </li>


                    {/* Enlaces a Perfil*/}
                    <li className="text-center">
                        <Link to='/dashboard/profile' 
                        className={`${urlActual === '/dashboard/profile' ? 'text-slate-200 bg-gray-900 px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}>Perfil</Link>
                    </li>


                    {/* Enlaces a Listar */}
                    <li className="text-center">
                        <Link to='/dashboard/list' 
                        className={`${urlActual === '/dashboard/list' ? 'text-slate-200 bg-gray-900 px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}>Listar</Link>
                    </li>


                    {/* Enlaces a Crear */}
                    <li className="text-center">
                        <Link to='/dashboard/create' 
                        className={`${urlActual === '/dashboard/create' ? 'text-slate-100 bg-gray-900 px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}>Crear</Link>
                    </li>


                    {/* Enlaces a Chat */}
                    <li className="text-center">
                        <Link to='/dashboard/chat' 
                        className={`${urlActual === '/dashboard/chat' ? 'text-slate-100 bg-gray-900 px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}>Chat</Link>
                    </li>
                </ul>

            </div>



            <div className='flex-1 flex flex-col justify-between h-screen bg-gray-100'>

                {/* Menú de navegación superior */}
                <div className='flex md:justify-end items-center gap-5 justify-center' style={{ background: 'linear-gradient(135deg, #1F4E5F 0%, #183D4A 0%, #112C36 0%)' }}>
                
                    {/* Nombre de usuario */}
                    <div className='text-md font-semibold text-slate-100'>
                        Usuario - 
                    </div>
                
                
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/4715/4715329.png" alt="img-client" className="border-2 border-green-600 rounded-full" width={50} height={50} />
                    </div>
                

                    {/* Botón salir */}
                    <div>
                        <Link to='/' className=" text-white mr-3 text-md block hover:bg-red-900 text-center
                        bg-red-800 px-4 py-1 rounded-lg">Salir</Link>
                    </div>
                
                </div>
                
                
                {/* Contenido para mostra el contenido de las páginas internas */}
                <div className='overflow-y-scroll p-8'>
                    <Outlet />
                </div>
                
                
                <div className='h-12'style={{ background: 'linear-gradient(135deg, #1F4E5F 0%, #183D4A 0%, #112C36 0%)' }}>
                    <p className='text-center  text-slate-100 leading-[2.9rem] 
                    underline'>Todos los derechos reservados</p>
                </div>

            </div>



        </div>
    )
}

export default Dashboard