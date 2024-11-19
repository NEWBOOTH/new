const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path'); // Import the path module
const { title } = require('process');
const { release } = require('os');
app.use(express.static('public'))
app.set('view engine', 'ejs');

var movieDatas = [
  {
    id: 0,
    title: 'IF (2024)',
    file: 'IF (2024) (Awafim.tv).mkv',
    background: '/imges/download.jpg',
    mediaType: 'movie',
    overview: '"Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
  },
  {
    id: 1,
    title: 'Hit_Man',
    file: 'Hit_Man_480P.mp4',
    background: '/imges/hit man.jpg',
    mediaType: 'movie',
    overview: '"Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
  },
  {
    id: 2,
    title: 'inside out 2',
    file: 'Inside Out 2_360p.mp4',
    background: '/imges/inside out 2.jpg',
    mediaType: 'movie'
  },
  {
    id: 3,
    title: 'A family affair',
    file: 'A_Family_Affair_480P.mp4',
    background: '/imges/family affair.jpg',
    mediaType: 'movie'
  },
  {
    id: 4,
    title: 'Border Lands',
    file: 'Borderlands_360p.mp4',
    background: '/imges/borderlands.jpg',
    mediaType: 'movie'
  },
  {
    id: 5,
    title: 'furiousa',
    file: 'Furiosa A Mad Max Saga (2024) (Awafim.tv).mkv',
    background: '/imges/furiousa.jpg',
    mediaType: 'movie'
  },
  {
    id: 6,
    title: 'bettle juice',
    file: '/Beetlejuice Beetlejuice_360p.mp4',
    background: '/imges/beetle juice.jpg',
    mediaType: 'movie'
  },
  {
    id: 7,
    title: 'the killer',
    file: '/The Killer_360p.mp4',
    background: '/imges/killer.jpg',
    mediaType: 'movie'
  },
  {
   id: 8,
   title: 'the union',
   file: '/The Union_360p.mp4',
   background: '/imges/union.jpg',
   mediaType: 'movie'
  },
  {
    id: 9,
    title: 'ricky staniky',
    file: '/Ricky_Stanicky.mp4',
    background: '/imges/ricky.jpg',
    mediaType: 'movie',
  },
  {
    id: 10,
    title: 'transformers',
    file: '/Transformers One_360p_66019_1728905227122.mp4',
    background: '/imges/transformerOne.jpg',
    mediaType: 'movie',
  },
  {
    id: 11,
    title: 'spencer confidental',
    file: '/Spenser Confidential_360p.mp4',
    background: '/imges/spencer.jpg',
    mediaType: 'movie'
  },
  {
    id: 12,
    title: 'the beeKeeper',
    file: '/The Beekeeper_360p.mp4',
    background: '/imges/keeper.jpg',
    mediaType: 'movie',
  },
  {
    id: 13,
    title: 'the greatest showman',
    file: '/The Greatest Showman_360p.mp4',
    background: '/imges/showman.jpg',
    mediaType: 'movie',
  },
  {
    id: 14,
    title: 'madea goes to jail',
    file: '/Madea Goes to Jail_360p.mp4',
    background: '/imges/madeajail.jpg',
    mediaType: 'movie',
  },
  {
    id: 15,
    title: 'Barbershop the next cut',
    file: '/Barbershop The Next Cut_360p.mp4',
    background: '/imges/barbershop1.jpg',
    mediaType: 'movie',
  },
  {
    id: 16,
    title: 'jackpot',
    file: '/Jackpot!_360p.mp4',
    background: '/imges/jackpot.jpg',
    mediaType: 'movie',
  },
  {
    id: 17,
    title: 'Ghost_Busters After Life',
    file: '/Ghostbusters_Afterlife.mp4',
    background: '/imges/ghost1.jpg',
    mediaType: 'movie',
  },
  {
    id: 18,
    title: "Madea's Big Happy Family",
    file: "/Madea's Big Happy Family_360p.mp4",
    background: '/imges/madea2.jpg',
    mediaType: 'movie',
  },
  {
    id: 19,
    title: 'Baki_Hanma_VS_Kengan_Ashura',
    file: '/Baki_Hanma_VS_Kengan_Ashura_480P.mp4',
    background: '/imges/baki.jpg',
    mediaType: 'movie',
  },
  {
    id: 20,
    title: '365.Days.This.Day.2022',
    file: '/365.Days.This.Day.2022.720p.WEB-DL.mkv',
    background: '/imges/364.jpg',
    mediaType: 'movie',
  },
  {
    id: 21,
    title: 'Venom: The last Dance',
    file: '',
    background: '/imges/venom1.jpg',
    mediaType: 'movie',
  },
  {
    id: 22,
    title: 'Despicable Me4',
    file: '',
    background: '/imges/desp.jpg',
    mediaType: 'movie',
  },
  {
    id: 23,
    title: 'DeadPool vs Wolverine',
    file: '',
    background: '/imges/deadwolf.jpg',
    mediaType: 'movie',
  },
  {
    id: 24,
    title: 'Captain America - The First Avenger',
    file: '',
    background: '/imges/Camerica.jpg',
    mediaType: 'movie',
  },
  {
    id: 25,
    title: 'Ant Man',
    file: '',
    background: '/imges/anty.jpg',
    mediaType: 'movie',
  },
  {
    id: 26,
    title: 'Thor',
    file: '',
    background: '/imges/thor.jpg',
    mediaType: 'movie'
  },
  {
    id: 27,
    title: 'FAST X',
    file: '',
    background: '/imges/fastX.jpg',
    mediaType: 'movie',
  },
  {
    id: 28,
    title: 'Power Project',
    file: '',
    background: '/imges/ppro.jpg',
    mediaType: 'movie',
  },
  {
    id: 29,
    title: "American Pie Pressents: Girls' Rules",
    file: '',
    background: '/imges/pie.jpg',
    mediaType: 'movie',
  },
  {
    id: 30,
    title: "Spider Man 2002",
    file: '',
    background: '/imges/spider202.jpg',
    mediaType: 'movie',
  },
  {
    id: 31,
    title: "  The Crow",
    file: '',
    background: '/imges/crow.jpg',
    mediaType: 'movie',
  },
  {
    id: 32,
    title: "Weekend In Taipei",
    file: '',
    background: '/imges/taipei.jpg',
    mediaType: 'movie',
  },
  {
    id: 33,
    title: "Madea Tough Love",
    file: '',
    background: '/imges/tough.jpg',
    mediaType: 'movie',
  },
  {
    id: 34,
    title: 'They Clone  Tyrone',
    file: '',
    background: '/imges/tyrone.jpg',
    mediaType: 'movie',
  },
  {
    id: 35,
    title: 'Day Shift',
    file: '',
    background: '/imges/dayshift.jpg',
    mediaType: 'movie',
  },
  {
    id: 36,
    title: 'Love of War(2005)',
    file: '',
    background: '/imges/war1.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 37,
    title: 'Get Fast',
    file: '',
    background: '/imges/get.jpg',
    mediaType: 'movie',
    overview: ''
  },
  {
    id: 38,
    title: 'Sonic the Hedgehog 2',
    file: '',
    background: '/imges/sonic1.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 39,
    title: 'The Killer"s Game',
    file: '',
    background: '/imges/code.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 40,
    title: 'Landman',
    file: '',
    background: '/imges/landman.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 41,
    title: 'A.M.I',
    file: '',
    background: '/imges/ami.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 42,
    title: 'Let Him Go',
    file: '',
    background: '/imges/let.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 43,
    title: 'The Dark Tower',
    file: '',
    background: '/imges/tower.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 44,
    title: 'Assassin"s Guild',
    file: '',
    background: '/imges/assassin.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 45,
    title: 'Megalopolis',
    file: '',
    background: '/imges/east.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 46,
    title: 'Umjolo: The Gone Girl',
    file: '',
    background: '/imges/umjolo.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 47,
    title: 'Love Game in Eastern',
    file: '',
    background: '/imges/east1.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 48,
    title: 'Miss PJ',
    file: '',
    background: '/imges/pj.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 49,
    title: 'Anti-Drug Operation',
    file: '',
    background: '/imges/anti.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 50,
    title: 'Untamed',
    file: '',
    background: '/imges/untamed.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 51,
    title: 'Azreal',
    file: '',
    background: '/imges/azreal.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 52,
    title: 'Canary Black',
    file: '',
    background: '/imges/canary.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 53,
    title: '72 Hours',
    file: '',
    background: '/imges/ours.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 54,
    title: 'Dunkirk',
    file: '',
    background: '/imges/dunkirk.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 55,
    title: 'The Devil Judge',
    file: '',
    background: '/imges/devil.jpg',
    mediaType: 'movie',
    overview: '',
  },
  {
    id: 56,
    title: 'Sherlock Holmes',
    file: '',
    background: '/imges/sher.jpg',
    mediaType: 'movie',
    overview: '',
  },
  


];

