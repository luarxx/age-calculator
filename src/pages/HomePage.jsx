import image from "../assets/icon-arrow.svg";
import { useState } from "react";

export default function HomePage() {
  const [day, setDay] = useState(); 
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [dayBirth, setDayBirth] = useState("--");
  const [mesBirth, setMesBirth] = useState("--");
  const [anoBirth, setAnoBirth] = useState("--");
  const [error, setError] = useState(""); 
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  // Cor do texto e borda
  const txtColor = document.getElementById("labelDay"); 
  const txtColor2 = document.getElementById("labelMonth");
  const txtColor3 = document.getElementById("labelYear");
  const border = document.getElementById("day");
  const border2 = document.getElementById("month");
  const border3 = document.getElementById("year");


  // Data atual para calcular a idade
  const anoAtual = new Date().getFullYear();
  const mesAtual = new Date().getMonth();
  const mesAtualSoma = mesAtual + 1;
  const diaAtual = new Date().getDate();

  const handleDay = (e) => { // Função para pegar o valor do input 
    setDay(parseInt(e.target.value, 10)); // Converte o valor do input para inteiro
    if (e.target.value > 31 || e.target.value === 0) {
      setDay(31); 
    } else if (e.target.value < 0) {
      setDay(0);
    } else if (e.target.value <= 0) {
      border.style.border = "2px solid red";
    } else if (e.target.value >= 1) {
      txtColor.style.color = "black";
      border.style.border = "2px solid purple";
      setError("");
    }
  };
  const handleMonth = (e) => { // Função para pegar o valor do input
    setMonth(parseInt(e.target.value, 10)); // Converte o valor do input para inteiro
    if (e.target.value > 12) {
      setMonth(12);
    } else if (e.target.value < 0) {
      setMonth(0);
    } else if (e.target.value <= 0) {
      border2.style.border = "2px solid red";
    } else if (e.target.value >= 1) {
      txtColor2.style.color = "black";
      border2.style.border = "2px solid purple";
      setError2("");
    }
  };
  const handleYear = (e) => { // Função para pegar o valor do input
    setYear(parseInt(e.target.value, 10)); // Converte o valor do input para inteiro
    if (e.target.value > 2024) {
      setYear(2024);
    } else if (e.target.value < 0) {
      setYear(0);
    } else if (e.target.value <= 0 || e.target.value > 2024) {
      border3.style.border = "2px solid red";
    } else if (e.target.value >= 1) {
      txtColor3.style.color = "black";
      border3.style.border = "2px solid purple";
      setError3("");
    }
  };

  const handleSubmit = () => { // Função para calcular a idade 
    const txtColor = document.getElementById("labelDay");
    const txtColor2 = document.getElementById("labelMonth");
    const txtColor3 = document.getElementById("labelYear");
    const border = document.getElementById("day");
    const border2 = document.getElementById("month");
    const border3 = document.getElementById("year");

    setDayBirth(diaAtual - day); // Calcula a idade
    setMesBirth(month - -mesAtualSoma); 
    setAnoBirth(anoAtual - year);

    let dayBirth = diaAtual - day; 
    let anoBirth = anoAtual - year;
    let mesBirth = month - -mesAtualSoma;

    if (isNaN(day)) { // Verifica se o valor é NaN 
      setDayBirth("--"); //se o valor for NaN, ele retorna "--"
      if (!day) {
        border.style.border = "2px solid red";
        txtColor.style.color = "red";
        setError("This field is required");
      } else if (day != 0) {
        setError("");
      }
    }

    if (isNaN(mesBirth)) {
      setMesBirth("--");
      if (!month) {
        txtColor2.style.color = "red";
        border2.style.border = "2px solid red";
        setError2("This field is required");
      }
    }
    if (isNaN(anoBirth)) {
      setAnoBirth("--");
      if (!year) {
        txtColor3.style.color = "red";
        border3.style.border = "2px solid red";
        setError3("This field is required");
      }
    }

    console.log(
      anoAtual,
      mesAtualSoma,
      diaAtual,
      "||",
      dayBirth,
      mesBirth,
      anoBirth
    );
  };

  return (
    <div className="p-2 sm:p-10 sm:pr-40 bg-Off_white border rounded-t-xl rounded-bl-xl rounded-br-4xl">
      <div className=" border-b-2 border-indigo-500 pb-20 mt-8 m-2 sm:pr-16 sm:pb-10">
        <form className="flex justify-center gap-4">
          <div className="w-min">
            <label
              htmlFor="name"
              id="labelDay"
              className="font_b text-Smokey_grey uppercase tracking-widest"
            >
              Day
            </label>
            <input
              type="number"
              name="day"
              id="day"
              value={day}
              onChange={handleDay}
              placeholder="DD"
              maxLength={2}
              className="w-24 sm:w-28 border active:border-0 focus:border-Purple outline-none border-Light_grey rounded-lg py-4 px-4 bg-Off_white text-Off_black font_b"
            />
            {error && <p className="text-red-500 text-xs mt-2"> {error}</p>}
          </div>

          <div className="w-min">
            <label
              htmlFor="name"
              id="labelMonth"
              className="font_b text-Smokey_grey uppercase tracking-widest"
            >
              Month
            </label>
            <input
              type="number"
              name="month"
              id="month"
              value={month}
              onChange={handleMonth}
              placeholder="MM"
              className="w-24 sm:w-28 border active:border-0 focus:border-Purple outline-none border-Light_grey rounded-lg py-4 px-4 bg-Off_white text-Off_black font_b"
            />
            {error2 && <p className="text-red-500 text-xs mt-2"> {error2}</p>}
          </div>
          <div className="w-min ">
            <label
              htmlFor="name"
              id="labelYear"
              className=" font_b text-Smokey_grey uppercase tracking-widest"
            >
              Year
            </label>
            <input
              type="number"
              name="year"
              id="year"
              value={year}
              onChange={handleYear}
              placeholder="YYYY"
              className="w-24 sm:w-28 border active:border-0 focus:border-Purple outline-none border-Light_grey rounded-lg py-4 px-4 bg-Off_white text-Off_black font_b"
            />
            {error3 && <p className="text-red-500 text-xs mt-2"> {error3}</p>}
          </div>
        </form>
        <button
          className="absolute mt-12 ml-32 sm:ml-96 sm:mt-1 "
          onClick={handleSubmit}
        >
          <img
            src={image}
            alt="arrow"
            className="border rounded-full w-16 sm:w-20 hover:bg-Off_black bg-Purple p-4"
          />
        </button>
      </div>
      <div className="flex flex-col mb-12 mt-10 gap-2">
        <div className="flex gap-1 items-center">
          <label htmlFor="" className="text-Purple font_b italic text-5xl">
            {anoBirth}
          </label>
          <label htmlFor="" className="text-Off_black font_b italic text-4xl">
            years
          </label>
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="" className="text-Purple font_b italic text-5xl">
            {mesBirth}
          </label>
          <label htmlFor="" className="text-Off_black font_b italic text-4xl">
            months
          </label>
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="" className="text-Purple font_b italic text-5xl">
            {dayBirth}
          </label>
          <label htmlFor="" className="text-Off_black font_b italic text-4xl">
            days
          </label>
        </div>
      </div>
    </div>
  );
}
