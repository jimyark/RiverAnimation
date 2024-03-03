<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>River Animation</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    
    .river {
      width: 100%;
      height: 200px; /* 河流的高度 */
      background-color: #2c3e50; /* 河流的颜色 */
      position: relative;
    }
    
    .water {
      width: 100%;
      height: 50px; /* 水的厚度 */
      background-color: #3498db; /* 水的颜色 */
      position: absolute;
      bottom: 0;
      left: 0;
    }
  </style>
</head>
<body>
  <div class="river">
    <div class="water"></div>
  </div>
  <script>
    const water = document.querySelector('.water');
    let currentPosition = 0;

    function animateWater() {
      currentPosition -= 1;
      water.style.transform = `translateX(${currentPosition}px)`;
      if (currentPosition <= -100) {
        currentPosition = 0;
      }
      requestAnimationFrame(animateWater);
    }

    animateWater();
  </script>
</body>
</html>
