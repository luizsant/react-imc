import React, { useState } from "react";

const ImcForm = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState(0);
  const [classificacao, setClassificacao] = useState("");
  const [calculado, setCalculado] = useState(false);

  const calculaImc = (peso, altura) => {
    return peso / (altura * altura);
  };

  const getClassificacao = (imc) => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 24.9) {
      return "Peso normal";
    } else if (imc < 29.9) {
      return "Sobrepeso";
    } else if (imc < 34.9) {
      return "Obesidade grau 1";
    } else if (imc < 39.9) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const imcCalculado = calculaImc(peso, altura);
    setImc(imcCalculado.toFixed(2));
    setClassificacao(getClassificacao(imcCalculado));
    setCalculado(true);
  };

  return (
    <>
      <h1>Calcule seu Índice de Massa Corporal (IMC)</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="number"
          step="0.01"
          placeholder="Peso (kg)"
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Altura (m)"
          onChange={(e) => setAltura(e.target.value)}
        />
        <button type="submit">CALCULAR</button>
      </form>
      {calculado && (
        <div className="item">
          <p>Seu IMC é: {imc}</p>
          <p>- {classificacao}</p>
        </div>
      )}
    </>
  );
};

export default ImcForm;
