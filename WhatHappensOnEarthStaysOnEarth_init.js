
const clippingone = document.createElement("div");
clippingone.id = "clippingone";

clippingone.style.borderStyle = "double";
clippingone.style.borderRadius = "4px";
clippingone.style.borderWidth = "4px";
clippingone.style.borderColor = "#fff";
clippingone.innerHTML = `<img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2017_31/2093466/170803_hoover.jpg" style="width:100%;">`;
clippingone.style.width = "22%";
clippingone.style.position = "relative";
clippingone.style.left = "19px";
clippingone.style.top = "-978px";

document.querySelector('.container').appendChild(clippingone);


const clippingtwo = document.createElement("div");
clippingtwo.id = "clippingtwo";

clippingtwo.style.borderStyle = "double";
clippingtwo.style.borderRadius = "4px";
clippingtwo.style.borderWidth = "4px";
clippingtwo.style.borderColor = "#fff";
clippingtwo.innerHTML = `<img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/newscms/2016_48/1810796/161128-fidel-1959-0836.jpg" style="width:100%;">`;
clippingtwo.style.width = "22%";
clippingtwo.style.position = "relative";
clippingtwo.style.left = "11px";
clippingtwo.style.top = "-1324px";

document.querySelector('.container').appendChild(clippingtwo);


const clippingthree = document.createElement("div");
clippingthree.id = "clippingthree";

clippingthree.style.borderStyle = "double";
clippingthree.style.borderRadius = "4px";
clippingthree.style.borderWidth = "4px";
clippingthree.style.borderColor = "#fff";
clippingthree.innerHTML = `<img src="https://jacksonhistory.net/wp-content/uploads/2019/02/170.png
" style="width:100%;">`;
clippingthree.style.width = "18%";
clippingthree.style.position = "relative";
clippingthree.style.left = "67px";
clippingthree.style.top = "-1645px";

document.querySelector('.container').appendChild(clippingthree);



const clippingfour = document.createElement("div");
clippingfour.id = "clippingfour";

clippingfour.style.borderStyle = "double";
clippingfour.style.borderRadius = "4px";
clippingfour.style.borderWidth = "4px";
clippingfour.style.borderColor = "#fff";
clippingfour.innerHTML = `<img src="https://ca-times.brightspotcdn.com/dims4/default/dd5e31f/2147483647/strip/true/crop/1000x563+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9e%2Fdf%2F7d814829b9bae8b999c7f37d0b85%2Fla-me-helen-gahagan-douglas-19800629-001" style="width:100%;">`;
clippingfour.style.width = "34%";
clippingfour.style.position = "relative";
clippingfour.style.left = "757px";
clippingfour.style.top = "-1776px";

document.querySelector('.container').appendChild(clippingfour);


const clippingfive = document.createElement("div");
clippingfive.id = "clippingfive";

clippingfive.style.borderStyle = "double";
clippingfive.style.borderRadius = "4px";
clippingfive.style.borderWidth = "4px";
clippingfive.style.borderColor = "#fff";
clippingfive.innerHTML = `<img src="https://www.history.navy.mil/content/history/nhhc/our-collections/photography/us-people/m/macarthur-douglas-views-taken-after-june-1950/80-g-422492/_jcr_content/mediaitem/image.img.jpg/1590000162030.jpg" style="width:100%;">`;
clippingfive.style.width = "28%";
clippingfive.style.position = "relative";
clippingfive.style.left = "771px";
clippingfive.style.top = "-1755px";

document.querySelector('.container').appendChild(clippingfive);


let x = new MutationObserver((mutationsList, observer) => {
    $("#game_start").one("click", () => {       
        document.querySelector("#clippingone").remove();
        document.querySelector("#clippingtwo").remove();
        document.querySelector("#clippingthree").remove();
        document.querySelector("#clippingfour").remove();
        document.querySelector("#clippingfive").remove();

        observer.disconnect()
    }
)});
        
        
        x.observe(document, { subtree: true, childList: true });










document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());

