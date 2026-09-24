
let recentFiles = []
const MAX_RECENT = 4

function openFile(filename) {
    const existingIndex = recentFiles.indexOf(filename);
    if(existingIndex !== -1){
        recentFiles.splice(existingIndex, 1);
        console.log(`${filename} was already recently -- moving to front.`)
    }
    recentFiles.unshift(filename);
    if(recentFiles.length>MAX_RECENT){
        const dropped = recentFiles.pop();
        console.log(`Recent list full -- dropped oldest: ${dropped}`)
    }
    console.log(`Opened "${filename}". Recent files:`, recentFiles);
}

function undoLastOpen(){
    if(recentFiles.length === 0){
        console.log("Nothing to undo -- recent list is empty.");
        return;
    }
    const undone = recentFiles.shift();
    console.log(`Undone ${undone} from recent Files`);
    console.log(`Recent files now, ${recentFiles}`);

}

openFile("report.docx");
openFile("budget.xlsx");
openFile("notes.txt");
openFile("report.docx");
openFile("diagram.png");


console.log("\n---- Undo Demonstration ----");
undoLastOpen();

console.log("\n---- Final State ----");
console.log("Recent files:", recentFiles);