

var numT = 0

var arthurStatus = `MacArthur stands as the central figure of an organized American elite`
var hooverStatus = `Hoover stands as a major threat to your goals`
var rockefellerStatus = `Rockefeller stands as an American oligarch`
var hughesStatus = `Hughes is a threat`
const gameState = {
    "NeccessaryVars": {
        "pk": "Bureau",
        "model": "Functionality",
        "Variables": {
            "gameEnabled": true,
            "PoliticalCapital": 0,
            "HelenPower": 0,
            "MilitaryPower": 10,
            "FBIPower": 10,
            "SenatePower": 0
        },
        "QuestionPictureHolder": `<img style='margin-top: -18px;width: 254px;height: 105px;object-fit: cover;object-position: top;border-style: double;border-color: white;'src='https://i.ibb.co/9HtQhBDP/373c5cbe-a4ad-4689-a529-3b2674fd37e4-1024x671.jpg'></img>`
    }
}

const textArray = {
    qtxt: {
        SecretMeeting: `Chief of Staff James Rowe, General George C. Marshall, Attorney General Clark Clifford, and Vice President Helen Douglas sit around a table with you in St. Louis, Missouri. So far, there are assurances that you will take office without impediment. Nonetheless, you are not safe, and your inner circle sits here to discuss the next steps.`,
        InaugurationBall: `Your inaugural speech has just concluded, and now the politicans, the generals, and the civilian elites have been invited to the inaugural ball. An opportunity to cozy up to several figures here remains as an important first step in your administration's plans.`,
        Helen: `Sitting in the oval office, you see Helen enter the room quietly and take a seat. You get into a small discussion on coordination, and furthering the administration. Numerous aspects of governance and politics remains obscure and threatening, and Helen needs to be set to appropriate tasks.`,
        Press: `You stand behind the door, with your press secretary answering some questions right past it. While maintaining safety, you need to prepare to make a number of statements on your next actions as President and subduing any harsh reaction.`,
        MilitaryContact: `An invitation for a meeting with general Macarthur has been not only expected, but necessary. He, along with several others, sits across from you in the diplomatic room. His jaw seems to be pushing itself closed and he looks at and around you.`,
        EisenhowerPotential: `Matthew Rigeway stays in the room for just a moment longer than MacArthur and quietly speaks, asking for a meeting later that day. He arrives then, and begins to make an interesting proposition.`,
        SenateContact: `While the martial and business classes move in darkness to decide policy and action, the senate and house still stand as the legitimizing institutions of the nation, with senate approval considered vital following the silent coup. Now, the leaders of the senate consist of a few politicians who have managed to keep some trppings of power within the legislature. Consolidating the political class to your side is perhaps the most important goal in preventing the worst case scenario.`,
        SpendingProposal: `What amount of fiscal freedom do you want in terms of funding, whiuch will cost influence prolly, you get to do stuff though`,
        PartyBosses: `LYNDON B. JOHNSON: You have to deal diplomatically with the democratic party bossess who are corrupt, or reject them`,
        CorruptionInvestigations: `Do we begin setting up anti-corruption activities, and planning groundwork? This is all very secretive and if you get caught there WILL be consequences`,
        SenateRelations: `Which parts of the senate do we want to ally with primarily? We can go with the progressives, (dangerous) republicans (less dangerous) or the segregationists (not really) the conservatives in general along with segregationists (fairly safe)`,
        ForeignPolicy: `How will you interact with foreign policy? the Generals on the far right were 'isolationist' in that they were focused on the continent, so they push for against cuba hard.`,
        FaubusGuard: `Faubus, your home state, has violated brown v board, and you need to decide what to do with the national guard, in terms of your allies, while also not appearing weak, and also not angering the army`,
        SpendingDecisions: `Choose what parts of government to fund the most, try not to make the army mad, try to expand your own power here.`,
        MarshallMeeting: `He updates you on the current sway of the military, and what you should focus on. Lil biased maybe, cute. Also he underscores the need to make legislation the military will like.`,
        InfrastructureProposal: `Made in response to the last question. What will our infrastructure proposal be? This is also a meeting with eisenhower to get the army on board, and youy need to (depending on your decisions) need to accomodate stupid miliutary considerations for the bill like the autobahn did`,
        CoupMemo: `SIDNEY MCMATH: YOu need to have a memo for what happens in the coup`,
        Hoover: `We need to oust hoover, and we need to make a decision as to how that will occurr, and what our first step will be.`,
        NASA: `Depending on what happens, this may be possible as a response to the soviets. You can use this to distractthe military, or focus on making it civilian. Can we found nasa? Should we?`,
        HughesMeeting: `You meet with howard hughes here, and he really emphasizes the civilian control he and the industrialists have. Also he offers to make a deal with you to attain more power for himself, al;liance with satan.`,
        StateOfTheUnion: `You deliver a state of the union address, to hopefully appeal to certain senators for your stuff. Try not to anger the military.`,
        HelenTwo: `Following the state of the union, you need to determine what to do with helen and her abilities, and what she should focus on.`,
        CubanPolicy: `Cuba is currently heavily influenced by the military and industrialists, but your advisors sense weakness in the local government, and potential for insurrection. You make a vital decision here.`,
        MilitaryDilemma: `Military basically say fuck you`,
        InfrastructureBill: `Final Passing of infrastructure, you see how it does. May get chopped up due to senators`,
        InternalImprovements: `Decide whether to sign or not sign it(prolly idk yet)`,
        CubaResult: `What happens in cuba? If the military is engaged in a full-on war, they are weker. If it falls, they are pissed and you might be immediately couped. iF IT is easily crushed, also maybe coup but probably just a boosted military.`,
        RemoveHoover: `Here is where you attempt to remove hoover, may end in death (maybe coup? prolly death)`,
        CorruptionTaskForce: `Do we establish a mandated anti-corruption task force? Requires either approval from the military, or a weak military.`,
        FiscalDecision: `You need to make a decision about some fiscal actions`,
        ArrestMacArthur: `You Attempt to Arrest MacArthur`,
        HiddenFiles: `There are files about stuff hidden like blackmail do you use it`,
        RestorationBureacrats: `What are our plans to restrucutre the bureacracy? We need a list of people to replace and repair the current one, as well as organizational structure in broad strokes`,
        RestorationBill: `We will begin drafting a bill to fully restore civillian governance.`,
        RestorationAdditions: `People want to add a full civil rights bill to the restoration bill`,
        RestorationCorruption: `People want to add a Anti-Corruption Measures outside of the executive oiffice`,
        MilitaryFinale: `Curtis LeMay burst in, shoots your dog, and arrests you and all of congres. Massive military crackdown.`,
        CivilRightsVote: `You put the restoration bill to a vote. This determines whether your admin has a full return to civilian government, or if its like a weird hybrid democratizing slowly with incentive to backslide (PROBABLY ENDS IN A NIXON DICTATOR)`,
        FinalHelenDecision: `Helen need to know what to do, maybe run for your successor, maybe not, who knows.`

    },
    atxt: {
        basic: `basic`,
        Vigor: `You focus here on being highly combative towards the intitutions anbd very ambitious, and highlight major changes`,
        Procedural: `You focus here on being very procedural and cautious, and very not-rocky boat`,
        FocusHelen: `HELEN DOUGLAS: I spoke with Jack Kennedy and he seems to be interested in (. . .) However, I am unsure of how the votes would fall there (. . .)`,//`<img src='https://files.catbox.moe/89gy95.png' style='width:3%;height:3%;'>:Helen Douglas Speaking`,
        FocusClark: `CLARK CLIFFORD: I can bring out the reports on our planned legal efforts (. . .) Our legal appointments still need to be contacted and presented to congress (. . .)`,//`<img src='https://files.catbox.moe/8xkz7g.png' style='width:3%;height:3%;'>:Clifford Clark Speaking`,
        FocusGeorge: `GEORGE MARSHALL: I talked with some (. . .) We have no indicators that a coup is being planned as of now (. . .) I hear that there are some concerns among younger (. . .)`,//`<img src='https://files.catbox.moe/9jvuvm.png' style='width:3%;height:3%;'>: George Marshall Speaking`,
        FocusJames: `JAMES ROWE: I had a discussion recently with, ah, Truman, and he seems to (. . .) Our cabinet seems to be in order but I am unsure that (. . .)`,//`<img src='https://files.catbox.moe/vxfgpu.png' style='width:3%;height:3%;'>:James Rowe Speaking`,
        SpeakEisenhower: `DWIGHT EISENHOWER: Mr. President, I hope you have enjoyed your inauguration (. . .) Yes, I just spoke to Vice President Douglas, (. . .) I don't want to interupt, however, I think we should sit and have a discussion in private (. . .)`,
        SpeakHughes: `HOWARD HUGHES: Ah, I am glad I was invited Mr. President! (. . .) Your campaign last November was very interesting (. . .) I hope we can maintain a positive relationship, no? Maybe we should have a chat, how is that? (. . .)`,
        SpeakFaubus: `ORVAL FAUBUS: Well, it seems Arkansas has come far (. . .) I'm glad to have been a friend of yours since your election as an attorney (. . .) Maybe we could have a drink, for Arkansas sake? (. . .)`,
        SpeakKennedy: `JOHN F. KENNEDY: Mr. President, I had a chat with Rowe just a moment ago. I apologize again for not joining your cabinet, but I am deeply honored you considered me. I'd like to pique your interest in some subjects though (. . .)`,
        HelenReduced: `SIDNEY MCMATH: Helen I just think that we need to stay focused on the important matters, stay consistent. We can't get distracted with any of these flourishes (. . .)`,
        HelenExpanded: `SIDNEY MCMATH: We were elected to get far in this office, and I will need as much of your effort as you can put in (. . .) Keeping the politicans and public on our side is, ah, your priority number one from now on (. . .)`,
        MacArthurMeeting: `DOUGLAS MACARTHUR: Mr. President I think we should, evaluate, our interests (. . .) My goals have always been to uphold and preserve our country, and I want to make sure we have that in common, sir (. . .) You understand my position, yes? (. . .)`,
        RidgewayReject: `SIDNEY MCMATH: YOu reject a deal offered by matthew ridgeway to begin courting the generals with promises, as a less corrupt method, but lose out on a strong chance to oppose MacArthur`,
        RidgewayDeal: `SIDNEY MCMATH: You agree to the deal, and cautiously agree to allywith him.`,
        RidgewayCompromise: `SIDNEY MCMATH: You don't agree to a "deal" but you convince him that you may down the road, and would like help against hoover in the short term.`,
        PartyBossesBasic: `SIDNEY MCMATH: YOu gotta comproimise heewe`,
        LargeSpending: `LEON KEYSERLING: (Secretary of the treasury) SPeaks about a substantial increase in spending and revenue measures, to give available resources.`,
        ModerateSpending: `SIDNEY MCMATH: Supports a moderate increase in spending, to provide ample resources while not taking too large of an amount, smaller margins of error.`,
        NoIncrease: `LYNDON B. JOHNSON: He talks about not ruffling feathers, and making sure you can';t be pinned down on anything. Proviudes very little room for error, some public dienthusasm, but avoids some issues around the military later on.`,
        BeginIntelGathering: `JAMES ROOSEVELT: He talks about beginning to build a network against hoover using OSS veterans who are younger and broadly discontented, also invests alot of resources into it politically-ish still secret.`,
        MilitaryDilemmaBasic: `no wtf`,
        DelayIntelGathering: `SIDNEY MCMATH: You talk about it being very risky and not wanting to provoke Hoover, while encouraging pushing the military more.`,
        QuietIntelGathering: `VIRGINIA HALL: She talks about quietly getting information, and basically doing a single small team to get information and prepare. She is doing some clandestine shit. May cause an incident.`,
        SenateAllyshipProgressives: `SIDNEY MCMATH: Senator Johnson, yes, .`,
        SenateAllyshipRepublicans: `SIDNEY MCMATH: everret dickson`,
        SenateAllyshipSegregationists: `SIDNEY MCMATH: Senator Russell, Here you talk about basically selling your ideals to gain the south, which is the base of the military, to try and make coup's less likely. Basically impossible to make america reformed fully, but makes it exceedingly difficult for a somewhat competent handling of the military to coup you.`,
        CoupMemoBasic: `Dragh you have to get a memo where they are plotting guy!`,
        ForeignPolicyHardline: `DEAN ACHESON: (Secretary of State) He talks about how regardless of how we feel about the army, it is vital to ensure america remains secure from things like communism and able to influence places like europe, he strongly supports a hardline on foreign policy`,
        ForiegnPolicySoftline: `HELEN DOUGLAS: SHE talks about how we can't let our project get muddied aborad, and how we need to make sure the military doesn't acquire more power and control through atempts to project power.`,
        ForeignPolicyThirdWay: `SIDNEY MCMATH: You talk about maintaining the current course, and not taking any decisive stance, potentially making you unprepared later, but increasing flexibility, and criticism.`,
        FaubusNationalGuard: `SIDNEY MCMATH: We need to immediately send the national guard and restore order to the state. Very risky, outright coup if you have EXCEEDINGLY low military relations. Could end with a refusal`,
        FaubusNegotiation: `SIDNEY MCMATH: We need to go there and negotiate personally. We will eventually pull the stops, but we aren't making a show of force.`,
        FaubusIgnoring: `SIDNEY MCMATH: We cannot focus on this, just let him deny it. We cannot take a risk here. This is a very conservative stance, and is usually onl;y chosen if you previously supported segregation.`,
        FundingDecisionMilitary: `DEAN ACHESON: He says we need to fund the military to maintain relations, and put other things as secondary.`,
        FundingDecisionCivilian: `HELEN DOUGLAS: She says we need to pass a bill that will defund the military to an extent, and fund social services. Extremely risky, may break agreements with the military.`,
        FundingDecisionIndustrial: `JAMES ROWE: talks sbout providing a focus to contracts and industrial development to hopefully gain allies there to later contest the military.`,
        GeorgeResponse: `GEORGE MARHSALL: He gives feedback. This will be dependent. Feedback talks about potential bill in next question`,
        InfrastructureDiscussionDwight: `EISENHOWER: The military needs x y and z to support this bill, and also some other stuff`,
        InfrastructureDiscussionJohnson: `LYNDON BAINES JOHNSON: We will need aspect ABC top support this bill.`,
        InfrastructureDiscussionHelen: `We have to include aspect F G and H to get this bill to support our base, and...`,
        StepAgainstHoover: `Depends on what path you do, could be severral things. Could be an attack from hoover 2..`,
        CivilianNASA: `SIDNEY MCMATH: This science stuff... we gotta keep it civilian! its for the benefit of all! we can oppose the soviets!!.`,
        MilitaryNASA: `JAMES ROWE: We will give it to the military, so they can get distracted on the project.`,
        HowardHughesDeal: `HOWARD HUGHES: You meet with Howard hughes who offers a deal with you among industrialists to take control.`,
        HowardHughesReject: `SIDNEY MCMATH: Im not interested.`,
        SotUStrong: `SIDNEY MCMATH: You make a strong empowered speech, very provacative to the military`,
        SotUCautious: `SIDNEY MCMATH: You make a subdued, procedural speech.`,
        SotUAssassination: `You get shot and fucking die. One answer choice.`,
        HelenSenateAssignment: `SIDNEY MCMATH: You send helen to go work with the senate on your influence.`,
        HelenForeignAssignment: `SIDNEY MCMATH: You send out helen to interact with foreign leaders and diplomats.`,
        StrengthenCubaGarrison: `DEAN ACHESON: We need to reinforce cuba and establish further aid there for our soldiers.`,
        MaintainCubaGarrison: `HELEN DOUGLAS: We need to not increase our involvement, and not create any opporunities for the military to start a conflict they could use to strengthen their position.`,
        InfrastructurePass: `Here it will show the final infrastructure bill and its contents, and who influenced it.`,
        ImprovementsSigningYes: `You dont sign the final infrastructure act`,
        ImprovementsSigningNo: `you do sign the final infrastructure act`,
        CubaRevoltResponseStrong: `DEAN ACHESON: We need to send 10 billion men to die in cuba`,
        CubaRevoltResponseWeak: `HELEN DOUGLAS: What if we didnt kill people (Gets couped like a boss.)`,
        HooverRemovalSuccessful: `Yay you did it`,
        HooverRemovalFailure: `Extremely antagonized hoover and like 99% chance of coup`,
        HooverRemovalUnattempted: `Permanent debuff and potential weakness but also maybe neccesary`,
        CommandeerFBI: `SIDNEY MCMATH: You work to commandeer the FBI to serve your own purposes`,
        WeakenFBI: `SIDNEY MCMATH: You work to fuck over the FBI permanently.`,
        FiscalDecrease: `LBJ: You increase military snadnfew its a spending thingy fuck you`,
        ArrestMacArthurSuccess: `JAMES ROWE: You Succeed`,
        ArrestMacArthurFailure: `JAMES ROWE: You Fail`,
        HiddenFilesBasic: `The hidden files stuff`, 
        BureaucracyPlan: `try`,
        RepublicBill: `try`,
        CivilRightsDraft: `try`,
        CorruptionDraft: `try`,
        SuccessfulCoup: `You fucking die`,
        RestorationVote: `try`,
        HelenFinalDecisionPositive: `You succeed with it and emnpower helebn`,
        HelenFinalDecisionNegative: `You fuck over helen`
    },
    ftxt: {
    },
    etxt: {
    },
    otxt: {
        DefaultCharacterDesc:
            `
                thr ashsh shshshhs thra shshs hsh  shh sthra sh shshshs hh sthras hshs hshshh sthras hshshs hshh sthrashs hshshshhsthr ashshshshshhsthras hshshshshh sthrashshs hshshhst hrashshshs hshhsthra shshshshs</p>
            `,
        MacArthurCharacterDesc:
            `
                General Douglas MacArthur is a five-star general and focal point of discontent within the nation. He started his career in 1903, and aided in organizing the Silent Coup. Today, ${arthurStatus}.
            `,
        HooverCharacterDesc:
            `
                Hoover commands the executive branch elite. He organized the brief investigation into former President Franklin D. Roosevelt. Hoover's task is to keep your ambitions mild. Currently, ${hooverStatus}.
            `,
        RockefellerCharacterDesc:
            `
                During the 1930s, the Rockefeller family crafted a financial system under their private ownership. Following the government seizure of J.P. Morgan & Co, they took up a key role in American Finance. ${rockefellerStatus}.
            `,
        HughesCharacterDesc:
            `
                Howard Hughes is an industrialist. As a strong ally of the Armed Forces in the Second World War, he acquired significant industrial assets to manage war production. He is vital to American economics. Currently, ${hughesStatus}.
            `
    }

}
let helenAssent = false
let jesusLevel = 1
// constructs endings based on header and pages

