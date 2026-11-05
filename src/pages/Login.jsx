import { useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { Link } from "react-router"



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col sm:flex-row h-screen">

            {/* Imagen */}
            <div className="hidden sm:block sm:w-1/2 bg-[url('/public/images/doglogin.jpg')] bg-cover bg-center"></div>


            <div className="w-full sm:w-1/2 flex justify-center items-center bg-white">

                <div className="w-4/5">

                    <h1 className="text-3xl font-semibold text-center text-gray-500">Bienvenido(a)</h1>
                
                    <p className="text-gray-400 text-center my-4">Por favor ingresa tus datos</p>


                    {/* Formulario */}
                    <form>

                        {/* Campo Correo */}
                        <div className="mb-3">
                            <label className="block text-sm font-semibold mb-1">Correo electrónico</label>
                            <input
                                type="email"
                                placeholder="Ingresa tu correo"
                                className="w-full rounded-md border border-gray-300 focus:ring-1 px-2 py-1 text-gray-500"
                            />
                        </div>


                        {/* Campo Contraseña */}
                        <div className="mb-3">
                            
                            <label className="block text-sm font-semibold mb-1">Contraseña</label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="************"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                >
                                    {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                                </button>
                            </div>
                        </div>


                        {/* Botón login */}
                        <Link to="/dashboard" className="block w-full py-2 text-center bg-gray-500 text-white rounded-xl hover:bg-gray-900 duration-300">
                            Iniciar sesión
                        </Link>

                    </form>


                    {/* Separador */}
                    <div className="mt-6 flex items-center text-gray-400">
                        <hr className="flex-1" />
                        <span className="px-2 text-sm">O</span>
                        <hr className="flex-1" />
                    </div>


                    {/* Botón Google */}
                    <button className="w-full mt-5 flex items-center justify-center border py-2 rounded-xl text-sm hover:bg-black hover:text-white">
                        <img className="w-5 mr-2" src="https://cdn-icons-png.flaticon.com/512/281/281764.png" />
                        Sign in with Google
                    </button>


                    {/* Enlace para olvidaste tu contraseña */}
                    <div className="mt-5 text-xs border-b-2 py-4 text-left">
                        <Link to="/forgot/id" className="underline text-gray-400 hover:text-gray-900">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>



                    {/* Enlaces para volver o registrarse */}
                    <div className="mt-3 flex justify-between text-sm">
                        <Link to="/" className="underline text-gray-400 hover:text-gray-900">Regresar</Link>
                        <Link to="/register" className="py-2 px-5 bg-gray-600 text-white rounded-xl hover:bg-gray-900">Registrarse</Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;
