import './style.css';
import userIco from '../../assets/user.png'

export default function SectionPresent() {
  return (
    <>
      <nav id='nav' className="navbar" style={{backgroundColor: '#F3F3F3'}}>
        <div className="m-2">
          <a id='txt-produto' className="navbar-brand">Produtos</a>
        </div>

        <div id='user-div' className="m-2 d-flex gap-2 align-items-center">
          <div>
            <img src={userIco} width={55}/>
          </div>

          <div className='ms-2 d-flex flex-column'>
            <span id='user-name'>Maria</span>
            <span id='user-ocupes'>Caixa</span>
          </div>
        </div>
      </nav>
    </>
  );
}