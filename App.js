import './App.css'
import { useState } from 'react';
import Navbar from './components/navbar';
import NavbarButton from './components/navbarButton';
import './Typography.css'
import Footer from './components/footer';
import { HeroContent1, HeroContent2, HeroContent3 } from './components/heroContent.js'; // Named imports
import UserText from './components/toDoList.js'
import MyForm from './components/toDoList.js';
// a const can contain a function
// in this case the function is just () <- this is an unmaed function
// very similiar 
const App = () => {

  //use states
  const [list, setList] = useState([
    //these are my obects for the slider lol each one is a slider image
    { active: true },
    { active: false },
    { active: false },
  ]);

  // use function handlers
  const handleChange = () => {
    console.log("we are running handleChange");

// flip every true to falses
    const newList = list.map((item) => {
      if (item.active) {
        return { active: false };
      } else return { active: true };
    });

    console.log("newList: ", newList);

    setList(newList);
  };

  return (
    <div className="App">


      <>
        <div className='Wrapper'>
          <div className='Navbar'>
            <Navbar>
              <NavbarButton />
            </Navbar>
          </div>

          <div className='heroContent'>
            <h1 className='HeroTitle'>Why Choose Study Mastery?</h1>
            <div id='heroContentContainer'>


              <HeroContent1 />
            </div>
          </div>

         <MyForm />

          <Footer />
        </div>
      </>



      {/* Only 1 real way to turn array into components, that is with map */}
      {list.map(
        //run through each item in list
        //item is the current item we are on in the list, what do we want to do with it
        (item, index) => (
          <Box key={index} active={item.active} handleChange={handleChange} />
        )
      )}
    </div>
  );
}

function Box(props) {
  let className = "";

  if (props.active) {
    className = "active";
  } else {
    className = "in-active";
  }

  return (
    <div className={className} onClick={props.handleChange}>
      Box
    </div>
  );

}




export default App;