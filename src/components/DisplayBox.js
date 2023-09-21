"use client";
import User from "../assets/Rectangle 60.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Bookings from "./Bookings";

const DisplayBox = ({ typeOf }) => {
  const [data, setData] = useState([]);
  // Pagination Variables
  const [pageNumber, setPageNumber] = useState(1);
  const dataPerPage = 5;
  const pagesVisited = pageNumber * dataPerPage;
  const [dataO, setDataO] = useState([]);
  // Fetching Data
  useEffect(() => {
    fetch("https://upride-internships-default-rtdb.firebaseio.com/.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.offline_bookings);
        setDataO(data.online_bookings);
      });
  }, []);
  // Converting Object of Objects to Array of objects
  const offlineBookings = Object.values(data);
  const onlineBookings = Object.values(dataO);
  // Combining all the Data into one big Array
  const allData = offlineBookings.concat(onlineBookings);
  // Filtering Data According to the Booking Status
  let result = allData.filter((trips) => trips.bookingStatus === `${typeOf}`);
  // Sorting Data accoring to Time
  result = result.sort((a, b) => a.bookingEpochTime - b.bookingEpochTime);

  const dataSet =
    result &&
    result.slice(pagesVisited, pagesVisited + dataPerPage).map((data) => {
      return <Bookings data={data} key={data.bookingID} />;
    });
  const pageCount = Math.ceil(result.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="display_table">
      <div className="heading">
        <span>Name</span>
        <span>Date</span>
        <span>Package Details</span>
        <span>Payment Mode</span>
      </div>
      <div className="scrollBox">{dataSet}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        containerClassName={"pagination"}
      />
    </div>
  );
};

export default DisplayBox;
