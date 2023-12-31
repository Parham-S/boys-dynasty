/*   STEP 1   */
export const leagueID = "998344882936668160"; // your league ID
export const leagueName = "The Case of the Extra TE"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>You're not a villain. You're the most misunderstood fucking fantasy football player in my entire life that I've ever met. I mean I brought you here because you're my favorite manager. I've never seen a guy collude harder. And I don't know where you are in your life right now off the waiver wire, all I know is you got a lot of things going. There's a lot of people that have an opinion about you, and whether it be good or bad you're in the spotlight all the time. Let me ask you this, do you want to be in the boys league or not?</p>
  
  <p>Man I've been trying to be in the boys league since Day One. I've been fucking working my ass off harder than anyone. I don't know why it's a question of me being in the boys league, It's like, Do you guys want me to be in the boys league?</p>
  
  <p>Please stop this shit and just accept the league invite. How hard is that? You're a great colluder, just collude.</p> 

  <p>I'm more than just a fantasy colluder man, I'm a real person. It ain't about the trade value, I know how to do that, I show you guys on the daily I can send trade rape offers. This is my life. Ain't no more vetos.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
       "managerID": "732830533951840256",
       "name": "Parham",
       "photo": "/managers/parhamsaniei.png", // square ratio recommended (no larger than 500x500)
       //"tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Broward", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Matt", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 6768, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Honesty and Integrity",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10 interest in trading
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    