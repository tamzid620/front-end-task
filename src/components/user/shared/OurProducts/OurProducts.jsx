import React, { useEffect, useState } from "react";
import fonts from "../../../config/fontsProvider";
import axios from "axios";
import { baseUrl } from "../../../config/config";

const OurProducts = () => {
  const [allEquipments, setAllEquipments] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl("all-equipments"))
      .then((res) => setAllEquipments(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div
        style={{ fontFamily: fonts.nunito }}
        className="lg:max-w-7xl md:max-w-3xl max-w-sm mx-auto text-white mt-40"
      >
        <h1 className="text-center text-4xl uppercase font-bold text-[#D6FB00] mb-8">
          Our Products: {allEquipments.length}
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default OurProducts;
