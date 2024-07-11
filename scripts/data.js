/*
This file contains an array of objects. Each object contains the properties of one video. Each object
follows this template:

    {
        category: "",
        title: "",
        filename: "",
        author: "",
        date: "",
        index: []
    },

Please note the entire object is surrounded by curly brackets and ends with a comma. Each property requires quotes
and ends in a comma as well, with the exception of the index property which only requires square brackets.
    

    __________________________
    |                        |
    | HOW TO ADD A NEW VIDEO |
    |________________________|

Step 1) Record your video and place it in the videos directory. It is recommended to give it a simple 1 word name
        all in lower case.

Step 2) Copy the template above including the curly brackets. Paste it into the array below, please note:
        the videos will be listed on the page in the order that they are listed here. It is best to keep
        the categories together, so if you're adding a helpdesk video then try to add it with the other
        existing videos. 
        
        BE VERY CAREFUL WHERE YOU PASTE THE TEMPLATE. It must fall outside of any existing curly brackets.

        Example:

        {
            category: "helpdesk",
            title: "Connectwise Overview",
            filename: "connectwise.mp4",
            author: "Tyler",
            date: "",
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
        >>>YOUR NEW VIDEO COULD BE PASTED HERE, AFTER THE COMMA THAT ENDS THE CONNECTWISE VIDEO OBJECT<<<
        {
            category: "helpdesk",
            title: "Screenconnect and ITGlue Overview",
            filename: "testSC.mp4",
            author: "",
            date: "",
            index: [
                "00:00", "test1",
                "01:01", "test2",
                "02:02", "test3"
            ]
        },
        >>>YOUR NEW VIDEO COULD ALSO BE PASTED HERE INSTEAD, AFTER THE COMMA THAT ENDS THE SCREENCONNECT VIDEO OBJECT<<<
        

Step 3) Fill in the various video properties, following the exact formatting of the existing videos-
        comma placement, quote placements, brackets, etc
        If you omit the optional properties then do not delete them, leave them blank as they appear
        in the template.

        category (required): can only be one of the following: helpdesk, sales, lunch, other
        title (required): the full name you wish your video to appear as
        filename (required): the filename of the video that you put in the videos directory, including extension
        author (optional): name of the video's creator(s)
        date (optional): date of the video's creation
        index (optional): list of timestamps for the video. Note the formatting of other videos, these must go between
                          the square brackets and follow this format: 
                          "##:##", "Text",
                          "##:##", "Text",
                          etc
                          The last line of the indexes does not require a comma at the end

Step 4) That's all, you're done. If the page is already open just refresh it and confirm your video is working.
        If you did something wrong it will likely break the entire page so you'll know quickly.

*/


const materials = [
    {
        category: "helpdesk",
        title: "Ticket Flow / Escalation",
        filename: "ticketflow.pdf",
        author: "Tyler Oren",
        date: "07/11/2024",
        index: []
    },
    {
        category: "helpdesk",
        title: "Connectwise Overview",
        filename: "connectwise.mp4",
        author: "Tyler Oren",
        date: "06/13/2023",
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
        filename: "testSC.mp5",
        author: "",
        date: "",
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
        author: "",
        date: "",
        index: []
    },
    {
        category: "helpdesk",
        title: "Troubleshooting on a Call",
        filename: "",
        author: "",
        date: "",
        index: []
    },
    {
        category: "helpdesk",
        title: "Troubleshooting Basics",
        filename: "",
        author: "",
        date: "",
        index: []
    },
    {
        category: "helpdesk",
        title: "Advanced Troubleshooting",
        filename: "",
        author: "",
        date: "",
        index: []
    },
    {
        category: "helpdesk",
        title: "Microsoft Licensing",
        filename: "",
        author: "",
        date: "",
        index: []
    },
    {
        category: "helpdesk",
        title: "Pathfinder",
        filename: "",
        author: "",
        date: "",
        index: []
    },
    {
        category: "sales",
        title: "Pax8 / Datto Information",
        filename: "paxdatto.mp4",
        author: "Charlie Schloss",
        date: "10/06/2021",
        index: [
            "01:00", "New tenet setup / advisor accounts",
            "05:10", "New tenet creation from beginning",
            "10:00", "Migration notes",
            "17:00", "Pax8 setup new tenent w/o ms account",
            "20:00", "Domain provision",
            "31:30", "Datto setup",
            "39:00", "Datto Recovery",
            "44:00", "Office Price Increase"
        ]
    },
    {
        category: "sales",
        title: "Microsoft Licensing",
        filename: "",
        author: "",
        date: "",
        index: []
    },
    {
        category: "lunch",
        title: "Mike Repp Lunch & Lead Part 1",
        filename: "LunchandLeadMReppVideo1.mp4",
        author: "Mike Repp",
        date: "03/24/2023",
        index: []
    },
    {
        category: "lunch",
        title: "Mike Repp Lunch & Lead Part 2",
        filename: "LunchandLeadMReppVideo2.mp4",
        author: "Mike Repp",
        date: "03/24/2023",
        index: []
    },
    {
        category: "lunch",
        title: "Backup Radar and EDR",
        filename: "BackUpRadarandEDR.mp4",
        author: "Jakob Pascute",
        date: "03/08/2023",
        index: []
    },
    {
        category: "lunch",
        title: "DNS in Active Directory",
        filename: "TonyADDNS.MP4",
        author: "Tony Pollick",
        date: "09/16/2022",
        index: []
    },
    {
        category: "lunch",
        title: "Connectwise Manage",
        filename: "DerekandConnectwise.MP4",
        author: "Derek Felger",
        date: "08/19/2022",
        index: []
    },
    {
        category: "lunch",
        title: "Office 365",
        filename: "JonandOffice365.MP4",
        author: "Jon Burden",
        date: "08/05/2022",
        index: []
    },
];
