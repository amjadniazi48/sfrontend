import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import moment from "moment";
import Image from 'next/image'
const HighLights = () => {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;
  useEffect(() => {
    const getPublications = async () => {
      const res = await fetch(
        `${API_URL}/api/posts?filters[type][$eq]=Highlights&filters[slider][$eq]=false&populate=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      // console.log("pub", data);
      const total = data.meta.pagination.total;
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getPublications();
  }, [limit]);
  console.log("items", items);
  const fetchPublications = async (currentPage) => {
    const res = await fetch(
      `${API_URL}/api/posts?filters[type][$eq]=Highlights&filters[slider][$eq]=false&populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
      // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };
  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const publicationFromServer = await fetchPublications(currentPage);

    setItems(publicationFromServer);
  };
  return (
    <div className="row p-4 mt-20">
      <div className="col-sm-12">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Highligths</span>
          </h4>
        </div>
        <div className="border-bottom-last-0 first-pt-0">
          {items &&
            items.data?.map((highlight) => {
              return (
                <article className="card card-full hover-a py-4" key={highlight.attributes.id}>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="ratio_360-202 ">
                        <Image
                          className="img-fluid"
                          src={
                          
                            highlight.attributes.image.data.attributes.url
                          }
                        
                          alt="Image description"
                          style={{ height: "270px" }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-8 mt-3">
                      <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                        <h3 className="card-title h2 h3-sm h2-md">
                          {highlight.attributes.title}
                        </h3>
                        <div className="card-text mb-2 text-muted small">
                          {/* <span className="d-none d-sm-inline me-1">
                              <a className="fw-bold" href="#">
                                John Doe
                              </a>
                            </span> */}
                          <time dateTime="2019-10-21">
                            {moment(highlight.attributes.createdAt).format(
                              "Do MMMM YYYY"
                            )}
                          </time>
                        </div>
                        <p className="card-text">
                          {highlight.attributes.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default HighLights;