let z = new MutationObserver((mutationsList, observer) => {
            let que = document.querySelector("#opponent_selection_description_window");
            if (que) {
                $("#opponent_selection_id_button").click();
                observer.disconnect()
            }
        });
        
        
        z.observe(document, { subtree: true, childList: true });
    
const favican = document.createElement("link");
favican.rel = "icon";
favican.type = "image/x-icon";
favican.href = "https://files.catbox.moe/vho7qw.ico";

document.head.appendChild(favican);

const textArray = {
    election: 
    ` 
        <h3>NOVICE - WORKING PAPER</h3>
        <h4>OFFICE OF INTERNAL DISSENT, C.I.A.<br>CENTRAL OFFICE</h4>
        <h4>November 20th, 1956</h4>
        <p>The November election has raised issues regarding actions the executive branch. Despite the detrimental effects the current electeds may create, in aggregate, the effects of cancelling or overruling the general election would be inadvisable.
        Concurrent with the central office, we detail methods in this report, such that their actions do not impede our work...(continued on next page.)
        </p>
    `,
        presidentSummary: 
    `
        <h3>BIOGRAPHIC BRIEF</h3>
        <h4>CENTRAL REFERENCE SERVICE, C.I.A.</h4>
        <h4>January 1957</h4>
        Sidney Sanders McMath, a populist and an anti-corruption figure, is set to take Office within the week. He was elected as Governor of Arkansas in 1949, and left office on January 8th. Born in an impoverished part of Arkansas, he served in the Pacific War as a marine, and entered state politics on his return. Though at the time he was an obscure character, he rose to national attention during his Governorship.
        <br>
        <br>
        McMath is a popular and effective politician. His administrative, rhetorical, and organizational skills have enabled him to perform well in his environment. Despite his populist appeal, he was able to position himself such that the Democratic National Convention nominated him for office. Following this, he won the general election due to strong mobilization efforts against entrenched political interests. Though his impressive results have been suprising, it is not expected to pose a significant threat due to the fragmented nature of his coalition.
        <br>
        <br>
    `,
            vicePresidentSummary: 
    `
        <h3>BIOGRAPHIC BRIEF</h3>
        <h4>CENTRAL REFERENCE SERVICE, C.I.A.</h4>
        <h4>January 1957</h4>
        Helen Gahagan Douglas spent the majority of her early life as an actress and opera singer. However, following her stunning Senate victory in 1950 over Thomas Henry Kuchel, she served as a strong voice in the Senate for reformist tendencies. Moreover, her ability to coordinate members of the House and Senate into reliable voting patterns has been remarkable. 
        <br>
        <br>
        In the early 1930s, she had a close relationship with the deceased Roosevelt family, particularly Eleanor Roosevelt. This was the primary cause of her brief detainment in July 1935, before being released. Along with this, she was also an outspoken opponent of the defunct Nazi German Government. In our assessment of her character, we find indications that she may create tension within the administration's coalition due to her ideological commitments.
        <br>
        <br>
    `,
}

        //After the elitist and inept Republican administration, McMath takes charge. 
        //From the incumbent governor of Arkansas to the highest office in the country. 
        //Douglas took the senatorial throne from that rat Nixon, and became a national sensation. 
        //Joined together on a revolutionary ticket to power, they now must seize their moment in history.
        //<br>
        //<br>
        //Silence surrounds them. 
        //They must remake the Democratic party in their own image, improve the dwindling economy, and get rid of the graft and evil pervading Washington. 
        //They must set themselves apart. 
        //For if they don't, who will?
campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 11,
        "fields": {
            "year": 1960,
            "summary": textArray.election,
            "image_url": "https://i.ibb.co/bNfR2Pp/elec1960.webp",
            "winning_electoral_vote_number": 269,
            "advisor_url": "https://file.garden/aKoRqbLZKBsHizSA/whathappensonearth/taken.png",
            "recommended_reading": "<h4 style=\"margin-top: 0.5em;\">1960 Election Books and Links</h4>David Pietrusza - <a href=\"http://www.amazon.com/exec/obidos/ASIN/1402777469/amhius20-20\" target=\"_blank\">1960--LBJ vs. JFK vs. Nixon: The Epic Campaign That Forged Three Presidencies</a></br>Theodore White - <a href=\"http://www.amazon.com/exec/obidos/ASIN/0061900605/amhius20-20\" target=\"_blank\">The Making of the President 1960</a></br>W. J. Rorabaugh - <a href=\"http://www.amazon.com/exec/obidos/ASIN/0700618872/amhius20-20\" target=\"_blank\">The Real Making of the President: Kennedy, Nixon, and the 1960 Election</a></br><a href=\"http://www.davidpietrusza.com/1960-cast-of-characters.html\" target=\"_blank\">1960 Cast of Characters</a></br><a href=\"https://www.youtube.com/watch?v=gbrcRKqLSRw\" target=\"_blank\">First Kennedy-Nixon Debate (video)</a></br><a href=\"https://www.youtube.com/watch?v=_CtSW-HQlxQ\" target=\"_blank\">The Making of the President 1960 (video documentary, 1963)</a>",
            "has_visits": 0,
            "no_electoral_majority_image": "https://www.jetsimon.com/public/static/images/1960-no-majority-photo.jpg",
            "creator": "bayardgirli",
            "display_year": "What Happens On Earth Stays On Earth"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 105,
        "fields": {
            "first_name": "Sid",
            "last_name": "McMath",
            "election": 11,
            "party": "Democrat",
            "state": "Arkansas",
            "priority": 1,
            "description": textArray.presidentSummary,
            "color_hex": "#852e2e",
            "secondary_color_hex": "#90C0FF",
            "is_active": 1,
            "image_url": "https://files.catbox.moe/jwplp6.PNG",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1960 Presidential Election.</h3><p>Hopefully you can move the United States in a more modern direction after eight quiet years of Eisenhower, while holding the line against the Soviet Union. At your young age, you have the potential to define the entire decade as President, and perhaps to hand the torch to one of your brothers in the future.</p>",
            "electoral_loss_message": "<h3>Sorry, you have lost the 1960 Presidential Election.</h3><p>It was always going to be tough to defeat the Vice President to someone as popular as Eisenhower. However, you still have your seat in the Senate. At your young age, there is no reason you couldn't be a strong contender for President in 1964 or 1968, especially if this election was close. Let's just hope the Democrats don't blame your defeat on your religion.</p>",
            "no_electoral_majority_message": "<h3>No candidate has won a majority in the Electoral College.</h3><p>The Democrats have an advantage in the House of Representatives, so you are probably in good shape. However, a lot depends on how you deal with Harry Byrd. It's possible that some kind of deal will need to be struck with Byrd or Nixon to get a clean majority in the House.</p>",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 106,
        "fields": {
            "first_name": "",
            "last_name": "The Damned",
            "election": 11,
            "party": "The Four Horsemen",
            "state": "The Seventh Circle",
            "priority": 2,
            "description": "<h4>Be not afraid, for the children of the light shall find their way.</h4>",
            "color_hex": "#001b3a",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.ibb.co/Lp2YMGv/evil.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1960 Presidential Election.</h3><p>With luck, you will be able to duplicate the eight years of peace and prosperity under Eisenhower. Unfortunately, the Democrats maintain their majority in both houses of Congress. With luck, they will be good partners in a bipartisan governing coalition. Your first order of business is to mend fences with Lyndon Johnson, who is returning to his role as Senate Majority Leader.</p>",
            "electoral_loss_message": "<h3>Sorry, you have lost the 1960 Presidential Election.</h3><p>A lot of people think this election was yours to lose, and party operatives are already whispering that Nelson Rockefeller will be the frontrunner in 1964. As such, it appears that your chances of becoming President are over. Perhaps you can return to California and run for Governor, or for the Senate again.</p>",
            "no_electoral_majority_message": "<h3>No candidate has won a majority in the Electoral College.</h3><p>The Democrats have an advantage in the House of Representatives, so you are probably in bad shape. However, a lot depends on how Kennedy deals with Harry Byrd. It's possible that some kind of deal will need to be struck for any candidate to get a clean majority in the House.</p>",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 107,
        "fields": {
            "first_name": "",
            "last_name": "The Hateful",
            "election": 11,
            "party": "Demonic",
            "state": "Hell",
            "priority": 3,
            "description": "'",
            "color_hex": "#441640",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 0,
            "image_url": "'",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 108,
        "fields": {
            "first_name": "Helen",
            "last_name": "Douglas",
            "election": 11,
            "party": "Democrat",
            "state": "California",
            "priority": 4,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://files.catbox.moe/wu5g64.png",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": textArray.vicePresidentSummary,
//"The woman that beat Nixon. Showing him his place in the bin, she is the American dream realized. A voice in the Senate for reason and hope. Picked for VP by you in 1956 for just the boldness of the act. For just the fear it would ignite in the establishment. For just the inspiration it would infuse into every American. Somehow, you won. You did it. The first woman Vice President. Without recompense, your legacy is forever etched into the nation's soul.<br><br>A Senator, Douglas worked with Johnson and various others and will be highly useful. She has pledged aid you in your quest to destroy the corruption in this nation. To burn every bridge. Queen Victoria took her throne, and so shall Douglas. The final touch remains, the scene set, and the resolution in sight.<br><br><span style=\"font-size:20px;font-weight: bold;font-family:times-new-roman;\">So long as she is at your right hand, you shall not be shaken.</span>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 111,
        "fields": {
            "first_name": "",
            "last_name": "The Rot",
            "election": 11,
            "party": "Republican",
            "state": "The Core",
            "priority": 7,
            "description": "'",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.ibb.co/4Vm37w7/rot.png",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<h4>They will make war on the Lamb, and the Lamb will conquer them, for he is Lord of lords and King of kings, and those with him are called and chosen and faithful.</h4>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 114,
        "fields": {
            "first_name": "'",
            "last_name": "'",
            "election": 11,
            "party": "Independent",
            "state": "South Carolina",
            "priority": 10,
            "description": "'",
            "color_hex": "#FFFF00",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 0,
            "image_url": "'",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "'",
            "candidate_score": 0,
            "running_mate": true
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 74,
        "fields": {
            "candidate": 107,
            "running_mate": 114
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 68,
        "fields": {
            "candidate": 105,
            "running_mate": 108
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 71,
        "fields": {
            "candidate": 106,
            "running_mate": 111
        }
    }
]

campaignTrail_temp.credits = "bayardgirli"

campaignTrail_temp.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
        "fields": {
            "vote_variable": 1.025,
            "max_swing": 0.02,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 3,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 35,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 11,
        "candidates": [
            105,
            106,
            107
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 11,
        "candidates": [
            105,
            106,
            107
        ]
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 11,
        "year": 1960,
        "is_premium": 0,
        "display_year": "What Happens On Earth Stays On Earth"
    }
]

jet_data = {
    "headerColor": "#000000",
    "windowColor": "#000000",
    "containerColor": "#000000",
    "innerWindowColor": "#000000",
    "bannerImageUrl": "https://i.ibb.co/tD0gJ0t/Bryan-Header-alt.webp",
    "backgroundImageUrl": "https://i.imgur.com/hct22J0.jpeg",
    "endingTextColor": "aliceblue",
    "customQuote": "Behold, I am sending you out as sheep in the midst of wolves, so be wise as serpents and innocent as doves."
}

//#startcode


corrr = '\n              <h2>On This Earth</h2><font id="wittyquote" size="4" color="white"><em>"What comes to pass does so not so much because a few people want it to happen, as because the mass of citizens abdicate their responsibility and let things be."</em></font>\n            ';
// original header: HUMILITY BEFORE HONOR
// original quote: Behold, I am sending you out as sheep in the midst of wolves, so be wise as serpents and innocent as doves.
nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#000000";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#000000";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#000000";

document.getElementById("header").src = "https://file.garden/aKoRqbLZKBsHizSA/whathappensonearth/Untitled.png";

document.body.background = "https://i.imgur.com/hct22J0.jpeg";

document.head.innerHTML += "<style>#results_container {color:aliceblue;} .inner_window_w_desc {background-color:#000000!important;}</style>";

//#endcode



campaignTrail_temp.modBoxTheme = {
    "header_color": "black",
    "header_text_color": "white",
    "description_text_color": "white",
    "description_background_color": "black",
    "main_color": "black",
    "secondary_color": "slategrey",
    "ui_text_color": "aliceblue"
}

let inputString = '';
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkInput();
    } else if (event.key.length === 1) {
        inputString += event.key;
    }
});

function checkInput() {
    if (inputString.toLowerCase() === 'whathappensonearthstaysonearth') {
        console.log("Whoever makes a practice of sinning is of the devil, for the devil has been sinning from the beginning. The reason the Son of God appeared was to destroy the works of the devil."); 
        e.candidate_json[1].fields.is_active = 1;
    } else {
        console.log("In the beginning was the Word, and the Word was with God, and the Word was God");
    }

    inputString = '';
}


function createMusicBox(playerElementId) {
    const playerContainer = document.getElementById(playerElementId);

    const musicBox = document.createElement('div');
    musicBox.id = 'music_box';

    const audio = document.createElement('audio');
    audio.id = 'audio_player';

    const trackListContainer = document.createElement('div');
    trackListContainer.id = 'playlist';

    const trackList = document.createElement('ul');
    trackList.id = 'track_list';

    const controls = document.createElement('div');
    controls.id = 'controls';

    const playPauseBtn = document.createElement('span');
    playPauseBtn.id = 'play_pause_btn';
    playPauseBtn.innerHTML = '&#9658;'; 
    playPauseBtn.style.cursor = 'pointer';

    const prevBtn = document.createElement('span');
    prevBtn.id = 'prev_btn';
    prevBtn.innerHTML = '↞';
    prevBtn.style.cursor = 'pointer';

    const nextBtn = document.createElement('span');
    nextBtn.id = 'next_btn';
    nextBtn.innerHTML = '↠'; 
    nextBtn.style.cursor = 'pointer';

    const loopBtn = document.createElement('span');
    loopBtn.id = 'loop_btn';
    loopBtn.innerHTML = '↻'; 
    loopBtn.style.cursor = 'pointer';

    const shuffleBtn = document.createElement('span');
    shuffleBtn.id = 'shuffle_btn';
    shuffleBtn.innerHTML = '⇄'; 
    shuffleBtn.style.cursor = 'pointer';

    const progressContainer = document.createElement('div');
    progressContainer.id = 'progress_container';

    const currentTime = document.createElement('span');
    currentTime.id = 'current_time';
    currentTime.textContent = '0:00';

    const progressBar = document.createElement('input');
    progressBar.type = 'range';
    progressBar.id = 'progress_bar';
    progressBar.value = 0;
    progressBar.min = 0;
    progressBar.step = 0.1;

    const duration = document.createElement('span');
    duration.id = 'duration';
    duration.textContent = '0:00';

    const volumeSlider = document.createElement('input');
    volumeSlider.type = 'range';
    volumeSlider.id = 'volume_slider';
    volumeSlider.min = 0;
    volumeSlider.max = 1;
    volumeSlider.step = 0.01;
    volumeSlider.value = 0.5;

    progressContainer.append(currentTime, progressBar, duration);
    controls.append(prevBtn, playPauseBtn, nextBtn, loopBtn, shuffleBtn);
    trackListContainer.append(trackList);
    musicBox.append(audio, progressContainer, controls, volumeSlider, trackListContainer);

    playerContainer.appendChild(musicBox);

    Object.assign(musicBox.style, {
        padding: '10px',
        border: '1px solid #333',
        borderRadius: '8px',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        maxWidth: '250px',
        fontFamily: 'Arial, sans-serif',
    });

    Object.assign(controls.style, {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '10px',
    });

    Object.assign(progressContainer.style, {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        width: '100%',
    });

    Object.assign(progressBar.style, {
        flex: 1,
    });

    Object.assign(volumeSlider.style, {
        width: '100%',
        marginTop: '10px',
    });

    const songs = [
        { title: 'The Party\'s Over', src: 'https://file.garden/aKoRqbLZKBsHizSA/whathappensonearth/The%20Partys%20Over.mp3' },
        { title: 'Somebody Buy Me a Drink', src: 'https://file.garden/aKoRqbLZKBsHizSA/whathappensonearth/Somebody%20Buy%20Me%20a%20Drink.mp3' },
        { title: 'Stars Fell On Alabama', src: 'https://files.catbox.moe/yijsra.mp3' },
        { title: 'Waiting Around to Die', src: 'https://file.garden/aKoRqbLZKBsHizSA/whathappensonearth/Waiting%20Around%20to%20Die.mp3' },
    ];
    let currentSongIndex = 0;
    let isPlaying = false;
    let isLooping = false;
    let isShuffling = false;

    function loadSong(index) {
        audio.src = songs[index].src;
        audio.load();
        updateTrackListHighlight(index);
    }

    function updateTrackListHighlight(index) {
        const trackItems = document.querySelectorAll('#track_list li');
        trackItems.forEach((item, i) => {
            item.style.fontWeight = i === index ? 'bold' : 'normal';
        });
    }

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(index);
            playSong();
        });
        trackList.appendChild(li);
    });

    function playSong() {
        audio.play();
        isPlaying = true;
        playPauseBtn.innerHTML = '&#10074;&#10074;'; 
    }

    function pauseSong() {
        audio.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = '&#9658;';
    }

    playPauseBtn.addEventListener('click', () => {
        isPlaying ? pauseSong() : playSong();
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    loopBtn.addEventListener('click', () => {
        isLooping = !isLooping;
        audio.loop = isLooping;
        loopBtn.style.color = isLooping ? 'lightblue' : '#fff';
    });

    shuffleBtn.addEventListener('click', () => {
        isShuffling = !isShuffling;
        shuffleBtn.style.color = isShuffling ? 'lightblue' : '#fff';
    });

    audio.addEventListener('ended', () => {
        if (isShuffling) {
            currentSongIndex = Math.floor(Math.random() * songs.length);
        } else {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
        }
        loadSong(currentSongIndex);
        playSong();
    });

    audio.addEventListener('timeupdate', () => {
        progressBar.value = audio.currentTime;
        currentTime.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
        progressBar.max = audio.duration;
        duration.textContent = formatTime(audio.duration);
    });

    progressBar.addEventListener('input', () => {
        audio.currentTime = progressBar.value;
    });

    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value;
    });

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }

    loadSong(currentSongIndex);
    playSong();
}