var series = [
  {
    id:0,
    title: 'Power',
    background: '/imges/power.jpg',
    mediaType: 'series',
    overview: 'A successful New York entrepreneur lives a double life as the head of a drug empire that serves only the rich and influential, all while wanting to escape the underworld and keep his family safe.',
    seasons: [
      {
        season: 1,
        episodes: [
          {
            episode: 1,
            title: 'Not exactly how we planned',
            file: '',
            overview: 'James "Ghost" St. Patrick opens Truth nightclub, hoping its success will let him leave his life as a NYC drug kingpin. But a run-in with a past love and a drug-related attack threaten him.',
          },
          {
            episode: 2,
            title: 'Whoever he is',
            file: '',
            overview: "Ghost and Tommy respond to the attacks on the drug business, Ghost's wife Tasha laments his new club career, and Ghost rekindles his relationship with Angela - a US Attorney chasing Ghost's distributor."
          },
          {
            episode: 3,
            title: 'This is real',
            file: '',
            overview: "A model's near-death in Truth jeopardizes the club's future. The rift between Ghost and Tasha over the nightclub widens. Ghost is reminded that pursuing Angela - and a legit life - could endanger his family."
          },
          {
            episode: 4,
            title: 'Who are you?',
            file: '',
            overview: "Ghost and Tommy plan to gather their network of gang leaders while Angela plans surveillance for the same meeting. The mystery assailant strikes again. Ghost admits to Angela that he's married with children."
          },
          {
            episode: 5,
            title: 'I gotta go',
            file: '',
            overview: "Concerned over Ghost's attitude, Tasha interferes with club business. Ghost and Angela pursue their affair. Tommy dates a club employee. Ghost and Tommy agree that gang leader Ruiz is behind the attacks.",
          },
          {
            episode: 6,
            title: 'Who you with',
            file: '',
            overview: "Tommy makes peace with Ruiz while Angela has one of Ruiz's gang wired. Ghost forgets Tasha's birthday. Ghost and Angela confront the reality of their affair. Ghost's driver speaks too candidly to Tasha"
            
          },
          {
            episode: 7,
            title: 'Loyalty',
            file: '',
            overview: "Tasha sees Angela for the first time. Ghost learns a friend may be behind the hits while Angela races to stop the next attack. Ghost makes a commitment to Angela. The mastermind behind the attacks is revealed."
          },
          {
            episode: 8,
            title: 'Best Laid Plans',
            file: '',
            overview: "Ghost plans a huge party at Think, hoping to expand out of NYC and the drug world. Pink Sneakers attempts to murder Ghost. Ghost makes a big decision in an attempt to achieve his dream of going legit.",
          },
        ]
      },
      {
        season: 2,
        episodes: [
         {
          episode: 1,
          title: 'Consequences',
          file: '',
          overview: "Ghost picks up the pieces at Truth after the botched murder attempt against him, while recommitting to the drug game. Tommy disappears after learning that Angela's with the feds."
         },
         {
          episode: 2,
          title: 'No friends on the street',
          file: '',
          overview: "Tommy agrees to help Ghost expand the drug business under one condition - Ghost uses Angela to discover what she knows about them. Kanan's release from jail is a surprise for Ghost."
         },
         {
          episode: 3,
          title: 'Like we are any other couple',
          file: '',
          overview: "Ghost finally takes Angela to Miami. They live the fantasy of being a couple, but the reality of her investigation destroys it. Back in New York, Tommy and Kanan become close."
         },
         {
          episode: 4,
          title: "You're the only person i can trust",
          file: '',
          overview: "Ghost fights to retain control over everyone in his life: Tommy, Angela, Tasha and Simon Stern, who is making it impossible for him to win back his club."
         },
         {
          episode: 5,
          title: ' Who You Are and Who You Want to Be',
          file: '',
          overview: "Ghost and Tommy work to sell all of the product in time to pay Lobos, unaware that Holly is being questioned by the FBI. With every passing hour, Angela grows closer to the truth."
         },
         {
          episode: 6,
          title: 'Why Her?',
          file: '',
          overview: "After learning that Ghost and Jamie are the same man, Angela looks for proof. A new member joins the drug syndicate. Tasha makes a wife's ultimate sacrifice to protect her future."
         },
         {
          episode: 7,
          title: 'You"re not the man',
          file: '',
          overview: "Tommy's on edge about Holly's disappearance after talking with the feds. Ghost and Tasha work to rein him in. Angela seems to believe Ghost when he explains his actions...or does she?",
         },
         {
          episode: 8,
          title: 'Three moves ahead',
          file: '',
          overview: "Danger closes in on Ghost and Tommy as Lobos fends off a rival drug cartel and the feds. Ghost scrambles to get from underneath Lobos before Angela gets to him first.",
         },
         {
          episode: 9,
          title: 'Time"s Up',
          file: 'POWER/Power_S2E9_360p_1_1723531271737.mp4',
          overview: "Tommy's locked up as Angela and the feds push him to flip on Lobos or spend his life in jail. Ghost works to do the right thing - but the consequences of his actions are steep.",
         },
         {
          episode: 10,
          title: 'Ghosts never Dies',
          file: '',
          overview: "Bodies from Ghost's organization are dropping left and right, each death inching closer to Ghost and Tommy. Both the threat of Kanan and Angela's investigation are just as lethal."
         }

        ]
      },
      {
        season: 3,
        episodes: [
          {
            episode: 1,
            title: 'Call Me James',
            file: 'POWER/Power_S3E1_360p.mp4',
            overview: "Out of the drug game, James is ready to leave 'Ghost' behind. Angela must decide between love and honor. Tasha reels from the death of Shawn. Tommy is forced to make some bold moves.",
          },
          {
            episode: 2,
            title: 'It"s Never Over',
            file: 'POWER/Power_S3E2_360p.mp4',
            overview: "Ghost scrambles to tie up loose ends while he deals with new nightlife competition. Tommy confronts Tasha, as she and Angela must learn to coexist. Tommy gains an advisor in his returned love, Holly."
          },
          {
            episode: 3,
            title: 'I got this on lock',
            file: 'POWER/Power_S3E3_360p.mp4',
            overview: ' overview: "Ghost is presented with an opportunity that could take the clubs to the next level, all while looking over his shoulder. Tommy reunites with Tasha in a scheme, while he also tries to keep a contact under control.',
          },
          {
            episode: 4,
            title: 'Don"t worry baby',
            file: 'POWER/Power_S3E4_360p.mp4',
            overview: "As the opportunity to expand the clubs evolves, Ghost is spread even thinner between Angela, the kids, business, and Tommy. Tommy struggles with a decision, Kanan gets back into the life, and Angela faces doubts.",
           
          },
          {
            episode: 5,
            title: 'Help Me',
            file: 'POWER/Power_S3E5_360p.mp4',
            overview: "Tommy searches for who made the attempt on his life. Greg leans on Ruiz to give up the true 'Ghost', while Angela does all she can to keep them away. Proctor informs Ghost he may have a new problem."
          },
          {
            episode: 6,
            title: 'The right Decision',
            file: 'POWER/Power_S3E6_360p.mp4'
          },
          {
            episode: 7,
            title: 'Don"t Go',
            file: 'POWER/Power_S3E7_360p.mp4'
          },
          {
            episode: 8,
            title: 'Trust Me',
            file: 'POWER/Power_S3E8_360p.mp4'
          },
          {
            episode: 9,
            title: 'I call the shots',
            file: 'POWER/Power_S3E9_360p.mp4'
          },
          {
            episode: 10,
            title: 'In my best Interest',
            file: 'POWER/Power_S3E10_360p.mp4'
          },
        ]
      },
      {
        season: 4,
        episodes: [
          {
            episode: 1,
            title: 'When i get out',
            file: '/POWER/Power_S4E1_360p.mp4',
          },
          {
            episode: 2,
            title: 'The Kind of Man you are',
            file: '/POWER/Power_S4E1_360p.mp4'
          },
          {
            episode: 3,
            title: 'Things are going to get worse',
            file: '/POWER/Power_S4E3_360p.mp4'
          },
          {
            episode: 4,
            title: 'We"re in this together',
            file: '/POWER/Power_S4E4_360p.mp4'
          },
          {
            episode: 5,
            title: 'Don"t Thank Me',
            file: '/POWER/Power_S4E5_360p.mp4'
          },
          {
            episode: 6,
            title: 'New Man',
            file: '/POWER/Power_S4E6_360p.mp4'
          },
          {
            episode: 7,
            title: 'You Lied to my Face',
            file: '/POWER/Power_S4E7_360p.mp4'
          },
          {
            episode: 8,
            title: 'It"s Done',
            file: '/POWER/Power_S4E8_360p.mp4'
          },
          {
            episode: 9,
            title: 'That ain"t Me',
            file: '/POWER/Power_S4E9_360p.mp4'
          },
          {
            episode: 10,
            title: 'You can"t fix this',
            file: '/POWER/Power_S4E10_360p.mp4'
          },
        ],
      },
      {
        season: 5,
        episodes: [
          {
            episode: 1,
            title: 'Everyone is Implicated',
            file: '/POWER/Power_S5E1_360p.mp4'
          },
          {
            episode: 2,
            title: 'Damage Control',
            file: '/POWER/Power_S5E2_360p.mp4'
          },
          {
            episode: 3,
            title: 'Are we on the same team',
            file: '/POWER/Power_S5E3_360p.mp4'
          },
          {
            episode: 4,
            title: 'Second Chances',
            file: '/POWER/Power_S5E4_360p.mp4'
          },
          {
            episode: 5,
            title: 'Happy Birthday',
            file: '/POWER/Power_S5E5_360p.mp4'
          },
          {
            episode: 6,
            title: 'A changed Man',
            file: '/POWER/Power_S5E6_360p.mp4'
          },
          {
            episode: 7,
            title: 'The Devil Inside',
            file: '/POWER/Power_S5E7_360p.mp4'
          },
          {
            episode: 8,
            title: 'Friend of the family',
            file: '/POWER/Power_S5E8_360p.mp4'
          },
          {
            episode: 9,
            title: 'Ther"s a snitch anomg Us',
            file: '/POWER/Power_S5E9_360p.mp4'
          },
          {
            episode: 10,
            title: 'When this is over',
            file: '/POWER/Power_S5E10_360p.mp4'
          }
        ]
      },
      {
        season: 6,
        episodes: [
          {
            episode: 1,
            title: 'Muderres',
            file: '\POWER\Power_S6E1_360p.mp4'
          },
          {
            episode: 2,
            title: 'Whose side are you on',
            file: '\POWER\Power_S6E2_360p.mp4'
          },
          {
            episode: 3,
            title: 'Forget About Dre',
            file: '\POWER\Power_S6E3_360p.mp4'
          },
          {
            episode: 4,
            title: 'Why is tommy still alive',
            file: '\POWER\Power_S6E4_360p.mp4'
          },
          {
            episode: 5,
            title: 'King"s Gambit',
            file: '\POWER\Power_S6E5_360p.mp4'
          },
          {
            episode: 6,
            title: 'Inside Man',
            file: '\POWER\Power_S6E6_360p.mp4'
          },
          {
            episode: 7,
            title: 'Like Father , Like son',
            file: '\POWER\Power_S6E7_360p.mp4'
          },
          {
            episode: 8,
            title: 'Deal with the devil',
            file: '\POWER\Power_S6E8_360p.mp4'
          },
          {
            episode: 9,
            title: 'Scorched Earth',
            file: '\POWER\Power_S6E9_360p.mp4'
          },
          {
            episode: 10,
            title: 'No one can stop me',
            file: '\POWER\Power_S6E10_360p.mp4'
          },
          {
            episode: 11,
            title: 'Still Dre',
            file: '\POWER\Power_S6E11_360p.mp4'
          },
          {
            episode: 12,
            title: 'He always wins',
            file: '\POWER\Power_S6E12_360p.mp4'
          },
          {
            episode: 13,
            title: 'It"s all your fault',
            file: '\POWER\Power_S6E13_360p.mp4'
          },
          {
            episode: 14,
            title: 'Reversal of Fortunes',
            file: '\POWER\Power_S6E14_360p.mp4'
          },
          {
            episode: 15,
            title: 'Exactly how we planned',
            file: '\POWER\Power_S6E15_360p.mp4'
          },
        ]
      }
    ]
  },
  {
    id: 1,
    title: 'Power Book II: Ghost',
    background: '/imges/power2.jpg',
    mediaType: 'series',
    release: '2020-09-06',
    overview: 'Picking up just days after the “Power” finale, this sequel series follows Tariq navigating his new life, in which his desire to shed his father’s legacy comes up against the mounting pressure to save his family.',
    seasons: [
      {
        season: 1,
        episodes: [
          {
            episode: 1,
            title: 'The Stranger',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S01_EP01.mp4',
          },
          {
           episode: 2,
           title: 'Exceeding Expectations',
           file: '/Power Book II/Power_Book_II_Ghost_360P_S01_EP02.mp4',
          },
          {
            episode: 3,
            title: 'Play The Game',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S01_EP03.mp4',
          },
          {
            episode: 4,
            title: 'The Prince',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S01_EP04.mp4',
          },
          {
            episode: 5,
            title: 'The Gift of the Magi',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S01_EP04.mp4',
          },
          {
            episode: 6,
            title: 'Good vs Evil',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S01_EP04.mp4',
          },
          {
            episode: 7,
            title: 'Sex Week',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S01_EP04.mp4',
          },
          {
            episode: 8,
            title: 'Family First',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S01_EP04.mp4',
          },
          {
            episode: 9,
            title: 'Monster',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S01_EP04.mp4',
          },
          {
            episode: 10,
            title: 'Heart of Darkness',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S01_EP04.mp4',
          },
        ]
      },
      {
        season: 2,
        episodes: [
          {
            episode: 1,
            title: 'Free Will is Never Free',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S02_EP01.mp4',
          },
          {
            episode: 2,
            title: 'Selfless Acts',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S02_EP02.mp4',
          },
          {
            episode: 3,
            title: 'The Greater Good',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S02_EP03.mp4',
          },
          {
            episode: 4,
            title: 'Gettin" These Ends',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S02_EP04.mp4',
          },
          {
            episode: 5,
            title: 'Coming Home To Roost',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S02_EP05.mp4',
          },
          {
            episode: 6,
            title: 'What" Free?',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S02_EP06.mp4',
          },
          {
            episode: 7,
            title: 'Forced My Hand',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S02_EP07.mp4',
          },
          {
            episode: 8,
            title: 'Drug Related',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S02_EP08.mp4',
          },
          {
            episode: 9,
            title: 'Fair Night',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S02_EP09.mp4',
          },
          {
            episode: 10,
            title: 'Love War',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S02_EP010.mp4',
          },
        ]
      },
      {
        season: 3,
        episodes: [
          {
            episode: 1,
            title: 'Your Perception, Your Reality',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S03_EP01.mp4'
          },
          {
            episode: 2,
            title: 'Need vs Greed',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S03_EP02.mp4'
          },
          {
            episode: 3,
            title: 'Human Capital',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S03_EP03.mp4'
          },
          {
            episode: 4,
            title: 'The Land of Opportunity',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S03_EP04.mp4'
          },
          {
            episode: 5,
            title: 'No More Second Chances',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S03_EP05.mp4'
          },
          {
            episode: 6,
            title: 'Land of Lies',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S03_EP06.mp4'
          },
          {
            episode: 7,
            title: 'Deal or No Deal',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S03_EP07.mp4'
          },
          {
            episode: 8,
            title: 'Sacrifice',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S03_EP08.mp4'
          },
          {
            episode: 9,
            title: 'A Last Gift',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S03_EP09.mp4'
          },
          {
            episode: 10,
            title: 'Divided We Stand',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S03_EP010.mp4'
          },
        ]
      },
      {
        season: 4,
        episodes: [
          {
            episode: 1,
            title: 'I Don"t Die Easy',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S04_EP01.mp4'
          },
          {
            episode: 2,
            title: 'To Thine Own Self',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S04_EP02.mp4'
          },
          {
            episode: 3,
            title: 'Birthright',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S04_EP03.mp4'
          },
          {
            episode: 4,
            title: 'The Reckoning',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S04_EP04.mp4'
          },
          {
            episode: 5,
            title: 'Ego Death',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S04_EP05.mp4'
          },
          {
            episode: 6,
            title: 'The Devil"s Playground',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S04_EP06.mp4'
          },
          {
            episode: 7,
            title: 'I Can"t Fix This',
            file: '/Power Book II/Power_Book_II_Ghost_360P_S04_EP07.mp4'
          },
          {
            episode: 8,
            title: 'Higher Calling',
            file: ''
          },
          {
            episode: 9,
            title: 'Married To The Game',
            file: ''
          },
          {
            episode: 10,
            title: 'Ghost In The Machine',
            file: ''
          }
        ]
      },
    ]
  },
  {
    id: 2,
    title: 'Power Book III: Raising Kanan',
    background: '/imges/power3.jpg',
    mediaType: 'series',
    overview: 'Set in South Jamaica, Queens, in 1991, this prequel to "Power" revolves around the coming of age of Kanan Stark.',
    seasons: [
      {
        season: 1,
        episodes: [
          {
            episode: 1,
            title: 'Back In The Day',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S1E1_360p.mp4',
          },
          {
            episode: 2,
            title: ' Reaping and Sowing',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S1E2_360p.mp4',
          },
          {
            episode: 3,
            title: ' Stick and Move',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S1E3_360p.mp4',
          },

          {
            episode: 4,
            title: 'Don"t Sleep ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S1E4_360p.mp4',
          },
          {
            episode: 5,
            title: 'Choose Your Bestie ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S1E5_360p.mp4',
          },
          {
            episode: 6,
            title: 'Level Up ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S1E6_360p.mp4',
          },
          {
            episode: 7,
            title: 'Stay In your Lane ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S1E7_360p.mp4',
          },
          {
            episode: 8,
            title: ' The Cost Of Business',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S1E8_360p.mp4',
          },
          {
            episode: 9,
            title: 'Loyal TO The End ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S1E9_360p.mp4',
          },
          {
            episode: 10,
            title: 'Paid In Full ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S1E10_360p.mp4',
          },

        ]
      },
      {
        season: 2,
        episodes: [
          {
            episode: 1,
            title: ' The More Things Change',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S2E1_360p.mp4',
          },
          {
            episode: 2,
            title: 'Mind Your Business ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S2E2_360p.mp4',
          },
          {
            episode: 3,
            title: ' Sleeping Dogs',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S2E3_360p.mp4',
          },
          {
            episode: 4,
            title: ' Pay The Toll',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S2E4_360p.mp4',
          },
          {
            episode: 5,
            title: ' What Happens in the Catskills',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S2E5_360p.mp4',
          },
          {
            episode: 6,
            title: 'It"s a Business, Man ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S2E6_360p.mp4',
          },
          {
            episode: 7,
            title: ' No Love Lost',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S2E7_360p.mp4',
          },
          {
            episode: 8,
            title: 'A Home Is a Home ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S2E8_360p.mp4',
          },
          {
            episode: 9,
            title: 'Anti-Trust ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S2E9_360p.mp4',
          },
          {
            episode: 10,
            title: " If Y'Dont't Know, Now Y'Know",
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S2E10_360p.mp4',
          },
        ]
      },
      {
        season: 3,
        episodes: [
          {
            episode: 1,
            title: ' Home Sweet Home',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S3E1_360p.mp4',
          },
          {
            episode: 2,
            title: ' Flipmode',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S3E2_360p.mp4',
          },
          {
            episode: 3,
            title: ' Open for Business',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S3E3_360p.mp4',
          },
          {
            episode: 4,
            title: ' In Sheep"s Clothing',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S3E4_360p.mp4',
          },
          {
            episode: 5,
            title: 'Brothers"s and Keepers ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S3E5_360p.mp4',
          },
          {
            episode: 6,
            title: 'Into the Darkness ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S3E6_360p.mp4',
          },
          {
            episode: 7,
            title: 'Where All Are Guilty ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S3E7_360p.mp4',
          },
          {
            episode: 8,
            title: 'Reckonings ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S3E8_360p.mp4',
          },
          {
            episode: 9,
            title: ' Home To Roost',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S3E9_360p.mp4',
          },
          {
            episode: 10,
            title: 'Made You Look ',
            file: '/POWER KANAN III/Power Book III_ Raising Kanan_S3E10_360p.mp4',
          },
        ]
      },
    ]
  },
  {
    id: 3,
    title: 'Power Book IV: Force',
    background: '/imges/power4.jpg',
    mediaType: 'series',
    release: '2022-02-06',
    overview:  'Tommy Egan leaves New York behind and plans to take on Chicago, using his outsider status to break all the local rules and rewrite them on his quest to become the biggest drug dealer in the city.',
    seasons: [
      {
        season: 1,
        episodes: [
          {
            episode:1,
            title: ' A Short Fuse and A Long Memory',
            file: '/POWER BOOK IV/Power Book IV_ Force_S1E1_360p.mp4',
          },
          {
            episode:2,
            title: 'King of the Goddamn Hills',
            file: '/POWER BOOK IV/Power Book IV_ Force_S1E2_360p.mp4',
          },
          {
            episode:3,
            title: 'Fire Stater',
            file: '/POWER BOOK IV/Power Book IV_ Force_S1E3_360p.mp4',
          },
          {
            episode:4,
            title: 'Storm Clouds',
            file: '/POWER BOOK IV/Power Book IV_ Force_S1E4_360p.mp4',
          },
          {
            episode:5,
            title: 'Take Me Home',
            file: '/POWER BOOK IV/Power Book IV_ Force_S1E5_360p.mp4',
          },
          {
            episode:6,
            title: 'This is Who We Are',
            file: '/POWER BOOK IV/Power Book IV_ Force_S1E6_360p.mp4',
          },
          {
            episode:7,
            title: 'Outrunning A Ghost',
            file: '/POWER BOOK IV/Power Book IV_ Force_S1E7_360p.mp4',
          },
          {
            episode:8,
            title: ' He A"int Heavy',
            file: '/POWER BOOK IV/Power Book IV_ Force_S1E8_360p.mp4',
          },
          {
            episode:9,
            title: 'Trust',
            file: '/POWER BOOK IV/Power Book IV_ Force_S1E9_360p.mp4',
          },
          {
            episode:10,
            title: 'Family Business',
            file: '/POWER BOOK IV/Power Book IV_ Force_S1E10_360p.mp4',
          },
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Ghosts',
    background: '/imges/ghost2.jpg',
    mediaType: 'series',
    release: '2024-10-10',
    overview: 'Samantha and Jay throw caution to the wind when they convert their recently inherited country estate into a bed-and-breakfast. Call it mislaid plans. Not only is the place falling apart, but it’s also inhabited by spirits of previous residents -- whom only Samantha can see and hear',
    seasons: [
      {
        season: 1,
        episodes: [

        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Kite Man: Hell Yeah!',
    background: '/imges/kitty.jpg',
    mediaType: 'series',
    release: '2024-07-18',
    overview: 'Lovable loser Kite Man and his new squeeze Golden Glider moonlight as criminals to support their foolish purchase of Noonan’s, Gotham’s seediest dive bar, where everybody knows your name, but not necessarily your secret identity!',
    seasons : [
      {
        season: 1,
        episodes: [
          {
            episode: 1,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 2,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 3,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 4,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 5,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 6,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 7,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 8,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 9,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 10,
            title: '',
            file: '',
            overview: '',
          },
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Citadel: Honey Bunny',
    background: '/imges/honey.jpg',
    mediaType: 'series',
    release: '2024-11-06',
    overview: 'When stuntman Bunny recruits struggling actress Honey for a side gig, they are hurled into a high-stakes world of action, espionage and betrayal. Years later, as their dangerous past catches up, the estranged Honey and Bunny must reunite and fight to protect their young daughter Nadia.',
    seasons : [
      {
        season: 1,
        episodes: [
          {
            episode: 1,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 2,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 3,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 4,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 5,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 6,
            title: '',
            file: '',
            overview: '',
          },
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Tomb Raider: The Legend of Lara Croft',
    background: '/imges/lara.jpg',
    mediaType: 'series',
    release: '2024-10-10',
    overview: 'Thrust into a high-stakes chase around the world, fearless adventurer Lara Croft confronts her traumatic past while unraveling an ancient mystery.',
    seasons : [
      {
        season: 1,
        episodes: [
          {
            episode: 1,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 2,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 3,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 4,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 5,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 6,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 7,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 8,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 9,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 10,
            title: '',
            file: '',
            overview: '',
          },
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'Fight Night:The Million Dollar heist',
    background: '/imges/fight.jpg',
    mediaType: 'series',
    release: '2024-09-05',
    overview: 'The story of how on the night of Ali’s defeat of Jerry Quarry, which came after he was banned from boxing for refusing to enter the military draft, hundreds of guests at an after-party were robbed at gunpoint, becoming one of the largest armed robberies the country has ever seen',
    seasons : [
      {
        season: 1,
        episodes: [
          {
            episode: 1,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 2,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 3,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 4,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 5,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 6,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 7,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 8,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 9,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 10,
            title: '',
            file: '',
            overview: '',
          },
        ]
      }
    ]
  },
  {
    id: 9,
    title: 'Poppa"s House',
    background: '/imges/poppa.jpg',
    mediaType: 'series',
    release: '2024-10-21',
    overview: 'Legendary talk radio host and happily divorced Poppa has his point of view challenged at work when a new female co-host is hired, and at home where he finds himself still parenting his adult son, a brilliant dreamer who is trying to pursue his passion while being a responsible father and husband',
    seasons : [
      {
        season: 1,
        episodes: [
          {
            episode: 1,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 2,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 3,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 4,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 5,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 6,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 7,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 8,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 9,
            title: '',
            file: '',
            overview: '',
          },
          {
            episode: 10,
            title: '',
            file: '',
            overview: '',
          },
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'Chicago P.D',
    background: '/imges/pd.jpg',
    mediaType: 'series',
    release: '2014-01-08',
    overview: "A riveting police drama about the men and women of the Chicago Police Department's District 21 who put it all on the line to serve and protect their community. District 21 is made up of two distinctly different groups: the uniformed cops who patrol the beat and go head-to-head with the city's street crimes and the Intelligence Unit that combats the city's major offenses - organized crime, drug trafficking, high profile murders and beyond",
    seasons : [
      {
        season: 1,
        episodes: [

        ]
      },
      {
        season:2,
        episodes: [

        ]
      },
      {
        season:3,
        episodes: [
          
        ]
      },
      {
        season:4,
        episodes: [
          
        ]
      },
      {
        season:5,
        episodes: [
          
        ]
      },
      {
        season:6,
        episodes: [
          
        ]
      },
      {
        season:7,
        episodes: [
          
        ]
      },
      {
        season:8,
        episodes: [
          
        ]
      },
      {
        season:9,
        episodes: [
          
        ]
      },
      {
        season:10,
        episodes: [
          
        ]
      },
      {
        season:11,
        episodes: [
          
        ]
      },
      {
        season:12,
        episodes: [
          
        ]
      },
      {
        season:13,
        episodes: [
          
        ]
      },
      {
        season:14,
        episodes: [
          
        ]
      }

    ]
  },
    {
      id: 11,
      title: 'Chicago Fire',
      background: '/imges/cf.jpg',
      mediaType: 'series',
      release: '2012-10-10',
      overview: "An edge-of-your-seat view into the lives of everyday heroes committed to one of America's noblest professions. For the firefighters, rescue squad and paramedics of Chicago Firehouse 51, no occupation is more stressful or dangerous, yet so rewarding and exhilarating. These courageous men and women are among the elite who forge headfirst into danger when everyone else is running the other way and whose actions make the difference between life and death.",
      seasons : [
        {
          season: 1,
          episodes: [
  
          ]
        },
        {
        season:2,
        episodes: [

        ]
      },
      {
        season:3,
        episodes: [
          
        ]
      },
      {
        season:4,
        episodes: [
          
        ]
      },
      {
        season:5,
        episodes: [
          
        ]
      },
      {
        season:6,
        episodes: [
          
        ]
      },
      {
        season:7,
        episodes: [
          
        ]
      },
      {
        season:8,
        episodes: [
          
        ]
      },
        {
          season:8,
          episodes: [
            
          ]
        },
        {
          season:9,
          episodes: [
            
          ]
        },
        {
          season:10,
          episodes: [
            
          ]
        },
        {
          season:11,
          episodes: [
            
          ]
        },
        {
          season:12,
          episodes: [
            
          ]
        },
        {
          season:13,
          episodes: [
            
          ]
        },
        {
          season:14,
          episodes: [
            
          ]
        }
      ]
    },
    {
      id: 12,
      title: 'The Neighborhood',
      background: '/imges/hood.jpg',
      mediaType: 'series',
      overview: "The nicest guy in the Midwest moves his family into a tough neighborhood in Los Angeles where not everyone appreciates his extreme neighborliness. That includes their new next-door neighbor Calvin.",
      release: '2018-10-01',
      seasons : [
        {
          season: 1,
          episodes: [
  
          ]
        }
      ]
    },
    {
      id: 13,
      title: 'Chicago Med',
      background: '/imges/med.jpg',
      mediaType: 'series',
      release: '2015-11-17',
      overview: "An emotional thrill ride through the day-to-day chaos of the city's most explosive hospital and the courageous team of doctors who hold it together. They will tackle unique new cases inspired by topical events, forging fiery relationships in the pulse-pounding pandemonium of the emergency room.",
      seasons : [
        {
          season: 1,
          episodes: [
  
          ]
        },
        {
        season:2,
        episodes: [

        ]
      },
      {
        season:3,
        episodes: [
          
        ]
      },
      {
        season:4,
        episodes: [
          
        ]
      },
      {
        season:5,
        episodes: [
          
        ]
      },
      {
        season:6,
        episodes: [
          
        ]
      },
      {
        season:7,
        episodes: [
          
        ]
      },
      {
        season:8,
        episodes: [
          
        ]
      },
      ]
    },
    {
      id: 14,
      title: 'The Legend of Vox Machina',
      background: '/imges/vox.jpg',
      mediaType: 'series',
      overview: "They're rowdy, they're ragtag, they're misfits turned mercenaries for hire. Vox Machina is more interested in easy money and cheap ale than actually protecting the realm. But when the kingdom is threatened by evil, this boisterous crew realizes that they are the only ones capable of restoring justice.",
      genre: 'Action',
      release : "2022-01-27",
      seasons : [
        {
          season: 1,
          episodes: [
             {
              episode: 1,
              title: 'The Terror of Tal"Dorei-Part1',
              file: '',
              overview: '',
             },
             {
              episode: 2,
              title: 'The Terror of Tal"Dorei-Part2',
              file: '',
              overview: '',
             },
             {
              episode: 3,
              title: 'The Feast of Realms',
              file: '',
              overview: '',
             },
             {
              episode: 4,
              title: 'Shadows at the Gate',
              file: '',
              overview: '',
             },
             {
              episode: 5,
              title: 'Fate"s Journey',
              file: '',
              overview: '',
             },
             {
              episode: 6,
              title: 'Spark the Rebellion',
              file: '',
              overview: '',
             },
             {
              episode: 7,
              title: 'Scanbo',
              file: '',
              overview: '',
             },
             {
              episode: 8,
              title: 'A Silver Tongue',
              file: '',
              overview: '',
             },
             {
              episode: 9,
              title: 'The Tide of Bone',
              file: '',
              overview: '',
             },
             {
              episode: 10,
              title: 'Depths of Deceit',
              file: '',
              overview: '',
             },
             {
              episode: 11,
              title: 'Whispers at Ziggurat',
              file: '',
              overview: '',
             },
             {
              episode: 12,
              title: 'The Darkness within',
              file: '',
              overview: '',
             }
          ]
        },
        {
          season: 2,
          episodes: [
             {
              episode: 1,
              title: 'Rise Of Chroma Conclave',
              file: '',
              overview: '',
             },
             {
              episode: 2,
              title: 'The Trails Of Vasselheim',
              file: '',
              overview: '',
             },
             {
              episode: 3,
              title: 'The Sucken Tomb',
              file: '',
              overview: '',
             },
             {
              episode: 4,
              title: 'Those Who Walk Away',
              file: '',
              overview: '',
             },
             {
              episode: 5,
              title: 'Pass Through Fire',
              file: '',
              overview: '',
             },
             {
              episode: 6,
              title: 'Into Rimecleft',
              file: '',
              overview: '',
             },
             {
              episode: 7,
              title: 'The Fey Realm',
              file: '',
              overview: '',
             },
             {
              episode: 8,
              title: 'Echo Tree',
              file: '',
              overview: '',
             },
             {
              episode: 9,
              title: 'A Test Of Pride',
              file: '',
              overview: '',
             },
             {
              episode: 10,
              title: 'The Killbox',
              file: '',
              overview: '',
             },
             {
              episode: 11,
              title: 'Belly Of the Beast',
              file: '',
              overview: '',
             },
             {
              episode: 12,
              title: 'The Hope Devourer',
              file: '',
              overview: '',
             }
          ]
        },
        {
          season: 3,
          episodes: [
             {
              episode: 1,
              title: 'A Deadly Bargain',
              file: '',
              overview: '',
             },
             {
              episode: 2,
              title: 'Prisoners of Ank"Harel',
              file: '',
              overview: '',
             },
             {
              episode: 3,
              title: 'Vexations',
              file: '',
              overview: '',
             },
             {
              episode: 4,
              title: 'Hell To Pay',
              file: '',
              overview: '',
             },
             {
              episode: 5,
              title: 'The Frigid Doom',
              file: '',
              overview: '',
             },
             {
              episode: 6,
              title: 'The coming Storms',
              file: '',
              overview: '',
             },
             {
              episode: 7,
              title: 'Cloak and Dagger',
              file: '',
              overview: '',
             },
             {
              episode: 8,
              title: 'The Siege Emon',
              file: '',
              overview: '',
             },
             {
              episode: 9,
              title: 'Thordak',
              file: '',
              overview: '',
             },
             {
              episode: 10,
              title: 'To The Ends of The World',
              file: '',
              overview: '',
             },
             {
              episode: 11,
              title: 'Deadly Echoes',
              file: '',
              overview: '',
             },
             {
              episode: 12,
              title: 'Souls In Darkness',
              file: '',
              overview: '',
             }
          ]
        },
        {
          season: 4,
          episodea: [
            {
              episode: 1,

            }
          ]
        }
      ]
    },
    {
      id: 15,
      title: 'Jurassic World:Chaos Theory',
      background: '/imges/chaos.jpg',
      mediaType: 'series',
      release: "2024-05-24",
      overview: "The Camp Cretaceous gang comes together to unravel a mystery when they discover a global conspiracy that brings danger to dinosaurs — and to themselves.",
      seasons : [
        {
          season: 1,
          episodes: [
  
          ]
        }
      ]
    },
    {
      id: 16,
      title: 'Chicago Justice',
      background: '/imges/justice.jpg',
      mediaType: 'series',
      seasons : [
        {
          season: 1,
          episodes: [
  
          ]
        },
        {
          season: 2,
          episodes: [

          ]
        }
      ]
    },
    {
      id: 17,
      title: 'Never Have I Ever',
      background: '/imges/ever.jpg',
      mediaType: 'series',
      seasons: [
        {
          season: 1,
          episodes: [

          ]
        },
        {
          season: 2,
          episodes: [

          ]
        },
        {
          season: 3,
          episodes: [

          ]
        }

      ]
    },
    {
      id: 18,
      title: 'Blue Eye Sumurai',
      background: '/imges/blueSumurai.jpg',
      mediaType: 'series',
      genre: 'Action',
      seasons: [
        {
          season: 1,
          episodes: [
            {
              episode: 1,
              title: 'Hemmarscale',
              overview: '',

            },
            {
              episode: 2,
              title: 'An Unexpected Element',
              overview: '',
              
            },
            {
              episode: 3,
              title: 'A Fixed Number of Paths',
              overview: '',
              
            },
            {
              episode: 4,
              title: 'Peculiarities',
              overview: '',
              
            },
            {
              episode: 5,
              title: 'The Tale of the Ronin and the Bride',
              overview: '',
              
            },
            {
              episode: 6,
              title: 'All Evil Dreams and Angry Words',
              overview: '',
              
            },
            {
              episode: 7,
              title: 'Nothing Broken',
              overview: '',
              
            },
            {
              episode: 8,
              title: 'The Great Fire of 1657',
              overview: '',
              
            },
          ]
        },
        {
          season: 2,
          episodes: [

          ]
        }
      ]
    },
    {
      id: 19,
      title: 'Skull Island',
      background: '/imges/skull.jpg',
      overview: "Shipwrecked in the South Pacific, a group of explorers encounter a menagerie of fearsome creatures — including the giant ape who rules the island: Kong.",
      mediaType: 'series',
      release : "2023-06-22",
      seasons: [
        {
          season: 1,
          episodes: [

          ]
        }
      ]
    },
    {
      id: 20,
      title: 'AGENTS Of S.H.I.E.LD',
      background: '/imges/shield.jpg',
      mediaType: 'series',
      seasons: [
        {
          season: 1,
          episodes: [

          ]
        }
      ]
    },
    {
      id: 21,
      title: 'Castlevania',
      background: '/imges/castle1.jpg',
      mediaType: 'series',
      genre: 'Action',
      year: 2017,
      seasons: [
        {
          season: 1,
          episodes: [
            {
              episode: 1,
              title: 'Witchbottle',
              flle: '',
              overview: '',
            },
            {
              episode: 2,
              title: 'Necroplis',
              overview: '',
            },
            {
              episode: 3,
              title: 'Labyrinth',
              overview: '',
            },
            {
              episode: 4,
              title: 'Monument',
              overview: '',
            }
          ]
        },
        {
          season: 2,
          episodes: [
            {
              episode: 1,
              title: 'War Council',
              flle: '',
              overview: '',
            },
            {
              episode: 2,
              title: 'Old Homes',
              overview: '',
            },
            {
              episode: 3,
              title: 'Shadow Battles',
              overview: '',
            },
            {
              episode: 4,
              title: 'Broken Mast',
              overview: '',
            },
            {
              episode: 5,
              title: 'Last Spell',
              flle: '',
              overview: '',
            },
            {
              episode: 6,
              title: 'For Love',
              overview: '',
            },
            {
              episode: 7,
              title: 'For Love',
              overview: '',
            },
            {
              episode: 8,
              title: 'End Times',
              overview: '',
            }
          ]
        },
        {
          season: 3,
          episodes: [
            {
              episode: 1,
              title: 'Bless your Dead Little Heart',
              flle: '',
              overview: '',
            },
            {
              episode: 2,
              title: 'The Reparation of My Heart',
              overview: '',
            },
            {
              episode: 3,
              title: 'Investigators',
              overview: '',
            },
            {
              episode: 4,
              title: 'I Have a scheme',
              overview: '',
            },
            {
              episode: 5,
              title: 'A Seat of cilivilation and Refinement',
              flle: '',
              overview: '',
            },
            {
              episode: 6,
              title: 'The Good Dream',
              overview: '',
            },
            {
              episode: 7,
              title: 'Worse Things than Betrayal',
              overview: '',
            },
            {
              episode: 8,
              title: 'What the Night Brings',
              overview: '',
            },
            {
              episode: 9,
              title: 'The Harvest',
              file: '',
              overview: '',
            },
            {
              episode: 10,
              title: 'Abandon All Hope',
              file: '',
              overview: '',
            }

          ]
        },
        {
          season: 2,
          episodes: [
            {
              episode: 1,
              title: 'War Council',
              flle: '',
              overview: '',
            },
            {
              episode: 2,
              title: 'Old Homes',
              overview: '',
            },
            {
              episode: 3,
              title: 'Shadow Battles',
              overview: '',
            },
            {
              episode: 4,
              title: 'Broken Mast',
              overview: '',
            },
            {
              episode: 5,
              title: 'Last Spell',
              flle: '',
              overview: '',
            },
            {
              episode: 6,
              title: 'For Love',
              overview: '',
            },
            {
              episode: 7,
              title: 'For Love',
              overview: '',
            },
            {
              episode: 8,
              title: 'End Times',
              overview: '',
            }
          ]
        },
        {
          season: 4,
          episodes: [
            {
              episode: 1,
              title: 'Bless your Dead Little Heart',
              flle: '',
              overview: '',
            },
            {
              episode: 2,
              title: 'The Reparation of My Heart',
              overview: '',
            },
            {
              episode: 3,
              title: 'Investigators',
              overview: '',
            },
            {
              episode: 4,
              title: 'I Have a scheme',
              overview: '',
            },
            {
              episode: 5,
              title: 'A Seat of cilivilation and Refinement',
              flle: '',
              overview: '',
            },
            {
              episode: 6,
              title: 'The Good Dream',
              overview: '',
            },
            {
              episode: 7,
              title: 'Worse Things than Betrayal',
              overview: '',
            },
            {
              episode: 8,
              title: 'What the Night Brings',
              overview: '',
            },
            {
              episode: 9,
              title: 'The Harvest',
              file: '',
              overview: '',
            },
            {
              episode: 10,
              title: 'Abandon All Hope',
              file: '',
              overview: '',
            }

          ]
        }
      ]
    },
    {
      id: 22,
      title: 'Power Ranger S.P.D',
      background: '/imges/spd.jpg',
      mediaType: 'series',
      seasons: [
        {
          season: 1,
          episodes: [
            
          ]
        }
      ]
    },
    {
      id: 23,
      title: 'Love Between Fairy and Devil',
      background: '/imges/lad.jpg',
      mediaType: 'series',
      seasons: [
        {
          season: 1,
          episodes: [
            
          ]
        }
      ]
    },
    {
      id: 24,
      title: 'Lady Revenger Returns From The Fire',
      background: '/imges/revenger.jpg',
      mediaType: 'series',
      seasons: [
        {
          season: 1,
          episodes: [
            
          ]
        }
      ]
    },
    {
      id: 25,
      title: 'Untamed',
      background: '/imges/untamed.jpg',
      mediaType: 'series',
      genre: 'Action',
      seasons: [
        {
          season: 1,
          episodes: [
            {
              episode: 1,
              overview: '',
            },
            {
              episode: 2,
              overview: '',
            },
            {
              episode: 3,
              overview: '',
            },
            {
              episode: 4,
              overview: '',
            },
            {
              episode: 5,
              overview: '',
            },
            {
              episode: 6,
              overview: '',
            },
            {
              episode: 7,
              overview: '',
            },
            {
              episode: 8,
              overview: '',
            },
            {
              episode: 9,
              overview: '',
            },
            {
              episode: 10,
              overview: '',
            },
            {
              episode: 11,
              overview: '',
            },
            {
              episode: 12,
              overview: '',
            },
            {
              episode: 13,
              overview: '',
            },
            {
              episode: 14,
              overview: '',
            },
            {
              episode: 15,
              overview: '',
            },
            {
              episode: 16,
              overview: '',
            },
            {
              episode: 17,
              overview: '',
            },
            {
              episode: 18,
              overview: '',
            },
            {
              episode: 19,
              overview: '',
            },
            {
              episode: 20,
              overview: '',
            },
            {
             episode: 21,
             overview: '',
                },
                {
                  episode: 22,
                  overview: '',
                },
                {
                  episode: 23,
                  overview: '',
                },
                {
                  episode: 24,
                  overview: '',
                },
                {
                  episode: 25,
                  overview: '',
                },
                {
                  episode: 26,
                  overview: '',
                },
                {
                  episode: 27,
                  overview: '',
                },
                {
                  episode: 28,
                  overview: '',
                },
                {
                  episode: 29,
                  overview: '',
                },
                {
                  episode: 30,
                  overview: '',
                },
                {
                  episode: 31,
                  overview: '',
                },
                {
                  episode: 32,
                  overview: '',
                },
                {
                 episode: 33,
                  overview: '',
                },
                    {
                      episode: 34,
                      overview: '',
                    },
                    {
                      episode: 34,
                      overview: '',
                    },
                    {
                      episode: 35,
                      overview: '',
                    },
                    {
                      episode: 36,
                      overview: '',
                    },
                    {
                      episode: 37,
                      overview: '',
                    },
                    {
                      episode: 38,
                      overview: '',
                    },
                    {
                      episode: 39,
                      overview: '',
                    },
                    {
                      episode: 40,
                      overview: '',
                    },
                    {
                      episode: 41,
                      overview: '',
                    },
                    {
                      episode: 42,
                      overview: '',
                    },
                    {
                      episode: 43,
                      overview: '',
                    },
                    {
                      episode: 44,
                      overview: '',
                    },
                    {
                      episode: 45,
                      overview: '',
                    },
                    {
                      episode: 46,
                      overview: '',
                    },
                    {
                      episode: 47,
                      overview: '',
                    },
                    {
                      episode: 48,
                      overview: '',
                    },
                    {
                      episode: 49,
                      overview: '',
                    },
                    {
                      episode: 50,
                      overview: '',
                    },


          ]
        }
      ]
    },
    {
      id: 26,
      title: 'Love Game in Eastern',
      background: '/imges/east1.jpg',
      mediaType: 'series',
      seasons: [
        {
          season: 1,
          episodes: [
            
          ]
        }
      ]
    },
    {
      id: 27,
      title: 'Agatha All Along',
      background: '/imges/agatha.jpg',
      mediaType: 'series',
      seasons: [
        {
          season: 1,
          episodes: [
            {
              episode: 1,
              title: 'Seekest Thou The Road',
              file: '',
              overview: '',
            },
            {
              episode: 1,
              title: 'Seekest Thou The Road',
              file: '',
              overview: '',
            },
            {
              episode: 2,
              title: 'Circle sewn with Fate /Unlock Thy Hidden',
              file: '',
              overview: '',
            },
            {
              episode: 3,
              title: 'Through Many Miles/Of Tricks and Tri',
              file: '',
              overview: '',
            },
            {
              episode: 4,
              title: 'If I can"t Reach You/Let My Sone Teach',
              file: '',
              overview: '',
            },
            {
              episode: 6,
              title: 'Darkest Hour/Wake Thy Power',
              file: '',
              overview: '',
            },
            {
              episode: 7,
              title: 'Death"s Hand In Mine',
              file: '',
              overview: '',
            },
            {
              episode: 8,
              title: 'Follow Me My Friend/To Glory at the',
              file: '',
              overview: '',
            },
            {
              episode: 9,
              title: 'Maiden Mother Crone',
              file: '',
              overview: '',
            },
          ]
        }
      ]
    },
    {
      id: 28,
      title: 'House Of The Dragon',
      background: '/imges/dragon.jpg',
      mediaType: 'series',
      genre: 'Action',
      seasons: [
        {
          season: 1,
        episodes: [
          {
            episode: 1,
            title: 'The Heirs of the Dragon',
            file: '',
            overview: ''
          },
          {
            episode: 2,
            title: 'The Rogue Prince',
            file: '',
            overview: ''
          },
          {
            episode: 3,
            title: 'Second of His Name',
            file: '',
            overview: ''
          },
          {
            episode: 4,
            title: 'King of the Narrow Sea',
            file: '',
            overview: ''
          },
          {
            episode: 5,
            title: 'We Light the Way',
            file: '',
            overview: ''
          },
          {
            episode: 6,
            title: 'The Princess and the Queen',
            file: '',
            overview: ''
          },
          {
            episode: 7,
            title: 'DriftMark',
            file: '',
            overview: ''
          },
          {
            episode: 8,
            title: 'The Lord of the Tides',
            file: '',
            overview: ''
          },
          {
            episode: 9,
            title: 'The Green Council',
            file: '',
            overview: ''
          },
          {
            episode: 10,
            title: 'The Black Queen',
            file: '',
            overview: ''
          },
        ]
        },
        {
          season: 2,
        episodes: [
          {
            episode: 1,
            title: 'A Son for a Son',
            file: '',
            overview: ''
          },
          {
            episode: 2,
            title: 'Rhaenyra the Cruel',
            file: '',
            overview: ''
          },
          {
            episode: 3,
            title: 'The Burning Mill',
            file: '',
            overview: ''
          },
          {
            episode: 4,
            title: 'The Red Dragon and the Gold',
            file: '',
            overview: ''
          },
          {
            episode: 5,
            title: 'Regent',
            file: '',
            overview: ''
          },
          {
            episode: 6,
            title: 'Smallfolk',
            file: '',
            overview: ''
          },
          {
            episode: 7,
            title: 'The Red Sowing',
            file: '',
            overview: ''
          },
          {
            episode: 8,
            title: 'The Queen Who Ever Was',
            file: '',
            overview: ''
          },
        ]
        }
      ]
    }
  
]

// ... (other code)
const combinedData = [...movieDatas, ...series];
// ... other code ...

// ... other requires and variable declarations

const itemsPerPage = 18; // Number of items per page

app.get('/', (req, res) => {
  const currentPage = parseInt(req.query.page) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const searchTerm = req.query.search || ''; // Get search term from query parameter (or empty string if none)
  const combinedData = [...movieDatas, ...series];

  // Filter the data based on the search term (case-insensitive)
  const filteredData = combinedData.filter(item => 
    searchTerm.toLowerCase() === '' || // If no search, show all data
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  res.render('home', { 
    combinedData: paginatedData, 
    currentPage: currentPage, 
    totalPages: totalPages,
    searchTerm: searchTerm // Pass the search term to the template
  });
});



// ...rest of your code


 
 // ... other code ...
 
 


app.get('/download/:id', function(req, res) {
  const movieId = parseInt(req.params.id);
  const movie = movieDatas.find(movie => movie.id === movieId);

  if (movie) {
    // Ensure the file path is correct
    const filePath = path.join(__dirname, 'uploads/movies', movie.file);
    res.download(filePath);
  } else {
    res.status(404).send('Movie not found.');
  }
});

// ... (other routes for series downloads, etc.)
app.get('/movie', function(req,res){
  res.render('movie',  {movieDatas:movieDatas})
})

app.get('/movie/:movieId', function(req, res) {
  const movieId = parseInt(req.params.movieId); // Parse the movieId
  const movie = movieDatas.find(movie => movieId === movie.id);
  if (movie) {
    // Pass the movie to the 'movieDetails' template 
    res.render('downloadPage', {movie:movie }); // Use movieDetails instead of downloadPage
  } else {
    res.status(404).send('Movie not found.');
  }
});


// ... (other code)

app.get('/tv', function(req, res){
  res.render('tv', {series: series});
});

app.get('/series/:seriesId', function(req, res) {
  const seriesId = parseInt(req.params.seriesId);
  const seriesData = series.find(s => s.id === seriesId);
  const searchTerm = req.query.search || '';

   const filteredData = combinedData.filter(item => 
    searchTerm.toLowerCase() === '' || // If no search, show all data
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  if (seriesData) {
    res.render('downloadRes', { series: seriesData });
  } else {
    res.status(404).send('Series not found.');
  }
});
app.get('/res/series/:seriesId/:season/:episode', (req, res) => {
  const seriesId = parseInt(req.params.seriesId);
  const seasonNumber = parseInt(req.params.season);
  const episodeNumber = parseInt(req.params.episode);

  const seriesData = series.find(s => s.id === seriesId);

  if (seriesData) {
      const season = seriesData.seasons.find(s => s.season === seasonNumber);
      if (season) {
          const episode = season.episodes.find(e => e.episode === episodeNumber);
          if (episode) {
              res.render('restv', {season:season, episode: episode, series: seriesData }); 
          } else {
              res.status(404).send('Episode not found.');
          }
      } else {
          res.status(404).send('Season not found.');
      }
  } else {
      res.status(404).send('Series not found.');
  }
});





// Download Series Route
app.get('/download/series/:seriesId/:season/:episode', function(req, res){
  const seriesId = parseInt(req.params.seriesId);
  const season = parseInt(req.params.season);
  const episode = parseInt(req.params.episode);

  const seriesData = series.find(s => s.id === seriesId);

  if (seriesData) {
    const seasonData = seriesData.seasons.find(s => s.season === season);
    if (seasonData) {
      const episodeData = seasonData.episodes.find(e => e.episode === episode);
      if (episodeData) {
        const filePath = path.join(__dirname, 'uploads/series', episodeData.file);
        res.download(filePath);
      } else {
        res.status(404).send('Episode not found.');
      }
    } else {
      res.status(404).send('Season not found.');
    }
  } else {
    res.status(404).send('Series not found.');
  }
});

// ... (other code)

app.get('/k-series', function(req,res){
  res.render('k-series')
});

app.get('/k-movie', function(req,res){
  res.render('k-movie')
})



app.listen(4000, function(){
  console.log('port running on port 3000');
});
