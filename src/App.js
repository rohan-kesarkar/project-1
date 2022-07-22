
import './App.css';
import ReactHook from './ReactHook'
import TimeHook from './TimeHook'
import LiveTimeClock from './LiveTimeClock'
import Forms from './Forms'
import Sorting from './Sorting';


const SlotM=(props)=>{
  
  let x = props.x;
  let y = props.y;
  let z = props.z
  
  if(x===y && y===z){
    return(
      <>
      <div className='slot_inner'>
        <h1>  {x} {y} {z}  </h1>
        <h1>This is Matching</h1>
      </div>
      </>
    )
  }else{
    return(
      <>
      <div className='slot_inner'>
        <h1>  {x} {y} {z}  </h1>
        <h1>This is Not Matching</h1>
      </div>
      
      </>
    )
  }
}


function App() {
  return (
    <>
    <h1 className="heading_style">
      Welcome to{" "}
      <span style={{fontWeight:"bold"}}>Slot machine game</span>
    </h1>
    <div className='slotmachine'>
    <SlotM x='😂' y='😂' z='😂'/>
    <hr/>
    <SlotM x='😂' y='😊' z='😂'/>
    <hr/>
    <SlotM x='😂' y='😂' z='🎶'/>
    </div>
    <div style={{paddingTop:"90px"}}>
    <ReactHook/>
    <TimeHook/>
    <LiveTimeClock/>
    <Forms/>

    <Sorting/>
    </div>
   
    </>
  );
}

export default App;
