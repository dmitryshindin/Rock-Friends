import "./Galeria.css";

function Galeria() {
  return (
    <section id="galeria">
      <div>
        <div className="galeria-title">
          <strong>02</strong>
          <h1 className="text_bold">GALERIA</h1>
          <hr />
        </div>
        <div className="picture-grid">
          <div className="grid-box">
            <a href="" data-lightbox="galeria">
              <img src="/assets/Galeria-foto/1.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galeria;
