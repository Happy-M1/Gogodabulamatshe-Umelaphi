/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors speciality.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "Lucky Portion"
                ? navigate("/doctors")
                : navigate("/doctors/Lucky Portion")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 
              rounded transition-all cursor-pointer 
              ${
                speciality === "Lucky Portion" ? "bg-indigo-100 text-black" : ""
              }`}
          >
            Lucky Portion
          </p>
          <p
            onClick={() =>
              speciality === "Love Portion"
                ? navigate("/doctors")
                : navigate("/doctors/Love Portion")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 
              rounded transition-all cursor-pointer 
              ${
                speciality === "Love Portion" ? "bg-indigo-100 text-black" : ""
              }`}
          >
            Love Portion
          </p>
          <p
            onClick={() =>
              speciality === "Low Libido"
                ? navigate("/doctors")
                : navigate("/doctors/Low Libido")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 
              rounded transition-all cursor-pointer 
              ${speciality === "Low Libido" ? "bg-indigo-100 text-black" : ""}`}
          >
            Low Libido
          </p>
          <p
            onClick={() =>
              speciality === "Catch Pregnancy"
                ? navigate("/doctors")
                : navigate("/doctors/Catch Pregnancy")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 
              rounded transition-all cursor-pointer 
              ${
                speciality === "Catch Pregnancy"
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
          >
            Catch Pregnancy
          </p>
          <p
            onClick={() =>
              speciality === "Badluck Removal"
                ? navigate("/doctors")
                : navigate("/doctors/Badluck Removal")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 
              rounded transition-all cursor-pointer 
              ${
                speciality === "Badluck Removal"
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
          >
            Badluck Removal
          </p>
          <p
            onClick={() =>
              speciality === "Spiritual Cleansing"
                ? navigate("/doctors")
                : navigate("/doctors/Spiritual Cleansing")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 
              rounded transition-all cursor-pointer 
              ${
                speciality === "Spiritual Cleansing"
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
          >
            Spiritual Cleansing
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer 
              hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm text-center ${
                    item.Available ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <p
                    className={`size-2 ${
                      item.available ? "bg-green-500" : "bg-gray-500"
                    }  rounded-full`}
                  ></p>
                  <p>{item.Available ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
