import { TableLine } from '../TableLine/TableLine';
import './style.css'

export default function ProductTable() {
  return (
    <div class="table-responsive">
      <table id='tabela-responsiva' className="table table-responsive table-custom">
        <thead>
          <tr>
            <th scope="col">Produto</th>
            <th scope="col">Categoria</th>
            <th scope="col">Estoque</th>
            <th scope="col">Preço</th>
          </tr>
        </thead>
        <tbody>
          <TableLine
            img={'https://www.diasbike.com.br/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/I/M/IMG_2298.jpg'}
            props={{ produto: 'Suporte Bike Aro 29', categoria: 'Peças de reposição', estoque: 29, preco: 109.99 }}
          />
          <TableLine
            img={'https://static.bikepointsc.com.br/public/bikepointsc/imagens/produtos/cabo-freio-de-bicicleta-alligator-inox-mtb-e-road-67082c258b42e.jpg'}
            props={{ produto: 'Cabo freio Aligator', categoria: 'Peças de reposição', estoque: 14, preco: 19.99 }}
          />
          <TableLine
            img={'https://acdn.mitiendanube.com/stores/002/165/857/products/capacete_de_mtb_rockbros_venus-31-b8c731f26b1cd6237e16580771009447-1024-1024.jpg'}
            props={{ produto: 'Capacete Ruckbross', categoria: 'Equipamento de segurança', estoque: 9, preco: 129.99 }}
          />
          <TableLine
            img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxfQn8QY1APpLD4eaAHNyN0mW0RmPq0jrjQ&s'}
            props={{ produto: 'Manopla Rontek Silicone', categoria: 'Peças de reposição', estoque: 12, preco: 79.99 }}
          />
          <TableLine
            img={'https://images.tcdn.com.br/img/img_prod/939039/suporte_de_caramanhola_beto_garrafa_guidao_canote_627_1_7fccd84e06f4097ba1e98990c7c50ad0.jpg'}
            props={{ produto: 'Suporte para garrafa para Bike', categoria: 'Acessórios', estoque: 43, preco: 39.99 }}
          />
        </tbody>
      </table>
    </div>
  );
}