import '../../component/expenses/expences.css';
function ExpenceDate(prop){
    const month = prop.date.toLocaleString("en-us",{month:'long'}) 
    const day = prop.date.toLocaleString("en-us",{day:'2-digit'}) 
    const year = prop.date.getFullYear();
  return (
      <div className="expenceDate">
          <div className="expenceDay">{month}</div>
          <div className="expenceYear">{year}</div>
          <div className="expenceMin">{day}</div>
      </div>
  );   
}
export default ExpenceDate;