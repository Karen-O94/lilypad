import { useEffect, useState } from "react";
import "./TopNews.css";
import Button from "@mui/material/Button";
// importing hooks, button component from mui and css stylesheet

function TopNews({ props }) {
  const [headlines, setHeadlines] = useState([]);
  const { city } = props;
  // receives city props from data provider

  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        const apiKey = "62bcea3d0ec6311465039f3e2a53dda2";
        const queryURL = `https://gnews.io/api/v4/top-headlines?q=${city}&max=3&lang=en&image=required&token=${apiKey}`;
        // max 3 specifies we get an array of 3 news stories

        try {
          const response = await fetch(queryURL, {
            method: "GET",
          });

          const data = await response.json();
          setHeadlines(data.articles);
        } catch (error) {
          alert("There was an error fetching the data", error);
        }
      };
      fetchData();
    }
  }, [city]);
  // API call to gnews API with error handling

  return (
    <div className="topnews-container">
      <h3>CHECK OUT THE LOCAL NEWS IN {city}</h3>
      <ul className="news-body">
        {headlines.map((article, index) => (
          <div className="news-event">
            <li key={index}>
              <h4>{article.title}</h4>
              <a href={article.url} target="_blank">
                <img src={article.image} alt="Article" />
              </a>
              <Button
                style={{
                  backgroundColor: "#5A815C",
                }}
                variant="contained"
                size="small"
                onClick={() => window.open(article.url, "_blank")}
              >
                Read more
              </Button>
            </li>
          </div>
        ))}
      </ul>
      {/* using map to render each news story from the arrray of news stories */}
    </div>
  );
}

export default TopNews;
