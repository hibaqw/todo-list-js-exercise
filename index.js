// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
//   taskDescriptions.push(false);
// }

function newTask(title, description)
{
  const task = {
    title : title,
    description: description,
    complete: false,
    completeTask: function() { 
      this.complete = true;
    },
    logTaskState: function(){
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
    }
    return task;
  };

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

console.log(tasks);

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
