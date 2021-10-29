import './App.css';

function App() {


  /**
   * First Example
   */

  // Define the generator
  function* testGenerator() {
      //let value = 0
      
      //console.log(`value: ${value}`);
      console.log('before yield 1');
      yield 1;

      //value += 1;
      //console.log(`value: ${value}`);
      console.log('before yield 2');
      yield 2;

      //value += 1;
      //console.log(`value: ${value}`);
      console.log('before yield 3');
      yield 3;

      //value += 1;
      //console.log(`value: ${value}`);
      console.log('before yield 4');
      yield 4;

      //value += 1;
      //console.log(`value: ${value}`);
      console.log('before yield 5');
      return 5;
  }

  // Set up a new instance of the generator
  let example = testGenerator();

  // Button Handler
  const firstButtonHandler = () => {
    
    // Call the generator and store the result
    const result = example.next()
    console.log(result)

    // If we are done...
    if(result.done === true) console.log('We are done')
  }


  /**
   * Second Example
   */
 
  function* GeneratorCount() {  
    let count = 0;

      // Loop forever and stop on each iteration
      while(true) {
        yield count;
        count += 1
      }
  }

  // Set up the generator
  let counter = GeneratorCount();

  // Button handler
  const secondButtonHandler = () => {

    // Call the generator and store the result
    const result = counter.next()
    console.log(result)

    // This will never actually run, it wont reach the end
    if(result.done === true) console.log('We are done')
  }


  // JSX

  return (
    <div className="App">
      <button onClick={firstButtonHandler}>First</button>
      <button onClick={secondButtonHandler}>Second</button>
    </div>
  );
}

export default App;
