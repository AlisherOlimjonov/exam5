import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ setPageNumber, pageNumber, info }) {
  // console.log(info.pages);
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-5 "
      breakLabel={"..."}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextclassName="btn btn-light "
      previousclassName="btn btn-light"
      pageclassName="page-item"
      pageLinkclassName="page-link"
      activeclassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
}

export default Pagination;
