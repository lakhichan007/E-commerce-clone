import { Box } from "@mui/system";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";


function App() {
  return (
   <>
   <Header />
   <Box sx={{marginTop:"54px"}}>
   <Home/>
   </Box>
   </>
  );
}

export default App;
