import { useEffect } from "react";

function Home() {

   useEffect(() => {
      document.title = 'Deewan Institute | Home';
   }, []);


   return (
      <span>hello</span>
   )
}
export default Home