createMusicBox('theme_picker');


const stuff = document.createElement('style');


stuff.innerHTML += `
@font-face {
  font-family: 'CourierElder';
  src: url('https://file.garden/aKoRqbLZKBsHizSA/SilkRemington-SBold%20(1).woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

* {
  font-family: 'CourierElder', monospace;
}

#map_container {
    height: 90%;
    width: 75%;
    float: left;
    margin-top: 1em;
    margin-left: 1em;
    border-style: double;
    border-color: #C9C9C9;
    background-color: #C9C9C9;
}
.overlay_window h3 {
    margin: 0;
    padding: .3em 0 .1em;
    font-weight: 700;
    font-size: 1.5em;
    background-color: #000000;
    border-bottom: double;
    border-color: #C9C9C9;
    color: white;
}
.person_image {
    border-color: #000;
}
select#candidate_id {
    appearance:none;
    color: black;
    background-color: black;
    border: none;
    border-radius: 2px;
}
select#running_mate_id {
    appearance:none;
    color: black;
    background-color: black;
    border: none;
    border-radius: 2px;
}
select {
    appearance:none;
    color: white;
    background-color: black;
    border: none;
    border-radius: 2px;
}
option {
    appearance:none;
    color: black;
    background-color: white;
    border-color: black;
    border: 2px solid black;
    border-radius: 2px;
}
option:selected {
    appearance:none;
    color: black;
    background-color: white;
    border-color: black;
    border: 2px solid black;
    border-radius: 2px;
}
option:hover {
    appearance:none;
    color: black;
    background-color: white;
    border-color: black;
    border: 2px solid black;
    border-radius: 2px;
}
button {
    color: white;
    background-color: black;
    border: none;
    border-radius: 2px;
  }
button:hover {
    color: black;
    background-color: white;
    border-color: black;
    border: 2px solid black;
    border-radius: 2px;
}
form {
    align-items: center;
}
input[type="radio"] {
    appearance: none;

    border-radius: 50%;
    width: 16px;
    height: 16px;

    border: 2px solid black;
    transition: 0.2s all cubic-bezier(0.98, 0.05, 1, 1);
    margin-right: 6px;
    margin-left: 6px;
}
input[type="radio"]:checked {
  border: 6px solid black;
}
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  background: #ccc; /* unfilled track */
  border-radius: 5px;
  outline: none;
}

/* For Chrome, Edge, Safari */
input[type="range"]::-webkit-slider-runnable-track {
  height: 6px;
  background: linear-gradient(to right, black var(--range-progress, 50%), #ccc 0%);
  border-radius: 5px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: #888;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -5px;
}

/* For Firefox */
input[type="range"]::-moz-range-track {
  background: #ccc;
  height: 6px;
  border-radius: 5px;
}
input[type="range"]::-moz-range-progress {
  background: black;
  height: 6px;
  border-radius: 5px;
}
input[type="range"]::-moz-range-thumb {
  background: #888;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.inner_window_sign_display {
position: relative;
  width: 30%;
  height: 28%;
  background-color: #000;
  margin-left: auto;
  margin-right: auto;
  border-style: double;
  border-color: #C9C9C9;
}
#campaign_sign {
  background-color: #000;
  border-color: #000;
  border: none;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  height: 0%;
}
.inner_window_question h3  {
    background-color: #e8e8e8;
}
.campaign_trail_start_emphasis  {
    background-color: #919191;
}
#menu_container * {
    color: #ffffff;
    background-color: #000000;
}
#menu_container {
    color: #ffffff;
    background-color: #000000;
}
#state_result_container * {
    color: #ffffff;
    background-color: #000000;
}
#overall_result_container * {
    color: #ffffff;
    background-color: #000000;
}
#state_info h3 {
    background-color: #000000;
}
#overall_result h3 {
    background-color: #000000;
}
    .overlay_window {
  position: absolute;
  opacity: 1;
  background: #F8F8F8;
  border-style: double;
  border-color: #C9C9C9;
  height: 84%;
  width: 99.5%;
  top: 15%;
  left: 0%;
  z-index: 101;
}
  #candidate_summary {
  margin-left: 242px;
}
  #election_summary {
  padding-top: 1em;
  padding-right: 1em;
  text-align: left;
  margin-left: 332px;
}
  #election_image {
  float: left;
  margin: 1em;
  border-style: double;
  height: 69.6%;
}
  #election_description_window {
  background-color: #fff;
  height: 80%;
  margin: 1em;
  border-style: double;
  border-color: #000;
}
  #running_mate_pic {
  filter: grayscale(100%);
}
`;

