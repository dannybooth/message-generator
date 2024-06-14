greetings = ["Hello", "Hi", "Hey", "Howdy"];
firstName = ["Daniel", "Chris", "Ben", "Tom"];
lastName = ["Booth", "Tomson", "Simpson", "Sideshow"];

n = [Math.floor(Math.random() * greetings.length),Math.floor(Math.random() * greetings.length),Math.floor(Math.random() * greetings.length)];

console.log(greetings[n[0]],firstName[n[1]],lastName[n[2]]);