const ledger = document.createElement("div");
ledger.id = "Ledger";
ledger.style.backgroundColor = "#000";
ledger.style.width = "300px";
ledger.style.height = "450px";
ledger.style.position = "absolute";
ledger.style.left = "1050px";
ledger.style.top = "275px";
ledger.style.borderStyle = "double";
ledger.style.borderRadius = "4px";
ledger.style.borderWidth = "4px";
ledger.style.borderColor = "#fff";
ledger.style.padding = "7px";
ledger.style.cursor = 'move';
ledger.innerHTML =
    `
<h3 style='font-size: 20px;color: white;text-align: center;'>CLASSIFIED<br><br>═════════════════════</h3>

<div style="white-space: normal;overflow-wrap: break-word; display: flex; justify-content: space-around; gap: 20px; height: 335px; width: 306px; overflow-y: scroll; color: white;">
    <div>
        <div style='display:flex;height:120px; overflow-x: hidden;overflow-y:hidden;'>
        <img src='https://github.com/ippstuff436/On-This-Earth/blob/main/sources/TheConspiracy.png?raw=true' style='width:90px;height:120px;'>
        <div style="width: 215px;">
        <p style='display: block;margin-top: 4px;margin-bottom: 4px;margin-left: 2px;margin-right: 2px;'>
        <span style="display: inline-block; font-size: 1.5em; font-weight: bold; margin: 0.5em 0;">The Conspiracy</span>
        <br>
        <br>
        <p>The Conspiracy</p>
        </div>
        </div>
        <br>
        <div style='display:flex;height:120px;overflow-x: hidden;overflow-y:hidden;'>
        <img src='https://github.com/ippstuff436/On-This-Earth/blob/main/sources/TheOligarchy.png?raw=true' style='width:90px;height:120px;'>
        <div style="width: 215px;">
        <p style='display: block;margin-top: 4px;margin-bottom: 4px;margin-left: 2px;margin-right: 2px;'>
        <span style="display: inline-block; font-size: 1.5em; font-weight: bold; margin: 0.5em 0;">The Oligarchy</span>
        <br>
        <br>
        <p>The Oligarchy</p>
        </div>
        </div>
        <br>
        <br>
        <div style='display:flex;height:120px; overflow-x: hidden;overflow-y:hidden;'>
        <img src='https://github.com/ippstuff436/On-This-Earth/blob/main/sources/TheRepublic.png?raw=true' style='width:90px;height:120px;'>
        <div style="width: 215px;">
        <p style='display: block;margin-top: 4px;margin-bottom: 4px;margin-left: 2px;margin-right: 2px;'>
        <span style="display: inline-block; font-size: 1.5em; font-weight: bold; margin: 0.5em 0;">The Republic</span>
        <br>
        <br>
        <p>The Republic</p>
        </div>
        </div>
        <br>
        <br>
        <div style='display:flex;height:120px;overflow-x: hidden; overflow-y:hidden;'>
        <img src='https://github.com/ippstuff436/On-This-Earth/blob/main/sources/TheExecutive.png?raw=true' style='width:90px;height:120px;'>
        <div style="width: 215px;">
        <p style='display: block;margin-top: 4px;margin-bottom: 4px;margin-left: 2px;margin-right: 2px;'>
        <span style="display: inline-block; font-size: 1.5em; font-weight: bold; margin: 0.5em 0;">The Executive</span>
        <br>
        <br>
        <p>The Executive</p>
        </div>
        </div>
        <br>
        <br>
        <div style='display:flex;height:120px;overflow-x: hidden; overflow-y:hidden;'>
        <img src='https://github.com/ippstuff436/On-This-Earth/blob/main/sources/TheWorkers.png?raw=true' style='width:90px;height:120px;'>
        <div style="width: 215px;">
        <p style='display: block;margin-top: 4px;margin-bottom: 4px;margin-left: 2px;margin-right: 2px;'>
        <span style="display: inline-block; font-size: 1.5em; font-weight: bold; margin: 0.5em 0;">The Workers</span>
        <br>
        <br>
        <p>The Workers</p>
        </div>
        </div>
    </div>
</div>
`;

document.querySelector('.container').appendChild(ledger);

function dragElement(elmnt) {

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.addEventListener('mousedown', dragMouseDown);
    function dragMouseDown(o) {
        if (["SELECT", "INPUT", "TEXTAREA"].includes(o.target.tagName)) return;

        o.preventDefault();
        pos3 = o.clientX;
        pos4 = o.clientY;
        document.addEventListener('mousemove', elementDrag);
        document.addEventListener('mouseup', closeDragElement);
        document.body.style.userSelect = "none";
    }


    function elementDrag(o) {
        o.preventDefault();
        pos1 = pos3 - o.clientX;
        pos2 = pos4 - o.clientY;
        pos3 = o.clientX;
        pos4 = o.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.removeEventListener('mousemove', elementDrag);
        document.removeEventListener('mouseup', closeDragElement);
        document.body.style.userSelect = "auto";
    }
}

dragElement(document.getElementById("Ledger"));



construct = (a = 1) => {
    e.page = e.page + a < e.pages.length ? e.page + a : 0
    let html = e.header;
    html += e.pages[e.page] + "<br>";
    if (e.page > 0) {
        html += `<button onclick='endingConstructor(a = -1)'>Back</button>`
    }
    if (e.page < e.pages.length - 1) {
        html += `<button onclick='endingConstructor(a = 1)'>Next</button>`
    }

    if (e.image == true)
        setTimeout(() => {
            candImg = $(".person_image")[0]
            if (candImg) {
                candImg.remove()
                $("#final_results_description")[0].style = `
            text-align:left;
            width: 70%;
            text-overflow: ellipsis;
            display: block;
            margin-left: auto;
            margin-right: auto;
          `
            }
        }, 10)
    else if (e.image)
        setTimeout(() => {
            candImg = $(".person_image")[0];
            if (candImg)
                candImg.src = e.image;
        }, 10)

    return html;
}

endingConstructor = (a = 1) => {
    $("#final_results_description")[0].innerHTML = construct(a);
}

// ENDINGS -- this is slightly more reliable than the ending code method

e.multiple_endings = true;

