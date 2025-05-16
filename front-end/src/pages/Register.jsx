import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //   if (email && password) {
    //     try {
    //       const { data: userDoc } = await axios.post("/users/login", {
    //         email,
    //         password,
    //       });

    //       setUser(userDoc);
    //       setRedirect(true);

    //       console.log(userDoc);
    //     } catch (error) {
    //       alert(`Deu um erro ao logar ${error.response.data}`);
    //     }
    //   } else {
    //     alert("voce precisa preencher os dois campos");
    //   }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Registre-se</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="text"
            placeholder="Digite seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="email"
            placeholder="Digite seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="password"
            placeholder="Digite sua Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-prymary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white hover:opacity-90">
            Resgistrar
          </button>
        </form>

        <p>
          Ja tem uma conta?{" "}
          <Link className="font-semibold underline" to="/login">
            Conecte-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
