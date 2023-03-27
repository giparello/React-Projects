import './App.css';
import Card from './components/Card';
import data from './data';

function App() {
  const cards=data.map(item=>{
    return(
      <Card
      key={item.id}
      item={item}
      />
    )
  })
  return(
    <div>
      <section>
      {cards}
      </section>
    </div>
  )
}

export default App;