document.head.appendChild(stuff);

const summaryObserver = new MutationObserver((mutations, observer) => {
  const summary = document.getElementById("candidate_summary");
  if (!summary) return;

  const list = summary.querySelector("ul");
  if (!list) return;

  observer.disconnect();

  list.remove();
  console.log("Removed candidate summary list.");

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});

summaryObserver.observe(document.body, {
  childList: true,
  subtree: true,
});

const runningMateObserver = new MutationObserver((mutations, observer) => {
  const summary = document.getElementById("running_mate_summary");
  if (!summary) return;

  const list = summary.querySelector("ul");
  if (!list) return;

  observer.disconnect();

  list.remove();
  console.log("Removed running mate summary list.");

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});

runningMateObserver.observe(document.body, {
  childList: true,
  subtree: true,
});
const tooltips = [
  { word: "Eleanor Roosevelt", text: "Found guilty of treason on December 15th, 1934<br><br>Sentence carried out on January 3rd, 1935" },
  { word: "...(continued on next page.)", text: "page no.1 of no.67" },
  { word: "Nazi German Government", text: "Dissolved est. December 1945" },
  { word: "Pacific War", text: "January 1942—October 1945" },
  { word: "JOHN F. KENNEDY", text: "U.S. Senator<br>Supported McMath in the Primary<br>Passed over for Vice President." },
  { word: "LEON KEYSERLING", text: "Secretary of the Treasury<br>Fiscal Liberal" },
  { word: "Silent Coup", text: "Casualties:<br>47 Killed, 324 Wounded<br>" },
  { word: "Senator Russell", text: "Southern, Conservative Senate leader<br>Ardent Segregationist<br>Crafted an agreement with the Military in 1934 which allowed some former Roosevelt allies to be absolved of guilt, with conditions." },

];

