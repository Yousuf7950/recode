// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import axios from "axios";
// const Work = () => {
//   const [dataa, setDataa] = useState([]);
//   const [kaka, setKaka] = useState([]);
//   const [bundle, setBundle] = useState([]);
//   const [locname, setLocname] = useState("");
//   const [temp, setTemp] = useState("");
//   useEffect(async () => {
//     const result = await axios("http://localhost:5000/getLocation");

//     const x = result.data;

//     const options = x.map((d) => ({
//       label: d.loc_name,

//       value: d.location_id,
//     }));

//     setDataa(options);
//   }, []);

//   const inserting = () => {
//     axios
//       .post("http://localhost:5000/postingLocation", {
//         locname: locname.label,
//         // ok: dataa.value,
//       })
//       .then(() => {
//         console.log(locname.label);
//         setTemp(locname.label);
//         setBundle([
//           ...bundle,
//           {
//             ok: dataa.value,
//           },
//         ]);
//       });
//     return <></>;
//   };
//   console.log(dataa);

//   return (
//     <>
//       <Select options={dataa} value={locname} onChange={setLocname} />
//       {temp}
//       <button onClick={inserting}>Post me</button>
//     </>
//   );
// };

// export default Work;

import React from "react";
import Axios from "axios";
import { useState } from "react";
export default function Work() {
  const [img, setImg] = useState();
  const [employeeList, setEmployeeList] = useState("");
  const [check, setCheck] = useState([]);
  const getImages = () => {
    Axios.get("http://localhost:5000/getImages").then((response) => {
      // console.log(response.data);
      let temp = response.data;
      let arr = [];
      temp.map((x) => {
        // console.log(x.imagee1);
        // setCheck(x.imagee1);
        arr.push(x.imagee1);
      });
      // console.log(arr);
      // console.log(typeof arr);
      setCheck(arr);

      setEmployeeList(response.data);
    });
  };
  return (
    <div>
      <button onClick={getImages}>click</button>
      {/* <img src={check} /> */}
      {check.map((x) => {
        console.log(x);
        return <img src={x} />;
      })}
    </div>
  );
}
