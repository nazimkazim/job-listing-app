import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Filter from "./components/Filter";
import LeftSideFilter from "./components/LeftSideFilter";
import data from "./data.json";

const App = () => {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sideFilters, setSideFilters] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  useEffect(() => {
    const newSet = new Set();
    data.forEach((obj) => {
      newSet.add(...obj.languages);
      if (obj.tools.length) {
        newSet.add(...obj.tools);
      }
      newSet.add(obj.role);
      newSet.add(obj.level);
    });
    const array = Array.from(newSet);
    setSideFilters(array);
  }, []);

  useEffect(() => {
    if (filters.length === 0) {
      setCards(data);
    } else {
      const filtered = data.filter((obj) => {
        return filters.every((filter) => {
          return (
            obj.languages.includes(filter) ||
            obj.tools.includes(filter) ||
            obj.role === filter ||
            obj.level === filter
          );
        });
      });
      setCards(filtered);
    }
  }, [filters]);

  return (
    <div className="container">
      <div className="header"></div>
      <div className="main">
        <Filter setFilters={setFilters} filters={filters} />
        <div className="leftFilterAndCard">
          <div className="leftFilter">
            <LeftSideFilter
              sideFilters={sideFilters}
              setFilters={setFilters}
              filters={filters}
            />
          </div>
          <div className="cards-container">
            {cards.map((item) => (
              <Card
                filters={filters}
                setFilters={setFilters}
                key={item.id}
                data={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
