import Cards from "../../components/CatalogoComponen/Cards";
import Catalogfilters from "../../components/CatalogoComponen/Catalogfilters";
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer'
const Catalogo = () => {
    return (
      <><NavBar /><section>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1 px-10">
            <Catalogfilters />
          </div>
          <div className="col-span-4 py-10 px-10">
            <div className="grid grid-cols-2 pb-10 justify-items-center	">
              <p className="col-span-1 px-3 text-lg"><span className="font-bold">300</span> resultados para --</p>
              <select className="col-span-1 text-lg border-solid rounded border border-[255 255 255] px-2 py-[0.2rem] text-slate-400 focus:text-slate-950 focus:border-slate-950">
                <option value="selecciona una opcion">selecciona una opcion.</option>
                <option value="a">a</option>
                <option value="a">a</option>
              </select>
            </div>
            <Cards />
          </div>
        </div>
        <div>paginacion</div>
      </section>
      <Footer></Footer></>
    );
  };
  
  export default Catalogo;
  