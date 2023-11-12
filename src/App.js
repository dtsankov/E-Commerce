import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";


function App() {
  return (
    <div >
      
      <Header />

      <main id="main-content">
			<Routes>
				{/* <Route path ='/' element = {<Home latestGames={games.slice(-3)}/>} /> */}
				<Route path ='/login' element = {<Login/>} />
				<Route path ='/register' element = {<Register/> } />
			</Routes>

        </main>
    </div>
  );
}


export default App;


     