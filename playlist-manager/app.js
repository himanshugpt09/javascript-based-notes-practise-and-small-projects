


const trackList = [];

console.log("---- Building the Playlist ----");

trackList.push("Tere Liye");
trackList.push("Asa nahi yah");

console.log("After push x2:", trackList);

trackList.unshift("ishq bhi diy mola");

console.log("After unshift:", trackList);

const removedLast = trackList.pop();
console.log(`After pop (removed "${removedLast}"):`, trackList);


const removedFirst = trackList.shift();
console.log(`After shift (removed "${removedFirst}"):`, trackList);


trackList.push("aye mere vatan k logo");
console.log(trackList);


trackList.splice(1, 0 , "Me hu tera hero");
console.log("After splice (insert at index 1):", trackList);

console.log("\n---- Non-Mutating Extraction ----");
const part = trackList.slice(0,2);
console.log("Top three (new array):", part);
console.log("Original playlist (UNCHANGED by slice):", trackList);

console.log("\n---- Final State ----");
console.log("Playlist length:", trackList.length);
console.log("Playlist:", trackList);
