import './App.css';
import Hello from './Hello';
import Welcome from './Welcome';
import Akshay from './Akshay';
import Ravi from './Ravi';
import Aslam from './Practise/Aslam';
import ForgotDetails from './Practise/Forgot';
import Jsx from './Practise/Jsx';
import { ClassSampleNew} from './Practise/Class';
import Prop from './Practise/Prop';
import BesantTechnologyDetails from './Practise/State';
import CarDetails from './Statewithhooks';
import Timer from './Practise/Effect';


function App() {
  return (
   <>
   <Hello/>
   <Timer/>
   <BesantTechnologyDetails/>
   <CarDetails/>
   <ol>
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
   </ol>
   <h1>{10+29}</h1>
   <ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
   </ul>
   <Welcome/>
   <Akshay/>
   <Ravi/>
   <Aslam/>
   <ForgotDetails/>
   <Jsx/>
   <h1><Prop brand="Ford" /></h1>
   <Prop/>
   <ClassSampleNew/>
   </>
  );
}

export default App;
