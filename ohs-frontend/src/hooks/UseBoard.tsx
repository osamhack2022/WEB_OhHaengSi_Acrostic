import axios from 'axios';
import React, { useEffect, useState } from 'react';

type writer = { id: number; username: string; name: string; rank: string };
type item = {
  id: number;
  title: string;
  type: string;
  content: string;
  writer: writer;
  createdAt: string;
  writerId: number;
};
type prop = { date: string };

function UseBoard(Prop: prop) {
  const [items, setItems] = useState<item[]>([]);

  const getData = async () => {
    axios
      .get('https://ohs.run.goorm.io/notice/')
      .then((response: any) => {
        console.log(response);
        setItems(response.data.items);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return { items };
}

export default UseBoard;
