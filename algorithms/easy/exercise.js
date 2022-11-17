// Exercise:
//
// Write a cd() function that provides change directory function for an
// abstract file system.
//
// Similar to Unix FS:
// - Root path is "/"
// - Path separator is "/"
// - Repeated separators should collapse to a single ("x///y" becomes "x/y")
// - Self directory is addressable as "."
// - Parent directory is addressable as ".."
// - Directory names consist only of English alphabet letters and numbers (A-Z and a-z and 0-9)
// - The function should support both relative and absolute paths

function cd(startingPath, newPath) {
  // TODO implement this function
  if (newPath === ".") return startingPath;
  if (newPath[0] === "/") startingPath = "";
  //   for(let i =0; i < newPath.length; i++) {
  //     let current = newPath[i];
  //     if(current === '.') {

  //     }

  //   }
  const instructions = newPath.split("/");
  const path = startingPath.split("/");
  for (let i = 0; i < instructions.length; i++) {
    let current = instructions[i];
    if (current === ".") continue;
    if (current === "") continue;
    if (current === "..") {
      path.pop();
    } else path.push(current);
  }
  let result = path.join("/");
  if (result === "") result = "/";
  if (!path.length) return "/";
  else return result;
}

//////
////// should not need to touch anything below here
//////

function testCase(startingPath, newPath, expectedResult) {
  const result = cd(startingPath, newPath);
  const status = result == expectedResult ? "  OK" : "FAIL";
  console.log(
    `${status} - start: ${startingPath.padEnd(12)}  cd to: ${newPath.padEnd(
      16
    )}  got: ${result.padEnd(12)}   expected: ${expectedResult}`
  );
}

testCase("/a/b/c", ".", "/a/b/c");
testCase("/a/b/c", "d/e", "/a/b/c/d/e");
testCase("/a/b/c", "d/./e", "/a/b/c/d/e");
testCase("/a/b/c", "d///./e", "/a/b/c/d/e");
testCase("/a/b/c", "..", "/a/b");
testCase("/a/b/c", "../x", "/a/b/x");
testCase("/a/b/c", "../../1/2", "/a/1/2");
testCase("/a/b/c", "../3/../4/.././5", "/a/b/5");
testCase("/a/b/c", "../../../../..", "/");
testCase("/a/b/c", "/", "/");
testCase("/a/b/c", "/x/y", "/x/y");
testCase("/a/b/c", "/x/y/./../z///.", "/x/z");