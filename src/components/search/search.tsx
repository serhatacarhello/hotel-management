"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FC } from "react";

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomFilter,
  setSearchQuery,
}) => {
  const router = useRouter();
  const handleRoomTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRoomFilter(e.target.value);
  };
  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const handleFilterClick = () => {
    //Navigate to the rooms page with the query
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };

  return (
    <section className="w-full bg-tertiary-light px-4 py-6 rounded-lg ">
      <div className="container  mx-auto flex gap-4 flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
          <label
            htmlFor=""
            className="block text-sm font-medium mb-2 text-black"
          >
            Room Type
          </label>
          <div className="relative">
            <select
              name=""
              id=""
              className="w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none"
              onChange={handleRoomTypeChange}
              value={roomTypeFilter}
            >
              <option value="All">All</option>
              <option value="Basic">Basic</option>
              <option value="Luxury">Luxury</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
          <label
            htmlFor="search"
            className="block text-sm font-medium mb-2 text-black"
          >
            Search
          </label>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white"
            onChange={handleSearchQueryChange}
            value={searchQuery}
          />
        </div>
        <button
          className="btn-primary"
          type="button"
          onClick={handleFilterClick}
        >
          Search{" "}
        </button>
      </div>
    </section>
  );
};
export default Search;
