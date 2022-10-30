import { prepareServerlessUrl } from "next/dist/server/base-server";
import React, { useCallback, useEffect, useState } from "react";
import { DEFAULT_OPTIONS, del, get, patch, post } from "../../lib/api/common";

export type Cleaning = {
  id: number;
  date: string;
  byRoom: string[][];
  inRoom: string[][];
};

type addArea = { byRoom: string; inRoom: string };

type date = { year: number; month: number; day: number };

function useCleaning() {
  const [date, setDate] = useState<date>(() => {
    const d = new Date();
    return {
      year: d.getFullYear(),
      month: d.getMonth(),
      day: d.getDate(),
    };
  });
  const [roomId, setRoomId] = useState(1);
  const [byRoom, setByRoom] = useState([]);
  const [inRoom, setInRoom] = useState([]);
  const [Area, setArea] = useState<addArea>({ byRoom: "", inRoom: "" });

  // 담당구역 추가 함수
  const addArea = (type: string) => {
    if (type == "byRoom") {
      post("/cleaning", { name: Area.byRoom, inChargeId: 0 }, DEFAULT_OPTIONS)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      alert("생활관 별 담당구역이 생성되었습니다.");
    } else if (type == "inRoom") {
      post(
        `/cleaning/room/${roomId}`,
        { name: Area.inRoom },
        DEFAULT_OPTIONS
      ).catch((error) => console.log(error));
      alert("생활관 별 담당구역이 생성되었습니다.");
    }
    location.reload();
  };

  const updateArea = () => {
    patch(
      `/cleaning/${roomId}`,
      { name: Area.inRoom, inChargeId: 0 },
      DEFAULT_OPTIONS
    )
      .then((response) => {
        console.log("데이터를 변경하였습니다.");
      })
      .catch((error) => console.log(error));
    location.reload();
  };

  const delRoom = () => {
    del(`/cleaning/${roomId}`, DEFAULT_OPTIONS)
      .then((response) => {
        console.log("데이터가 초기화되었습니다.");
      })
      .catch((error) => console.log(error));
    location.reload();
  };

  const onChange = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (type == "byRoom") {
      setArea({ ...Area, byRoom: e.currentTarget.value });
    } else if (type == "inRoom") {
      setArea({ ...Area, inRoom: e.currentTarget.value });
    }
  };

  // 날짜 및 생활관 변경 시 데이터 get 함수
  const getData = async () => {
    const url = `/cleaning/${roomId}/${YMDDate()}`;
    get(url, DEFAULT_OPTIONS)
      .then((response) => {
        setByRoom(response.byRoom);
        setInRoom(response.inRoom);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [date, roomId]);

  // 날짜 관련 함수
  const getDate = (d: date) => {
    const newDate = new Date(d.year, d.month, d.day);
    return {
      year: newDate.getFullYear(),
      month: newDate.getMonth(),
      day: newDate.getDate(),
    };
  };

  const YMDDate = () => {
    return date.year + "-" + (date.month + 1) + "-" + date.day;
  };

  const addDate = (n: number) => {
    setDate(getDate({ ...date, day: date.day + n }));
  };

  const chDate = (e: React.ChangeEvent<HTMLInputElement>) => {};

  // 생활관 관련 함수
  const chRoomId = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoomId(Number(e.currentTarget.value));
  };

  return {
    byRoom,
    inRoom,
    Area,
    addArea,
    updateArea,
    delRoom,
    onChange,
    YMDDate,
    addDate,
    chDate,
    chRoomId,
  };
}

export default useCleaning;
