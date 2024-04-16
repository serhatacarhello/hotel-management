"use client";
import React, { useState } from "react";
import Search from "../search/search";

export default function PageSearch() {
  const [roomTypeFilter, setRoomTypeFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <Search
      roomTypeFilter={roomTypeFilter}
      searchQuery={searchQuery}
      setRoomFilter={setRoomTypeFilter}
      setSearchQuery={setSearchQuery}
    />
  );
}
