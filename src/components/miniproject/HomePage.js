import React, { useState } from "react";
import "../miniproject/HomePage.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import  CustomerChart from '../miniproject/pieChartPage'



const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];


export default function HomePage() {
   
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  

  return (
    <>
      <div className="d-flex">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark "
          style={{ width: "280px", height: "959px" }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi pe-none me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">Dashboard</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                <svg className="bi pe-none me-2" width="40" height="32">
                  <use xlinkHref="#bootstrap"></use>
                </svg>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="40" height="32">
                  <use xlinkHref="#bootstrap"></use>
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="40" height="32">
                  <use xlinkHref="#bootstrap"></use>
                </svg>
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="40" height="32">
                  <use xlinkHref="#bootstrap"></use>
                </svg>
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="40" height="32">
                  <use xlinkHref="#bootstrap"></use>
                </svg>
                Customers
              </a>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p className="mt-3" style={{ marginLeft: "80px" }}>
              Hello Jayanth
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 -0.5 17 17" version="1.1" class="si-glyph si-glyph-bubble-message-hi">
                  <title>1036</title>
                  <defs></defs>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M8.979,0.021 C4.581,0.021 1.011,2.813 1.011,6.256 C1.011,9.399 3.987,11.99 7.852,12.42 L5.805,15.971 L11.924,12.045 C14.864,11.128 16.947,8.884 16.947,6.256 C16.947,2.812 13.379,0.021 8.979,0.021 L8.979,0.021 Z M9.04,9.018 L7.972,9.018 L7.972,7.075 L6.032,7.075 L6.032,9.018 L4.96,9.041 L4.96,3.992 L6.032,3.969 L6.032,5.987 L7.972,5.987 L7.972,3.969 L9.04,3.969 L9.04,9.018 L9.04,9.018 Z M11,9.018 L9.954,9.018 L9.954,5.938 L11,5.938 L11,9.018 L11,9.018 Z M11.031,5.041 L9.954,5.041 L9.954,3.937 L11.031,3.937 L11.031,5.041 L11.031,5.041 Z M14.031,9.016 L12.968,9.016 L12.968,7.963 L14.031,7.963 L14.031,9.016 L14.031,9.016 Z M14.016,7.016 L12.969,7.016 L12.969,3.954 L14.016,3.954 L14.016,7.016 L14.016,7.016 Z" fill="#434343" class="si-glyph-fill"></path></g>
            </svg>
            </p>
          </div>
          <div style={{ marginTop: "-39px" }}>
            <input
              type="text"
              placeholder="Search..."
              style={{ marginLeft: "870px" }}
              className="mt- -10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0,0,256,256"
              style={{ marginLeft: "-34px", width: "31", height: "35" }}
            >
              <g
                fill-opacity="0.38824"
                fill="#000000"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M10,2c-4.40644,0 -8,3.59357 -8,8c0,4.40643 3.59356,8 8,8c1.84402,0 3.54097,-0.63457 4.89648,-1.68945l5.39649,5.39648c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.39648,-5.39648c1.05488,-1.35551 1.68945,-3.05246 1.68945,-4.89648c0,-4.40643 -3.59356,-8 -8,-8zM10,4c3.32556,0 6,2.67445 6,6c0,3.32555 -2.67444,6 -6,6c-3.32556,0 -6,-2.67445 -6,-6c0,-3.32555 2.67444,-6 6,-6z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div
            style={{ display: "flex", marginLeft: "20px", marginTop: "40px" }}
          >
            
            <div id="card" className="d-flex">
              <div id="card1">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none" style={{margin :'12px',marginLeft :'35px'}}>
                <path d="M7 12H17M8 8.5C8 8.5 9 9 10 9C11.5 9 12.5 8 14 8C15 8 16 8.5 16 8.5M8 15.5C8 15.5 9 16 10 16C11.5 16 12.5 15 14 15C15 15 16 15.5 16 15.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "10px", marginTop: "27px" }}>
                  Earning
                </div>
                <div style={{ fontWeight: "bold" }}>$198k</div>
                <div id="first" style={{ fontSize: "8px" }}>
                  <p>
                    <span
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        fontSize: "8px",
                      }}
                    >
                      &#8593; 37.8%
                    </span>{" "}
                    this month
                  </p>
                </div>
              </div>
            </div>
            <div id="card" className="d-flex">
              <div id="card1">
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none" style={{margin :'12px',marginLeft :'35px'}}>
               <path d="M21 21V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V21M18 21V12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12V21M15 21V12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12V21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
              <div>
                <div style={{ fontSize: "10px", marginTop: "27px" }}>
                  Orders
                </div>
                <div style={{ fontWeight: "bold" }}>$2.4k</div>
                <div id="second" style={{ fontSize: "8px" }}>
                  <p>
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "8px",
                      }}
                    >
                      &#8595; 2%
                    </span>{" "}
                    this month
                  </p>
                </div>
              </div>
            </div>
            <div id="card" className="d-flex">
              <div id="card1">
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none" style={{margin :'12px',marginLeft :'35px'}}>
                <path d="M12 3V21M16 4L12 8L8.00878 4M8.00878 20L12 16L16 20M3 12H21M4 8L8.00878 12L4 16M20 16L16 12L20 8" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
              <div>
                <div style={{ fontSize: "10px", marginTop: "27px" }}>
                  Balance
                </div>
                <div style={{ fontWeight: "bold" }}>$2.4k</div>
                <div id="second" style={{ fontSize: "8px" }}>
                  <p>
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "8px",
                      }}
                    >
                      &#8595; 2%
                    </span>{" "}
                    this month
                  </p>
                </div>
              </div>
            </div>
            <div id="card" className="d-flex">
              <div id="card1">
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none" style={{margin :'12px',marginLeft :'35px'}}>
                <path d="M18 3V21M18 3L15 6M18 3L21 6M7 15.9998C6.44772 15.9998 6 16.4475 6 16.9998C6 17.5521 6.44772 17.9998 7 17.9998C7.55228 17.9998 8 17.5521 8 16.9998C8 16.4475 7.55228 15.9998 7 15.9998ZM7 15.9998V11.9998M7 16.9998L7.00707 17.0069M11 16.9998C11 19.209 9.20914 20.9998 7 20.9998C4.79086 20.9998 3 19.209 3 16.9998C3 15.9854 3.37764 15.0591 4 14.354L4 6C4 4.34315 5.34315 3 7 3C8.65685 3 10 4.34315 10 6V14.354C10.6224 15.0591 11 15.9854 11 16.9998Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
              <div>
                <div style={{ fontSize: "10px", marginTop: "27px" }}>
                  Total Sales
                </div>
                <div style={{ fontWeight: "bold" }}>$89k</div>
                <div id="first" style={{ fontSize: "8px" }}>
                  <p>
                    <span
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        fontSize: "8px",
                      }}
                    >
                      &#8593; 11%
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div id="graph">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                  dataKey="uv"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
                </Bar>
              </BarChart>
            </div>
            <div id="piechart">
              <CustomerChart />
            </div>
          </div>
          <div id="last">
              <p style={{fontWeight :'bold',marginTop :'40px',marginLeft :'17px'}}>Product Shell</p>
              <div style={{ marginTop: "-39px" }}>
              <div style={{display :'flex'}}>
                  <input
                    type="text"
                    placeholder="Search..."
                    style={{ marginLeft: "619px",marginTop :'10px'}}
                  />
                  <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0,0,256,256"
                    style={{ marginLeft: "-36px", width: "31", height: "35",marginTop :'10px'}}
                  >
                  <g
                    fill-opacity="0.38824"
                    fill="#000000"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10,2c-4.40644,0 -8,3.59357 -8,8c0,4.40643 3.59356,8 8,8c1.84402,0 3.54097,-0.63457 4.89648,-1.68945l5.39649,5.39648c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.39648,-5.39648c1.05488,-1.35551 1.68945,-3.05246 1.68945,-4.89648c0,-4.40643 -3.59356,-8 -8,-8zM10,4c3.32556,0 6,2.67445 6,6c0,3.32555 -2.67444,6 -6,6c-3.32556,0 -6,-2.67445 -6,-6c0,-3.32555 2.67444,-6 6,-6z"></path>
                    </g>
                  </g>
                </svg>
                </span>
            </div>
            <div style={{marginLeft :'800px',marginTop :'-29px'}}>
                <select style={{marginLeft :'17px'}}>
                  <option>last 30 Days</option>
                </select>
            </div>
            <div style={{marginTop :'15px',width :'100%',marginLeft :'10px'}}>
                <table className="table">
                    <thead className="table-light">
                      <th>
                        <tr>Product Name </tr>
                      </th>
                      <th>
                        <tr>Stock</tr>
                      </th>
                      <th>
                         <tr>Price</tr>
                      </th>
                      <th>
                        <tr>Total Price</tr>
                      </th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img  src ='https://up.yimg.com/ib/th?id=OIP.L4nUSvQ7ZaefejVVEkLG5QHaEp&%3Bpid=Api&rs=1&c=1&qlt=95&w=158&h=99'/>
                          <span style={{marginLeft :'13px'}}>Abstract 3D</span>
                          <div style={{marginLeft :'63px',marginTop :'-14px',fontSize :'11px',color :'navajowhite'}}>Larem ipsum dolor sit amet consectetur adipising elit</div>
                        </td>
                        <td>32 in stock</td>
                        <td>$45.99</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>
                        <img  src ='https://www.pixelstalk.net/wp-content/uploads/2016/08/Background-Beautiful-Nature-Full-HD.jpg'/>
                        <span style={{marginLeft :'13px'}}>Sarphens Illustration</span>
                        <div style={{marginLeft :'63px',marginTop :'-14px',fontSize :'11px',color :'navajowhite'}}>Larem ipsum dolor sit amet consectetur adipising elit</div>
                        </td>
                        <td>32 in stock</td>
                        <td>$45.99</td>
                        <td>20</td>
                      </tr>
                    </tbody>
                  
                </table>
            </div>
          </div>
          
            
          
          </div>
        </div>
      </div>
    </>
  );
}
