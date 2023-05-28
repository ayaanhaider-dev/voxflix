import React, { Fragment } from "react";
import { useState } from "react";
import CatagoryData from "../Contexts/Datas/CatagoryData";
import YearsData from "../Contexts/Datas/YearsData";
import { Listbox, Transition } from "@headlessui/react";
import { BiCaretDownCircle } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const YearData = [
  { title: "Short By Year" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2023" },
];

const HoursData = [
  { title: "Short By Hours" },
  { title: "1 Hours - 5 Hours" },
  { title: "5 Hours - 10 Hours" },
  { title: "10 Hours - 15 Hours" },
  { title: "15 Hours - 20 Hours" },
];

const RatesData = [
  { title: "Short By Rates" },
  { title: "1 Stars" },
  { title: "2 Stars" },
  { title: "3 Stars" },
  { title: "4 Stars" },
  { title: "5 Stars" },
];

function Filters() {
  const [catagory, setCatagory] = useState({ title: "Category" });
  const [year, setYear] = useState(YearData[0]);
  const [hours, setHours] = useState(HoursData[0]);
  const [rates, setRates] = useState(RatesData[0]);

  const Filters = [
    {
      value: catagory,
      onchange: setCatagory,
      items: CatagoryData,
    },
    {
      value: year,
      onchange: setYear,
      items: YearsData,
    },
    {
      value: hours,
      onchange: setHours,
      items: HoursData,
    },
    {
      value: rates,
      onchange: setRates,
      items: RatesData,
    },
  ];

  return (
    <>
      <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6 ">
        {Filters.map((item, index) => (
          <Listbox key={index} value={item.value} onChange={item.onChange}>
            <div className="relative">
              <Listbox.Button className="relative border border-gray-800  w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
                <span className="block truncate">{item.value.title}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                  <BiCaretDownCircle className="h-4 w-4" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {item.items.map((iterm, i) => (
                    <Listbox.Option
                      key={i}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-subMain text-white" : "text-main"
                        }`
                      }
                      value={iterm}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncated ${
                              selected ? "font-semibold" : "font-normal"
                            }`}
                          >
                            {iterm.title}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <FaCheck className="h-3 w-3" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        ))}
      </div>
    </>
  );
}

export default Filters;
