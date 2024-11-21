// // === State ===
// const state = {
//   start: ["sheep", "sheep"],
//   target: ["sheep"],
// };

// /** Moves a sheep from start to target */
// function moveSheep() {
//   // TODO
//   const sheep = state.start.pop(); // Remove the last sheep from `start`.
//   state.target.push(sheep); // Add it to `target`.
// }

// // === Render ===
// /** Renders sheep on the starting bank */
// function renderStartSheep() {
//   const startingSheep = state.start.map((sheep) => {
//     const li = document.createElement("li");

//     const button = document.createElement("button");
//     button.textContent = "🐑";
//     li.append(button);

//     // TODO: Add event listener so the sheep moves when clicked
//     button.addEventListener("click", () => {
//       moveSheep(); // Move sheep to the target bank
//       render(); // Re-render both banks
//     });

//     return li;
//   });

//   const startingBank = document.querySelector("#startingBank ul");
//   startingBank.replaceChildren(...startingSheep); // Replace old sheep with the new list
// }

// /** Renders sheep on the target bank */
// function renderTargetSheep() {
//   // TODO
//   const targetSheep = state.target.map((sheep) => {
//     const li = document.createElement("li");
//     li.textContent = "🐑";
//     return li;
//   });

//   const targetBank = document.querySelector("#targetBank ul");
//   targetBank.replaceChildren(...targetSheep); // Replace old sheep with the new list
// }

// function render() {
//   renderStartSheep();
//   renderTargetSheep();
// }

// // === Script ===
// // Initial render
// render();

// // TODO: Add sheep to the starting bank when the form is submitted
// const form = document.querySelector("form");
// form.addEventListener("submit", addSheep);

// function addSheep(event) {
//   event.preventDefault(); // Prevent default form submission behavior

//   //const inputNumber = document.querySelector("#numSheep");
//   const inputNumber = event.target.numSheep.value;
//   for (let i = 0; i < inputNumber; i++) {
//     state.start.push("sheep"); // Add new sheep to the starting bank
//   }

//   render(); // Re-render the banks
// }

const state = {
  start: ["sheep", "sheep"],
  target: ["sheep"],
}

function moveSheep() { //Transfers a sheep from the start bank to the target bank.
  const sheep = state.start.pop(); // Remove the last sheep from `start`.
  state.target.push(sheep); // Add it to `target`.
}

function renderStart() { //Displays sheep on the starting bank.
  const startingBank = document.querySelector("#startingBank ul");

  const startSheeps = state.start.map((sheep)=>{
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "🐑";
    li.append(button);

    // Add event listener so the sheep moves when clicked
    button.addEventListener("click", ()=>{
      moveSheep(); // Move sheep to the target bank
      render();   // Re-render both banks
    });

    return li;
  });

  startingBank.replaceChildren(...startSheeps); // Replace old sheep with the new list
}

function renderTarget() {
  const targetBank = document.querySelector("#targetBank ul");
  
  const targetSheeps = state.target.map((sheep)=>{
    const li = document.createElement("li");
    li.textContent = "🐑";
    return li;
  });

  targetBank.replaceChildren(...targetSheeps); // Replace old sheep with the new list
}


function render() { //Ensures both banks are updated whenever the state changes.
  renderStart();  // Render sheep on the starting bank
  renderTarget(); // Render sheep on the target bank
}
render(); //Initial render


//Adds sheep to the starting bank when the form is submitted. 
const form = document.querySelector("form");
form.addEventListener("submit", addSheeps);

function addSheeps(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const inputNum = event.target.numSheep.value;
  for (let i=0; i<inputNum; i++) {
    state.start.push("sheep"); // Add new sheep to the starting bank
  }

  render(); // Re-render the banks
}