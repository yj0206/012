const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  };
  
  const aliceElements = document.querySelectorAll("#alice1, #alice2, #alice3");
  
  function animateAliceSequentially(elements, animation, timing) {
    let promiseChain = Promise.resolve();
  
    elements.forEach(element => {
      promiseChain = promiseChain.then(() => element.animate(animation, timing).finished);
    });
  
    return promiseChain;
  }
  
  animateAliceSequentially(aliceElements, aliceTumbling, aliceTiming)
    .catch(error => console.error(`Error animating Alices: ${error}`));
  