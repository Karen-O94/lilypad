import { useEffect, useState } from "react";

function TopNews({props}) {
  const [headlines, setHeadlines] = useState([]);
  const { city } = props;
  
    useEffect(() => {
      if (city) {
      const fetchData = async () => {
          const apiKey = "af328d16bbec8f2d48d639eff030f120";
          const queryURL = `https://gnews.io/api/v4/top-headlines?q=${city}&max=3&lang=en&image=required&token=${apiKey}`;

          try {
            const response = await fetch(queryURL, {
              method: "GET",
            });
    
            const data = await response.json();
            setHeadlines(data.articles);
          } catch (error) {
            alert("There was an error fetching the news data", error);
          }
        }
        fetchData();
      };
  }, [city]);


  return (
    <div>
      <h3>CHECK OUT THE LOCAL NEWS IN {city}</h3>
      <ul>
        {headlines.map((article, index) => (
          <li key={index}>
            <a href={article.url}>{article.title}</a>
            <img src={article.image} alt="Article" />- {article.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopNews;
