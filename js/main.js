const canvasRec = document.getElementById("canvasRec");
const canvasTrian = document.getElementById("canvasTrian");
const canvasPluma = document.getElementById("canvasPluma");
const canvasLineas = document.getElementById("canvasLineas");
const canvasArco = document.getElementById("canvasArco");
const canvasCurva = document.getElementById("canvasCurva");
const canvasCurvaC = document.getElementById("canvasCurvaC");
const canvasPacman = document.getElementById("canvasPacman");
const canvasPath = document.getElementById("canvasPath");

function drawRectangle() {
    const ctx = canvasRec.getContext("2d");
    if (canvasRec.getContext) {
        ctx.fillStyle = "green";
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
        
    }
}


function draw2Triangle() {
    const ctx = canvasTrian.getContext("2d");
    if (canvasTrian.getContext) {

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(25, 100);
        ctx.lineTo(125, 100);
        ctx.lineTo(75, 25);
        ctx.fill();
        
    }
}

function drawFeather() {
    if (canvasPluma.getContext) {
        const ctx = canvasPluma.getContext("2d");
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
        ctx.stroke();

    }
}

function drawLines() {
    if (canvasLineas.getContext) {
        const ctx = canvasLineas.getContext("2d");

        
        ctx.fillStyle = "cyan";
        // Triángulo relleno
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 3;
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.lineTo(25, 25);
        ctx.fill();
        

        // Triángulo contorneado
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
    }
}

function drawBow() {
    if (canvasArco.getContext) {
      const ctx = canvasArco.getContext("2d");
      ctx.strokeStyle = "#9e8702";
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          const x = 25 + j * 50; // Coordenada x
          const y = 25 + i * 50; // Coordenada y
          const radius = 20; // Radio del Arco
          const startAngle = 0; // Punto inicial del Círculo
          const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
          const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario
  
          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
          ctx.fillStyle = "yellow";
          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
      }
    }
  }
  
  function drawCurve() {
    if (canvasCurva.getContext) {
      const ctx = canvasCurva.getContext("2d");
  
      // Ejemplo de curvas cuadráticas
      ctx.beginPath();
      ctx.strokeStyle = "#3f029e";
      ctx.moveTo(75, 25);
      ctx.quadraticCurveTo(25, 25, 25, 62.5);
      ctx.quadraticCurveTo(25, 100, 50, 100);
      ctx.quadraticCurveTo(50, 120, 30, 125);
      ctx.quadraticCurveTo(60, 120, 65, 100);
      ctx.quadraticCurveTo(125, 100, 125, 62.5);
      ctx.quadraticCurveTo(125, 25, 75, 25);
      ctx.stroke();
    }
  }

  function drawCurveC() {
    if (canvasCurvaC.getContext) {
      const ctx = canvasCurvaC.getContext("2d");
  
      // Ejemplo de curvas cúbicas
      ctx.beginPath();
      ctx.fillStyle = "red";
      ctx.moveTo(75, 40);
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
      ctx.fill();
    }
  }
  
  function drawPacMan() {
    if (canvasPacman.getContext) {
      const ctx = canvasPacman.getContext("2d");
  
      roundedRect(ctx, 12, 12, 150, 150, 15);
      roundedRect(ctx, 19, 19, 150, 150, 9);
      roundedRect(ctx, 53, 53, 49, 33, 10);
      roundedRect(ctx, 53, 119, 49, 16, 6);
      roundedRect(ctx, 135, 53, 49, 33, 10);
      roundedRect(ctx, 135, 119, 25, 49, 10);
      ctx.fillStyle = "yellow";
      ctx.strokeStyle = "black";
      ctx.beginPath();
      ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
      ctx.strokeStyle = "black";
      ctx.lineTo(31, 37);
      ctx.fill();
  
      for (let i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 35, 4, 4);
      }
  
      for (i = 0; i < 6; i++) {
        ctx.fillRect(115, 51 + i * 16, 4, 4);
      }
  
      for (i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 99, 4, 4);
      }
  
      ctx.fillStyle = "pink";
      ctx.beginPath();
      ctx.moveTo(83, 116);
      ctx.lineTo(83, 102);
      ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
      ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
      ctx.lineTo(111, 116);
      ctx.lineTo(106.333, 111.333);
      ctx.lineTo(101.666, 116);
      ctx.lineTo(97, 111.333);
      ctx.lineTo(92.333, 116);
      ctx.lineTo(87.666, 111.333);
      ctx.lineTo(83, 116);
      ctx.fill();
  
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(91, 96);
      ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
      ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
      ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
      ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
      ctx.moveTo(103, 96);
      ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
      ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
      ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
      ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
      ctx.fill();
  
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();
  
      ctx.beginPath();
      ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
  
  // Una función auxiliar para dibujar un rectángulo con esquinas redondeadas.
  
  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }

  function drawPath() {
    if (canvasPath.getContext) {
      const ctx = canvasPath.getContext("2d");
  
      const rectangle = new Path2D();
      ctx.fillStyle = "red";
      rectangle.rect(10, 10, 50, 50);
  
      const circle = new Path2D();

      circle.arc(100, 35, 25, 0, 2 * Math.PI);
      ctx.strokeStyle = "green";
      ctx.stroke(rectangle);
      ctx.fill(circle);
    }
  }
  
  
  


drawRectangle();
draw2Triangle();
drawFeather();
drawLines();
drawBow();
drawCurve();
drawCurveC();
drawPacMan();
drawPath();
