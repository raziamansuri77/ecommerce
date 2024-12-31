import React, { useState, useEffect } from "react";
import { InfiniteScroll } from "react-infinite-scroll-component";

const fetchData = async (page) => {
  // Replace with your API call
  const response = await fetch(`https://api.example.com/data?page=${page}`);
  const data = await response.json();
  return data;
};

const InfiniteScrollComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page).then((newData) => {
      setData([...data, ...newData]);
      setPage(page + 1);
    });
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchData}
      hasMore={true}
      loader={<div>Loading...</div>}
    >
      {data.map((item, index) => (
        <div key={index}>{item.content}</div>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
