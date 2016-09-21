// set up data structure for task subclasses
var taskDB = {
  people: [
    {
      type: 'person',
      name: 'hailey',
      img: 'http://i.imgur.com/aOTxVT1.jpg',
      text: 'Hailey',
    },
    {
      type: 'person',
      name: 'marcus',
      img: 'http://i.imgur.com/mibdzgD.jpg',
      text: 'Marcus',
    },
    {
      type: 'person',
      name: 'robin',
      img: 'http://i.imgur.com/JbzHoVA.jpg',
      text: 'Robin',
    },
    {
      type: 'person',
      name: 'connor',
      img: 'http://i.imgur.com/SmRinpA.jpg',
      text: 'Connor',
    },
    {
      type: 'person',
      name: 'cody',
      img: 'http://i.imgur.com/2dH3KY7.jpg',
      text: 'Cody',
    },
    {
      type: 'person',
      name: 'rebecca',
      img: 'http://i.imgur.com/dnkBzD5.png',
      text: 'Rebecca',
    }
  ],
  resources: [
    {
      type: 'resource',
      name: 'slack',
      img: 'http://i.imgur.com/8Dy4qfN.png',
      text: ' through <strong>Slack</strong>.'
    },
    {
      type: 'resource',
      name: 'email',
      img: 'http://i.imgur.com/eHz9jJ8.png',
      text: ' via <strong>email</strong>.'
    },
    {
      type: 'resource',
      name: 'zoom',
      img: 'http://i.imgur.com/tbGFuCY.png',
      text: ' through <strong>Zoom</strong>.'
    },
    {
      type: 'resource',
      name: 'calendar',
      img: 'http://i.imgur.com/6dmt15i.png',
      text: '. Check your <strong>calendar</strong> ASAP!'
    },
    {
      type: 'resource',
      name: 'learnapp',
      img: 'http://i.imgur.com/ffT6cOI.png',
      text: ' through the <strong>Learn APP</strong>.'
    },
    {
      type: 'resource',
      name: 'floobits',
      img: 'http://i.imgur.com/2JG3U65.png',
      text: '. Get with your pair on <strong>Floobits</strong>.'
    },
    {
      type: 'resource',
      name: 'helpdesk',
      img: 'http://i.imgur.com/gFDrqne.png',
      text: '. Better hit up the <strong> Help Desk</strong>.'
    },
    {
      type: 'resource',
      name: 'github',
      img: 'http://i.imgur.com/yi4bMPo.png',
      text: '. Have you even looked at your <strong>GitHub</strong> lately?!'
    }
  ],
  commands: [
    {
      type: 'command',
      name: 'slides',
      img: 'http://i.imgur.com/0qk2rgs.png',
      text: 'review slides'
    },
    {
      type: 'command',
      name: 'video',
      img: 'http://i.imgur.com/aiQkdbV.png',
      text: 'watch a video'
    },
    {
      type: 'command',
      name: 'verbal practice',
      img: 'http://i.imgur.com/vVWYUSj.png',
      text: 'practice interviewing with your pair'
    },
    {
      type: 'command',
      name: 'self assessment',
      img: 'http://i.imgur.com/6037HyX.png',
      text: 'take your self-assessment'
    },
    {
      type: 'command',
      name: 'clone repo',
      img: 'http://i.imgur.com/F9Euz4B.png',
      text: 'fork and clone a repo'
    },
    {
      type: 'command',
      name: 'check-point',
      img: 'http://i.imgur.com/tjLVdkh.jpg',
      text: 'complete the checkpoint exercise'
    }
  ]
};