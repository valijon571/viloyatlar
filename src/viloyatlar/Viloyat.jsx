// import logo from './logo.svg';
import { Link } from "react-router-dom";
const Viloyat = () => {
  return (
    <>
      <h1>VILOYATLAR</h1>
      <Link to="/avtosalon">Toshkent</Link>
      <br />
      <Link to="/avtosalon">Samarqand</Link>
      <br />
      <Link to="/avtosalon">Jizzax</Link>
    </>
  );
};

export default Viloyat;
