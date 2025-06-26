export function getRandomName() {
    const names = [
      'Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 'Fiona', 'George', 'Hannah', 'Ivan', 'Jade',
      'Kevin', 'Lily', 'Mason', 'Nina', 'Oscar', 'Paula', 'Quentin', 'Rachel', 'Sam', 'Tina',
      'Uma', 'Victor', 'Wendy', 'Xander', 'Yara', 'Zane', 'Amber', 'Blake', 'Cleo', 'Derek',
      'Ella', 'Felix', 'Gina', 'Harry', 'Isla', 'Jake', 'Kara', 'Leo', 'Mira', 'Noah',
      'Olive', 'Peter', 'Quinn', 'Rosa', 'Steve', 'Tess', 'Umar', 'Vera', 'Will', 'Xenia',
      'Yusuf', 'Zoe', 'Aria', 'Ben', 'Clara', 'Dean', 'Elsa', 'Finn', 'Gwen', 'Hugo',
      'Ivy', 'Jonas', 'Kate', 'Liam', 'Maya', 'Nate', 'Orla', 'Paul', 'Queenie', 'Reed',
      'Sophie', 'Tom', 'Usha', 'Vince', 'Willa', 'Ximena', 'Yvette', 'Zack', 'Aiden', 'Bella',
      'Caleb', 'Daisy', 'Eli', 'Freya', 'Grayson', 'Hazel', 'Ian', 'Jenna', 'Kyra', 'Logan',
      'Miles', 'Nora', 'Owen', 'Penny', 'Ron', 'Sasha', 'Toby', 'Una', 'Van', 'Wade'
    ];
    return names[Math.floor(Math.random() * names.length)];
  }

export function getRandomMessage() {
    const messages = [
      'Hey, how’s your day going?', 'Did you watch the movie last night?', 'Let’s go hiking this weekend!',
      'I’m working on a new project.', 'What’s your favorite food?', 'Check out this cool article I found!',
      'Long time no see!', 'Can you help me with this code?', 'Where are you right now?', 'I’ll call you later.',
      'That was hilarious 😂', 'You free this weekend?', 'Let’s meet for coffee!', 'Just finished my assignment.',
      'How’s your family?', 'Look at this meme!', 'Miss those good old days.', 'Happy Birthday!',
      'Congrats on your job!', 'I’m planning a trip soon.', 'How’s the weather there?', 'Wanna play some games?',
      'I’m so tired today.', 'Send me the files please.', 'That’s awesome!', 'No way! Really?',
      'Let’s catch up soon.', 'Feeling super productive today!', 'Guess what happened!',
      'Need some motivation today.', 'Let’s binge a series.', 'Got any good music recommendations?',
      'I’m learning React.', 'Check out my portfolio.', 'I started a blog!', 'Love this new phone.',
      'Can’t wait for the weekend.', 'Any book suggestions?', 'Feeling nostalgic.', 'Had a great time today.',
      'I’m hungry.', 'Why is JavaScript like this?', 'I fixed the bug!', 'Got a job interview soon.',
      'Wish me luck!', 'That’s unbelievable.', 'You’re the best!', 'LOL 😂', 'Same here!',
      'What are you up to?', 'Can we talk later?', 'Back to work!', 'Break time!',
      'Sending you good vibes!', 'This is too funny.', 'Let’s hang out.', 'That’s inspiring!',
      'I need coffee.', 'Wanna join the call?', 'That reminds me of something.', 'Do you believe in luck?',
      'The weather is perfect today.', 'Just had lunch.', 'Learning something new!',
      'Everything is so fast-paced.', 'Take care!', 'It’s been a while.', 'Almost done with the task.',
      'How’s the new place?', 'Don’t forget our meeting.', 'You’ll do great!', 'I’m nervous about tomorrow.',
      'Excited for the weekend!', 'We should collaborate.', 'Just woke up.', 'Working late tonight.',
      'What’s your dream job?', 'Any good movies?', 'Need some inspiration.', 'Too many tabs open 😅',
      'I need a break.', 'This bug is killing me.', 'Finally, it works!', 'Push it to GitHub.',
      'React is amazing!', 'I love clean code.', 'How do I fix this?', 'Take a deep breath.',
      'Water break.', 'One more meeting to go.', 'Can’t stop thinking about food.',
      'Netflix or YouTube?', 'It’s raining here.', 'Sunny day vibes.', 'Almost the weekend!',
      'Let’s build something cool.', 'Don’t stress out.', 'Stay positive!', 'Believe in yourself.'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }