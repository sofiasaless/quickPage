import './style.css'

export function TableLine ( { props, img } ) {
  return (
    <>
      <tr>
        {/* <th scope="row">1</th> */}
        <td className='d-flex align-items-center'>
          <img src={img} width={45}/>
          <span className='ms-2 align-middle'>{props.produto}</span>
        </td>
        <td className='align-middle'>{props.categoria}</td>
        <td className='align-middle'>{props.estoque}</td>
        <td className='align-middle'>R$ {props.preco}</td>
      </tr>
    </>
  );
}