$("#inner_window_1 h3").css("text-align", "left").text(``);//2002 RELEASE UNDER TRANSPARENCY ACT OF 1996`);, , 

$("#inner_window_1").css("width", "50%")
$("#inner_window_1").css("margin-left", "240px")


document.getElementById("inner_window_1").children[1].innerHTML = `<h3 style='margin-left: 10px;text-align: left;'>Memorandum for the Record<br><br>Subject:       Political Report</h3><br><h3 style='margin-left: 200px;text-align: left;'>Job # 32-153<br>File # 19-354-24<br>Inclusive Dates: 50 thru 65<br>Volumes: 37<br></h3><p style='text-indent:50px;text-align:left;'>1. <span style='text-decoration: underline;'>Description</span>:</p><p style='text-align: left;text-indent:55px;'>This project concerns the american domestic political situation, particularly oriented around the presidency of Sidney McMath and vice presidency of Helen Douglas along with ensuing events. This report covers several important events and topics, including: the 1957 inauguration, the fiscal acts, the anti-corruption efforts, the FBI internal organization, the cuba situation, the domestic military intervention, and the death of general MacArthur.<p style='text-align: left;text-indent:55px;'>(Continued. . .)</p>`;

document.getElementById('game_start').innerHTML = 'Open Transcripts';

