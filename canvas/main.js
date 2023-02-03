window.onload = function () {
  // encuentre el canvas para dibujar.
  var canvas = document.getElementById("canvasPrueba");
  // si existe el canvas y si tiene el método getContext
  if (canvas && canvas.getContext) {
    // utilice el método getContext para recuperar el contexto del canvas
    var ctx = canvas.getContext("2d");
    // y si tenemos contexto
    if (ctx) {
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#f00";
      ctx.beginPath();
      let inicioX = 20;
      let inicioY = 130;
      let finX = 50;
      let finY = 230;
      ctx.moveTo(inicioX, inicioY);
      ctx.lineTo(finX, finY);

      let incrementoInicioX = 5;
      let incrementoInicioY = 3;
      let incrementoFinX = 2;
      let incrementoFinY = 1;

      setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#f00";
        inicioX += incrementoInicioX;
        inicioY += incrementoInicioY;
        finX += incrementoFinX;
        finY += incrementoFinY;

        // Impacto en el limite
        if (inicioX >= canvas.width) {
          inicioX = canvas.width;
          incrementoInicioX = -Math.random() * 5;
        }
        if (inicioY >= canvas.height) {
          inicioY >= canvas.height;
          incrementoInicioY = -Math.random() * 5;
        }
        if (finX >= canvas.width) {
          finX = canvas.width;
          incrementoFinX = -Math.random() * 5;
        }
        if (finY >= canvas.height) {
          finY = canvas.height;
          incrementoFinY = -Math.random() * 5;
        }

        // Impacto en 0
        if (inicioX < 0) {
          inicioX = 0;
          incrementoInicioX = Math.random() * 5;
        }
        if (inicioY < 0) {
          inicioY = 0;
          incrementoInicioY = Math.random() * 5;
        }
        if (finX < 0) {
          finX = 0;
          incrementoFinX = Math.random() * 5;
        }
        if (finY < 0) {
          finY = 0;
          incrementoFinY = Math.random() * 5;
        }

        ctx.moveTo(inicioX, inicioY);
        ctx.lineTo(finX, finY);
        ctx.stroke();
      }, 50);
      ctx.stroke();
      ctx.closePath();
    }
  }
};
