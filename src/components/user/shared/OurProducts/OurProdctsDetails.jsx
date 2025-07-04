import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../config/config";
import { useParams } from "react-router";
import fonts from "../../../config/fontsProvider";
import CompoLoading from "../../../config/compoLoading";

const OurProdctsDetails = () => {
  const { equipmentId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [equipment, setEquipments] = useState(null);

useEffect(() => {
  setIsLoading(true);
  axios
    .get(baseUrl(`all-equipments/${equipmentId}`))
    .then((res) => {
      setEquipments(res.data);
    })
    .catch((error) => {
      console.error(error);
    })
      setIsLoading(false);
}, [equipmentId]);


  return (
    <div>
      <div
        style={{ fontFamily: fonts.nunito }}
        className="lg:max-w-7xl md:max-w-3xl max-w-sm lg:mx-auto md:mx-16 mx-3 text-white "
      >
        {equipment && (
          <div key={equipment?.id}>
            <h1 className="text-center text-[#D6FB00] text-4xl uppercase font-bold mb-8 my-20">
              {equipment?.title}
            </h1>
            {isLoading ? (
              <CompoLoading/>
            ) : (
              <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-12 md:col-span-5">
                  <img
                    src={equipment?.image}
                    alt={equipment?.title}
                    className=""
                  />
                </div>
                <div className="col-span-12 md:col-span-7 mt-10 leading-11">
                  <h1 style={{ fontFamily: fonts.rubik }}>
                    <span className="text-[#D6FB00] text-xl font-bold uppercase me-2">
                      Name:
                    </span>
                    <span className=" text-xl">{equipment?.title}</span>
                  </h1>
                  <p>
                    <span className="text-[#D6FB00] text-xl font-bold uppercase me-2">
                      Price:
                    </span>
                    <span className=" text-xl">{equipment?.price}</span>
                  </p>
                  <p>
                    <span className="text-[#D6FB00] text-xl font-bold uppercase me-2">
                      Description:
                    </span>
                    <span className=" text-xl">{equipment?.description}</span>
                  </p>
                  <p>
                    <span className="text-[#D6FB00] text-xl font-bold uppercase me-2">
                      Rating:
                    </span>
                    <span className=" text-xl">{equipment?.rating}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProdctsDetails;
