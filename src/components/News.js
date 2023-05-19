import News1 from "../images/news_1_placeholder.webp";
import News2 from "../images/news_2_placeholder.webp";
import News3 from "../images/news_3_placeholder.webp";
import "./News.css";

function News() {
  return (
    <div className="News">
      <div className="News-Header">
        <h3>LOCAL NEWS</h3>
      </div>
      <div className="News-Body">
        <div className="News1">
          <div className="news-image">
            <a href="https://www.bbc.co.uk/news/business-65649851">
              <img src={News1} alt="News 1" />
            </a>
          </div>
          <p>
            News Story Placeholder - Tesco chairman John Allan to quit after
            claims over behaviour
          </p>
        </div>
        <div className="News2">
          <div className="news-image">
            <a href="https://www.bbc.co.uk/news/uk-england-london-65648245">
              <img src={News2} alt="News 2" />
            </a>
          </div>
          <p>
            News Story Placeholder - Just Stop Oil: Man pushes protester to the
            ground
          </p>
        </div>
        <div className="News3">
          <div className="news-image">
            <a href="https://www.bbc.co.uk/news/uk-65649910">
              <img src={News3} alt="News 3" />
            </a>
          </div>
          <p>
            News Story Placeholder - Daily Mirror 'paid private investigator
            without checks', court hears
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
