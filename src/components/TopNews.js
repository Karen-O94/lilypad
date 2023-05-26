import { useEffect, useState } from "react";

function TopNews(props) {
  const [headlines, setHeadlines] = useState([]);
  const { city } = props;
  let newsCity = city;
  const apiKey = "f36795f9abc460d7b535bfe9ab2b93f5";
  const queryURL = `https://gnews.io/api/v4/top-headlines?q=${newsCity}&max=3&lang=en&image=required&token=${apiKey}`;

  const fetchData = async () => {
    if (newsCity) {
      try {
        const response = await fetch(queryURL, {
          method: "GET",
        });

        const data = await response.json();
        setHeadlines(data.articles);
      } catch (error) {
        alert("There was an error fetching the data", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
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
