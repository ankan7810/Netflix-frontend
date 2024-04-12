import Body from "./components/Body.js";
import { Toaster } from 'react-hot-toast';
import MovieDialog from "./components/MovieDiologue.js";

function App() {
  return (
    <div >
     <Body/>
     <Toaster/>
     <MovieDialog/>
    </div>
  );
}

export default App;