const string = `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .skin {
    background: #ffe600;
    height: 100vh;
    position: relative;
  }
  .nose {
    position: absolute;
    border: 1px solid black;
    left: 50%;
    margin-left: -5px;
    width: 10px;
    height: 10px;
    top: 145px;
    transform: rotate(45deg);
    transform-origin: center;
    border-radius: 15px 2px 2px 2px;
    background: #000000;
  }
  @keyframes wave {
    0% {
      transform: rotate(45deg);
    }
    33% {
      transform: rotate(40deg);
    }
    66% {
      transform: rotate(50deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
  .nose:hover {
    transform-origin: center;
    animation: wave 300ms infinite linear;
  }
  .eye {
    border: 3px solid black;
    width: 50px;
    height: 50px;
    background: #2e2e2e;
    border-radius: 50%;
    left: 50%;
    margin-left: -25px;
    top: 120px;
    position: absolute;
  }
  .eye.left {
    transform: translateX(-95px);
    position: absolute;
  }
  .eye.right {
    transform: translateX(95px);
  }
  .eye::before {
    content: "";
    display: block;
    border: 2px solid #000;
    width: 23px;
    height: 23px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 4px;
  }
  .mouth {
    width: 200px;
    height: 200px;
    left: 50%;
    margin-left: -100px;
    position: absolute;
    top: 170px;
  }
  .mouth .up {
    position: relative;
    top: -5px;
  }
  .mouth .up .lip {
    border: 3px solid black;
    border-top: none;
    width: 60px;
    height: 20px;
    left: 50%;
    margin-left: -30px;
    position: absolute;
    background: #ffe600;
    z-index: 10;
  }
  .mouth .up .lip.left {
    transform: translateX(-30px) rotate(-20deg);
    border-radius: 0 0 0 30px;
    border-top-color: transparent;
    border-right: none;
  }
  .mouth .up .lip.right {
    transform: translateX(30px) rotate(20deg);
    border-radius: 0 0 30px 0;
    border-top-color: transparent;
    border-left: none;
  }
  .mouth .down {
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
  
    overflow: hidden;
  }
  .mouth .down .out {
    height: 1000px;
    width: 120px;
    border: 3px solid black;
    bottom: 50px;
    position: absolute;
    left: 50%;
    margin-left: -60px;
    border-radius: 75px/300px;
    overflow: hidden;
    background: #9b000a;
  }
  .mouth .down .out .in {
    height: 200px;
    width: 100px;
    left: 50%;
    margin-left: -50px;
    background: #ff485f;
    position: absolute;
    bottom: -90px;
    border-radius: 50px/35px;
  }
  .face {
    border: 3px solid black;
    width: 68px;
    height: 68px;
    background: #ff0000;
    border-radius: 50%;
    left: 50%;
    margin-left: -34px;
    position: absolute;
    top: 200px;
  }
  .face.left {
    transform: translateX(-127px);
  }
  .face.right {
    transform: translateX(127px);
  }
  .cool {
    border: 10px solid #2e2e2e;
    transform: rotate(45deg) translateX(-150px);
    width: 50px;
    height: 50px;
    border-left: none;
    border-bottom: none;
    left: 50%;
    margin-left: -25px;
    top: 225px;
    position: absolute;
    display: none;
  }
  .eye.left:hover {
    opacity: 0;
  }
  .eye.left:hover + .cool {
    display: block;
  }
  /* 悄咪咪告诉你
   * 碰碰我左脸试试呀
   */  
  `;

export default string;