endingPicker = (out, totv, aa, quickstats) => {
    console.log(quickstats[0])
    const diaryOfEnoch = ``;

    const style = document.createElement('style');
    style.textContent = diaryOfEnoch;
    document.head.appendChild(style);

    console.log(aa)
    e.pages = []
    e.header = "";
    e.executable = []
    console.log(e.final_state_results)
    var chat = e.final_state_results.filter(item => item.abbr === "AR")
    var cat = e.final_state_results.filter(item => item.abbr === "KY")
    orderID = [aa[0].candidate, aa[1].candidate, aa[2].candidate];
    var playerEV = quickstats[0];
    var playerID = 0;

    for (let i = 0; i <= 3; i++) {
        if (playerEV == aa[i].electoral_votes) {
            playerID = aa[i].candidate;
            break;
        }
    }

    var endingstuff = {
        "Win Type": (function (val) { val >= 270 ? "Win" : "Loss" })(playerEV),
        "End Conditions": true,
    }

    const endingArraySlideOne = [
        {
            "pk": "Placeholder",
            "song": `https://file.garden/aKoRqbLZKBsHizSA/whathappensonearth/Little%20Girl%20Blue%202013%20-%20Remaster.mp3`,
            "conditions": {
                "Win Type": (function (val) { val >= 270 ? "Win" : "Loss" })(playerEV),
                "End Conditions": true,
            },
            "ending text": `ERROR (Actually a placeholder)`
        }
    ]
    const endingArraySlideThree = [
        {
            "pk": "Placeholder",
            "song": `https://file.garden/aKoRqbLZKBsHizSA/moonbeam/Hail%20to%20the%20Chief%20-%20The%20President's%20Own%20United%20States%20Marine%20Band.mp3`,
            "conditions": {
                "Win Type": (function (val) { val >= 270 ? "Win" : "Loss" })(playerEV),
                "End Conditions": true,
            },
            "ending text": `placeholder`
        }
    ]

    //var SaintMary = endingArraySlideOne.filter(ending => Object.entries(endingstuff).every(([key, value]) => key in ending.conditions ? ending.conditions[key] === value : true));
    var SaintMary = endingArraySlideOne.filter(ending => Object.entries(endingstuff).every(([key, value]) => key in ending.conditions ? (Array.isArray(ending.conditions[key]) ? ending.conditions[key].includes(value) : ending.conditions[key] === value) : true));

    //setMusic(SaintMary[0]["song"]);
    e.pages.push(SaintMary[0]["ending text"]);

    var SaintPaul = endingArraySlideTwo.filter(ending => Object.entries(endingstuff).every(([key, value]) => key in ending.conditions ? (Array.isArray(ending.conditions[key]) ? ending.conditions[key].includes(value) : ending.conditions[key] === value) : true));

    //setMusic(SaintPaul[0]["song"]);
    e.pages.push(SaintPaul[0]["ending text"]);

    var SaintJosephine = endingArraySlideThree.filter(ending => Object.entries(endingstuff).every(([key, value]) => key in ending.conditions ? (Array.isArray(ending.conditions[key]) ? ending.conditions[key].includes(value) : ending.conditions[key] === value) : true));

    //setMusic(SaintJosephine[0]["song"]);
    e.pages.push(SaintJosephine[0]["ending text"]);

    return construct(0);
}

var numT = 0

e.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": "default",
        "fields": {
            "effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": null,
            "likelihood": 1
        }
    }
]
e.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": "default",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "default",
            "description": null
        }
    }
]



const QuestionSlotOne = [
    {
        "model": "campaign_trail.question",
        "pk": "Opening Meeting",
        "fields": {
            "effects": { "QuestionPictureHolder": `<img style='margin-top: -18px;width: 254px;height: 105px;object-fit: cover;object-position: top;border-style: double;border-color: white;'src='https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/truman/photographs/82/82-57-51.jpg'>` },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.SecretMeeting,
            "likelihood": 1
        }
    }
]
const QuestionSlotTwo = [
        {
        "model": "campaign_trail.question",
        "pk": "Inaugural Ball",
        "fields": {
            "effects": { "QuestionPictureHolder": `<img style='margin-top: -18px;width: 254px;height: 105px;object-fit: cover;object-position: top;border-style: double;border-color: white;'src='https://d1y822qhq55g6.cloudfront.net/default/_superImage/WHHAJournal270035.jpg'>` },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.InaugurationBall,
            "likelihood": 1
        }
    }
];
const QuestionSlotThree = [
    {
        "model": "campaign_trail.question",
        "pk": "Helen",
        "fields": {
            "effects": { "QuestionPictureHolder": `<img style='margin-top: -18px;width: 254px;height: 105px;object-fit: cover;object-position: top;border-style: double;border-color: white;'src='https://calisphere.org/clip/500x500/26094/ee95fd0d82ec4203d3051e5d25116d89'>` },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.Helen,
            "likelihood": 1
        }
    }
];
const QuestionSlotFour = [
    {
        "model": "campaign_trail.question",
        "pk": "Press Briefing",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.Press,
            "likelihood": 1
        }
    }
];
const QuestionSlotFive = [

    {
        "model": "campaign_trail.question",
        "pk": "Military Contact",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.MilitaryContact,
            "likelihood": 1
        }
    }
];
const QuestionSlotSix = [
    {
        "model": "campaign_trail.question",
        "pk": "Senate Contact",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.SenateContact,
            "likelihood": 1
        }
    },
];
const QuestionSlotSeven = [
        {
        "model": "campaign_trail.question",
        "pk": "Eisenhower Potential",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.EisenhowerPotential,
            "likelihood": 1
        }
    },
];
const QuestionSlotEight = [
        {
        "model": "campaign_trail.question",
        "pk": "Marshall Meeting",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.MarshallMeeting,
            "likelihood": 1
        }
    },
];
const QuestionSlotNine = [
            {
        "model": "campaign_trail.question",
        "pk": "Party Relations",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.PartyBosses,
            "likelihood": 1
        }
    },
];
const QuestionSlotTen = [

    {
        "model": "campaign_trail.question",
        "pk": "Spending Proposal",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.SpendingProposal,
            "likelihood": 1
        }
    },
];
const QuestionSlotEleven = [
        {
        "model": "campaign_trail.question",
        "pk": "Spending Decisions",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.SpendingDecisions,
            "likelihood": 1
        }
    },
];
const QuestionSlotTwelve = [
       {
        "model": "campaign_trail.question",
        "pk": "Corruption Investigations",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.CorruptionInvestigations,
            "likelihood": 1
        }
    },
];
const QuestionSlotThirteen = [
        {
        "model": "campaign_trail.question",
        "pk": "Hughes Meeting",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.HughesMeeting,
            "likelihood": 1
        }
    },
];
const QuestionSlotFourteen = [
                {
        "model": "campaign_trail.question",
        "pk": "Hoover",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.Hoover,
            "likelihood": 1
        }
    },
];
const QuestionSlotFifteen = [
            {
        "model": "campaign_trail.question",
        "pk": "Faubus Guard",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.FaubusGuard,
            "likelihood": 1
        }
    },
];
const QuestionSlotSixteen = [
        {
        "model": "campaign_trail.question",
        "pk": "Infrastructure Proposal",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.InfrastructureProposal,
            "likelihood": 1
        }
    },
];
const QuestionSlotSeventeen = [
        {
        "model": "campaign_trail.question",
        "pk": "Infrastructure Bill",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.InfrastructureBill,
            "likelihood": 1
        }
    },
];
const QuestionSlotEighteen = [
        {
        "model": "campaign_trail.question",
        "pk": "Foreign Policy",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.ForeignPolicy,
            "likelihood": 1
        }
    },
];
const QuestionSlotNineteen = [


        {
        "model": "campaign_trail.question",
        "pk": "NASA",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.NASA,
            "likelihood": 1
        }
    },
];
const QuestionSlotTwenty = [
            {
        "model": "campaign_trail.question",
        "pk": "State Of The Union",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.StateOfTheUnion,
            "likelihood": 1
        }
    },
];
const QuestionSlotTwentyOne = [

    {
        "model": "campaign_trail.question",
        "pk": "Cuban Policy",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.CubanPolicy,
            "likelihood": 1
        }
    },
];
const QuestionSlotTwentyTwo = [
        {
        "model": "campaign_trail.question",
        "pk": "Coup Memo",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.CoupMemo,
            "likelihood": 1
        }
    },
];
const QuestionSlotTwentyThree = [
    
    {
        "model": "campaign_trail.question",
        "pk": "Cuba Result",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.CubaResult,
            "likelihood": 1
        }
    },
];
const QuestionSlotTwentyFour = [


        {
        "model": "campaign_trail.question",
        "pk": "Helen Two",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.HelenTwo,
            "likelihood": 1
        }
    },
];
const QuestionSlotTwentyFive = [
            {
        "model": "campaign_trail.question",
        "pk": "Remove Hoover",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.RemoveHoover,
            "likelihood": 1
        }
    },
];
const QuestionSlotTwentySix = [

        {
        "model": "campaign_trail.question",
        "pk": "Corruption Task Force",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.CorruptionTaskForce,
            "likelihood": 1
        }
    },
];
const QuestionSlotTwentySeven = [
            {
        "model": "campaign_trail.question",
        "pk": "Restoration Bureacrats",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.RestorationBureacrats,
            "likelihood": 1
        }
    },
];
const QuestionSlotTwentyEight = [

        {
        "model": "campaign_trail.question",
        "pk": "Hidden Blackmail Files",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.HiddenFiles,
            "likelihood": 1
        }
    },
];
const QuestionSlotTwentyNine = [

        {
        "model": "campaign_trail.question",
        "pk": "Restoration Bill",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.RestorationBill,
            "likelihood": 1
        }
    },
];
//var QuestionImage = `<img style='margin-top: -18px;width: 254px;height: 105px;object-fit: cover;object-position: center;border-style: double;border-color: white;'src='https://files.catbox.moe/wgvdwm.png'>`;
const QuestionSlotThirty = [

    {
        "model": "campaign_trail.question",
        "pk": "Restoration Additions",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.RestorationAdditions,
            "likelihood": 1
        }
    },
];
const QuestionSlotThirtyOne = [
            {
        "model": "campaign_trail.question",
        "pk": "Civil Rights Vote",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.CivilRightsVote,
            "likelihood": 1
        }
    },
];
const QuestionSlotThirtyTwo = [
        {
        "model": "campaign_trail.question",
        "pk": "Military Ultimatum",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.MilitaryDilemma,
            "likelihood": 1
        }
    },
];
const QuestionSlotThirtyThree = [
            {
        "model": "campaign_trail.question",
        "pk": "Arrest MacArthur",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.ArrestMacArthur,
            "likelihood": 1
        }
    },
];
const QuestionSlotThirtyFour = [
            {
        "model": "campaign_trail.question",
        "pk": "Military Finale",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.MilitaryFinale,
            "likelihood": 1
        }
    },
];
const QuestionSlotThirtyFive = [
        {
        "model": "campaign_trail.question",
        "pk": "Final Helen Decision",
        "fields": {
            "effects": { "QuestionPictureHolder": 'https://i.imgur.com/P1hpoBE.png' },
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "description": textArray.qtxt.FinalHelenDecision,
            "likelihood": 1
        }
    }
];

