import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça seu login</h1>

        <form className="flex w-full flex-col gap-2">
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="email"
            placeholder="Digite seu Email"
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="password"
            placeholder="Digite sua Senha"
          />
          <button className="bg-prymary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white hover:opacity-90">
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta?{" "}
          <Link className="font-semibold underline" to="/register">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
