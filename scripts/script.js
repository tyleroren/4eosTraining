const materials = [
    {
        category: "helpdesk",
        title: "Connectwise Overview",
        filename: "connectwise.mp4",
        index: [
            "00:00", "Connectwise Login and Introduction",
            "02:49", "Connectwise Navigation",
            "04:09", "Introduction to the Service Board",
            "07:22", "Introduction to Tickets",
            "12:56", "Creating a New Ticket",
            "20:09", "Adding Notes to a Ticket / Intro to Time Entry",
            "35:19", "Time Sheet Management",
            "44:55", "Customizing Connectwise"
        ]
    },
    {
        category: "helpdesk",
        title: "Screenconnect and ITGlue Overview",
        filename: "testSC.mp4",
        index: [
            "00:00", "test1",
            "01:01", "test2",
            "02:02", "test3"
        ]
    },
    {
        category: "helpdesk",
        title: "Answering Calls",
        filename: "",
        index: []
    },
    {
        category: "helpdesk",
        title: "Troubleshooting on a Call",
        filename: "",
        index: []
    },
    {
        category: "helpdesk",
        title: "Troubleshooting Basics",
        filename: "",
        index: []
    },
    {
        category: "helpdesk",
        title: "Advanced Troubleshooting",
        filename: "",
        index: []
    },
    {
        category: "helpdesk",
        title: "Microsoft Licensing",
        filename: "",
        index: []
    },
    {
        category: "helpdesk",
        title: "Pathfinder",
        filename: "",
        index: []
    },
    {
        category: "old",
        title: "Pax8 Information",
        filename: "testpax8.mp4",
        index: [
            "00:00", "test10",
            "01:01", "test09",
            "02:02", "test08"
        ]
    },
];

document.querySelectorAll('button').forEach((item) => item.addEventListener('click', (e) => {
    createVideoList(e.target.classList[0], e.target.textContent);
}));

function createVideoList(source, header) {
    const timeStamp = document.querySelector('.timeStamp');
    document.querySelector('.videoHeader').textContent = header;
    if (source === "home") location.reload();
    const vidList = document.querySelector('.vidList');
    while (vidList.firstChild) vidList.removeChild(vidList.lastChild);
    while (timeStamp.firstChild) timeStamp.removeChild(timeStamp.lastChild);
    materials.forEach((item, index) => {
        if (item.category === source) {
            let list = document.createElement('li');
            let a = document.createElement('a');
            a.textContent = item.title;
            a.href = "javascript:void(0);";
            a.setAttribute("onclick", `timeStampSelection('${item.filename}', '${item.title}', ${index})`);
            list.appendChild(a);
            vidList.appendChild(list);
        };
    });
}

function timeStampSelection(filename, title, selector) {
    const timeStamp = document.querySelector('.timeStamp');
    const videoTitle = document.createElement('p');
    let href = "";
    while (timeStamp.firstChild) timeStamp.removeChild(timeStamp.lastChild);
    document.querySelector('#videoPlayer').setAttribute('src', `videos/${filename}`);
    document.getElementById('videoPlayer').style.visibility = "visible";
    videoTitle.classList.add("videoTitle");
    videoTitle.textContent = title;
    timeStamp.appendChild(videoTitle);
    materials[selector].index.forEach((item, index) => {
        let list = document.createElement('li');
        let a = document.createElement('a');
        if (index % 2 === 0) {
            href = item;
        } else {
            a.textContent = `${item} [${href}]`;
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