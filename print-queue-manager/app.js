


const printQueue  = {
    queue : [],
    history : [],
    MAX_HISTORY : 3,

    addJob : function (job) {
        this.queue.push({id : this.queue.length + 1, job : job});
        console.log("Added job :", this.queue);
    },

    expedite : function (jobId) {
        const model = this.queue.find((obj) =>  obj.id === jobId );

        if(model === -1){
            console.log(`Cannot expedite -- job #${jobId} not found.`);
            return;
        }
        const spliceOut = this.queue.splice(this.queue.indexOf(model), 1)[0];
        this.queue.unshift(spliceOut);
        console.log(`After Expedited job #${jobId} to front of queue`);
    },

    cancelJob : function (jobId) {
        const removeProcess = this.queue.indexOf((obj) => obj.id === jobId);

        if(removeProcess === -1){
            console.log(`Cannot expedite -- job #${jobId} not found.`);
            return;
        }

        this.queue.splice(removeProcess, 1);
        console.log(`Cancelled job #${jobId}.`);


    },

    processNext : function (){

        if (this.queue.length === 0){
            console.log("No jobs to process -- queue is empty.");
            return;
        }
        const front = this.queue.shift();
        this.history.unshift(front);
        console.log("Processed and moved to history : ", this.history);

        if(this.history.length > this.MAX_HISTORY){
            this.history.pop();
        }
        
    },

    getQueueSnapshot : function (){
        return this.queue.splice();
    },
};



printQueue.addJob("Resume.pdf");
printQueue.addJob("Invoice.pdf");
printQueue.addJob("Photo.jpg");
printQueue.addJob("Report.docx");


console.log("\nQueue after adding 4 jobs:", printQueue.queue.map((j) => j.id));

printQueue.expedite(3);
console.log("Queue after expediting #3:", printQueue.queue.map((j) => j.id));

printQueue.cancelJob(2);
console.log("Queue after cancelling #2:", printQueue.queue.map((j) => j.id));

console.log("\n---- Processing Jobs ----");
printQueue.processNext();
printQueue.processNext();

console.log("\n---- Snapshot Safety Check ----");

const snapshot = printQueue.getQueueSnapshot();
snapshot.push({ id: 999, name: "FAKE INJECTED JOB" }); // mutate the SNAPSHOT only

console.log("Snapshot (with fake job added):", snapshot.map((j) => j.id));
console.log("Real queue (should be UNAFFECTED):", printQueue.queue.map((j) => j.id));

console.log("\n---- Final State ----");
console.log("History:", printQueue.history);