function tellStory(storyArray) {
    if (storyArray == !3) {
        return "Enter everything"
    }

    const [name, mood, activity] = storyArray


    const story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;

    let i = 0
    while (i < storyArray.lenght) {
        story += storyArray[i];
        i++;
    }
    return story;
}

const storyArray = ["Nikola", 'Happy', 'runing'];

const result = tellStory(storyArray);

console.log(result);






//vaka mi bese pojasno kako raboti while ama se bara so array zatoa ke go ostavam vaka 




// function tellStory() {
//     const name = prompt('Type your name');
//     const mood = prompt("Enter a mood");
//     const activity = prompt('Enter an activity');



//     while (!name || !mood || !activity) {
//         alert("Please provide all three inputs.");
//         return;
//     }
//     const story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
//     console.log(story);
// }

// tellStory()