import { Link } from "react-router-dom";
import "./Home.css";

   /// SOBRE:
//// UML,ARQUITETURA ANTES E DEPOIS,EXPLICAÇÃO DETALHADA, ARQUITETURA CLOUD
    // CONHECIMENTOS APRENDIDOS
function Home() {


    return (
    <>
      <div className='container-body'>
      {/* NavBar */}
      <div className="navbar">
            <h1>Minha NavBar</h1>
        <Link to="/banco">
      <button>Ir para Banco</button>
        </Link>
        </div>
        
      <div className="container">
          
      
               {/* Coluna direita */}
          <div className="side"></div>
     
      {/* Coluna central */}
          <div className="center">
            
             <div className="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Proin laoreet erat sed nulla fermentum, ac feugiat ligula interdum.</p>
          <p>Vestibulum auctor nunc non ultricies dignissim.</p>
          <p>Curabitur gravida lacus nec turpis pellentesque, at facilisis purus dictum.</p>
          <p>Donec malesuada lorem in odio tristique, in vehicula eros fringilla.</p>
          <p>Ut tincidunt dui sed risus facilisis, vel scelerisque lectus venenatis.</p>
          <p>Nam aliquet risus nec massa facilisis cursus.</p>
          <p>Mauris varius metus vitae risus elementum efficitur.</p>
          <p>Nullam sit amet lectus non dolor tristique tristique nec eu elit.</p>
          <p>Etiam a arcu a elit convallis viverra.</p>
          <p>Aliquam erat volutpat.</p>
          <p>Sed malesuada nulla id arcu fermentum, nec hendrerit metus mollis.</p>
          <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
            <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>  
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>

              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>

              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
              <p>Pellentesque nec sapien dictum, bibendum sapien eget, luctus eros.</p>
        </div>
   
      </div>

      {/* Coluna direita */}
          <div className="side"></div>
          
          </div>
          
          </div>  
    
    
    </>
 
  );
  
}

export default Home;