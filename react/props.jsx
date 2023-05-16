function Car(props) {
    return 
    <h2>I am a { props.brand.model }!</h2>;
  }
  
  function Garage() // creating  a function named garage 
  {   
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
        <h1>which car is this </h1>
        <Car brand={ carInfo } />  {/* passing the function */}
      </>
    );
  }