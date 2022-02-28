import logo from './logo.svg';
import './App.css';
import Item from './component/Item';
import Body from './component/body';
import Expence from '../src/component/expenses/expenceDate'

function App() {

  const mydata =[{
    title : "Car insurance",
    amount : "23 $",
    date: new Date(2022, 2, 28)
  },
  {
    title : "Prop insurance",
    amount : "232 $",
    date: new Date(2022, 2, 28)
  },
  {
    title : "Health insurance",
    amount : "13 $",
    date: new Date(2022, 2, 28)
  },
  {
    title : "Car insurance",
    amount : "130 $",
    date: new Date(2022, 2, 28)
  }
  ]
  return (
    <div className="App">
      <Item date= {mydata[0].date} amount={mydata[0].amount} title= {mydata[0].title}></Item>
      <Item date= {mydata[1].date} amount={mydata[1].amount} title= {mydata[1].title}></Item>
      <Item date= {mydata[2].date} amount={mydata[2].amount} title= {mydata[2].title}></Item>
      <Item date= {mydata[3].date} amount={mydata[3].amount} title= {mydata[3].title}></Item>
    </div>
  );
}

export default App;
