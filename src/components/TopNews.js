//import { async } from "q";
import { useEffect, useState } from "react";

function TopNews({props}) {
  // creates function to fetch news headlines from API
  const [headlines, setHeadlines] = useState([]); //uses state to manage the fetched headlines
  const {city} = props;
  let newsCity = city;
  const apiKey = "f36795f9abc460d7b535bfe9ab2b93f5";
  const queryURL = `https://gnews.io/api/v4/top-headlines?q=${newsCity}&max=3&lang=en&image=required&token=${apiKey}`;

  // fetches the news headlines from the API into json format and catches any errors

  useEffect(() => {
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
        fetchData();
        // this takes user input into the form
        return (
          <div>
            <ul>
              {headlines.map((article, index) => (
                <li key={index}>
                  <a href={article.url}>{article.title}</a>
                  <img src={article.image} alt="Article" />-{" "}
                  {article.description}
                </li>
              ))}
            </ul>
          </div>
        );
      }
    };
  });
}

export default TopNews;
