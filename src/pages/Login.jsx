import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const user = "";
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    setIsLoading(true);
    try {
      console.log("submit", data);
      // Simular carga de API
      await new Promise(resolve => setTimeout(resolve, 1500));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left Side - Branding */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <div className="max-w-md 2xl:max-w-lg space-y-6 2xl:space-y-8">
            <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-white text-blue-600 text-sm font-medium shadow-sm">
              ✨ La mejor herramienta de productividad
            </span>
            
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Gestiona tus tareas
              </span>
              <span className="block">como un profesional</span>
            </h1>
            
            <p className="text-lg text-gray-600">
              Organiza, prioriza y completa tus tareas de manera eficiente con nuestra plataforma todo-en-uno.
            </p>
            
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-32 h-32 bg-white rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Inicia sesión
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Ingresa tus credenciales para acceder a tu cuenta
                </p>
              </div>

              <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
                <Textbox
                  icon={<FiMail className="text-gray-400" />}
                  placeholder="correo@ejemplo.com"
                  type="email"
                  name="email"
                  label="Correo electrónico"
                  register={register("email", { 
                    required: "El correo es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Correo electrónico inválido"
                    }
                  })}
                  error={errors.email?.message}
                />

                <Textbox
                  icon={<FiLock className="text-gray-400" />}
                  rightIcon={
                    showPassword ? (
                      <FiEyeOff 
                        className="text-gray-400 cursor-pointer" 
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <FiEye 
                        className="text-gray-400 cursor-pointer" 
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )
                  }
                  placeholder="Tu contraseña"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Contraseña"
                  register={register("password", { 
                    required: "La contraseña es requerida",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres"
                    }
                  })}
                  error={errors.password?.message}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Recuérdame
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    label={isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                    disabled={isLoading}
                    icon={isLoading && (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                  />
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      ¿No tienes una cuenta?
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    type="button"
                    label="Regístrate gratis"
                    className="w-full flex justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => console.log("Navigate to signup")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;