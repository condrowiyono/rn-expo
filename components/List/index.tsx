import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import Card from "@ant-design/react-native/lib/card";
import Item from "./Item";

const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five",
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six",
  },
];

const List = () => {
  return (
    <FlatList horizontal data={data} renderItem={({ item }) => <Item />} />
  );
};

export default List;
