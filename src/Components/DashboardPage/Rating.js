import React, { useEffect, useState } from "react";
import RatingIcon from '../../Assets/RatingIcon.PNG'

const API_URL = "https://api.jsonbin.io/v3/b/688f8e46f7e7a370d1f2ec3c";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const Rating = () => {
  const [rating, setRating] = useState("0.000");

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        "X-Master-Key": API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.record) {
          // Example logic: completed projects ÷ total projects × 5
          const total = data.record.length;
          const completed = data.record.filter((p) =>
            p.status.toLowerCase().includes("done") ||
            p.status.toLowerCase().includes("complete")
          ).length;

          const calcRating = (completed / total) * 5;
          setRating(calcRating.toFixed(3)); // e.g., 1.250
        }
      })
      .catch((err) => console.error("Error fetching rating:", err));
  }, []);

  return (
    <div className='h-16 w-40 ml-[3rem] border-2 border-black flex items-center'>
      <img src={RatingIcon} className='h-14 pt-[.14rem] pl-[.2rem]' alt="Rating Icon" />
      <div>
      <h1 className="font-semibold ml-3">Ratings</h1>
      <p className="font-bold text-lg ml-3">{rating}</p>
      </div>
    </div>
  );
};

export default Rating;
