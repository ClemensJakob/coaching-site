const WordRotator = () => (
  <div className="wrapper">
    <p>Coding is</p>
    <div className="words">
      <span>Entdecke</span>
      <span>Entwickle</span>
      <span>Stärke</span>
    </div>
    <style jsx>{`
      *,
      *:before,
      *:after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        font-size: 45px;
        font-weight: 500;
      }
      .wrapper {
        box-sizing: content-box;
        background-color: #ffffff;
        height: 70px;
        padding: 50px 30px;
        display: flex;
        border-radius: 8px;
        box-shadow: 0 20px 25px rgba(0, 0, 0, 0.2);
      }
      .words {
        overflow: hidden;
      }
      span {
        display: block;
        height: 100%;
        padding-left: 10px;
        color: #0e6ffc;
        animation: spin_words 6s infinite;
      }
      @keyframes spin_words {
        10% {
          transform: translateY(-112%);
        }
        25% {
          transform: translateY(-100%);
        }
        35% {
          transform: translateY(-212%);
        }
        50% {
          transform: translateY(-200%);
        }
        60% {
          transform: translateY(-312%);
        }
        75% {
          transform: translateY(-300%);
        }
        85% {
          transform: translateY(-412%);
        }
        100% {
          transform: translateY(-400%);
        }
      }
    `}</style>
  </div>
);

export default WordRotator;
