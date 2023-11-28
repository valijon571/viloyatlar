import { Link, useParams } from "react-router-dom";
const Lada = () => {
  const params = useParams();
  return (
    <>
      <Link to="/">Bosh saxifaga qaytish</Link>
      <br />
      <br />
      <h1>{params.mashina}</h1>
      <h3>Niva</h3>
      <h3>Largus</h3>
      <h3>Lada vesta</h3>
    </>
  );
};
export default Lada;
