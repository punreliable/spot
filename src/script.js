
import {MnistData} from './data.js';

async function showExamples(data) {

  // Create a container in the visor
  const surface = tfvis.visor().surface({
    name: 'Input Data Examples',
    tab: 'Input Data',
  });

  // Get the examples
  const examples = data.nextTestBatch(20);
  const numExamples = examples.xs.shape[0];

  // Create a Canvas element to render each example
  for (let i = 0; i < numExamples; i++) {
    const imageTensor = tf.tidy(() => {
      return example.xs
      .slice([i, 0], [1, examples.xs.shape[1]])
      .reshape([28, 28, 1]);
    });
  }

  // Reshape the image to 28x28 pixels
  async function run() {
    const data = new MnistData();
    await data.load();
    await SharedWorkerExamples(data);
  }

  document.addEventListener( 'DOMContentLoaded', run );

}
