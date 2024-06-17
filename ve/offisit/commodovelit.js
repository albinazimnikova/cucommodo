// Create event emitter
var emitter = new EvEmitter();

// Define listeners
function hey(a, b, c) {
  console.log('Hey', a, b, c);
}

function ho(a, b, c) {
  console.log('Ho', a, b, c);
}

function letsGo(a, b, c) {
  console.log('Lets go', a, b, c);
}

// Bind listeners
emitter.on('rock', hey);
emitter.on('rock', ho);

// Trigger 'letsGo' once
emitter.once('rock', letsGo);

// Emit event
emitter.emitEvent('rock', [1, 2, 3]);
// Output: 'Hey', 1, 2, 3
// Output: 'Ho', 1, 2, 3
// Output: 'Lets go', 1, 2, 3

// Unbind listener
emitter.off('rock', ho);

// Emit event again
emitter.emitEvent('rock', [4, 5, 6]);
// Output: 'Hey', 4, 5, 6
