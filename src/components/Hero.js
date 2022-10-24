import { useEffect, useState } from "react";

export default function Hero() {
  const imgUrl = [
    'images/headphone1.jpg',
    'images/headphone2.jpg',
    'images/headphone3.jpg',
  ]
  let [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count++)
      if(count >= imgUrl.length) count = 0;
      console.log(count)
    }, 3000);
  
    return () => clearInterval(timer)
  }, []);

  return (
    <div>
      <img src={imgUrl[count]} alt="" />
      <div className="container">{count + 1}/{imgUrl.length}</div>
    </div>
  )
}
