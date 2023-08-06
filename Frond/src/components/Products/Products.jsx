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
  border-radius: 1rem;
  display:flex;
  padding:1rem;
  flex-direction:row;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin: 1rem;
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
font-size:30px;
`

const Products = () => {
  const navigate = useNavigate()
  const goDetail = () => {
    let id = 1;
  navigate(`/detail/${id}`)
  }
  

return (
  <><H1>Descubre nuestras categorias</H1><CardContainer>
   
    <Card>
  
<div class="flex font-sans">
  <div class="flex-none w-48 relative">
  <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />

  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900">
        Maquillajes
      </h1>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
     
    </div>
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Ver mas
        </button>

      </div>
    </div>
    <p class="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>
    </Card>

    <Card>
  
  <div class="flex font-sans">
    <div class="flex-none w-48 relative">
    <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-semibold text-slate-900">
          Skin Care
        </h1>
      </div>
      <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
       
      </div>
      <div class="flex space-x-4 mb-6 text-sm font-medium">
        <div class="flex-auto flex space-x-4">
          <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
            Ver mas
          </button>
  
        </div>
      </div>
      <p class="text-sm text-slate-700">
        Free shipping on all continental US orders.
      </p>
    </form>
  </div>
    </Card>

    <Card>
  
  <div class="flex font-sans">
    <div class="flex-none w-48 relative">
    <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-semibold text-slate-900">
          Accesorios
        </h1>
      </div>
      <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
       
      </div>
      <div class="flex space-x-4 mb-6 text-sm font-medium">
        <div class="flex-auto flex space-x-4">
          <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
            Ver mas
          </button>
  
        </div>
      </div>
      <p class="text-sm text-slate-700">
        Free shipping on all continental US orders.
      </p>
    </form>
  </div>
    </Card>

    
  </CardContainer></>
    )
}
export default Products;