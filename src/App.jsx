import Slider from "./components/Slider"

function App() {
  
  return (
    <div className="bg-blue-100 h-[100vh] flex items-center justify-center relative">
      <Slider/>
      <div className="absolute top-0 left-[0] px-[2.2rem] py-[1rem] w-[180px] h-[170px] bg-green-400 rounded-br-[90%] drop-shadow-md">
        <h1 className="font-bold text-[2rem]">The <br/> Slider</h1>
      </div>
    </div>
  )
}

export default App