const AllAnswers = [
    {
        "model": "campaign_trail.answer",
        "pk": "Helen Dialog",
        "fields": {
            "pass_effects": { "HelenPower": 1 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Opening Meeting",
            "description": textArray.atxt.FocusHelen
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Clark Dialog",
        "fields": {
            "pass_effects": { "LegalInfluence": 1 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Opening Meeting",
            "description": textArray.atxt.FocusClark
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "George Dialog",
        "fields": {
            "pass_effects": { "MilitaryInfluence": 1 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Opening Meeting",
            "description": textArray.atxt.FocusGeorge
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "James Dialog",
        "fields": {
            "pass_effects": { "AdministrativeInfluence": 1 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Opening Meeting",
            "description": textArray.atxt.FocusJames
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Speak to Eisenhower",
        "fields": {
            "pass_effects": { "MilitaryInfluence": 1 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Inaugural Ball",
            "description": textArray.atxt.SpeakEisenhower
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Speak to Hughes",
        "fields": {
            "pass_effects": { "IndustrialInfluence": 1 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Inaugural Ball",
            "description": textArray.atxt.SpeakHughes
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Speak to Faubus",
        "fields": {
            "pass_effects": { "SouthernInfluence": 1 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Inaugural Ball",
            "description": textArray.atxt.SpeakFaubus
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Speak to Kennedy",
        "fields": {
            "pass_effects": { "LiberalInfluence": 1 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Inaugural Ball",
            "description": textArray.atxt.SpeakKennedy
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Helen Reduced Role",
        "fields": {
            "pass_effects": { "HelenPower": -1 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Helen",
            "description": textArray.atxt.HelenReduced
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Helen Increased Role",
        "fields": {
            "pass_effects": { "HelenPower": 2 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Helen",
            "description": textArray.atxt.HelenExpanded
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Press Contact Procedural",
        "fields": {
            "pass_effects": { "Reform": 0 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Press Briefing",
            "description": textArray.atxt.Procedural
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Press Contact Vigorous",
        "fields": {
            "pass_effects": { "Reform": 1, "MilitaryReaction": 1 },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Press Briefing",
            "description": textArray.atxt.Vigor
        }
    }, 
    {
        "model": "campaign_trail.answer",
        "pk": "Military Contact",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Military Contact",
            "description": textArray.atxt.MacArthurMeeting
        }
    },
        
        {
        "model": "campaign_trail.answer",
        "pk": "Senate Progressive Allies",
        "fields": {
            "pass_effects": { "SenateInfluence": 1, "SenateAlliesProg": true },
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Senate Contact",
            "description": textArray.atxt.SenateAllyshipProgressives
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Senate Republican Allies",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Senate Contact",
            "description": textArray.atxt.SenateAllyshipRepublicans
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Senate Reactionary Allies",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Senate Contact",
            "description": textArray.atxt.SenateAllyshipSegregationists
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Rigeway Reject",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Eisenhower Potential",
            "description": textArray.atxt.RidgewayReject
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "Rigeway Deal",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Eisenhower Potential",
            "description": textArray.atxt.RidgewayDeal
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Rigeway Compromise",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Eisenhower Potential",
            "description": textArray.atxt.RidgewayCompromise
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Large Spending Proposal",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Spending Proposal",
            "description": textArray.atxt.LargeSpending
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "Moderate Spending Proposal",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Spending Proposal",
            "description": textArray.atxt.ModerateSpending
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "No Spending Proposal",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Spending Proposal",
            "description": textArray.atxt.NoIncrease
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "Begin Intel Gathering",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Corruption Investigations",
            "description": textArray.atxt.BeginIntelGathering
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Delay Intel Gathering",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Corruption Investigations",
            "description": textArray.atxt.DelayIntelGathering
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Quiet Intel Gathering",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Corruption Investigations",
            "description": textArray.atxt.QuietIntelGathering
        }
    },

        {
        "model": "campaign_trail.answer",
        "pk": "Foreign Policy Hardline",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Foreign Policy",
            "description": textArray.atxt.ForeignPolicyHardline
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Foriegn Policy Softline",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Foreign Policy",
            "description": textArray.atxt.ForiegnPolicySoftline
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Foreign Policy Third Way",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Foreign Policy",
            "description": textArray.atxt.ForeignPolicyThirdWay
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "Faubus National Guard",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Faubus Guard",
            "description": textArray.atxt.FaubusNationalGuard
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Faubus Negotiation",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Faubus Guard",
            "description": textArray.atxt.FaubusNegotiation
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "Faubus Ignoring",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Faubus Guard",
            "description": textArray.atxt.FaubusIgnoring
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "Funding Decision Military",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Spending Decisions",
            "description": textArray.atxt.FundingDecisionMilitary
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Funding Decision Civilian",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Spending Decisions",
            "description": textArray.atxt.FundingDecisionCivilian
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Funding Decision Industrial",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Spending Decisions",
            "description": textArray.atxt.FundingDecisionIndustrial
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "George Response",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Marshall Meeting",
            "description": textArray.atxt.GeorgeResponse
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Party Relations Basic",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Party Relations",
            "description": textArray.atxt.PartyBossesBasic
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "Infrastructure Dwight",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Infrastructure Proposal",
            "description": textArray.atxt.InfrastructureDiscussionDwight
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Infrastructure Johnson",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Infrastructure Proposal",
            "description": textArray.atxt.InfrastructureDiscussionJohnson
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Infrastructure Helen",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Infrastructure Proposal",
            "description": textArray.atxt.InfrastructureDiscussionHelen
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "Step Against Hoover",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Hoover",
            "description": textArray.atxt.StepAgainstHoover
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "Civilian NASA",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "NASA",
            "description": textArray.atxt.CivilianNASA
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Military NASA",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "NASA",
            "description": textArray.atxt.MilitaryNASA
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "Howard Hughes Deal",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Hughes Meeting",
            "description": textArray.atxt.HowardHughesDeal
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Howard Hughes Rejection",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Hughes Meeting",
            "description": textArray.atxt.HowardHughesReject
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "State Of The Union Strong",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "State Of The Union",
            "description": textArray.atxt.SotUStrong
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "State Of The Union Cautious",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "State Of The Union",
            "description": textArray.atxt.SotUCautious
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": "State Of The Union Assassination",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "State Of The Union",
            "description": textArray.atxt.SotUAssassination
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "Helen Senate Assignment",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Helen Two",
            "description": textArray.atxt.HelenSenateAssignment
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Helen Foreign Assignment",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Helen Two",
            "description": textArray.atxt.HelenForeignAssignment
        }
    },
        {
        "model": "campaign_trail.answer",
        "pk": "Strenghten Cuba Garrison",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Cuban Policy",
            "description": textArray.atxt.StrengthenCubaGarrison
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Hidden Files Basic",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Hidden Blackmail Files",
            "description": textArray.atxt.HiddenFilesBasic
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Maintain Cuba Garrison",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Cuban Policy",
            "description": textArray.atxt.MaintainCubaGarrison
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Coup Memo Basic",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Coup Memo",
            "description": textArray.atxt.CoupMemoBasic
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Infrastructure Pass",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Infrastructure Bill",
            "description": textArray.atxt.InfrastructurePass
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Improvements Signing Yes",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Internal Improvements",
            "description": textArray.atxt.ImprovementsSigningYes
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Improvements Signing No",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Internal Improvements",
            "description": textArray.atxt.ImprovementsSigningNo
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Cuba Revolt Response Strong",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Cuba Result",
            "description": textArray.atxt.CubaRevoltResponseStrong
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Cuba Revolt Response Weak",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Cuba Result",
            "description": textArray.atxt.CubaRevoltResponseWeak
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Remove Hoover Successful",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Remove Hoover",
            "description": textArray.atxt.HooverRemovalSuccessful
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Remove Hoover Failure",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Remove Hoover",
            "description": textArray.atxt.HooverRemovalFailure
        }
    },
                    {
        "model": "campaign_trail.answer",
        "pk": "Remove Hoover Unattempted",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Remove Hoover",
            "description": textArray.atxt.HooverRemovalUnattempted
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Commandeer FBI",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Corruption Task Force",
            "description": textArray.atxt.CommandeerFBI
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Weaken FBI",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Corruption Task Force",
            "description": textArray.atxt.WeakenFBI
        }
    },
                    {
        "model": "campaign_trail.answer",
        "pk": "Military Ultimatum Basic",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Military Ultimatum",
            "description": textArray.atxt.MilitaryDilemmaBasic
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Fiscal Decrease",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Fiscal Decision",
            "description": textArray.atxt.FiscalDecrease
        }
    },
                    {
        "model": "campaign_trail.answer",
        "pk": "Arrest MacArthur Success",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Arrest MacArthur",
            "description": textArray.atxt.ArrestMacArthurSuccess
        }
    },
            {
        "model": "campaign_trail.answer",
        "pk": "Arrest MacArthur Failure",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Arrest MacArthur",
            "description": textArray.atxt.ArrestMacArthurFailure
        }
    },

            {
        "model": "campaign_trail.answer",
        "pk": "Bureaucracy Plan",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Restoration Bureacrats",
            "description": textArray.atxt.BureaucracyPlan
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Republic Bill",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Fiscal Decision",
            "description": textArray.atxt.RepublicBill
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Restoration Bill",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Restoration Bill",
            "description": textArray.atxt.CivilRightsDraft
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Restoration Additions",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Restoration Additions",
            "description": textArray.atxt.CivilRightsDraft
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Restoration Corruption",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Restoration Corruption",
            "description": textArray.atxt.CorruptionDraft
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Military Coup Victory",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Military Finale",
            "description": textArray.atxt.SuccessfulCoup
        }
    },
                {
        "model": "campaign_trail.answer",
        "pk": "Civil Rights Vote",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Civil Rights Vote",
            "description": textArray.atxt.RestorationVote
        }
    },
                            {
        "model": "campaign_trail.answer",
        "pk": "Helen Final Decision Positive",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Final Helen Decision",
            "description": textArray.atxt.HelenFinalDecisionPositive
        }
    },
                    {
        "model": "campaign_trail.answer",
        "pk": "Helen Final Decision Negative",
        "fields": {
            "pass_effects": {},
            "fail_effects": {},
            "pass_conditions": { "gameEnabled": true },
            "filter_conditions": { "gameEnabled": true },
            "question": "Final Helen Decision",
            "description": textArray.atxt.HelenFinalDecisionNegative
        }
    }

]
function logicalChoiceSystem() {

const AllQuestions = [];

function applyFilter(slot) {
  return slot.filter(item =>
    Object.entries(gameState.NeccessaryVars.Variables).every(([key, value]) =>
      key in item.fields.filter_conditions
        ? item.fields.filter_conditions[key] === value
        : true
    )
  );
}

AllQuestions.push(// so it filters the array of possible questions for each slot, and then pushes the ones that pass the filter into the mod.
  ...[
    applyFilter(QuestionSlotOne),
    applyFilter(QuestionSlotTwo),
    applyFilter(QuestionSlotThree),
    applyFilter(QuestionSlotFour),
    applyFilter(QuestionSlotFive),
    applyFilter(QuestionSlotSix),
    applyFilter(QuestionSlotSeven),
    applyFilter(QuestionSlotEight),
    applyFilter(QuestionSlotNine),
    applyFilter(QuestionSlotTen),
    applyFilter(QuestionSlotEleven),
    applyFilter(QuestionSlotTwelve),
    applyFilter(QuestionSlotThirteen),
    applyFilter(QuestionSlotFourteen),
    applyFilter(QuestionSlotFifteen),
    applyFilter(QuestionSlotSixteen),
    applyFilter(QuestionSlotSeventeen),
    applyFilter(QuestionSlotEighteen),
    applyFilter(QuestionSlotNineteen),
    applyFilter(QuestionSlotTwenty),
    applyFilter(QuestionSlotTwentyOne),
    applyFilter(QuestionSlotTwentyTwo),
    applyFilter(QuestionSlotTwentyThree),
    applyFilter(QuestionSlotTwentyFour),
    applyFilter(QuestionSlotTwentyFive),
    applyFilter(QuestionSlotTwentySix),
    applyFilter(QuestionSlotTwentySeven),
    applyFilter(QuestionSlotTwentyEight),
    applyFilter(QuestionSlotTwentyNine),
    applyFilter(QuestionSlotThirty),
    applyFilter(QuestionSlotThirtyOne),
    applyFilter(QuestionSlotThirtyTwo),
    applyFilter(QuestionSlotThirtyThree),
    applyFilter(QuestionSlotThirtyFour),
    applyFilter(QuestionSlotThirtyFive)
  ].flat()
);

const RecentAnswer = e.player_answers[e.player_answers.length - 1];
const returnedAnswer = AllAnswers.find(a => a.pk === RecentAnswer) || "parody";


if (returnedAnswer !== "parody") {

    let CurrentQuestion = null;

for (let q = 0; q < AllQuestions.length; q++) {
  if (AllQuestions[q].pk === returnedAnswer.fields.question) {
    CurrentQuestion =  AllQuestions[q];
    break;
  }
}


if (!CurrentQuestion) {
  console.error("error you stupif ", returnedAnswer.fields.question);
  return;
}

const effects = CurrentQuestion.fields.effects;

// im sorry
if (effects.QuestionPictureHolder) {
    gameState.NeccessaryVars.QuestionPictureHolder = effects.QuestionPictureHolder;
}


for (const [key, value] of Object.entries(effects)) {

    if (key === "QuestionPictureHolder") continue;

    gameState.NeccessaryVars.Variables[key] =
        (gameState.NeccessaryVars.Variables[key] || 0) + value;
}


  const { pass_conditions, pass_effects, fail_effects } = returnedAnswer.fields;

  const allConditionsMet = Object.entries(pass_conditions).every(
    ([key, value]) => gameState.NeccessaryVars.Variables[key] === value
  );

  if (allConditionsMet) {
    for (const [key, value] of Object.entries(pass_effects)) {
      gameState.NeccessaryVars.Variables[key] =
        (gameState.NeccessaryVars.Variables[key] || 0) + value;
    }
  } else {
    for (const [key, value] of Object.entries(fail_effects)) {
      gameState.NeccessaryVars.Variables[key] =
        (gameState.NeccessaryVars.Variables[key] || 0) + value;
    }
  }
}



//var QuestionImage = `<img style='margin-top: -18px;width: 254px;height: 105px;object-fit: cover;object-position: center;border-style: double;border-color: white;'src='https://files.catbox.moe/wgvdwm.png'>`;
    e.questions_json = AllQuestions.flat();// this pushes the previous array into the actual game interface. .flat makes it take a snapshot of the current value, and not make it a dependent variable


    e.answers_json = AllAnswers.filter(item =>
        Object.entries(gameState.NeccessaryVars.Variables).every(([key, value]) =>
            key in item.fields.filter_conditions
                ? item.fields.filter_conditions[key] === value // since answers are fucking losers and can be used however, they just get one big array instead of the fancy slots that questions get
                : true
        ));
}
logicalChoiceSystem()


campaignTrail_temp.states_json = [
    {
        "model": "campaign_trail.state",
        "pk": 283,
        "fields": {
            "name": "Alabama",
            "abbr": "AL",
            "electoral_votes": 5,
            "popular_votes": 564473,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 284,
        "fields": {
            "name": "Alaska",
            "abbr": "AK",
            "electoral_votes": 3,
            "popular_votes": 60762,
            "poll_closing_time": 420,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 285,
        "fields": {
            "name": "Arizona",
            "abbr": "AZ",
            "electoral_votes": 4,
            "popular_votes": 398491,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 286,
        "fields": {
            "name": "Arkansas",
            "abbr": "AR",
            "electoral_votes": 8,
            "popular_votes": 428509,
            "poll_closing_time": 150,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 287,
        "fields": {
            "name": "California",
            "abbr": "CA",
            "electoral_votes": 32,
            "popular_votes": 6506578,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 288,
        "fields": {
            "name": "Colorado",
            "abbr": "CO",
            "electoral_votes": 6,
            "popular_votes": 736246,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 289,
        "fields": {
            "name": "Connecticut",
            "abbr": "CT",
            "electoral_votes": 8,
            "popular_votes": 1222883,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 290,
        "fields": {
            "name": "Delaware",
            "abbr": "DE",
            "electoral_votes": 3,
            "popular_votes": 196683,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 291,
        "fields": {
            "name": "Florida",
            "abbr": "FL",
            "electoral_votes": 10,
            "popular_votes": 1544176,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 292,
        "fields": {
            "name": "Georgia",
            "abbr": "GA",
            "electoral_votes": 12,
            "popular_votes": 734732,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 293,
        "fields": {
            "name": "Hawaii",
            "abbr": "HI",
            "electoral_votes": 3,
            "popular_votes": 184705,
            "poll_closing_time": 360,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 294,
        "fields": {
            "name": "Idaho",
            "abbr": "ID",
            "electoral_votes": 4,
            "popular_votes": 300450,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 295,
        "fields": {
            "name": "Illinois",
            "abbr": "IL",
            "electoral_votes": 27,
            "popular_votes": 2757409,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 296,
        "fields": {
            "name": "Indiana",
            "abbr": "IN",
            "electoral_votes": 13,
            "popular_votes": 2135360,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 297,
        "fields": {
            "name": "Iowa",
            "abbr": "IA",
            "electoral_votes": 10,
            "popular_votes": 1273810,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 298,
        "fields": {
            "name": "Kansas",
            "abbr": "KS",
            "electoral_votes": 8,
            "popular_votes": 928825,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 299,
        "fields": {
            "name": "Kentucky",
            "abbr": "KY",
            "electoral_votes": 10,
            "popular_votes": 1124462,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 300,
        "fields": {
            "name": "Louisiana",
            "abbr": "LA",
            "electoral_votes": 10,
            "popular_votes": 807891,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 301,
        "fields": {
            "name": "Maine",
            "abbr": "ME",
            "electoral_votes": 5,
            "popular_votes": 421773,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 302,
        "fields": {
            "name": "Maryland",
            "abbr": "MD",
            "electoral_votes": 9,
            "popular_votes": 1055349,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 303,
        "fields": {
            "name": "Massachusetts",
            "abbr": "MA",
            "electoral_votes": 16,
            "popular_votes": 2469480,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 304,
        "fields": {
            "name": "Michigan",
            "abbr": "MI",
            "electoral_votes": 20,
            "popular_votes": 3318097,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 305,
        "fields": {
            "name": "Minnesota",
            "abbr": "MN",
            "electoral_votes": 11,
            "popular_votes": 1541887,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 306,
        "fields": {
            "name": "Mississippi",
            "abbr": "MS",
            "electoral_votes": 8,
            "popular_votes": 298171,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 307,
        "fields": {
            "name": "Missouri",
            "abbr": "MO",
            "electoral_votes": 13,
            "popular_votes": 1934422,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 308,
        "fields": {
            "name": "Montana",
            "abbr": "MT",
            "electoral_votes": 4,
            "popular_votes": 277579,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 309,
        "fields": {
            "name": "Nebraska",
            "abbr": "NE",
            "electoral_votes": 6,
            "popular_votes": 613095,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 310,
        "fields": {
            "name": "Nevada",
            "abbr": "NV",
            "electoral_votes": 3,
            "popular_votes": 107267,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 311,
        "fields": {
            "name": "New Hampshire",
            "abbr": "NH",
            "electoral_votes": 4,
            "popular_votes": 295761,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 312,
        "fields": {
            "name": "New Jersey",
            "abbr": "NJ",
            "electoral_votes": 16,
            "popular_votes": 2773111,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 313,
        "fields": {
            "name": "New Mexico",
            "abbr": "NM",
            "electoral_votes": 4,
            "popular_votes": 311107,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 314,
        "fields": {
            "name": "New York",
            "abbr": "NY",
            "electoral_votes": 45,
            "popular_votes": 7291079,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 315,
        "fields": {
            "name": "North Carolina",
            "abbr": "NC",
            "electoral_votes": 14,
            "popular_votes": 1368556,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 316,
        "fields": {
            "name": "North Dakota",
            "abbr": "ND",
            "electoral_votes": 4,
            "popular_votes": 278431,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 317,
        "fields": {
            "name": "Ohio",
            "abbr": "OH",
            "electoral_votes": 25,
            "popular_votes": 4161859,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 318,
        "fields": {
            "name": "Oklahoma",
            "abbr": "OK",
            "electoral_votes": 8,
            "popular_votes": 903150,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 319,
        "fields": {
            "name": "Oregon",
            "abbr": "OR",
            "electoral_votes": 6,
            "popular_votes": 776421,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 320,
        "fields": {
            "name": "Pennsylvania",
            "abbr": "PA",
            "electoral_votes": 32,
            "popular_votes": 5006541,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 321,
        "fields": {
            "name": "Rhode Island",
            "abbr": "RI",
            "electoral_votes": 4,
            "popular_votes": 405535,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 322,
        "fields": {
            "name": "South Carolina",
            "abbr": "SC",
            "electoral_votes": 8,
            "popular_votes": 386688,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 323,
        "fields": {
            "name": "South Dakota",
            "abbr": "SD",
            "electoral_votes": 4,
            "popular_votes": 306487,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 324,
        "fields": {
            "name": "Tennessee",
            "abbr": "TN",
            "electoral_votes": 11,
            "popular_votes": 1051792,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 325,
        "fields": {
            "name": "Texas",
            "abbr": "TX",
            "electoral_votes": 24,
            "popular_votes": 2311084,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 326,
        "fields": {
            "name": "Utah",
            "abbr": "UT",
            "electoral_votes": 4,
            "popular_votes": 374709,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 327,
        "fields": {
            "name": "Vermont",
            "abbr": "VT",
            "electoral_votes": 3,
            "popular_votes": 167324,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 328,
        "fields": {
            "name": "Virginia",
            "abbr": "VA",
            "electoral_votes": 12,
            "popular_votes": 771449,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 329,
        "fields": {
            "name": "Washington",
            "abbr": "WA",
            "electoral_votes": 9,
            "popular_votes": 1241572,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 330,
        "fields": {
            "name": "West Virginia",
            "abbr": "WV",
            "electoral_votes": 8,
            "popular_votes": 837781,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 331,
        "fields": {
            "name": "Wisconsin",
            "abbr": "WI",
            "electoral_votes": 12,
            "popular_votes": 1729082,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 332,
        "fields": {
            "name": "Wyoming",
            "abbr": "WY",
            "electoral_votes": 3,
            "popular_votes": 140782,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 333,
        "fields": {
            "name": "Alabama - Unpledged",
            "abbr": "AA",
            "electoral_votes": 6,
            "popular_votes": 100,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 11
        }
    }
]

campaignTrail_temp.issues_json = [
    {
        "model": "campaign_trail.issue",
        "pk": 37,
        "fields": {
            "name": "Foreign Policy",
            "description": 0,
            "stance_1": "Hardline",
            "stance_desc_1": 0,
            "stance_2": "Hardline",
            "stance_desc_2": 0,
            "stance_3": "Moderate",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Moderate",
            "stance_desc_5": 0,
            "stance_6": "Idealist",
            "stance_desc_6": 0,
            "stance_7": "Idealist",
            "stance_desc_7": 0,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 38,
        "fields": {
            "name": "Civil Rights",
            "description": 0,
            "stance_1": "Segregationist",
            "stance_desc_1": 0,
            "stance_2": "Segregationist",
            "stance_desc_2": 0,
            "stance_3": "Moderate",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Moderate",
            "stance_desc_5": 0,
            "stance_6": "Integrationist",
            "stance_desc_6": 0,
            "stance_7": "Integrationist",
            "stance_desc_7": 0,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 39,
        "fields": {
            "name": "Covenant with America",
            "description": "McMath's planned expansive social programs (similar to \"the great society\" but since this is alt-hist it's different)",
            "stance_1": "Iniquity",
            "stance_desc_1": 0,
            "stance_2": "Iniquity",
            "stance_desc_2": 0,
            "stance_3": "Injustice",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Justice",
            "stance_desc_5": 0,
            "stance_6": "Equity",
            "stance_desc_6": 0,
            "stance_7": "Equity",
            "stance_desc_7": 0,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 40,
        "fields": {
            "name": "Feminism",
            "description": 0,
            "stance_1": "Misogynist",
            "stance_desc_1": 0,
            "stance_2": "Misogynist",
            "stance_desc_2": 0,
            "stance_3": "Indifferent",
            "stance_desc_3": 0,
            "stance_4": "Indifferent",
            "stance_desc_4": 0,
            "stance_5": "Indifferent",
            "stance_desc_5": 0,
            "stance_6": "Feminist",
            "stance_desc_6": 0,
            "stance_7": "Feminist",
            "stance_desc_7": 0,
            "election": 11
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 41,
        "fields": {
            "name": "Corruption",
            "description": 0,
            "stance_1": "Utterly Infested",
            "stance_desc_1": 0,
            "stance_2": "Machine Politics",
            "stance_desc_2": 0,
            "stance_3": "Machine Politics",
            "stance_desc_3": 0,
            "stance_4": "Frontlines",
            "stance_desc_4": 0,
            "stance_5": "Weakening",
            "stance_desc_5": 0,
            "stance_6": "Weakening",
            "stance_desc_6": 0,
            "stance_7": "Eradicated",
            "stance_desc_7": 0,
            "election": 11
        }
    }
]

campaignTrail_temp.state_issue_score_json = [
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1378,
        "fields": {
            "state": 283,
            "issue": 37,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1379,
        "fields": {
            "state": 284,
            "issue": 37,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1380,
        "fields": {
            "state": 285,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1381,
        "fields": {
            "state": 286,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1382,
        "fields": {
            "state": 287,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1383,
        "fields": {
            "state": 288,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1384,
        "fields": {
            "state": 289,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1385,
        "fields": {
            "state": 290,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1386,
        "fields": {
            "state": 291,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1387,
        "fields": {
            "state": 292,
            "issue": 37,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1388,
        "fields": {
            "state": 293,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1389,
        "fields": {
            "state": 294,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1390,
        "fields": {
            "state": 295,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1391,
        "fields": {
            "state": 296,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1392,
        "fields": {
            "state": 297,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1393,
        "fields": {
            "state": 298,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1394,
        "fields": {
            "state": 299,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1395,
        "fields": {
            "state": 300,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1396,
        "fields": {
            "state": 301,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1397,
        "fields": {
            "state": 302,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1398,
        "fields": {
            "state": 303,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1399,
        "fields": {
            "state": 304,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1400,
        "fields": {
            "state": 305,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1401,
        "fields": {
            "state": 306,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1402,
        "fields": {
            "state": 307,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1403,
        "fields": {
            "state": 308,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1404,
        "fields": {
            "state": 309,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1405,
        "fields": {
            "state": 310,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1406,
        "fields": {
            "state": 311,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1407,
        "fields": {
            "state": 312,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1408,
        "fields": {
            "state": 313,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1409,
        "fields": {
            "state": 314,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1410,
        "fields": {
            "state": 315,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1411,
        "fields": {
            "state": 316,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1412,
        "fields": {
            "state": 317,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1413,
        "fields": {
            "state": 318,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1414,
        "fields": {
            "state": 319,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1415,
        "fields": {
            "state": 320,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1416,
        "fields": {
            "state": 321,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1417,
        "fields": {
            "state": 322,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1418,
        "fields": {
            "state": 323,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1419,
        "fields": {
            "state": 324,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1420,
        "fields": {
            "state": 325,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1421,
        "fields": {
            "state": 326,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1422,
        "fields": {
            "state": 327,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1423,
        "fields": {
            "state": 328,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1424,
        "fields": {
            "state": 329,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1425,
        "fields": {
            "state": 330,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1426,
        "fields": {
            "state": 331,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1427,
        "fields": {
            "state": 332,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1428,
        "fields": {
            "state": 333,
            "issue": 37,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1429,
        "fields": {
            "state": 283,
            "issue": 38,
            "state_issue_score": -0.9,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1430,
        "fields": {
            "state": 284,
            "issue": 38,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1431,
        "fields": {
            "state": 285,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1432,
        "fields": {
            "state": 286,
            "issue": 38,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1433,
        "fields": {
            "state": 287,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1434,
        "fields": {
            "state": 288,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1435,
        "fields": {
            "state": 289,
            "issue": 38,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1436,
        "fields": {
            "state": 290,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1437,
        "fields": {
            "state": 291,
            "issue": 38,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1438,
        "fields": {
            "state": 292,
            "issue": 38,
            "state_issue_score": -0.7,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1439,
        "fields": {
            "state": 293,
            "issue": 38,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1440,
        "fields": {
            "state": 294,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1441,
        "fields": {
            "state": 295,
            "issue": 38,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1442,
        "fields": {
            "state": 296,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1443,
        "fields": {
            "state": 297,
            "issue": 38,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1444,
        "fields": {
            "state": 298,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1445,
        "fields": {
            "state": 299,
            "issue": 38,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1446,
        "fields": {
            "state": 300,
            "issue": 38,
            "state_issue_score": -0.8,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1447,
        "fields": {
            "state": 301,
            "issue": 38,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1448,
        "fields": {
            "state": 302,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1449,
        "fields": {
            "state": 303,
            "issue": 38,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1450,
        "fields": {
            "state": 304,
            "issue": 38,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1451,
        "fields": {
            "state": 305,
            "issue": 38,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1452,
        "fields": {
            "state": 306,
            "issue": 38,
            "state_issue_score": -0.8,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1453,
        "fields": {
            "state": 307,
            "issue": 38,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1454,
        "fields": {
            "state": 308,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1455,
        "fields": {
            "state": 309,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1456,
        "fields": {
            "state": 310,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1457,
        "fields": {
            "state": 311,
            "issue": 38,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1458,
        "fields": {
            "state": 312,
            "issue": 38,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1459,
        "fields": {
            "state": 313,
            "issue": 38,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1460,
        "fields": {
            "state": 314,
            "issue": 38,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1461,
        "fields": {
            "state": 315,
            "issue": 38,
            "state_issue_score": -0.8,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1462,
        "fields": {
            "state": 316,
            "issue": 38,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1463,
        "fields": {
            "state": 317,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1464,
        "fields": {
            "state": 318,
            "issue": 38,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1465,
        "fields": {
            "state": 319,
            "issue": 38,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1466,
        "fields": {
            "state": 320,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1467,
        "fields": {
            "state": 321,
            "issue": 38,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1468,
        "fields": {
            "state": 322,
            "issue": 38,
            "state_issue_score": -0.8,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1469,
        "fields": {
            "state": 323,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1470,
        "fields": {
            "state": 324,
            "issue": 38,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1471,
        "fields": {
            "state": 325,
            "issue": 38,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1472,
        "fields": {
            "state": 326,
            "issue": 38,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1473,
        "fields": {
            "state": 327,
            "issue": 38,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1474,
        "fields": {
            "state": 328,
            "issue": 38,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1475,
        "fields": {
            "state": 329,
            "issue": 38,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1476,
        "fields": {
            "state": 330,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1477,
        "fields": {
            "state": 331,
            "issue": 38,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1478,
        "fields": {
            "state": 332,
            "issue": 38,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1479,
        "fields": {
            "state": 333,
            "issue": 38,
            "state_issue_score": -0.8,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1480,
        "fields": {
            "state": 283,
            "issue": 39,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1481,
        "fields": {
            "state": 284,
            "issue": 39,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1482,
        "fields": {
            "state": 285,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1483,
        "fields": {
            "state": 286,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1484,
        "fields": {
            "state": 287,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1485,
        "fields": {
            "state": 288,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1486,
        "fields": {
            "state": 289,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1487,
        "fields": {
            "state": 290,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1488,
        "fields": {
            "state": 291,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 112,
        "fields": {
            "state": 292,
            "issue": 39,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1490,
        "fields": {
            "state": 293,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1491,
        "fields": {
            "state": 294,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1492,
        "fields": {
            "state": 295,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1493,
        "fields": {
            "state": 296,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1494,
        "fields": {
            "state": 297,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1495,
        "fields": {
            "state": 298,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1496,
        "fields": {
            "state": 299,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1497,
        "fields": {
            "state": 300,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1498,
        "fields": {
            "state": 301,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1499,
        "fields": {
            "state": 302,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1500,
        "fields": {
            "state": 303,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1501,
        "fields": {
            "state": 304,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1502,
        "fields": {
            "state": 305,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1503,
        "fields": {
            "state": 306,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1504,
        "fields": {
            "state": 307,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1505,
        "fields": {
            "state": 308,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1506,
        "fields": {
            "state": 309,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1507,
        "fields": {
            "state": 310,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1508,
        "fields": {
            "state": 311,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1509,
        "fields": {
            "state": 312,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1510,
        "fields": {
            "state": 313,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1511,
        "fields": {
            "state": 314,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1512,
        "fields": {
            "state": 315,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1513,
        "fields": {
            "state": 316,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1514,
        "fields": {
            "state": 317,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1515,
        "fields": {
            "state": 318,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1516,
        "fields": {
            "state": 319,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1517,
        "fields": {
            "state": 320,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1518,
        "fields": {
            "state": 321,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1519,
        "fields": {
            "state": 322,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1520,
        "fields": {
            "state": 323,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1521,
        "fields": {
            "state": 324,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1522,
        "fields": {
            "state": 325,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1523,
        "fields": {
            "state": 326,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1524,
        "fields": {
            "state": 327,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1525,
        "fields": {
            "state": 328,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1526,
        "fields": {
            "state": 329,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1527,
        "fields": {
            "state": 330,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1528,
        "fields": {
            "state": 331,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1529,
        "fields": {
            "state": 332,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1530,
        "fields": {
            "state": 333,
            "issue": 39,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1531,
        "fields": {
            "state": 283,
            "issue": 40,
            "state_issue_score": -0.7,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1532,
        "fields": {
            "state": 284,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1533,
        "fields": {
            "state": 285,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1534,
        "fields": {
            "state": 286,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1535,
        "fields": {
            "state": 287,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1536,
        "fields": {
            "state": 288,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1537,
        "fields": {
            "state": 289,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1538,
        "fields": {
            "state": 290,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1539,
        "fields": {
            "state": 291,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1540,
        "fields": {
            "state": 292,
            "issue": 40,
            "state_issue_score": -0.7,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1541,
        "fields": {
            "state": 293,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1542,
        "fields": {
            "state": 294,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1543,
        "fields": {
            "state": 295,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1544,
        "fields": {
            "state": 296,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1545,
        "fields": {
            "state": 297,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1546,
        "fields": {
            "state": 298,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1547,
        "fields": {
            "state": 299,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1548,
        "fields": {
            "state": 300,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1549,
        "fields": {
            "state": 301,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1550,
        "fields": {
            "state": 302,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1551,
        "fields": {
            "state": 303,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1552,
        "fields": {
            "state": 304,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1553,
        "fields": {
            "state": 305,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1554,
        "fields": {
            "state": 306,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1555,
        "fields": {
            "state": 307,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1556,
        "fields": {
            "state": 308,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1557,
        "fields": {
            "state": 309,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1558,
        "fields": {
            "state": 310,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1559,
        "fields": {
            "state": 311,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1560,
        "fields": {
            "state": 312,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1561,
        "fields": {
            "state": 313,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1562,
        "fields": {
            "state": 314,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1563,
        "fields": {
            "state": 315,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1564,
        "fields": {
            "state": 316,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1565,
        "fields": {
            "state": 317,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1566,
        "fields": {
            "state": 318,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1567,
        "fields": {
            "state": 319,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1568,
        "fields": {
            "state": 320,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1569,
        "fields": {
            "state": 321,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1570,
        "fields": {
            "state": 322,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1571,
        "fields": {
            "state": 323,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1572,
        "fields": {
            "state": 324,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1573,
        "fields": {
            "state": 325,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1574,
        "fields": {
            "state": 326,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1575,
        "fields": {
            "state": 327,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1576,
        "fields": {
            "state": 328,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1577,
        "fields": {
            "state": 329,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1578,
        "fields": {
            "state": 330,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1579,
        "fields": {
            "state": 331,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1580,
        "fields": {
            "state": 332,
            "issue": 40,
            "state_issue_score": 0,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1581,
        "fields": {
            "state": 333,
            "issue": 40,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1582,
        "fields": {
            "state": 283,
            "issue": 41,
            "state_issue_score": -0.9,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1583,
        "fields": {
            "state": 284,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1584,
        "fields": {
            "state": 285,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1585,
        "fields": {
            "state": 286,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1586,
        "fields": {
            "state": 287,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1587,
        "fields": {
            "state": 288,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1588,
        "fields": {
            "state": 289,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1589,
        "fields": {
            "state": 290,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1590,
        "fields": {
            "state": 291,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1591,
        "fields": {
            "state": 292,
            "issue": 41,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1592,
        "fields": {
            "state": 293,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1593,
        "fields": {
            "state": 294,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1594,
        "fields": {
            "state": 295,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1595,
        "fields": {
            "state": 296,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1596,
        "fields": {
            "state": 297,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1597,
        "fields": {
            "state": 298,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1598,
        "fields": {
            "state": 299,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1599,
        "fields": {
            "state": 300,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1600,
        "fields": {
            "state": 301,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1601,
        "fields": {
            "state": 302,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1602,
        "fields": {
            "state": 303,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1603,
        "fields": {
            "state": 304,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1604,
        "fields": {
            "state": 305,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1605,
        "fields": {
            "state": 306,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1606,
        "fields": {
            "state": 307,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1607,
        "fields": {
            "state": 308,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1608,
        "fields": {
            "state": 309,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1609,
        "fields": {
            "state": 310,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1610,
        "fields": {
            "state": 311,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1611,
        "fields": {
            "state": 312,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1612,
        "fields": {
            "state": 313,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1613,
        "fields": {
            "state": 314,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1614,
        "fields": {
            "state": 315,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1615,
        "fields": {
            "state": 316,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1616,
        "fields": {
            "state": 317,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1617,
        "fields": {
            "state": 318,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1618,
        "fields": {
            "state": 319,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1619,
        "fields": {
            "state": 320,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1620,
        "fields": {
            "state": 321,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1621,
        "fields": {
            "state": 322,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1622,
        "fields": {
            "state": 323,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1623,
        "fields": {
            "state": 324,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1624,
        "fields": {
            "state": 325,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1625,
        "fields": {
            "state": 326,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1626,
        "fields": {
            "state": 327,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1627,
        "fields": {
            "state": 328,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1628,
        "fields": {
            "state": 329,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1629,
        "fields": {
            "state": 330,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1630,
        "fields": {
            "state": 331,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1631,
        "fields": {
            "state": 332,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1632,
        "fields": {
            "state": 333,
            "issue": 41,
            "state_issue_score": -0.5,
            "weight": 1
        }
    }
]

campaignTrail_temp.candidate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 398,
        "fields": {
            "candidate": 105,
            "issue": 37,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 399,
        "fields": {
            "candidate": 105,
            "issue": 38,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 400,
        "fields": {
            "candidate": 105,
            "issue": 39,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 401,
        "fields": {
            "candidate": 105,
            "issue": 40,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 402,
        "fields": {
            "candidate": 105,
            "issue": 41,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 403,
        "fields": {
            "candidate": 106,
            "issue": 37,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 404,
        "fields": {
            "candidate": 106,
            "issue": 38,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 405,
        "fields": {
            "candidate": 106,
            "issue": 39,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 406,
        "fields": {
            "candidate": 106,
            "issue": 40,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 407,
        "fields": {
            "candidate": 106,
            "issue": 41,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 408,
        "fields": {
            "candidate": 107,
            "issue": 37,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 409,
        "fields": {
            "candidate": 107,
            "issue": 38,
            "issue_score": -0.9
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 410,
        "fields": {
            "candidate": 107,
            "issue": 39,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 411,
        "fields": {
            "candidate": 107,
            "issue": 40,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 412,
        "fields": {
            "candidate": 107,
            "issue": 41,
            "issue_score": -0.5
        }
    }
]

campaignTrail_temp.running_mate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 413,
        "fields": {
            "candidate": 108,
            "issue": 37,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 414,
        "fields": {
            "candidate": 108,
            "issue": 38,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 415,
        "fields": {
            "candidate": 108,
            "issue": 39,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 416,
        "fields": {
            "candidate": 108,
            "issue": 40,
            "issue_score": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 417,
        "fields": {
            "candidate": 108,
            "issue": 41,
            "issue_score": 0.5
        }
    }
]

campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1084,
        "fields": {
            "candidate": 105,
            "state": 283,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1085,
        "fields": {
            "candidate": 105,
            "state": 284,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1086,
        "fields": {
            "candidate": 105,
            "state": 285,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1087,
        "fields": {
            "candidate": 105,
            "state": 286,
            "state_multiplier": 2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1088,
        "fields": {
            "candidate": 105,
            "state": 287,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1089,
        "fields": {
            "candidate": 105,
            "state": 288,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1090,
        "fields": {
            "candidate": 105,
            "state": 289,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1091,
        "fields": {
            "candidate": 105,
            "state": 290,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1092,
        "fields": {
            "candidate": 105,
            "state": 291,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1093,
        "fields": {
            "candidate": 105,
            "state": 292,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1094,
        "fields": {
            "candidate": 105,
            "state": 293,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1095,
        "fields": {
            "candidate": 105,
            "state": 294,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1096,
        "fields": {
            "candidate": 105,
            "state": 295,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1097,
        "fields": {
            "candidate": 105,
            "state": 296,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1098,
        "fields": {
            "candidate": 105,
            "state": 297,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1099,
        "fields": {
            "candidate": 105,
            "state": 298,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1100,
        "fields": {
            "candidate": 105,
            "state": 299,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1101,
        "fields": {
            "candidate": 105,
            "state": 300,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1102,
        "fields": {
            "candidate": 105,
            "state": 301,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1103,
        "fields": {
            "candidate": 105,
            "state": 302,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1104,
        "fields": {
            "candidate": 105,
            "state": 303,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1105,
        "fields": {
            "candidate": 105,
            "state": 304,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1106,
        "fields": {
            "candidate": 105,
            "state": 305,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1107,
        "fields": {
            "candidate": 105,
            "state": 306,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1108,
        "fields": {
            "candidate": 105,
            "state": 307,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1109,
        "fields": {
            "candidate": 105,
            "state": 308,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1110,
        "fields": {
            "candidate": 105,
            "state": 309,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1111,
        "fields": {
            "candidate": 105,
            "state": 310,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1112,
        "fields": {
            "candidate": 105,
            "state": 311,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1113,
        "fields": {
            "candidate": 105,
            "state": 312,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1114,
        "fields": {
            "candidate": 105,
            "state": 313,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1115,
        "fields": {
            "candidate": 105,
            "state": 314,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1116,
        "fields": {
            "candidate": 105,
            "state": 315,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1117,
        "fields": {
            "candidate": 105,
            "state": 316,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1118,
        "fields": {
            "candidate": 105,
            "state": 317,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1119,
        "fields": {
            "candidate": 105,
            "state": 318,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1120,
        "fields": {
            "candidate": 105,
            "state": 319,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1121,
        "fields": {
            "candidate": 105,
            "state": 320,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1122,
        "fields": {
            "candidate": 105,
            "state": 321,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1123,
        "fields": {
            "candidate": 105,
            "state": 322,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1124,
        "fields": {
            "candidate": 105,
            "state": 323,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1125,
        "fields": {
            "candidate": 105,
            "state": 324,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1126,
        "fields": {
            "candidate": 105,
            "state": 325,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1127,
        "fields": {
            "candidate": 105,
            "state": 326,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1128,
        "fields": {
            "candidate": 105,
            "state": 327,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1129,
        "fields": {
            "candidate": 105,
            "state": 328,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1130,
        "fields": {
            "candidate": 105,
            "state": 329,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1131,
        "fields": {
            "candidate": 105,
            "state": 330,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1132,
        "fields": {
            "candidate": 105,
            "state": 331,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1133,
        "fields": {
            "candidate": 105,
            "state": 332,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1134,
        "fields": {
            "candidate": 105,
            "state": 333,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1135,
        "fields": {
            "candidate": 106,
            "state": 283,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1136,
        "fields": {
            "candidate": 106,
            "state": 284,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1137,
        "fields": {
            "candidate": 106,
            "state": 285,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1138,
        "fields": {
            "candidate": 106,
            "state": 286,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1139,
        "fields": {
            "candidate": 106,
            "state": 287,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1140,
        "fields": {
            "candidate": 106,
            "state": 288,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1141,
        "fields": {
            "candidate": 106,
            "state": 289,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1142,
        "fields": {
            "candidate": 106,
            "state": 290,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1143,
        "fields": {
            "candidate": 106,
            "state": 291,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1144,
        "fields": {
            "candidate": 106,
            "state": 292,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1145,
        "fields": {
            "candidate": 106,
            "state": 293,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1146,
        "fields": {
            "candidate": 106,
            "state": 294,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1147,
        "fields": {
            "candidate": 106,
            "state": 295,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1148,
        "fields": {
            "candidate": 106,
            "state": 296,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1149,
        "fields": {
            "candidate": 106,
            "state": 297,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1150,
        "fields": {
            "candidate": 106,
            "state": 298,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1151,
        "fields": {
            "candidate": 106,
            "state": 299,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1152,
        "fields": {
            "candidate": 106,
            "state": 300,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1153,
        "fields": {
            "candidate": 106,
            "state": 301,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1154,
        "fields": {
            "candidate": 106,
            "state": 302,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1155,
        "fields": {
            "candidate": 106,
            "state": 303,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1156,
        "fields": {
            "candidate": 106,
            "state": 304,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1157,
        "fields": {
            "candidate": 106,
            "state": 305,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1158,
        "fields": {
            "candidate": 106,
            "state": 306,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1159,
        "fields": {
            "candidate": 106,
            "state": 307,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1160,
        "fields": {
            "candidate": 106,
            "state": 308,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1161,
        "fields": {
            "candidate": 106,
            "state": 309,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1162,
        "fields": {
            "candidate": 106,
            "state": 310,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1163,
        "fields": {
            "candidate": 106,
            "state": 311,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1164,
        "fields": {
            "candidate": 106,
            "state": 312,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1165,
        "fields": {
            "candidate": 106,
            "state": 313,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1166,
        "fields": {
            "candidate": 106,
            "state": 314,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1167,
        "fields": {
            "candidate": 106,
            "state": 315,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1168,
        "fields": {
            "candidate": 106,
            "state": 316,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1169,
        "fields": {
            "candidate": 106,
            "state": 317,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1170,
        "fields": {
            "candidate": 106,
            "state": 318,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1171,
        "fields": {
            "candidate": 106,
            "state": 319,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1172,
        "fields": {
            "candidate": 106,
            "state": 320,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1173,
        "fields": {
            "candidate": 106,
            "state": 321,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1174,
        "fields": {
            "candidate": 106,
            "state": 322,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1175,
        "fields": {
            "candidate": 106,
            "state": 323,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1176,
        "fields": {
            "candidate": 106,
            "state": 324,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1177,
        "fields": {
            "candidate": 106,
            "state": 325,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1178,
        "fields": {
            "candidate": 106,
            "state": 326,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1179,
        "fields": {
            "candidate": 106,
            "state": 327,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1180,
        "fields": {
            "candidate": 106,
            "state": 328,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1181,
        "fields": {
            "candidate": 106,
            "state": 329,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1182,
        "fields": {
            "candidate": 106,
            "state": 330,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1183,
        "fields": {
            "candidate": 106,
            "state": 331,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1184,
        "fields": {
            "candidate": 106,
            "state": 332,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1185,
        "fields": {
            "candidate": 106,
            "state": 333,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1186,
        "fields": {
            "candidate": 107,
            "state": 283,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1187,
        "fields": {
            "candidate": 107,
            "state": 284,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1188,
        "fields": {
            "candidate": 107,
            "state": 285,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1189,
        "fields": {
            "candidate": 107,
            "state": 286,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1190,
        "fields": {
            "candidate": 107,
            "state": 287,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1191,
        "fields": {
            "candidate": 107,
            "state": 288,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1192,
        "fields": {
            "candidate": 107,
            "state": 289,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1193,
        "fields": {
            "candidate": 107,
            "state": 290,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1194,
        "fields": {
            "candidate": 107,
            "state": 291,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1195,
        "fields": {
            "candidate": 107,
            "state": 292,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1196,
        "fields": {
            "candidate": 107,
            "state": 293,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1197,
        "fields": {
            "candidate": 107,
            "state": 294,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1198,
        "fields": {
            "candidate": 107,
            "state": 295,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1199,
        "fields": {
            "candidate": 107,
            "state": 296,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1200,
        "fields": {
            "candidate": 107,
            "state": 297,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1201,
        "fields": {
            "candidate": 107,
            "state": 298,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1202,
        "fields": {
            "candidate": 107,
            "state": 299,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1203,
        "fields": {
            "candidate": 107,
            "state": 300,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1204,
        "fields": {
            "candidate": 107,
            "state": 301,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1205,
        "fields": {
            "candidate": 107,
            "state": 302,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1206,
        "fields": {
            "candidate": 107,
            "state": 303,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1207,
        "fields": {
            "candidate": 107,
            "state": 304,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1208,
        "fields": {
            "candidate": 107,
            "state": 305,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1209,
        "fields": {
            "candidate": 107,
            "state": 306,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1210,
        "fields": {
            "candidate": 107,
            "state": 307,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1211,
        "fields": {
            "candidate": 107,
            "state": 308,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1212,
        "fields": {
            "candidate": 107,
            "state": 309,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1213,
        "fields": {
            "candidate": 107,
            "state": 310,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1214,
        "fields": {
            "candidate": 107,
            "state": 311,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1215,
        "fields": {
            "candidate": 107,
            "state": 312,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1216,
        "fields": {
            "candidate": 107,
            "state": 313,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1217,
        "fields": {
            "candidate": 107,
            "state": 314,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1218,
        "fields": {
            "candidate": 107,
            "state": 315,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1219,
        "fields": {
            "candidate": 107,
            "state": 316,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1220,
        "fields": {
            "candidate": 107,
            "state": 317,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1221,
        "fields": {
            "candidate": 107,
            "state": 318,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1222,
        "fields": {
            "candidate": 107,
            "state": 319,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1223,
        "fields": {
            "candidate": 107,
            "state": 320,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1224,
        "fields": {
            "candidate": 107,
            "state": 321,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1225,
        "fields": {
            "candidate": 107,
            "state": 322,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1226,
        "fields": {
            "candidate": 107,
            "state": 323,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1227,
        "fields": {
            "candidate": 107,
            "state": 324,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1228,
        "fields": {
            "candidate": 107,
            "state": 325,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1229,
        "fields": {
            "candidate": 107,
            "state": 326,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1230,
        "fields": {
            "candidate": 107,
            "state": 327,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1231,
        "fields": {
            "candidate": 107,
            "state": 328,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1232,
        "fields": {
            "candidate": 107,
            "state": 329,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1233,
        "fields": {
            "candidate": 107,
            "state": 330,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1234,
        "fields": {
            "candidate": 107,
            "state": 331,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1235,
        "fields": {
            "candidate": 107,
            "state": 332,
            "state_multiplier": 0.000001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1236,
        "fields": {
            "candidate": 107,
            "state": 333,
            "state_multiplier": 1.2
        }
    }
]

campaignTrail_temp.answer_score_global_json = []

campaignTrail_temp.answer_score_issue_json = []

campaignTrail_temp.answer_score_state_json = []

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": "Opening Meeting Helen",
        "fields": {
            "answer": "Helen Dialog",
            "candidate": 105,
            "answer_feedback": "<p>Helen Dialog</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 120,
        "fields": {
            "answer": "Clark Dialog",
            "candidate": 105,
            "answer_feedback": "<p>Clark Dialog</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 130,
        "fields": {
            "answer": "George Dialog",
            "candidate": 105,
            "answer_feedback": "<p>George Dialog</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 210,
        "fields": {
            "answer": "James Dialog",
            "candidate": 105,
            "answer_feedback": "<p>James Dialog</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 220,
        "fields": {
            "answer": "Speak to Eisenhower",
            "candidate": 105,
            "answer_feedback": "<p>Speak to Eisenhower</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 310,
        "fields": {
            "answer": "Speak to Hughes",
            "candidate": 105,
            "answer_feedback": "<p>Speak to Hughes</p>"
        }
    }, {
        "model": "campaign_trail.answer_feedback",
        "pk": 320,
        "fields": {
            "answer": "Speak to Faubus",
            "candidate": 105,
            "answer_feedback": "<p>Speak to Faubus</p>"
        }
    }, {
        "model": "campaign_trail.answer_feedback",
        "pk": 330,
        "fields": {
            "answer": "Speak to Kennedy",
            "candidate": 105,
            "answer_feedback": "<p>Speak to Kennedy</p>"
        }
    }, {
        "model": "campaign_trail.answer_feedback",
        "pk": 410,
        "fields": {
            "answer": "Helen Reduced Role",
            "candidate": 105,
            "answer_feedback": "<p>Helen Reduced Role</p>"
        }
    }, {
        "model": "campaign_trail.answer_feedback",
        "pk": 420,
        "fields": {
            "answer": "Helen Increased Role",
            "candidate": 105,
            "answer_feedback": "<p>Helen Increased Role</p>"
        }
    }, {
        "model": "campaign_trail.answer_feedback",
        "pk": 510,
        "fields": {
            "answer": "Press Contact Basic",
            "candidate": 105,
            "answer_feedback": "<p>Press Contact Basic</p>"
        }
    }, {
        "model": "campaign_trail.answer_feedback",
        "pk": 520,
        "fields": {
            "answer": "Military Contact",
            "candidate": 105,
            "answer_feedback": "<p>Military Contact</p>"
        }
    }, {
        "model": "campaign_trail.answer_feedback",
        "pk": 530,
        "fields": {
            "answer": "Senate Progressive Allies",
            "candidate": 105,
            "answer_feedback": "<p>Senate Progressive Allies</p>"
        }
    }, {
        "model": "campaign_trail.answer_feedback",
        "pk": 540,
        "fields": {
            "answer": "Senate Republican Allies",
            "candidate": 105,
            "answer_feedback": "<p>Senate Republican Allies</p>"
        }
    }, {
        "model": "campaign_trail.answer_feedback",
        "pk": 610,
        "fields": {
            "answer": "Senate Reactionary Allies",
            "candidate": 105,
            "answer_feedback": "<p>Senate Reactionary Allies</p>"
        }
    }, {
        "model": "campaign_trail.answer_feedback",
        "pk": 620,
        "fields": {
            "answer": "Rigeway Reject",
            "candidate": 105,
            "answer_feedback": "<p>Rigeway Reject</p>"
        }
    }, {
        "model": "campaign_trail.answer_feedback",
        "pk": 630,
        "fields": {
            "answer": "Rigeway Deal",
            "candidate": 105,
            "answer_feedback": "<p>Rigeway Deal</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 710,
        "fields": {
            "answer": "Rigeway Compromise",
            "candidate": 105,
            "answer_feedback": "<p>Rigeway Compromise</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 720,
        "fields": {
            "answer": "Large Spending Proposal",
            "candidate": 105,
            "answer_feedback": "<p>Large Spending Proposal</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 730,
        "fields": {
            "answer": "Moderate Spending Proposal",
            "candidate": 105,
            "answer_feedback": "<p>Moderate Spending Proposal</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 810,
        "fields": {
            "answer": "No Spending Proposal",
            "candidate": 105,
            "answer_feedback": "<p>No Spending Proposal</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 820,
        "fields": {
            "answer": "Begin Intel Gathering",
            "candidate": 105,
            "answer_feedback": "<p>Begin Intel Gathering</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 910,
        "fields": {
            "answer": "Delay Intel Gathering",
            "candidate": 105,
            "answer_feedback": "<p>Delay Intel Gathering</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 920,
        "fields": {
            "answer": "Quiet Intel Gathering",
            "candidate": 105,
            "answer_feedback": "<p>Quiet Intel Gathering</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 930,
        "fields": {
            "answer": "Foreign Policy Hardline",
            "candidate": 105,
            "answer_feedback": "<p>Foreign Policy Hardline</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1010,
        "fields": {
            "answer": "Foreign Policy Softline",
            "candidate": 105,
            "answer_feedback": "<p>Foreign Policy Softline</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1110,
        "fields": {
            "answer": "Foreign Policy Third Way",
            "candidate": 105,
            "answer_feedback": "<p>Foreign Policy Third Way</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1120,
        "fields": {
            "answer": "Faubus National Guard",
            "candidate": 105,
            "answer_feedback": "<p>Faubus National Guard</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1210,
        "fields": {
            "answer": "Faubus Negotiation",
            "candidate": 105,
            "answer_feedback": "<p>Faubus Negotiation</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1220,
        "fields": {
            "answer": "Faubus Ignoring",
            "candidate": 105,
            "answer_feedback": "<p>Faubus Ignoring</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1310,
        "fields": {
            "answer": "Funding Decision Military",
            "candidate": 105,
            "answer_feedback": "<p>Funding Decision Military</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1320,
        "fields": {
            "answer": "Funding Decision Civilian",
            "candidate": 105,
            "answer_feedback": "<p>Funding Decision Civilian</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1330,
        "fields": {
            "answer": "Funding Decision Industrial",
            "candidate": 105,
            "answer_feedback": "<p>Funding Decision Industrial</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1410,
        "fields": {
            "answer": "George Response",
            "candidate": 105,
            "answer_feedback": "<p>George Response</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1420,
        "fields": {
            "answer": "Party Relations Basic",
            "candidate": 105,
            "answer_feedback": "<p>Party Relations Basic</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1430,
        "fields": {
            "answer": "Infrastructure Dwight",
            "candidate": 105,
            "answer_feedback": "<p>Infrastructure Dwight</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1510,
        "fields": {
            "answer": "Infrastructure Johnson",
            "candidate": 105,
            "answer_feedback": "<p>Infrastructure Johnson</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1520,
        "fields": {
            "answer": "Infrastructure Helen",
            "candidate": 105,
            "answer_feedback": "<p>Infrastructure Helen</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1610,
        "fields": {
            "answer": "Step Against Hoover",
            "candidate": 105,
            "answer_feedback": "<p>Step Against Hoover</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1620,
        "fields": {
            "answer": "Civilian NASA",
            "candidate": 105,
            "answer_feedback": "<p>Civilian NASA</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1630,
        "fields": {
            "answer": "Military NASA",
            "candidate": 105,
            "answer_feedback": "<p>Military NASA</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1710,
        "fields": {
            "answer": "Howard Hughes Deal",
            "candidate": 105,
            "answer_feedback": "<p>Howard Hughes Deal</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1720,
        "fields": {
            "answer": "Howard Hughes Rejection",
            "candidate": 105,
            "answer_feedback": "<p>Howard Hughes Rejection</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1810,
        "fields": {
            "answer": "State Of The Union Strong",
            "candidate": 105,
            "answer_feedback": "<p>State Of The Union Strong</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1820,
        "fields": {
            "answer": "State Of The Union Cautious",
            "candidate": 105,
            "answer_feedback": "<p>State Of The Union Cautious</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1830,
        "fields": {
            "answer": "State Of The Union Assassination",
            "candidate": 105,
            "answer_feedback": "<p>State Of The Union Assassination</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1910,
        "fields": {
            "answer": "Helen Senate Assignment",
            "candidate": 105,
            "answer_feedback": "<p>Helen Senate Assignment</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1920,
        "fields": {
            "answer": "Helen Foreign Assignment",
            "candidate": 105,
            "answer_feedback": "<p>Helen Foreign Assignment</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2010,
        "fields": {
            "answer": "Strenghten Cuba Garrison",
            "candidate": 105,
            "answer_feedback": "<p>Strenghten Cuba Garrison</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2020,
        "fields": {
            "answer": "Hidden Files Basic",
            "candidate": 105,
            "answer_feedback": "<p>Hidden Files Basic</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 9087,
        "fields": {
            "answer": "Maintain Cuba Garrison",
            "candidate": 105,
            "answer_feedback": "<p>Maintain Cuba Garrison</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 8654,
        "fields": {
            "answer": "Coup Memo Basic",
            "candidate": 105,
            "answer_feedback": "<p>Coup Memo Basic</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 345,
        "fields": {
            "answer": "Infrastructure Pass",
            "candidate": 105,
            "answer_feedback": "<p>Infrastructure Pass</p>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3445,
        "fields": {
            "answer": "Improvements Signing Yes",
            "candidate": 105,
            "answer_feedback": "<p>Improvements Signing Yes</p>"
        }
    },    {
        "model": "campaign_trail.answer_feedback",
        "pk": 764,
        "fields": {
            "answer": "Improvements Signing No",
            "candidate": 105,
            "answer_feedback": "<p>Improvements Signing No</p>"
        }
    },    {
        "model": "campaign_trail.answer_feedback",
        "pk": 56,
        "fields": {
            "answer": "Cuba Revolt Response Strong",
            "candidate": 105,
            "answer_feedback": "<p>Cuba Revolt Response Strong</p>"
        }
    },    {
        "model": "campaign_trail.answer_feedback",
        "pk": 67,
        "fields": {
            "answer": "Cuba Revolt Response Weak",
            "candidate": 105,
            "answer_feedback": "<p>Cuba Revolt Response Weak</p>"
        }
    },    {
        "model": "campaign_trail.answer_feedback",
        "pk": 99,
        "fields": {
            "answer": "Remove Hoover Successful",
            "candidate": 105,
            "answer_feedback": "<p>Remove Hoover Successful</p>"
        }
    },    {
        "model": "campaign_trail.answer_feedback",
        "pk": 90,
        "fields": {
            "answer": "Remove Hoover Failure",
            "candidate": 105,
            "answer_feedback": "<p>Remove Hoover Failure</p>"
        }
    },    {
        "model": "campaign_trail.answer_feedback",
        "pk": 37,
        "fields": {
            "answer": "Remove Hoover Unattempted",
            "candidate": 105,
            "answer_feedback": "<p>Remove Hoover Unattempted</p>"
        }
    },    {
        "model": "campaign_trail.answer_feedback",
        "pk": 54,
        "fields": {
            "answer": "Commandeer FBI",
            "candidate": 105,
            "answer_feedback": "<p>Commandeer FBI</p>"
        }
    },    {
        "model": "campaign_trail.answer_feedback",
        "pk": 65,
        "fields": {
            "answer": "Weaken FBI",
            "candidate": 105,
            "answer_feedback": "<p>Weaken FBI</p>"
        }
    },    {
        "model": "campaign_trail.answer_feedback",
        "pk": 98,
        "fields": {
            "answer": "Military Ultimatum Basic",
            "candidate": 105,
            "answer_feedback": "<p>Military Ultimatum Basic</p>"
        }
    },    
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21,
        "fields": {
            "answer": "Arrest MacArthur Success",
            "candidate": 105,
            "answer_feedback": "<p>Arrest MacArthur Success</p>"
        }
    },
        {
        "model": "campaign_trail.answer_feedback",
        "pk": 45,
        "fields": {
            "answer": "Arrest MacArthur Failure",
            "candidate": 105,
            "answer_feedback": "<p>Arrest MacArthur Failure</p>"
        }
    },
        {
        "model": "campaign_trail.answer_feedback",
        "pk": 36,
        "fields": {
            "answer": "Bureaucracy Plan",
            "candidate": 105,
            "answer_feedback": "<p>Bureaucracy Plan</p>"
        }
    },
        {
        "model": "campaign_trail.answer_feedback",
        "pk": 28,
        "fields": {
            "answer": "Republic Bill",
            "candidate": 105,
            "answer_feedback": "<p>Republic Bill</p>"
        }
    },
        {
        "model": "campaign_trail.answer_feedback",
        "pk": 29,
        "fields": {
            "answer": "Restoration Bill",
            "candidate": 105,
            "answer_feedback": "<p>Restoration Bill</p>"
        }
    },
            {
        "model": "campaign_trail.answer_feedback",
        "pk": 30,
        "fields": {
            "answer": "Restoration Additions",
            "candidate": 105,
            "answer_feedback": "<p>Restoration Additions</p>"
        }
    },
                {
        "model": "campaign_trail.answer_feedback",
        "pk": 31,
        "fields": {
            "answer": "Restoration Corruption",
                "candidate": 105,
                "answer_feedback": "<p>Restoration Corruption</p>"
            }
    },
                {
        "model": "campaign_trail.answer_feedback",
        "pk": 32,
        "fields": {
            "answer": "Military Finale",
            "candidate": 105,
            "answer_feedback": "<p>Military Finale</p>"
        }
    },
                {
        "model": "campaign_trail.answer_feedback",
        "pk": 33,
        "fields": {
            "answer": "Civil Rights Vote",
            "candidate": 105,
            "answer_feedback": "<p>Civil Rights Vote</p>"
        }
    },
                {
        "model": "campaign_trail.answer_feedback",
        "pk": 34,
        "fields": {
            "answer": "Helen Final Decision Positive",
            "candidate": 105,
            "answer_feedback": "<p>Helen Final Decision Positive</p>"
        }
    },
                {
        "model": "campaign_trail.answer_feedback",
        "pk": 35,
        "fields": {
            "answer": "Helen Final Decision Negative",
            "candidate": 105,
            "answer_feedback": "<p>Helen Final Decision Negative</p>"
        }
    },
    

    

]

campaignTrail_temp.candidate_image_url = "https://file.garden/aKoRqbLZKBsHizSA/whathappensonearth/McMathMain.jpg";
campaignTrail_temp.running_mate_image_url = "https://file.garden/aKoRqbLZKBsHizSA/whathappensonearth/HelenDouglasMain.jpg";
campaignTrail_temp.candidate_last_name = "McMath";
campaignTrail_temp.running_mate_last_name = "Douglas";



campaignTrail_temp.jet_data = [{
    "nicknames": {
        "105": "McMath",
        "106": "Nixon",
        "107": "Byrd"
    },
    "banner_enabled": true,
    "banner_data": {
        "runImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/HelenGahagan_Bain.jpg/440px-HelenGahagan_Bain.jpg",
        "canImage": "https://images.findagrave.com/photos/2005/17/7948118_110610542664.jpg",
        "canName": "McMath",
        "runName": "Douglas"
    }
}
]

console.log(document === window.document);
console.log(document.body);



const observer = new MutationObserver(() => {
    const from = document.getElementById("progress_bar");
    const to = document.getElementById("campaign_sign");
    if (from && to && from.parentElement !== to) {
        to.innerHTML = ``
        to.appendChild(from);
        to.innerHTML += gameState.NeccessaryVars.QuestionPictureHolder
    }
});

observer.observe(document.body, { childList: true, subtree: true });
document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const from = document.getElementById("progress_bar");
        const to = document.getElementById("campaign_sign");
        if (from && to && from.parentElement !== to) {
            to.innerHTML = ``
            to.appendChild(from);
            to.innerHTML += gameState.NeccessaryVars.QuestionPictureHolder
        }
    }
});


campaignTrail_temp.cyoa = true;

function getQuestionNumberFromPk(pk) {
    return campaignTrail_temp.questions_json.map(q=>q.pk).indexOf(pk)-1;
}


cyoAdventure = function (a) {
    console.log("cyoAdventure CALLED at", new Date().toLocaleTimeString());

    ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length-1];

    logicalChoiceSystem();

    console.log(gameState)

}
const visitObserver = new MutationObserver(() => {
  const visitContent = document.getElementById("visit_content");
if (!visitContent) return;

const paragraphs = visitContent.querySelectorAll("p");
if (paragraphs.length < 2) return; 

const text = paragraphs[1].textContent.trim();
  observer.disconnect();
  switch (text) {
    case "Helen Dialog":
      visitContent.innerHTML = 
      `
      <h3>MINUTES OF THE MEETING OF ████████████████████ HELD AT ████████████████████ January 17, 1957</h3>
      <p>Helen Douglas: We need skibidi toilet
      <br>
      <br>
      Sid McMath: No, The skibidi is too strong...</p>
      `;
      break;

    case "Clark Dialog":
      visitContent.innerHTML = `
        <h3>Joe’s Feedback</h3>
        <img src="https://file.garden/aKoRqbLZKBsHizSA/whathappensonearth/joe.png" width="208" height="128">
        <p>Joe frowns and crosses his arms.</p>
      `;
      break;

    case "Maria Dialog":
      visitContent.innerHTML = `
        <h3>Maria’s Advice</h3>
        <img src="https://file.garden/aKoRqbLZKBsHizSA/whathappensonearth/maria.png" width="208" height="128">
        <p>Maria offers thoughtful feedback.</p>
      `;
      break;
    case "You have chosen to visit":
        break;

    default:
      
      console.log(`No replacement for: ${text}`);
  }
    observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
});

visitObserver.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true,
});
console.log(numT)



