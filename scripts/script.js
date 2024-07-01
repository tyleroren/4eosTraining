// Creates listeners for every button on the page, passing the class and text to the createVideoList function
document.querySelectorAll('button').forEach((item) => item.addEventListener('click', (e) => {
    createVideoList(e.target.classList[0], e.target.textContent);
}));

// Creates the list of videos that appears depending on which button is pressed
function createVideoList(source, header) {
    // home button just refreshes the page because I'm lazy
    if (source === "home") location.reload();
    // Creates variables for html elements for easy access
    const timeStamp = document.querySelector('.timeStamp');
    const vidList = document.querySelector('.vidList');
    const player = document.getElementById('videoPlayer');
    // Add header text, hide video and clear video path
    document.querySelector('.videoHeader').textContent = header;
    player.pause()
    player.removeAttribute('src');
    player.load()
    player.style.visibility = "hidden";
    document.querySelector('.credits').textContent = "";
    // Removes any items that may be in the video list or index lists on the page
    while (vidList.firstChild) vidList.removeChild(vidList.lastChild);
    while (timeStamp.firstChild) timeStamp.removeChild(timeStamp.lastChild);
    /* Runs through each object in the materials array, checking to see if the "category" property
    matches the class of the button that was pressed. Each item that does match will create a hyperlink
    and a list item. The hyperlink text is taken from the "title" property and the URL is a new function
    which passes the "filename" property, "title" property, and the index of the array to the next function */
    materials.forEach((item, index) => {
        if (item.category === source) {
            let list = document.createElement('li');
            let a = document.createElement('a');
            a.textContent = item.title;
            a.href = "javascript:void(0);";
            a.setAttribute("onclick", `timeStampSelection('${item.filename}', '${item.title}', ${index}, '${item.author}', '${item.date}')`);
            list.appendChild(a);
            vidList.appendChild(list);
        };
    });
}

// Creates the list of index timestamps depending on which video is selected
function timeStampSelection(filename, title, selector, author, date) {
    // Creates variables for html elements for easy access
    const timeStamp = document.querySelector('.timeStamp');
    const videoTitle = document.createElement('p');
    const player = document.getElementById('videoPlayer');
    let href = "";
    // Removes any items that may be in the index list on the page
    while (timeStamp.firstChild) timeStamp.removeChild(timeStamp.lastChild);
    // Add video title and show the video player and sets the file path for the video
    player.pause()
    player.removeAttribute('src');
    player.load()
    player.setAttribute('src', `videos/${filename}`);
    player.style.visibility = "visible";
    document.querySelector('.credits').textContent = `Video recorded by ${author} on ${date}`;
    videoTitle.classList.add("videoTitle");
    videoTitle.textContent = title;
    timeStamp.appendChild(videoTitle);
    /* Using the array index that was passed from the previous function, we can target the index
    property for the correct video in the array. Again a hyperlink and list item are created
    for each item. Each even array item is saved to the href variable (this should be the timestamp)
    and every odd array item is set as the hyperlink text (this should be the index label).
    Again each hyperlink points to a new function, videoPlayer, passing through the filename and
    timestamp */
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

// Sets the video to start at a specific time
function videoPlayer(time, filename) {
    document.querySelector('#videoPlayer').setAttribute('src', `videos/${filename}#t=${time}`);
}