const style = document.createElement("style");
style.textContent = `
.mytooltip {
  position: relative;
  display: inline-block;
  cursor: help;
  background-color: gray;
  border-radius: 1px;
  padding: 0px 0px;
}

  .mytooltip .mytooltiptext {
  visibility: hidden;
  width: 300px;
  background-color: white;
  color: black;
  text-align: center;
  border: 1px solid black;
  border-radius: 1px;
  padding: 3px;
  position: absolute;
  z-index: 99;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}
  .mytooltip:hover .mytooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;
document.head.appendChild(style);

function applySimpleTooltips(container = document.body) {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  for (const node of textNodes) {
    if (node.parentNode.closest(".mytooltip")) continue;

    let replaced = node.nodeValue;
    let changed = false;

    for (const { word, text } of tooltips) {
      const regex = new RegExp(`\\b${word}\\b`, "g");
      if (regex.test(replaced)) {
        replaced = replaced.replaceAll(regex,
          `<span class="mytooltip">${word}<span class="mytooltiptext">${text}</span></span>`
        );
        changed = true;
      }
    }

    if (changed) {
      const span = document.createElement("span");
      span.innerHTML = replaced;
      node.parentNode.replaceChild(span, node);
    }
  }
}

applySimpleTooltips();

const observer = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    for (const addedNode of mutation.addedNodes) {
      if (addedNode.nodeType === Node.ELEMENT_NODE) {
        applySimpleTooltips(addedNode);
      }
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});



// End of code //











