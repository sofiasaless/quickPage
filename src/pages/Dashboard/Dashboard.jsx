import Header from '../../components/Header/Header';
import InternNav from '../../components/InternNav/InternNav';
import ProductTable from '../../components/ProductTable/ProductTable';
import SectionPresent from '../../components/SectionPresent/SectionPresent';
import './style.css';

export default function Dashboard({ children }) {
  return (
    <>
      <section id="admin-section">
        <Header />

        <div id="section-content" className="p-2 d-flex flex-column align-items-center">
          <div className="m-2 container">
            <SectionPresent />

            <InternNav />

            <ProductTable />
          </div>

          <div id="form-sec" className="container m-3 d-flex flex-column align-items-center justify-content-center">
            {children}
          </div>

        </div>

      </section>
    </>
  );
}