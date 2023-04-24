import React, { useEffect, useState, useCallback } from "react";
import StickyContainer from "./components/StickyContainer";
import ScrollableContainer from "./components/ScrollableContainer";
import "./App.css";

const convertSnakeToCamel = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    const camelKey = key.replace(/_\w/g, (match) => match[1].toUpperCase());
    acc[camelKey] = obj[key];
    return acc;
  }, {});
};

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    const camelCaseData = json.map(convertSnakeToCamel);
    setData(camelCaseData);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};

const App = () => {
  const projects = useFetchData("http://localhost:4000/projects");
  const blogs = useFetchData("http://localhost:4000/blogs");
  const workHistory = useFetchData("http://localhost:4000/work-history");

  return (
    <div className="flex flex-col md:flex-row w-full justify-center gradient">
      <StickyContainer />
      <ScrollableContainer
        projects={projects}
        blogs={blogs}
        workHistory={workHistory}
      />
    </div>
  );
};

export default App;
