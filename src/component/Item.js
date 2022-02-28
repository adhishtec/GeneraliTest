import '../App.css';
import card from '../../src/component/card/card'
import Expence from '../component/expenses/expenceDate'
function Item(prop){
   
return(
<card>
    <Expence date= {prop.date}></Expence>
    <div className='itemDescription'>{prop.title}</div>
    <button className='submitBtn'>{prop.amount}</button>
</card>
);
}
export default Item;