import styled from 'styled-components'
import maquillaje from '../../assets/img/maquillaje.png'
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom:5%;
  margin-top:3%;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 2rem;
  display:flex;
  padding:1rem;
  flex-direction:row;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin: 4rem;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

  }
`;
const H1 = styled.h1`
font-weight:600;
margin-left:1%;
font-size:40px;
`

const Products = () => {
  const navigate = useNavigate()
  const goDetail = () => {
    let id = 1;
  navigate(`/detail/${id}`)
  }
  

return (
  <><H1>Descubre nuestros productos</H1><CardContainer>
    <Card>
      <div class="flex font-sans">
        <div class="flex-none w-56 relative">
          <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto font-medium text-slate-900">
              Producto 1
            </h1>
            <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-pink-600 ">
              $3600.00
            </div>
            <div class="text-sm font-medium text-slate-400">
              En stock
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

          </div>
          <div class="flex space-x-4 mb-5 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <button onClick={goDetail} class="h-10 px-6 font-semibold rounded-full bg-pink-600 text-white" type="submit">
                Comprar Ahora
              </button>
              <button class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                Añadir al carrito
              </button>
            </div>
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-pink-600 bg-pink-50" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-500">
            Consulte las tarifas de envio con su proveedor.
          </p>
        </form>
      </div>
    </Card>

    <Card>

      <div class="flex font-sans">
        <div class="flex-none w-56 relative">
          <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto font-medium text-slate-900">
              Producto 2
            </h1>
            <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-pink-600">
              $3900.00
            </div>
            <div class="text-sm font-medium text-slate-400">
              In stock
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

          </div>
          <div class="flex space-x-4 mb-5 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <button onClick={goDetail} class="h-10 px-6 font-semibold rounded-full bg-pink-600 text-white" type="submit">
                Comprar Ahora
              </button>
              <button class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                Añadir al carrito
              </button>
            </div>
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-pink-600 bg-pink-50" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-500">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </Card>

    <Card>


      <div class="flex font-sans">
        <div class="flex-none w-56 relative">
          <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto font-medium text-slate-900">
              Producto
            </h1>
            <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-pink-600">
              $39.00
            </div>
            <div class="text-sm font-medium text-slate-400">
              In stock
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

          </div>
          <div class="flex space-x-4 mb-5 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <button class="h-10 px-6 font-semibold rounded-full bg-pink-600 text-white" type="submit">
                Comprar Ahora
              </button>
              <button class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                Añadir al carrito
              </button>
            </div>
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-pink-600 bg-pink-50" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-500">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </Card>

    <Card>

      <div class="flex font-sans">
        <div class="flex-none w-56 relative">
          <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto font-medium text-slate-900">
              Producto
            </h1>
            <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-pink-600">
              $39.00
            </div>
            <div class="text-sm font-medium text-slate-400">
              In stock
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

          </div>
          <div class="flex space-x-4 mb-5 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <button onClick={goDetail} class="h-10 px-6 font-semibold rounded-full bg-pink-600 text-white" type="submit">
                Comprar Ahora
              </button>
              <button class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                Añadir al carrito
              </button>
            </div>
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-pink-600 bg-pink-50" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-500">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </Card>

  </CardContainer></>
    )
}
export default Products;