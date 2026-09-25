
const rawLogLines = [
  "INFO: Server started",
  "ERROR: Failed to connect to database",
  "CORRUPT_LINE",
  "INFO: User logged in",
  "ERROR: Timeout on request /api/users",
  "ERROR: Invalid token provided",
  "INFO: Cache refreshed",
  "ERROR: Disk space low",
];

function removeKnownBadLine(lines, badLine){
    const index = lines.indexOf(badLine);
    if(index !== -1){
        const removebad = lines.splice(index, 1);
        console.log(`${removebad} bad line ,now removed`);
    }
}

function filterErrorLines(lines){
    const errorLines = [];
    for(const line of lines){
        if(line.startsWith("ERROR")){
            errorLines.push(line);
        }
    }
    return errorLines;
}

function batchLines(lines, batchSize){
    const batches = [];
    const remaining = lines.slice();

    while (remaining.length > 0){
        const chunk = remaining.splice(0, batchSize);
        batches.push(chunk);
    }

    return batches;
}

console.log("----- Original Raw Log Lines -----");
console.log(rawLogLines);

const workingCopy = rawLogLines.slice();

removeKnownBadLine(workingCopy, "CORRUPT_LINE")
const errorLines = filterErrorLines(workingCopy)
const batches = batchLines(errorLines, 2)

console.log(`${rawLogLines} this original`);
console.log(`${workingCopy} process done on this`);
console.log(`${errorLines} error lines`);
console.log(`${batches} top two`);