const videos = [
    "connectwise.mp4", "Connectwise Overview",
    "scitg.mp4", "Screenconnect and ITGlue Overview",
    "", "Answering Calls",
    "", "Troubleshooting on a Call",
    "", "Troubleshooting Basics",
    "", "Microsoft Licensing",
    "", "Pathfinder"
];
const index = [
        "", [
            "00:00", "Connectwise Login and Introduction",
            "02:49", "Connectwise Navigation",
            "04:09", "Introduction to the Service Board",
            "07:22", "Introduction to Tickets",
            "12:56", "Creating a New Ticket",
            "20:09", "Adding Notes to a Ticket / Intro to Time Entry",
            "35:19", "Time Sheet Management",
            "44:55", "Customizing Connectwise"
        ],
        "", [],
        "", [],
        "", [],
        "", [],
        "", [],
        "", []
];
const vidList = document.querySelector('.vidList');

createVideoList()


function createVideoList() {
    let filename = "";
    videos.forEach((item, index) => {
        let list = document.createElement('li');
        let a = document.createElement('a');
        if (index % 2 === 0) {
            filename = item;
        } else {
            a.textContent = item;
            a.href = "javascript:void(0);";
            a.setAttribute("onclick", `timeStampSelection(${index}, '${filename}', '${item}');`);
            list.appendChild(a);
            vidList.appendChild(list);
        };
    });
}


function timeStampSelection(vidSelector, filename, fullname) {
    const timeStamp = document.querySelector('.timeStamp');
    const videoTitle = document.createElement('p');
    let href = "";
    while (timeStamp.firstChild) {
        timeStamp.removeChild(timeStamp.lastChild);
    }
    document.querySelector('#videoPlayer').setAttribute('src', '');
    videoTitle.classList.add("videoTitle");
    videoTitle.textContent = fullname;
    timeStamp.appendChild(videoTitle);
    index[vidSelector].forEach((item, index) => {
        let list = document.createElement('li');
        let a = document.createElement('a');
        if (index % 2 === 0) {
            href = item;
        } else {
            a.textContent = `${item} [${href}]`;
            // a.href = `videos/${filename}#t=${href}`;
            a.href = "javascript:void(0);";
            a.setAttribute("onclick", `videoPlayer('${href}', '${filename}');`);
            list.appendChild(a);
            timeStamp.appendChild(list);
        };
    });
}

function videoPlayer(time, filename) {
    document.querySelector('#videoPlayer').setAttribute('src', `videos/${filename}#t=${time}`);
}