// Edit this file to define your hunt. Add as many steps as you need.
// destinationkey accepts a fixed MMDDYYYY string (including leading zeroes),
// 'currentdate', or a relative year expression like 'currentdate - 21years'.
// Example: on October 8, 2026, 'currentdate - 21years' resolves to '10082005'.
// Both + and - are supported; spaces and singular 'year' are also accepted.
// Relative dates follow the player's local date, including after midnight.
// February 29 becomes February 28 if the target year is not a leap year.
// Use 'currentdate' on the last step to return players to today.
// Wrap messages in double quotes so apostrophes (like we'll) work normally.
// If your clue contains a double quote, escape it as \".
// Keep each quoted message on one physical line. Use \n for a line break
// and \n\n for a blank line between paragraphs.
// Upload clips to images/ and set each step's clip to its path from index.html.
// Use forward slashes (e.g. 'images/bttfTimeTravel.mp4'). Steps can share a clip.
// The clip plays when leaving that step after entering its correct destination.
window.TIME_HUNT_CONFIG = {
  id: 'frontside-time-hunt-v1', // Change the id to start a separate saved hunt.
  initialStep: 1,
  completionMessage: "Congratulations on repairing the timeline, and returning to your party.\n\nHappy 10th Birthday, Jase!\nLove- Clayton, Lacie & Preslie\n\nNow use code 816 to unlock your present!",
  steps: [
    {
      step: 1,
      message: "Your birthday timeline is broken!\n\nYou must travel through your past to repair it.\n\nFix the timeline, and your present awaits!\n\nThe time-travel device can only travel to specific dates.\n\nFollow the clues to discover each destination.\n\nFirst stop: The day you were born!",
      destinationkey: '10082016',
      clip: 'images/bttf-travel.webm'
    },
    {
      step: 2,
      message: "Travel to the day you went up in a helicopter for the first time.\n\nHINT: Check the ping pong table.",
      destinationkey: '09102017',
      clip: 'images/mib.webm'
    },
    {
      step: 3,
      message: "Travel to your first day of Kindergarten.\n\nHINT: Check the pickup glovebox.",
      destinationkey: '08142023', 
      clip: 'images/timemachine.webm'
    },
    {
      step: 4,
      message: "Travel to the day you flew in an airplane for the first time.\n\nHINT: Check the bar.",
      destinationkey: '02122025', 
      clip: 'images/azkaban.webm'
    },
    {
      step: 5,
      message: "Travel to the day you drove a tractor by yourself.\n\nHINT: Check the shuffleboard table.",
      destinationkey: '09262026', 
      clip: 'images/billted.webm' 
    },
    {
      step: 6,
      message: "Timeline repair is complete! Great work!\n\nNow travel back to your 10th birthday party.  Hurry, your guests are waiting!",
      destinationkey: '10102026', 
      clip: 'images/bttf-end.webm' 
    }
  ]
};
