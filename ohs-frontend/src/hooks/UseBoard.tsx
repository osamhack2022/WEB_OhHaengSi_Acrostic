import axios from 'axios';
import React, { useEffect, useState } from 'react';

type item = { type: string; title: string; writer: { name: string }; createdAt: string };
type prop = { date: string };

function UseBoard(Prop: prop) {
  const [items, setItems] = useState<item[]>([]);
  const [content, setContent] = useState('');

  const getContent = async (id: number) => {
    axios
      .get('https://ohs.run.goorm.io/notice/' + id)
      .then((response: any) => {
        console.log(response);
        setContent(response.data.content);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const getData = async () => {
    axios
      .get('https://ohs.run.goorm.io/notice', { params: Prop })
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

  return { items: items, content: content, getContent: getContent };
}

export default UseBoard;
