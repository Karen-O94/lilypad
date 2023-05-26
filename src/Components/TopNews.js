import { useState } from "react";

function NewsHeadlines() {
  const [headlines, setHeadlines] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const destination = event.target.elements.destination.value;
    const apiKey = 'f36795f9abc460d7b535bfe9ab2b93f5';
    const queryURL = `https://gnews.io/api/v4/top-headlines?q=${destination}&max=5&image=required&token=${apiKey}`;

    try {
      const response = await fetch(queryURL, {
        method: "GET",
      });

      const data = await response.json();
      setHeadlines(data.articles);
    } 
    catch (error) {
      alert("There was an error fetching the data", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="destination">Enter your destination:</label>
        <input type="text" name="destination" id="destination" />
        <button type="submit">Search</button>
      </form>


      <ul>
        {headlines.map((article, index) => (
          <li key={index}>
            <a href={article.url}>
              {article.title}
            </a>
            <img src={article.image} alt="Article" />
            - {article.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsHeadlines;
