require ( './root.js' );


describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
})

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})

describe('sayHiToHeadphonedRoommate(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})
expect(shout("hello")).toEqual("HELLO");
describe("shout(string)", function () {
  it("receives one argument and returns it in all caps", function () {
    expect(shout("hello")).toEqual("HELLO");
  });
});
function shout(string) {
  // todo
}
function shout(string) {
  return string;
}
"Hello!".toUpperCase(); // 'HELLO!'
function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string
  }
  "Hello!".toLowerCase();
  function whisper(string) {
  return string. toLowerCase();
  }
  function shout(string) {
  return string;
}
"Hello!".toUpperCase(); // 'HELLO!'
function shout(string) {
  return string.toUpperCase();
}
// Function to log a string in uppercase
function logShout(string) {
  console.log(string.toUpperCase()); // Logs the string in uppercase
}

// Example usage:
logShout("hello"); // Output: "HELLO"
// Function to log a string in uppercase
function logShout(string) {
  console.log(string.toUpperCase()); // Logs the string in uppercase
}

// Function to log a string in lowercase
function logWhisper(string) {
  console.log(string.toLowerCase()); // Logs the string in lowercase
}

// Example usage:
logShout("hello");    // Output: "HELLO"
logWhisper("HELLO");  // Output: "hello"
// Function to return a string in uppercase
function shout(string) {
  return string.toUpperCase();
}

// Function to return a string in lowercase
function whisper(string) {
  return string.toLowerCase();
}

// Function to log a string in uppercase
function logShout(string) {
  console.log(string.toUpperCase());
}

// Function to log a string in lowercase
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// Function to respond differently based on the string input
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

// Example usage:
console.log(sayHiToHeadphonedRoommate("hello"));    // "I can't hear you!"
console.log(sayHiToHeadphonedRoommate("HELLO"));    // "YES INDEED!"
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // "I would love to!"




    
