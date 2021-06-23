<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Mauro Prystupa</title>
    <meta
      name="viewport"
      content="width=device-width, 
      user-scalable=no, 
      initial-scale=1.0, 
      maximum-scale=1.0, 
      minimum-scale=1.0">
    <!-- este meta es para que se adapte a los dispositivos -->

    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <!-- este link conecta el css de los iconos -->

    <link rel = "preconnect" href = "https://fonts.gstatic.com">

    
    <link rel="stylesheet" type="text/css" media="screen" href="css/estilos.css" />
    <!-- este link conecta los estilos del css -->

    <script src="js/tarjeta.js"></script>
    <!-- este scrip conecta las funciones de js  -->
    
  </head>

  <body>
    <div class="contenedor" id="contenedor">

      <section class="tarjeta">

        <section class="slider-banner">

          <div class="banner" id="banner">


            <img class="slider activo"alt=""  src="img/foto1.jpg" >
            <!-- la imagen tiene que ser de ancho 700px - alto 300px  -->
            <img class="slider"alt=""  src="img/foto2.jpg">
            <!-- la imagen tiene que ser de ancho 700px - alto 300px  -->
            <img class="slider"alt=""  src="img/foto3.jpg">
            <!-- la imagen tiene que ser de ancho 700px - alto 300px  -->
            <img class="slider"alt=""  src="img/foto4.jpg">
            <!-- la imagen tiene que ser de ancho 700px - alto 300px  -->


          </div>
          <a href="#" id="anterior" class="flecha-banner anterior"
            ><span class="fa fa-backward"></span
          ></a>
          <!-- el id es para conectar con js y la class es para darle estilo con css -->
          <a href="#" id="siguiente" class="flecha-banner siguiente"
            ><span class="fa fa-forward"></span
          ></a>
          <!-- el id es para conectar con js y la class es para darle estilo con css -->
        </section>

        <section class="slider-info">
          <a href="#" id="info-previo" class="flecha-info anterior"
            ><span class="fa fa-backward"></span
          ></a>
          <!-- el id es para conectar con js y la class es para darle estilo con css -->
          <a href="#" id="info-siguiente" class="flecha-info siguiente"
            ><span class="fa fa-forward"></span
          ></a>
          <!-- el id es para conectar con js y la class es para darle estilo con css -->
          <section id="informacion" class="informacion">
            <article id="info">
              <div class="slider activo">
                <h1 class="nombre">Mauro Prystupa</h1>
                <p class="trabajo">De Todo Un Poco</p>
                <p class="pais">
                  <img src="img/bandera.jpg" alt="ARGENTINA" />ARGENTINA
                </p>
              </div>
              <div class="slider">
                <h1 class="nombre">Mauro</h1>
                <p class="trabajo">2</p>
                <p class="pais">
                  <img src="img/bandera.jpg" alt="ARGENTINA" />ARGENTINA
                </p>
              </div>
              <div class="slider">
                <h1 class="nombre">Prystupa</h1>
                <p class="trabajo">3</p>
                <p class="pais">
                  <img src="img/bandera.jpg" alt="ARGENTINA" />ARGENTINA
                </p>
                <h1 class="nombre">Prystupa</h1>
                <p class="trabajo">3</p>
                <p class="pais">
                  <img src="img/bandera.jpg" alt="ARGENTINA" />ARGENTINA
                </p>
              </div>

            </article>
            <div class="botones" id="botones"></div>
          </section>
        </section>

        <section class="redes">
            <a href="#" class="instagram"><span class="fa fa-instagram"></span></a>
            <a href="#" class="facebook"><span class="fa fa-facebook"></span></a>
            <a href="#" class="github"><span class="fa fa-github"></span></a>
            <a href="#" class="twitter"><span class="fa fa-twitter"></span></a>
        </section>
      </section>
    </div>
<script src="js/jquery.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="js/main.js"></script>
  </body>
</html>
