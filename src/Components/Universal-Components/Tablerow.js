import React from "react";

const Tablerow = () => {
  // Number of empty rows you want
  const emptyRows = 5;

  return (
    <div className=" border border-b-0 h-40 ">
      <table className="min-w-full text-center font-sans">
        <tbody>
          {Array.from({ length: emptyRows }).map((_, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-cyan-50" : "bg-cyan-100"}
            >
              <td className="px-4 py-2 ">&nbsp;</td>
              <td className="px-4 py-2 ">&nbsp;</td>
              <td className="px-4 py-2 ">&nbsp;</td>
              <td className="px-4 py-2 ">&nbsp;</td>
              <td className="px-4 py-2 ">&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablerow;
