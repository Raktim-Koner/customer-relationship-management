import React, { useEffect, useState } from 'react';
import Dollarsign from '../../Assets/dollarsign.png';

const API_URL = "https://api.jsonbin.io/v3/b/688f8e46f7e7a370d1f2ec3c";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

// Function to format numbers as K, M, B
const formatNumber = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num.toString();
};

const TotalAmount = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        "X-Master-Key": API_KEY
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.record) {
          const total = data.record.reduce((sum, project) => {
            const numericAmount = parseFloat(
              project.amount.replace(/[$,]/g, "")
            );
            return sum + (isNaN(numericAmount) ? 0 : numericAmount);
          }, 0);
          setTotalAmount(total);
        }
      })
      .catch(err => {
        console.error("Error fetching amount:", err);
      });
  }, []);

  return (
    <div className='h-16 w-52 ml-[10rem] border-2 border-black flex items-center'>
      <img src={Dollarsign} className='h-14 pt-[.14rem] px-[.2rem]' alt="Amount Icon" />
      <div>
        <h1 className='font-semibold ml-3'>Total Amount</h1>
        <p className='ml-3 font-bold'>
          {formatNumber(totalAmount)}
        </p>
      </div>
    </div>
  );
};

export default TotalAmount;
