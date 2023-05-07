import React, { useState } from 'react';
import AddForm from './components/AddForm/AddForm';
import ShowInfo from './components/ShowInfo/ShowInfo';

// const dummyDetails = [
//   {
//     id: "e1",
//     name: "shirshak",
//     age: 21
//   },
//   {
//     id: "e2",
//     name: "Bijaya",
//     age: 20
//   }
// ]

const App = () => {

  const [data, setData] = useState('');

  const onSaveData = (datas) => {
    setData(prevDatas => {
      // return [...prevDatas, { name: userName, age: userAge, id: Math.random().toString() }];
      return [...prevDatas, { ...datas, id: Math.random().toString() }];
    })
  }

  return (
    <React.Fragment>
      <AddForm onAddDatas={onSaveData} />
      <ShowInfo items={data} />
    </React.Fragment>
  );
}

export default App;