const taskList = {
    tasks : [],
    addTask : function (title) {
        this.tasks.push({title : title , done : false});
        console.log(`${title} Task added to list.`)
    },
    completeTask : function (title) {
        const match = this.tasks.find((task) => task.title === title);
        if(match){
            match.done = true;
            console.log(`Completed task: "${title}"`);
        }else{
            console.log(`Task not found : ${title}`)
        }
    },
    countIncomplete : function () {
        let count = 0
        this.tasks.forEach((task) => {
            if(!task.done){
                count=count+1;
            }
        })
        return count
    },
}


console.log("---- Task List Demo ----");
taskList.addTask("Write report");
taskList.addTask("Review PR");
taskList.addTask("Deploy fix");
taskList.completeTask("Review PR");
console.log("Incomplete tasks:", taskList.countIncomplete());

const detachedCount = taskList.countIncomplete();

try{
    detachedCount();
}catch (error){
    console.log("CRASHED as predicted. Error message: ", error.message);
}

const safelyWrappedCount = () => taskList.countIncomplete();

console.log("Safely wrapped call result:", safelyWrappedCount());
console.log(taskList.countIncomplete())



