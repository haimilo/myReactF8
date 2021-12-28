// // làm 1 ứng dụng đếm số đếm từ số 1
// import { useState } from 'react'

// const orders = [100, 200, 300];
// function App() {
//   // Bài 1:
//   const [counter, setCounter] = useState(1);
//   const handleInc = () => {
//     setCounter(counter + 1);
//   }
//   const handleDec = () => {
//     setCounter(counter - 1);
//   }

//   // Bài 2:
//   const [total, setTotal] = useState(0);
//   const handleTotal = () => {
//     setTotal(orders.reduce((total, cur) => { return total + cur }))
//   }

//   // Bài 3:
//   const [info, setInfo] = useState({
//     name: 'Ngô Tuệ Hải',
//     age: 25,
//     nickname: 'Milo'
//   })
//   const handleUpdate = () => {
//     setInfo({
//       ...info,
//       add: "Kim Mã, Ba Đình, Hà Nội"
//     })
//   }
//   return (
//     <div style={{ padding: 20 + 'px' }}>
//       <p>Bài 1: Đếm số</p>
//       <h3>{counter}</h3>
//       <button onClick={handleInc}>Increase</button>
//       <button onClick={handleDec}>Decrease</button>

//       <p>----------------</p>
//       <p>Bài 2: Tính tổng giá trị đơn hàng</p>
//       <h3>{total}</h3>
//       <button onClick={handleTotal}>Total</button>

//       <p>----------------</p>
//       <p>Bài 3: Thêm key cho obj</p>
//       <h3>{JSON.stringify(info)}</h3>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   )
// }

// export default App;
import { useState } from 'react';

const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard',
  'Chúc bạn may mắn lần sau!'
];

function App() {
  const [gift, setGift] = useState();
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  }
  return (
    <div style={{ padding: 32 }}>
      <h1>{gift || 'Chưa có phần thưởng!'}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  )
}

export default App;