const { name } = require('ejs');
const express = require('express');
const app = express();

var movieDatas = [
    {
      id: 0,
      title: 'IF (2024)',
      file: 'IF (2024) (Awafim.tv).mkv',
      background: '/imges/download.jpg',
      mediaType: 'movie',
      release: '2024-05-08',
      overview: "After discovering she can see everyone's imaginary friends, a girl embarks on a magical adventure to reconnect forgotten imaginary friends with their kids."
    },
    {
      id: 1,
      title: 'Hit_Man',
      file: 'Hit_Man_480P.mp4',
      background: '/imges/hit man.jpg',
      mediaType: 'movie',
      release: '2024-05-16',
      overview: 'A mild-mannered professor moonlighting as a fake hit man in police stings ignites a chain reaction of trouble when he falls for a potential client.',
    },
    {
      id: 2,
      title: 'inside out 2',
      file: 'Inside Out 2_360p.mp4',
      background: '/imges/inside out 2.jpg',
      release: '2024-06-11',
      overview: "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
      mediaType: 'movie'
    },
    {
      id: 3,
      title: 'A family affair',
      file: 'A_Family_Affair_480P.mp4',
      background: '/imges/family affair.jpg',
      overview: "The only thing worse than being the assistant to a high-maintenance movie star who doesn't take you seriously? Finding out he's smitten with your mom.",
      mediaType: 'movie',
      release: '2024-06-27',
    },
    {
      id: 4,
      title: 'Border Lands',
      file: 'Borderlands_360p.mp4',
      background: '/imges/borderlands.jpg',
      mediaType: 'movie',
      overview: 'Returning to her home planet, an infamous bounty hunter forms an unexpected alliance with a team of unlikely heroes. Together, they battle monsters and dangerous bandits to protect a young girl who holds the key to unimaginable power.',
      release: '2024-08-07',
    },
    {
      id: 5,
      title: 'furiousa',
      file: 'Furiosa A Mad Max Saga (2024) (Awafim.tv).mkv',
      background: '/imges/furiousa.jpg',
      mediaType: 'movie',
      overview: 'As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.',
      release: '2024-05-22'
    },
    {
      id: 6,
      title: 'bettle juice',
      file: '/Beetlejuice Beetlejuice_360p.mp4',
      background: '/imges/beetle juice.jpg',
      mediaType: 'movie',
      overview: 'A newly dead New England couple seeks help from a deranged demon exorcist to scare an affluent New York family out of their home.',
      release: '1988-03-30'
    },
    {
      id: 7,
      title: 'the killer',
      file: '/The Killer_360p.mp4',
      background: '/imges/killer.jpg',
      mediaType: 'movie',
      release: '2024-08-22',
      overview: 'Zee is a feared contract killer known as "the Queen of the Dead," but when she refuses to murder a young blind woman, she finds herself hunted both by criminal colleagues and a determined police detective.',
    },
    {
     id: 8,
     title: 'the union',
     file: '/The Union_360p.mp4',
     background: '/imges/union.jpg',
     mediaType: 'movie',
     overview: 'A New Jersey construction worker goes from regular guy to aspiring spy when his long-lost high school sweetheart recruits him for an espionage mission.',
     release: ' 2024-08-15',
  
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
      genre: 'Drama',
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
      release: '2024-10-22',
      overview: "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance."
    },
    {
      id: 22,
      title: 'Despicable Me 4',
      file: '',
      background: '/imges/desp.jpg',
      mediaType: 'movie',
      overview: 'Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.',
      release: '2024-06-20'
    },
    {
      id: 23,
      title: 'DeadPool vs Wolverine',
      file: '',
      background: '/imges/deadwolf.jpg',
      mediaType: 'movie',
      release: '2024-07-24',
      overview: 'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.'
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
      id:28,
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
      title: 'They Clone Tyrone',
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
      id: 27,
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
      mediaType: 'series',
      overview: '',
    },
    {
      id: 56,
      title: 'Sherlock Holmes',
      file: '',
      background: '/imges/sher.jpg',
      mediaType: 'movie',
      release: ''
    },
    {
      id: 57,
      title: 'Moana 2',
      file: '',
      background: '/imges/moana2.jpg',
      overview: "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced",
      release: '2024-11-27',
      mediaType: 'movie'
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
      title: 'The Legend of Vox Machina',
      background: '/imges/vox.jpg',
      mediaType: 'series',
      overview: "They're rowdy, they're ragtag, they're misfits turned mercenaries for hire. Vox Machina is more interested in easy money and cheap ale than actually protecting the realm. But when the kingdom is threatened by evil, this boisterous crew realizes that they are the only ones capable of restoring justice.",
      genre: 'Action',
      release : "2022-01-'",
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
   
  ];
  
 
 
  
  const recommendedMovies = [
    {
      id: 70,
      title: 'The Legend of Vox Machina',
      background: '/imges/vox.jpg',
      mediaType: 'series',
      overview: "They're rowdy, they're ragtag, they're misfits turned mercenaries for hire. Vox Machina is more interested in easy money and cheap ale than actually protecting the realm. But when the kingdom is threatened by evil, this boisterous crew realizes that they are the only ones capable of restoring justice.",
      genre: 'Action',
      release : "2022-01-'",
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
      id: 56,
      title: 'Sherlock Holmes',
      file: '',
      background: '/imges/sher.jpg',
      mediaType: 'movie',
      release: ''
    },
  ]


  var series = [
    {
      id:560,
      title: 'Power',
      background: '/imges/power.jpg',
      mediaType: 'series',
      trailer: ' ',
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
            file: 'POWER/Power_S2E9_360p.mp4',
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
      background: '/imges/power21.jpg',
      "backdrop_path": "/wEWHx6ybjGihzx7e9pammt0BUXW.jpg",
      mediaType: 'series',
      release: '2020-09-06',
      trailer: ' ',
      overview: 'Picking up just days after the “Power” finale, this sequel series follows Tariq navigating his new life, in which his desire to shed his father’s legacy comes up against the mounting pressure to save his family.',
      seasons: [
        {
          season: 1,
          episodes: [
            {
              release: "2020-09-06",
              episode: 1,
              "episode_type": "standard",
              title: "The Stranger",
              "overview": "As Tariq St. Patrick begins his new life at Stansfield University, he's torn between two worlds.",
              "runtime": 60 
            },
            {
              release: "2020-09-13",
              episode: 2,
              "episode_type": "standard",
              title: "Exceeding Expectations",
              "overview": "Tariq St. Patrick adjusts to the changes that were prompted by a dramatic change in how his world is operated, which includes the death of his father and his mother confronting murder charges for a crime that her son was responsible for.",
              "runtime": 60 
            },
            {
              release: "2020-09-20",
              episode: 3,
              "episode_type": "standard",
              title: "Play The Game",
              "overview": "Tariq struggles with the weight of providing for his mother's mounting legal defence while juggling the rigours of Ivy League life.",
              "runtime": 60 
            },
            {
              release: "2020-09-27",
              episode: 4,
              "episode_type": "standard",
              title: "The Prince",
              "overview": "After Monet's agreed to do business with him, Tariq initiates his play to control the drug market on campus, while insulating his and Monet's involvement.",
              "runtime": 60 
            },
            {
              release: "2020-09-27",
              episode: 4,
              "episode_type": "standard",
              title: "The Prince",
              "overview": "After Monet's agreed to do business with him, Tariq initiates his play to control the drug market on campus, while insulating his and Monet's involvement.",
              "runtime": 60 
            },
            {
              release: "2020-10-04",
              episode: 5,
              "episode_type": "standard",
              title: "The Gift of the Magi",
              "overview": "It's Tariq's 18th birthday, but there's no cause for celebration, or time. Saxe brings him news that could blow up Tasha's case. Tariq is concerned that Brayden's budding relationship could put their business in danger.",
              "runtime": 60 
            },
            {
              release: "2020-12-06",
              episode: 6,
              "episode_type": "standard",
              title: "Good vs. Evil",
              "overview": "Tariq's hands are tied, fearing that fully letting Brayden in on their arrangement with the Tejadas has put him on a violent collision course with Cane, who demonstrates the price paid for using his name.",
              "runtime": 60 
            },
            {
              release: "2020-12-13",
              episode: 7,
              "episode_type": "standard",
              title: "Sex Week",
              "overview": "As the heat is turned up on campus, Tariq isn't trying to be left in the cold with Lauren. Or is it Diana he's in to?",
              "runtime": 60 
            },
            {
              release: "2020-12-20",
              episode: 8,
              "episode_type": "standard",
              title: "Family First",
              "overview": "Tariq can't help but feel left out, as parents flood the campus for Homecoming at Stansfield.",
              "runtime": 60 
            },
            {
              release: "2020-12-27",
              episode: 9,
              "episode_type": "standard",
              title: "Monster",
              "overview": "After the head-on collision of Tariq's worlds at Homecoming, the campus is hot, causing problems as he tries to settle up on debts.",
              "runtime": 60 
            },
            {
              release: "2021-01-03",
              episode: 10,
              "episode_type": "finale",
              title: "Heart of Darkness",
              "overview": "Tariq will do whatever it takes to clear his mother. But knowing he's not in the clear with Monet, Tariq's backed against the wall trying to keep his promise to get Tasha out of prison.",
              "runtime": 60 
            },
          ]
        },
        {
          season: 2,
          episodes: [
            {
              release: "2021-11-21",
              episode: 1,
              "episode_type": "standard",
              title: "Free Will is Never Free",
              "overview": "Tariq tries to resume his normal college life. Brayden provides Tariq an escape. Monet makes plans for the business to protect her children. Cane seeks out a new family to take the streets for himself.",
              "runtime": 60,
            },
            {
              release: "2021-11-28",
              episode: 2,
              "episode_type": "standard",
              title: "Selfless Acts?",
              "overview": "Tariq will need to let go of the past to save whats left of his family. Diana helps Monet repair the business, but sees Monet is distracted. Cane takes a lesson from a new ally to get what he wants.",
              "runtime": 60,
            },
            {
              release: "2021-12-05",
              episode: 3,
              "episode_type": "standard",
              title: "The Greater Good",
              "overview": "Tariq tries to keep CourseCorrect from going under. While Diana's wary of Canes motives and Zeke's future is put at risk, everyone is wondering, where is Monet?",
              "runtime": 60,
            },
            {
              release: "2021-12-12",
              episode: 4,
              "episode_type": "standard",
              title: "Gettin' These Ends",
              "overview": "Davis questions Tariq's client referrals; Cane finds Brayden eager to prove himself and gives him the chance to make some real money; Zeke needs everyone's help to assure his professional basketball future is protected.",
              "runtime": 60,
            },
            {
              release: "2021-12-19",
              episode: 5,
              "episode_type": "standard",
              title: "Coming Home to Roost",
              "overview": "Tariq races against the clock for Yasmine. With pressure being placed on Monet from her family and from Mecca, she struggles to wear the Tejada crown, and questions whether she has to anymore.",
              "runtime": 60,
            },
            {
              release: "2022-01-09",
              episode: 6,
              "episode_type": "standard",
              title: "What's Free?",
              "overview": "Tariq reflects on where he is in his life and who he can trust. Brayden must decide whether to protect his family or help save Tariq's. Monet's faced with a new world order within her own family.",
              "runtime": 60,
            },
            {
              release: "2022-01-16",
              episode: 7,
              "episode_type": "standard",
              title: "Forced My Hand",
              "overview": "Tariq, finds himself on a quest for normalcy, which is not in arm's reach as he returns to school and attempts to find evidence of his innocence. Helping Tariq, as always, are Davis and Saxe.",
              "runtime": 60,
            },
            {
              release: "2022-01-23",
              episode: 8,
              "episode_type": "standard",
              title: "Drug Related",
              "overview": "Davis advises Tariq on the best way to protect himself against Jenny and Saxe questions what lines Davis crossed in doing so. Carrie realizes her own actions have put her students in harm's way.",
              "runtime": 60,
            },
            {
              release: "2022-01-30",
              episode: 9,
              "episode_type": "standard",
              title: "A Fair Fight?",
              "overview": "Tariq's fate lies in the hands of Tate. Monet's choices feel out of her control. She must rely on Mecca to help salvage the pieces of her family. Mecca plays his hand to put Monet right where he wants her.",
              "runtime": 60,
            },
            {
              release: "2022-02-06",
              episode: 10,
              "episode_type": "finale",
              title: "Love and War",
              "overview": "Tariq refuses to give up on his loved ones. Tariq must help Monet save her own family. Monet, finally seeing the whole board, must move quickly to protect her family from Mecca.",
              "runtime": 60,
            },
          ]
        },
        {
          season: 3,
          episodes: [
            {
              release: "2023-03-17",
              episode: 1,
              "episode_type": "standard",
              title: "Your Perception, Your Reality",
              "overview": "A new semester at Stansfield means a fresh start for Tariq. Brayden is learning the ropes at Weston Holdings, under his uncle Lucas. Monet grieves the loss of Zeke, while Cane searches for a new connect.",
              runtime: 66,
            },
            {
              release: "2023-03-24",
              episode: 2,
              "episode_type": "standard",
              title: "Need vs. Greed",
              "overview": "Tariq, Brayden, Effie, and Cane divvy up Noma’s product to push. Lorenzo sets a plan in motion to keep Monet off his trail after she orders him to find Zeke’s killer. Cane looks into what happened at Mecca’s hangar.",
              runtime: 61,
            },
            {
              release: "2023-03-31",
              episode: 3,
              "episode_type": "standard",
              title: "Human Capital",
              "overview": "Tariq and the rest of the team must find a way to get the product flowing at an even bigger scale. Tensions rise amongst the Tejadas when Lorenzo backs Cane’s plan. Saxe digs into the Theo Rollins case.",
              runtime: 62,
            },
            {
              release: "2023-04-07",
              episode: 4,
              "episode_type": "standard",
              title: "The Land of Opportunity",
              "overview": "The Tejadas and Davis discuss how they’re going to handle Whitman. Dru sets up a risky deal with the help of a family friend. The R.I.C.O. team gets a lead, Diana is encouraged to break ties with her family.",
              runtime: 62,
            },
            {
              release: "2023-04-14",
              episode: 5,
              "episode_type": "standard",
              title: "No More Second Chances",
              "overview": "A business deal takes Tariq, Brayden, and Effie to Milan. Monet digs deeper after Davis provides her new information regarding Zeke’s murder. Saxe doubles down to find out what Jenny is hiding.",
              runtime: 65,
            },
            {
              release: "2023-04-21",
              episode: 6,
              "episode_type": "standard",
              title: "Land of Lies",
              "overview": "Tariq demands answers after a startling revelation shakes up the relationships in his life — both business and personal. Tragedy brings the Tejadas to the brink of war as they work with the Castillos to enact revenge.",
              runtime: 62,
            },
            {
              release: "2023-04-28",
              episode: 7,
              "episode_type": "standard",
              title: "Deal or No Deal",
              "overview": "Tariq teams up with Tate to plot retaliation after an attack puts the street operation on pause. Monet makes a play to reestablish control over the business. Brayden uncovers a secret that could jeopardize everything.",
              runtime: null,
            },
            {
              release: "2023-05-05",
              episode: 8,
              "episode_type": "standard",
              title: "Sacrifice",
              "overview": "The feds apply pressure to get their suspect to flip. Dru’s erratic behavior leads the Castillos to grow suspicious. As Tate prepares to go up against his political opponent, Harper brings his ethics into question.",
              runtime: null,
            },
            {
              release: "2023-05-19",
              episode: 9,
              "episode_type": "standard",
              title: "A Last Gift",
              "overview": "Tariq scrambles to get ahead of information that could incriminate the drug organization and jeopardize his family’s safety. The feds double down and set their sights on a new target to aid their investigation.",
              runtime: null,
            },
            {
              release: "2023-05-26",
              episode: 10,
              "episode_type": "standard",
              title: "Divided We Stand",
              "overview": "Tariq is forced to join forces with those who betrayed him in order to prevent the worst possible outcome for everyone. Monet elevates her position within the business, reaffirming her power over the Tejada children.",
              runtime: null,
            },
          ]
        },
        {
          season: 4,
          episodes: [
            {
              release: "2024-06-07",
              episode: 1,
              "episode_type": "standard",
              title: "I Don't Die Easy",
              "overview": "Tariq and Brayden must find a way to secure their own safety as Noma and the Tejadas race to take them out; Monet fights for her life and for another chance to do right by her children.",
              runtime: 58,
            },
            {
              release: "2024-06-14",
              episode: 2,
              "episode_type": "standard",
              title: "To Thine Own Self",
              "overview": "Tariq and Brayden struggle to adjust to life as normal, broke college students. Monet wants back into the game and answers about who took shots at her. Noma seeks out an opportunity to expand with the Russians.",
              runtime: 54,
            },
            {
              release: "2024-06-21",
              episode: 3,
              "episode_type": "standard",
              title: "Birthright",
              "overview": "Tariq and Brayden must find an in with a vicious new connect. Monet realizes her kids might not be being honest with her. Detective Carter's task force digs deeper into Tariq's connection to a major player in Noma's camp.",
              runtime: 57,
            },
            {
              release: "2024-06-28",
              episode: 4,
              "episode_type": "standard",
              title: "The Reckoning",
              "overview": "With the truth of their treachery uncovered, Dru and Diana are on the run. Tariq and Monet are on the hunt but find themselves interrupted when Detective Carter and Kamaal Tate show up with questions.",
              runtime: 58,
            },
            {
              release: "2024-07-05",
              episode: 5,
              "episode_type": "mid_season",
              title: "Ego Death",
              "overview": "Tariq is sent on a journey of self-discovery that gives him clarity on what his path moving forward must be. As Monet fights to keep her family together, Detective Carter and his task force move in on the Tejadas.",
              runtime: 57,
            },
            {
              release: "2024-09-06",
              episode: 6,
              "episode_type": "standard",
              title: "Devil's Playground",
              "overview": "With eyes back on their business, Tariq and Brayden must find a way to get back in Noma's good graces; Diana is faced with a dilemma: stepping further into the game than she's gone before, or risk her family's safety.",
              runtime: 59,
            },
            {
              release: "2024-09-13",
              episode: 7,
              "episode_type": "standard",
              title: "I Can't Fix This",
              "overview": "When tragedy strikes, Tariq and the Tejadas are set on a mission to avenge what they’ve lost. Dru must take out a threat to Carter’s organization in order to protect his family.",
              runtime: 59,
            },
            {
              release: "2024-09-20",
              episode: 8,
              "episode_type": "standard",
              title: "Higher Calling",
              "overview": "Tariq and Monet try to leverage a way to get out from under Carter... by making a play to Noma. Positioned on opposite sides, Cane and Dru compete for the streets. An incident with Brayden’s relationship with Elle sends him off the deep end as he goes from puppy to pit bull.",
              runtime: 55,
            },
            {
              release: "2024-09-27",
              episode: 9,
              "episode_type": "standard",
              title: "Married to the Game",
              "overview": "A union that should bring the Tejadas and Noma together, couldn't appear to be further apart; Tariq and Monet are sent on a seemingly simple mission.",
              runtime: 58,
            },
            {
              release: "2024-10-04",
              episode: 10,
              "episode_type": "finale",
              title: "Ghost in the Machine",
              "overview": "The epic conclusion to this chapter of Power.",
              "runtime": 62,
            }
          ]
        },
      ]
    },
    {
      "backdrop_path": null,
      "id": 277445,
      title: "Power Book V: Origins",
      mediaType: 'series',
      trailer: ' ',
      background: '/yx1pc9vS1EtQyUu2ocxeds1GM52.jpg',
      "overview": "",
      "poster_path": "/yx1pc9vS1EtQyUu2ocxeds1GM52.jpg",
      seasons: [

      ]
    },
    {
      "backdrop_path": null,
      "id": 357557,
      trailer: ' ',
      "title": "Princess of Power: A Golden Books Video",
      "overview": "Adapting three of the She-Ra Golden Books story books as read-along adventures: 'The Sword of She-Ra,' 'Glimmer of Hope,' and 'The Fear Factory.'",
      "poster_path": null,
      mediaType: "movie",
      release: "1985-09-02",
    },
    {
      background: "/cZwgcJMptOdlsOTWgkFaGfwZuVi.jpg",
      "id": 124394,
      title: "Power Book III: Raising Kanan",
      trailer: ' ',
      "overview": "Set in South Jamaica, Queens, in 1991, this prequel to 'Power' revolves around the coming of age of Kanan Stark.",
      "poster_path": "/cZwgcJMptOdlsOTWgkFaGfwZuVi.jpg",
      mediaType: "series",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
      18,
      80
      ],
      seasons: [
        {
          season: 1,
          episodes: [
            {
              release: "2021-07-18",
              episode: 1,
              "episode_type": "standard",
               title: "BACK IN THE DAY",
              "overview": "It's 1991 in South Jamaica, Queens, and 15-year-old Kanan Stark is eager to join his family's growing drug business, led by his mother, 'Raquel Raq' Thomas.",
              "runtime": 60,
            },
            {
              release: "2021-07-25",
              episode: 2,
              "episode_type": "standard",
               title: "REAPING AND SOWING",
              "overview": "After a rival crew member is killed, Raq does whatever is necessary to get the target off Kanan's back.",
              "runtime": 60,
            },
            {
              release: "2021-08-01",
              episode: 3,
              "episode_type": "standard",
               title: "STICK AND MOVE",
              "overview": "Still reeling from a shocking death, Kanan pushes his way into the drug game with Marvin’s help while Raq plots to take down her competition.",
              "runtime": 60,
            },
            {
              release: "2021-08-08",
              episode: 4,
              "episode_type": "standard",
               title: "DON'T SLEEP",
              "overview": "All bets are off when a police raid clears out Raq's competition. Promises are broken, secrets are revealed, and revenge is swift.",
              "runtime": 60,
            },
            {
              release: "2021-08-15",
              episode: 5,
              "episode_type": "standard",
               title: "CHOOSE YOUR BATTLES",
              "overview": "Eager to transform her business after the stash house is hit, Raq overhauls her operation. Meanwhile, Kanan is detained after a fight with Scrappy.",
              "runtime": 60,
            },
            {
              release: "2021-08-29",
              episode: 6,
              "episode_type": "standard",
               title: "LEVEL UP",
              "overview": "Lou's new artist showcase becomes the nexus of the rivalry between Raq and Unique. At the same time, Kanan cooks up a drug-selling scheme with Marvin.",
              "runtime": 60,
            },
            {
              release: "2021-09-05",
              episode: 7,
              "episode_type": "standard",
               title: "STAY IN YOUR LANE",
              "overview": "Kanan and Marvin's side hustle goes awry. Raq seeks revenge for the attack on Scrappy. Jukebox suffers a devastating blow.",
              "runtime": 60,
            },
            {
              release: "2021-09-12",
              episode: 8,
              "episode_type": "standard",
               title: "THE COST OF BUSINESS",
              "overview": "Kanan struggles with a harsh truth after word gets back to Raq that hes behind the bad crack on the streets. Jukebox learns the troubling facts behind Nicoles death. Lou finds himself caught in a crossfire.",
              "runtime": 60,
            },
            {
              release: "2021-09-19",
              episode: 9,
              "episode_type": "standard",
               title: "LOYAL TO THE END",
              "overview": "As Lou recovers in the hospital, Marvin seeks revenge. Feeling the pressure, Raq turns to Kanan to take out the biggest threat to their family.",
              "runtime": 60,
            },
            {
              release: "2021-09-26",
              episode: 10,
              "episode_type": "finale",
               title: "PAID IN FULL",
              "overview": "As the situation in the neighborhood turns dire, Raq scrambles to get Kanan out of harm’s way.",
              "runtime": 60,
            },
          ]
        },
        {
          season: 2,
          episodes: [
            {
              release: "2022-08-14",
              episode: 1,
              "episode_type": "standard",
               title: "THE MORE THINGS CHANGE",
              "overview": "Kanan returns to Queens where Raq is trying to mend the many fractures in the Thomas family. As Raq expands her empire, Kanan doubts his future in the drug game. Meanwhile, Detective Howard is released from the hospital.",
              "runtime": 60,
            },
            {
              release: "2022-08-21",
              episode: 2,
              "episode_type": "standard",
               title: "MIND YOUR BUSINESS",
              "overview": "Raq learns she may have a snitch and tasks Marvin with confirming the rumor. Lou brings in a potential new artist, but he and Crown disagree. Kanan helps Famous sell mix tapes. Jukebox tracks down her estranged mother.",
              "runtime": 60,
            },
            {
              release: "2022-08-28",
              episode: 3,
              "episode_type": "standard",
               title: "SLEEPING DOGS",
              "overview": "A surprise encounter with Howard leaves Kanan rattled. Raq tries to expand into new territory, but when an associate and valuables go missing, she is reunited with an old adversary. Lou continues to butt heads with Crown.",
              "runtime": 60,
            },
            {
              release: "2022-09-04",
              episode: 4,
              "episode_type": "standard",
               title: "PAY THE TOLL",
              "overview": "Kanan and Jukebox search for answers in family matters. When Raq’s push into new territory is stalled, she proposes a meeting. Crown helps Famous get settled. Still investigating Howard’s shooting, Burke questions Unique.",
              "runtime": 60,
            },
            {
              release: "2022-09-11",
              episode: 5,
              "episode_type": "standard",
               title: "WHAT HAPPENS IN THE CATSKILLS",
              "overview": "Raq focuses on mother-son bonding with Kanan in the Catskills, but they’re interrupted when business follows them. Crown disrespects Lou, bringing their simmering beef to a boil. Burke digs into Howard’s personal life.",
              "runtime": 60,
            },
            {
              release: "2022-09-18",
              episode: 6,
              "episode_type": "standard",
               title: "IT’S A BUSINESS, MAN",
              "overview": "Raq assures everyone they need to follow orders and keep working as planned. Kanan takes on more responsibility but things go wrong when he runs into neighborhood kids. Lou feels the pressure in his partnership with Crown.",
              "runtime": 60,
            },
            {
              release: "2022-10-02",
              episode: 7,
              "episode_type": "standard",
               title: "NO LOVE LOST",
              "overview": "Raq searches for a new home. Lou finds himself on the other side of his partner's unpaid debts. Burke gains traction in her investigation on Howard. A botched agreement with Marvin and an associate threatens everything.",
              "runtime": 60,
            },
            {
              release: "2022-10-09",
              episode: 8,
              "episode_type": "standard",
               title: "A HOUSE IS NOT A HOME",
              "overview": "The rift between Raq and Kanan grows and Kanan seeks comfort elsewhere. Marvin lays low, waiting for the consequences of his actions to blow over. Raq sees dark clouds on the horizon.",
              "runtime": 60,
            },
            {
              release: "2022-10-16",
              episode: 9,
              "episode_type": "standard",
               title: "ANTI-TRUST",
              "overview": "With his living situation threatened, Famous reaches out to Lou as a last-ditch effort. Raq receives a new business proposal and must eliminate a threat. Burke closes in on what really happened in Baisley Park.",
              "runtime": 60,
            },
            {
              release: "2022-10-23",
              episode: 10,
              "episode_type": "finale",
               title: "IF Y’DON’T KNOW, NOW Y’KNOW",
              "overview": "Decidedly his own man, Kanan strays further from his mother and sets up shop on his own on the corners of South Jamaica. Worried about retaliation, Raq questions Unique. Lou's rift with Raq grows when he makes a discovery.",
              "runtime": 60,
            },
          ]
        },
        {
          season: 3,
          episodes: [
            {
              release: "2023-12-01",
              episode: 1,
              "episode_type": "standard",
               title: "HOME SWEET HOME",
              "overview": "Raq makes a life-changing decision in the aftermath of the Mafia’s ambush, but its too little, too late for Kanan, as he looks to pave his own path free of his mother’s lies.",
              "runtime": 56,
            },
            {
              release: "2023-12-08",
              episode: 2,
              "episode_type": "standard",
               title: "FLIPMODE",
              "overview": "Raq continues her farewell tour with one last job for the Mafia while Kanan dives further into the drug game with an innovative business idea. Howard faces a new threat at the precinct.",
              "runtime": 59,
            },
            {
              release: "2023-12-15",
              episode: 3,
              "episode_type": "standard",
               title: "OPEN FOR BUSINESS",
              "overview": "As paranoia sets in for Raq and Howard over the Task Force, Kanan and Famous launch their weed delivery business, Jukebox prepares for her audition, and Ronnie grows impatient with Unique.",
              "runtime": 55,
            },
            {
              release: "2023-12-22",
              episode: 4,
              "episode_type": "standard",
               title: "IN SHEEP'S CLOTHING",
              "overview": "New business ventures take shape for the Thomas family, but the outlook is bleaker for the Mathis brothers as Ronnie’s patience runs out. Raq makes a risky move for Kanan’s obedience.",
              "runtime": 56,
            },
            {
              release: "2023-12-29",
              episode: 5,
              "episode_type": "standard",
               title: "BROTHERS AND KEEPERS",
              "overview": "Tension between Ronnie and Unique comes to a head while Kanan clashes with both Raq and Famous. Juke bonds with her bandmate, and Lou works to revitalize Cafe Vous. Howard’s attempt to manipulate the Task Force backfires.",
              "runtime": 50,
            },
            {
              release: "2024-01-12",
              episode: 6,
              "episode_type": "standard",
               title: "INTO THE DARKNESS",
              "overview": "Dangerous secrets are revealed as Famous unburdens himself to Kanan, and Raq finally tries to make amends with Lou. Marvin struggles with his role as stage dad, and Howard attempts to get closer to the Task Force.",
              "runtime": 58,
            },
            {
              release: "2024-01-19",
              episode: 7,
              "episode_type": "standard",
               title: "WHERE ALL ARE GUILTY",
              "overview": "Lou’s drinking creates a problem for the whole family when Shantel goes looking for justice. Kanan assimilates into Ronnie’s crew, and Raq formulates a new plan for Unique’s former heroin operation.",
              "runtime": 52,
            },
            {
              release: "2024-01-26",
              episode: 8,
              "episode_type": "standard",
               title: "RECKONINGS",
              "overview": "As a despondent Lou becomes a liability for the family, Raq and Marvin work to get the new heroin operation up and running amidst new competition from Kanan and Ronnie.",
              "runtime": 51,
            },
            {
              release: "2024-02-02",
              episode: 9,
              "episode_type": "standard",
               title: "HOME TO ROOST",
              "overview": "Ronnie and Kanan’s feud with Raq intensifies as Marvin desperately searches for Lou. Famous and Jukebox both find themselves at potential turning points in their music careers.",
              "runtime": 55,
            },
            {
              release: "2024-02-09",
              episode: 10,
              "episode_type": "finale",
               title: "MADE YOU LOOK",
              "overview": "Desperation sets in as Howard tries to evade the Task Force and Ronnie goes on the attack, leaving Raq and Kanan to make some fateful choices. Ronnie changes his identity.",
              "runtime": 51,
            },
          ]
        },
        {
          season: 4,
          episodes: [
            {
              release: "2025-03-10",
              episode: 1,
              "episode_type": "standard",
              title: "CAN'T STOP ME",
              "overview": "",
              "runtime": 69,
            },
            {
              release: "2025-03-17",
              episode: 2,
              "episode_type": "standard",
              title: "BENEATH THE SURFACE",
              "overview": "",
              "runtime": 55,
            },
            {
              release: "2025-03-24",
              episode: 3,
              "episode_type": "standard",
              title: "FORGED IN FIRE",
              "overview": "",
              "runtime": 67,
            },
            {
              release: "2025-03-31",
              episode: 4,
              "episode_type": "standard",
              title: "EVERYWHERE YOU GO",
              "overview": "",
              "runtime": 62,
            },
            {
              release: "2025-04-07",
              episode: 5,
              "episode_type": "standard",
              title: "IGNORANCE IS BLISS",
              "overview": "",
              "runtime": 56,
            },
            {
              release: "2025-04-14",
              episode: 6,
              "episode_type": "standard",
              title: "SPIN BACK",
              "overview": "",
              "runtime": null,
            },
            {
              release: "2025-04-21",
              episode: 7,
              "episode_type": "standard",
              title: "SACRIFICES",
              "overview": "",
              "runtime": null,
            },
            {
              release: "2025-04-28",
              episode: 8,
              "episode_type": "standard",
              title: "TRUTH OF THE MATTER",
              "overview": "",
              "runtime": null,
            },
            {
              release: "2025-05-05",
              episode: 9,
              "episode_type": "standard",
              title: "PEEKABOO",
              "overview": "",
              "runtime": null,
            },
            {
              release: "2025-05-12",
              episode: 10,
              "episode_type": "standard",
              title: "SNAKES IN THE GRASS",
              "overview": "",
              "runtime": null,
            },
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Power Book IV: Force',
      background: '/cR0ursLXoT0zfX9XDGAzQRAnK0W.jpg',
      mediaType: 'series',
      release: '2022-02-06',
      trailer: ' ',
      overview:  'Tommy Egan leaves New York behind and plans to take on Chicago, using his outsider status to break all the local rules and rewrite them on his quest to become the biggest drug dealer in the city.',
      seasons: [
        {
        season: 1,
        episodes: [
        {
          release: "2022-02-06",
          episode: 1,
          "episode_type": "standard",   
           title: "A Short Fuse and a Long Memory",
          "overview": "On his journey to LA, Tommy stops in Chicago, only to discover shocking news about his family. Tommy must decide whether he is going to force his skeletons back in the closet, or put down roots in the Windy City.",
         "runtime": 56,
        },
        {
          release: "2022-02-13",
          episode: 2,
          "episode_type": "standard",
          title: "King of the Goddamn Hill",
          "overview": "When JP receives an unexpected warning, Tommy comes to his aide. Determined to lend a helping hand, Tommy approaches a local dealer proposing a business arrangement, but their introduction takes a turn for the worse.",
          "runtime": 48,
       },
        {
          release: "2022-02-20",
          episode: 3,
         "episode_type": "standard",
          title: "Fire Star",
          "overview": "Tommy finds himself face-to-face with a ghost from his past. The reunion unearths a discovery when Tommy stumbles across hidden product. Tommy brokers a sit-down between rivals and learns the true nature of the feud.",
           "runtime": 52,
          },
          {
            release: "2022-02-27",
            episode: 4,
            "episode_type": "standard",
            title: "Storm Clouds",
            "overview": "Tommy's former foe turned friend is at the mercy of a notorious criminal organization who resurface to reclaim what's theirs. The group is led by an enemy from Tommy's life back in New York who is still out for blood.",
           "runtime": 50,
            },
            {
              release: "2022-03-06",
              episode: 5,
              "episode_type": "standard",
      
              title: "Take Me Home",
              "overview": "Tommy is offered a profitable solution, from an unlikely source, that may be the answer to his troubles. Intrigued, Tommy is informed he must first address a problem threatening the new venture before it begins.",
              "runtime": 48,
            },
            {
              release: "2022-03-13",
              episode: 6,
              "episode_type": "standard",
              title: "This Is Who We Are",
              "overview": "Tommy and his new business partner recruit soldiers to take over the drug game in Chicago. Tommy finds a lucrative location for distribution that doesn't fit with his partner's vision for a more upscale clientele.",
              "runtime": 53,
            },
            {
              release: "2022-03-20",
              episode: 7,
              "episode_type": "standard",      
              title: "Outrunning a Ghost",
              "overview": "Tommy's new product is spreading like wildfire across Chicago. The current success isn't good enough for Tommy. He wants to own the entire city and is determined to figure out how to do so, no matter the cost.",
              "runtime": 52,
            },
            {
              release: "2022-03-27",
              episode: 8,
              "episode_type": "standard",     
              title: "He Ain't Heavy",
              "overview": "Tommy and his crew can barely keep up with the demand and they need more help to increase their supply. More shocking details about Tommy's family surface, and he realizes the news could potentially affect his business.",
              "runtime": 54,
            },
            {
              release: "2022-04-10",
              episode: 9,
              "episode_type": "standard",     
              title: "Trust",
              "overview": "Vic faces a devastating loss. Walter is ready to go to war and sends for heavy hitters. Tommy soon realizes he needs more power but is turned down by one of his closest allies and is forced to turn to an unlikely resource.",
              "runtime": 56,
            },
            {
              release: "2022-04-17",
              episode: 10,
              "episode_type": "finale",    
              title: "Family Business",
              "overview": "Decisions are made by those closest to Tommy which could leave him powerless. When the gangs face off, truths come to light, shifting the power of the drug game. This battle may be over, but the war is far from won.",
              "runtime": 63,
            },
          ]
        },
        {
          season: 2,
          episodes: [
            {
              release: "2023-09-01",
              episode: 1,
              "episode_type": "standard",      
              title: "TOMMY'S BACK",
              "overview": "Tommy and Diamond hustle to keep CBI's game ahead of Jenard's new faction in the streets, while Tommy makes solo moves to avenge Liliana's death. All the while, Tommy hasn't forgotten his ultimate goal to become a kingpin.",
              "runtime": 60,
            },
            {
              release: "2023-09-08",
              episode: 2,
             "episode_type": "standard",
              title: "GREAT CONSEQUENCE",
              "overview": "Jenard’s crew seeks revenge as Tommy learns of a rivalry between Miguel and the Serbs that he and Diamond leverage to CBI’s advantage. Meanwhile, the Feds pursue a task force with Tommy at the center of the investigation.",
              "runtime": 58,
            },
            {
              release: "2023-09-15",
              episode: 3,
              "episode_type": "standard",
      
              title: "WAR & ICE CREAM",
              "overview": "Tommy and Diamond expand their business to prisons, the Feds put together a task force to take down CBI, and Jenard struggles to maintain control. Tommy faces off with Walter and gets closer to avenging Liliana's death.",
              "runtime": 59,
            },
            {
              release: "2023-09-22",
              episode: 4,
              "episode_type": "standard",
      
              title: "THE DEVIL'S IN THE DETAILS",
              "overview": "Tommy and Diamond keep dangerous secrets from each other, Jenard clashes with his crew, and Vic teams up with Claudia one last time. D-Mac ends up entangled deeper in the drug game than he ever intended.",
              "runtime": 59,
            },
            {
              release: "2023-09-29",
              episode: 5,
              "episode_type": "standard",
      
              title: "CROWN VIC",
              "overview": "Heightened police presence threatens Tommy and Diamond's bottom line and they form a coalition with a rival gang. Jenard hits rock bottom, and the Flynn family loyalties are tested with devastating results.",
              "runtime": 59,
            },
            {
              release: "2023-10-06",
              episode: 6,
              "episode_type": "standard",     
              title: "HERE THERE BE MONSTERS",
              "overview": "Tommy and Diamond expand their coalition by bringing Vic and Jenard into CBI. Mirković warns Tommy against encroaching on Serb territory, and makes good on his threat with catastrophic results.",
              "runtime": 58,
            },
            {
              release: "2023-10-13",
              episode: 7,
              "episode_type": "standard",     
              title: "CHICAGO IS HEATING UP!",
              "overview": "Tommy and Diamond continue gaining territory behind Miguel’s back, but Diamond is pulled in other directions. Jenard gets more than he bargained for. Tommy puts Vic’s loyalty to the test.",
              "runtime": 58,
            },
            {
              release: "2023-10-20",
              episode: 8,
              "episode_type": "standard",     
              title: "DEAD RECKONING",
              "overview": "Tommy makes bold moves to connect CBI directly with the cartel as he hustles to stay ahead of the many adversaries out for his blood. Diamond is forced to make a decision that has dire consequences.",
              "runtime": 59,
            },
            {
              release: "2023-11-03",
              episode: 9,
              "episode_type": "standard",  
              title: "NO LOOSE ENDS",
              "overview": "Tommy and Diamond suspect a snitch and put their inner circle to the test. Mireya gives Tommy a key piece of information. The war between Miguel and Mirkovic comes to a head.",
              "runtime": null,
            },
            {
              release: "2023-11-10",
              episode: 10,
              "episode_type": "finale",
              title: "POWER POWDER RESPECT",
              "overview": "Tommy orchestrates the grand finale of his long game to take over Chicago’s drug world. When he is faced with devastating personal sacrifices, he finds that he might just lose more than he ever stood to gain.",
              "runtime": null,
            },
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Ghosts',
      background: '/8yBQYa6AdvMY5H9CiAv0HkvF3UE.jpg',
      mediaType: 'series',
      release: '2021-10-07',
      trailer: ' ',
      overview: 'Samantha and Jay throw caution to the wind when they convert their recently inherited country estate into a bed-and-breakfast. Call it mislaid plans. Not only is the place falling apart, but it’s also inhabited by spirits of previous residents -- whom only Samantha can see and hear',
      seasons: [
        {
          season: 1,
          episodes: [
            {
              release: "2021-10-07",
              episode: 1,
              "episode_type": "standard",
              title: "Pilot",
              "overview": "Samantha and Jay throw both caution and money to the wind when they decide to convert a rundown country estate they inherited into a bed & breakfast – only to find it’s inhabited by the many opinionated spirits of deceased residents who now call it home.",
              "runtime": 23,
            },
            {
              release: "2021-10-07",
              episode: 2,
              "episode_type": "standard",
              title: "Hello!",
              "overview": "When Sam thinks she’s crazy because she continues to see the ghosts of Woodstone Manor, she tries to ignore them, making them even more determined to get her to acknowledge they’re real.",
              "runtime": 22,
            },
            {
              release: "2021-10-14",
              episode: 3,
              "episode_type": "standard",
              title: "Viking Funeral",
              "overview": "When Thorfinn’s bones are discovered on the Woodstone property, he asks Sam to conduct the traditional Viking funeral he’s always wanted. However, Sam and Jay are torn when they learn that the bones could be sold to a museum for a lot of much-needed cash. Also, the ghosts conduct an election for a “ghost representative” to bring issues to Sam.",
              "runtime": 22,
            },
            {
              release: "2021-10-21",
              episode: 4,
              "episode_type": "standard",
              title: "Dinner Party",
              "overview": "When Sam and Jay invite the nosy neighbors Henry and Margaret to a dinner party to woo them into allowing the bed and breakfast, the ghosts are desperately eager to be included on the guest list.",
              "runtime": 22,
            },
            {
              release: "2021-10-28",
              episode: 5,
              "episode_type": "standard",
              title: "Halloween",
              "overview": "On Halloween at Woodstone Mansion, the ghosts try to help Sam and Jay protect their home from the neighborhood kids who annually vandalize the house.",
              "runtime": 20,
            },
            {
              release: "2021-11-04",
              episode: 6,
              "episode_type": "standard",
              title: "Pete's Wife",
              "overview": "Pete convinces Sam to invite his living wife to the mansion, only to discover she’s been keeping a dark secret from him for many years. Also, Sassapis gets angry with Thorfinn for binge-cheating their favorite show without him, and Trevor learns he may have a daughter.",
              "runtime": 22,
            },
            {
              release: "2021-11-11",
              episode: 7,
              "episode_type": "standard",
              title: "Flower's Article",
              "overview": "When Sam is commissioned to write an article about Flower and her friends holding up a bank during their commune days, Flower begs Sam not to accept the job because she’s embarrassed about a part of the story she’s never revealed.",
              "runtime": 21,
            },
            {
              release: "2021-11-18",
              episode: 8,
              "episode_type": "standard",
              title: "D&D",
              "overview": "After Jay is kicked out of a Dungeons & Dragons campaign with his city friends, Sam agrees to facilitate a new one between him and the ghosts. Also, Isaac confronts his feelings for Nigel, a British soldier ghost from whom he’s been keeping a gigantic secret.",
              "runtime": 22,
            },
            {
              release: "2021-12-02",
              episode: 9,
              "episode_type": "standard",
              title: "Alberta's Fan",
              "overview": "Alberta is thrilled when a super-fan of her music visits the mansion to learn more about her. Also, Thor convinces Hetty to go on a walk with him in hopes that it will spark a special memory.",
              "runtime": 22,
            },
            {
              release: "2021-12-09",
              episode: 10,
              "episode_type": "mid_season",
              title: "Possession",
              "overview": "Hetty accidentally possesses Jay’s body just as he and Sam are to about show Woodstone Mansion to a renowned wedding planner",
              "runtime": 22,
            },
            {
              release: "2022-01-06",
              episode: 11,
              "episode_type": "standard",
              title: "Sam's Mom",
              "overview": "Sam and Jay travel to where Sam’s mother, Sheryl, died to see if she’s now a ghost. Also, Sasappis divulges a secret to his fellow ghosts that he overheard Sam and Jay discussing.",
              "runtime": 22,
            },
            {
              release: "2022-01-13",
              episode: 12,
              "episode_type": "standard",
              title: "Jay's Sister",
              "overview": "When Jay’s sister, Bela, comes to visit Sam and Jay after being dumped by her boyfriend, they’re shocked to discover that she’s communicating with someone they know on a dating app.",
              "runtime": 22,
            },
            {
              release: "2022-01-20",
              episode: 13,
              "episode_type": "standard",
              title: "The Vault",
              "overview": "Just as Sam and Jay are set to host a friend’s wedding that could get their B&B business off the ground, the ghost of Hetty’s husband, Elias Woodstone, tries to ruin it.",
              "runtime": 21,
            },
            {
              release: "2022-02-24",
              episode: 14,
              "episode_type": "standard",
              title: "Ghostwriter",
              "overview": "When Sasappis offers to help Sam complete the B&B website so they can start taking reservations, they butt heads over the creative direction. Also, Pete bonds with Jay over basketball until Jay makes a new living friend, and Flower attempts to be Pete’s new basketball buddy.",
              "runtime": 22,
            },
            {
              release: "2022-03-03",
              episode: 15,
              "episode_type": "standard",
              title: "Thorapy",
              "overview": "When Sam and Jay have the ghosts bunk together to free up rooms for guests at the B&B, they learn that Thorfinn has been having night terrors, which inspires Sam to enlist a therapist to help him. Also, Isaac makes a big, personal revelation after he’s compelled to seduce his new roommate, Hetty.",
              "runtime": 22,
            },
            {
              release: "2022-03-31",
              episode: 16,
              "episode_type": "standard",
              title: "Trevor's Pants",
              "overview": "The secret about Trevor’s missing pants is finally revealed when his wealthy former friend comes to Woodstone Mansion to buy the timepiece Sam and Jay found on Elias Woodstone’s corpse. Also, Thor decides to tell Flower how he feels about her.",
              "runtime": 22,
            },
            {
              release: "2022-04-14",
              episode: 17,
              "episode_type": "standard",
              title: "Attic Girl",
              "overview": "An ‘80s “mean girl” ghost named Stephanie, who died on her prom night, is awakened in the attic, triggering Sam to confront what happened on her own prom night. Also, Alberta discovers she has another special gift.",
              "runtime": 22,
            },
            {
              release: "2022-04-21",
              episode: 18,
              "episode_type": "finale",
              title: "Farnsby & B",
              "overview": "As Sam and Jay await the arrival of their first official B&B guests, they face obstacles triggered by a Norse curse placed upon them by Thorfinn. Also, Isaac takes a huge, centuries-in-the-making step in his personal life.",
              "runtime": 21,
            },
          ]
        },
        {
          season: 2,
          episodes: [
            {
              release: "2022-09-29",
              episode: 1,
              "episode_type": "standard",
              title: "Spies",
              "overview": "Sam enlists the Ghosts to help secure a good review from an overly critical couple staying at the B&B. Also, Isaac tries to integrate Nigel into his friend group.",
              "runtime": 22,
             },
             {
              release: "2022-10-06",
              episode: 2,
              "episode_type": "standard",
              title: "Alberta's Podcast",
              "overview": "Sam decides to host a podcast exploring the mystery surrounding Alberta’s death. Also, Hetty develops an unusual relationship with a broken washing machine.",
              "runtime": 21,
             },
             {
              release: "2022-10-13",
              episode: 3,
              "episode_type": "standard",
              title: "Jay's Friends",
              "overview": "Sam becomes alarmed when the ghosts suggest Jay’s new friends may be part of a cult run by a charismatic leader named Micah. Also, Pete changes his attitude after Sasappis criticizes his unceasing cheeriness.",
              "runtime": 21,
             },
             {
              release: "2022-10-20",
              episode: 4,
              "episode_type": "standard",
              title: "The Tree",
              "overview": "Sasappis convinces Sam and Jay to try and save an old tree on the Woodstone property that the neighbors want to cut down. Also, Thor attempts to become more environmentally friendly to get Flower’s attention.",
              "runtime": 22,
             },
             {
              release: "2022-10-27",
              episode: 5,
              "episode_type": "standard",
              title: "Halloween 2: The Ghost of Hetty's Past",
              "overview": "A séance at Sam and Jay’s last-minute Halloween party conjures up a spirit from Hetty’s past. Also, Isaac worries Nigel will be turned off by his ghost power.",
              "runtime": 21,
             },
             {
              release: "2022-11-03",
              episode: 6,
              "episode_type": "standard",
              title: "The Baby Bjorn",
              "overview": "Sam meets a Viking ghost at the Farnsbys’ house who has an unexpected connection to Thorfinn. Also, Trevor devises a new method for the ghosts to trade favors.",
              "runtime": 22,
             },
             {
              release: "2022-11-10",
              episode: 7,
              "episode_type": "standard",
              title: "Dumb Deaths",
              "overview": "When a television documentary crew comes to Woodstone Mansion to shoot an episode of 'Dumb Deaths,'' Pete confronts a hard truth about the day he died.",
              "runtime": 22,
             },
             {
              release: "2022-12-08",
              episode: 8,
              "episode_type": "standard",
              title: "The Liquor License",
              "overview": "Alberta’s expertise from her past comes in handy when Sam and Jay run into some complications during their Woodstone whiskey tasting soiree. Also, Trevor devises a ghost fraternity, which inspires a revelation from Isaac’s past.",
              "runtime": 22,
             },
             {
              release: "2022-12-15",
              episode: 9,
              "episode_type": "standard",
              title: "The Christmas Spirit (1)",
              "overview": "Jay’s sister, Bela, visits Woodstone Mansion and brings along an adoring male friend, inspiring Sam to spark a romance between them in the spirit of the holiday rom-coms she loves. Meanwhile, the ghosts have conjured up a very different holiday plan for Trevor and Bela. Also, Isaac has an awkward encounter with Nigel that forces him to look back on events in his life.",
              "runtime": 22,
             },
             {
              release: "2022-12-15",
              episode: 10,
              "episode_type": "mid_season",
              title: "The Christmas Spirit (2)",
              "overview": "Sam and Thorfinn get caught in the crossfire as the scheme Jay’s sister, Bela, and the ghosts have conjured up goes awry. Also, Isaac’s marriage to Beatrice sheds light on how apprehensive he has been in communicating his feelings to Nigel.",
              "runtime": 22,
             },
             {
              release: "2023-01-05",
              episode: 11,
              "episode_type": "standard",
              title: "The Perfect Assistant",
              "overview": "Sam and Jay are thrilled when they find a highly qualified assistant for the B&B – however, their new employee comes with some surprising baggage. Also, Thorfinn tries to help his son, Bjorn, deal with a bully.",
              "runtime": 21,
             },
             {
              release: "2023-01-12",
              episode: 12,
              "episode_type": "standard",
              title: "The Family Business",
              "overview": "Sam gives relationship advice to her and Jay’s assistant, Freddie, ignoring Hetty’s warning not to get too close to “the help.” Also, Sasappis strikes up a romance with Jessica, the ghost who lives in Freddie’s car.",
              "runtime": 21,
             },
             {
              release: "2023-02-02",
              episode: 13,
              "episode_type": "standard",
              title: "Ghost Hunter",
              "overview": "Sam and Jay’s assistant, Freddie, purchases ghost-hunting equipment when suspicious activity leads him to theorize the B&B is haunted. Also, Sasappis risks losing his relationship with Jessica when Freddie sells his car.",
              "runtime": 22,
             },
             {
              release: "2023-02-09",
              episode: 14,
              "episode_type": "standard",
              title: "Trevor's Body",
              "overview": "Trevor receives disturbing news about his parents when they come to Woodstone B&B to collect his newly discovered remains. Also, Isaac and Nigel’s relationship hits a roadblock.",
              "runtime": 22,
             },
             {
              release: "2023-02-16",
              episode: 15,
              "episode_type": "standard",
              title: "A Date to Remember",
              "overview": "Sam and Jay help Thorfinn create a perfect first date with Flower. Also, Hetty feels slighted by the ghosts’ new housemate, Nigel.",
              "runtime": 22,
             },
             {
              release: "2023-03-02",
              episode: 16,
              "episode_type": "standard",
              title: "Isaac's Book",
              "overview": "Sam struggles to keep Isaac’s spirits up after she hits a wall trying to publish a biography about him. Also, Trevor and Hetty conspire to keep their relationship hidden and Thor tries to prove to Flower that he can control his anger.",
              "runtime": 22,
             },
             {
              release: "2023-03-09",
              episode: 17,
              "episode_type": "standard",
              title: "Weekend from Hell",
              "overview": "Elias Woodstone returns to Woodstone seeking Hetty’s forgiveness so he can stay out of hell for good. Also, Jay struggles to repeat an inspired culinary creation that he came up with after walking through Flower.",
              "runtime": 22,
             },
             {
              release: "2023-03-30",
              episode: 18,
              "episode_type": "standard",
              title: "Alberta's Descendant",
              "overview": "Alberta is thrilled when a living relative, Alicia, visits Woodstone to learn more about her, but things take a turn when she hits it off with Todd, Sam's podcast co-host. Also, Nigel uses his knowledge of Trevor and Hetty's secret tryst to try to blackmail Hetty.",
              "runtime": 22,
             },
             {
              release: "2023-04-13",
              episode: 19,
              "episode_type": "standard",
              title: "Ghost Father of the Bride",
              "overview": "After learning that Pete’s daughter, Laura, is getting married, Sam, at Pete’s behest, tries to convince her to hold her wedding at Woodstone B&B. Also, Alberta and Isaac team up to solve the mystery of what happened to Crash’s head.",
              "runtime": 22,
             },
             {
              release: "2023-04-27",
              episode: 20,
              "episode_type": "standard",
              title: "Woodstone's Hottest Couple",
              "overview": "When teen ghost Stephanie, who lives in the attic, awakens to find that her crush Trevor is now dating Hetty, she decides to sabotage all the relationships at Woodstone.",
              "runtime": 21,
             },
             {
              release: "2023-05-04",
              episode: 21,
              "episode_type": "standard",
              title: "Whodunnit",
              "overview": "Sam, Jay and the ghosts go into detective mode when Sam’s podcast editor gives her one last episode to wrap up Alberta’s murder. Also, Trevor, Flower and Pete discover an email from a Nigerian prince asking for help.",
              "runtime": 22,
             },
             {
              release: "2023-05-11",
              episode: 22,
              "episode_type": "finale",
              title: "The Heir",
              "overview": "When a woman shows up claiming to be the rightful heir to Woodstone Mansion, Sam and Jay enlist the help of a lawyer. Meanwhile, Isaac tries to decide how to spend half of Sam’s advance on his autobiography. Also, a surprise event takes place that could dramatically change life at the manor.",
              "runtime": 22,
             },
          ]
        },
        {
          season: 3,
          episodes: [
            {
              release: "2024-02-15",
              episode: 1,
              "episode_type": "standard",
              title: "The Owl",
              "overview": "Sam, Jay and the remaining ghosts unravel the mystery of which ghost passed into the afterlife. Also, Sam and Jay must relocate an owl in order to do construction on the barn to turn it into Jay's restaurant.",
              "runtime": 22,
            },
            {
              release: "2024-02-22",
              episode: 2,
              "episode_type": "standard",
              title: "Man of Your Dreams",
              "overview": "Sam learns that one of the ghosts' powers is to enter the dreams of the livings and influence their decisions. Also, two of the ghosts think they've learned the secret to moving on.",
              "runtime": 22,
            },
            {
              release: "2024-02-29",
              episode: 3,
              "episode_type": "standard",
              title: "He Sees Dead People",
              "overview": "When Jay's sister, Bela, and her boyfriend, Eric, visit Woodstone Mansion, Eric reveals a major change that took place after his near-death experience there over Christmas.",
              "runtime": 22,
            },
            {
              release: "2024-03-07",
              episode: 4,
              "episode_type": "standard",
              title: "Halloween 3: The Guest Who Wouldn't Leave",
              "overview": "Pete's ex-wife, Carol, shows up at Woodstone Mansion during Sam and Jay's Halloween party, where they're trying to impress some cool friends. Also, the ghosts hope to bring Flower back with a séance.",
              "runtime": 22,
            },
            {
              release: "2024-03-14",
              episode: 5,
              "episode_type": "standard",
              title: "The Silent Partner",
              "overview": "A big investor backs out of Sam and Jay's restaurant, leaving them to turn to the one ghost who has money - Isaac.",
              "runtime": 22,
            },
            {
              release: "2024-04-04",
              episode: 6,
              "episode_type": "standard",
              title: "Hello, Brother",
              "overview": "Trevor's brother, Jeremy, checks into Woodstone after discovering a loophole in the Woodstone Rewards Points program.",
              "runtime": 22,
            },
            {
              release: "2024-04-11",
              episode: 7,
              "episode_type": "standard",
              title: "The Polterguest",
              "overview": "Alberta hits it off with a poltergeist who is attached to a newly arrived Woodstone guest. Also, Isaac and Nigel have separate bachelor parties.",
              "runtime": 22,
            },
            {
              release: "2024-04-18",
              episode: 8,
              "episode_type": "standard",
              title: "Holes Are Bad",
              "overview": "When Sam and Jay leave the ghosts home alone for the weekend in an attempt to have a romantic getaway, shocking revelations are made about two of Woodstone's beloved spirits.",
              "runtime": 22,
            },
            {
              release: "2024-04-25",
              episode: 9,
              "episode_type": "standard",
              title: "The Traveling Agent",
              "overview": "Pete discovers a power that he never knew he had – one that brings him closer to his buddy Jay (and further apart).",
              "runtime": 22,
            },
            {
              release: "2024-05-02",
              episode: 10,
              "episode_type": "finale",
              title: "Isaac's Wedding",
              "overview": "Isaac's wedding day jitters are exacerbated by the arrival of a surprise guest.",
              "runtime": 21,
            },
          ]
        },
        {
          season: 4,
          episodes: [
            {
              release: "2024-10-17",
              episode: 1,
              "episode_type": "standard",
              title: "Patience",
              "overview": "While Sam and the ghosts race to find him, Isaac comes face to face with Puritan ghost Patience for the first time since she was lost in the dirt.",
              "runtime": 22,
            },
            {
              release: "2024-10-24",
              episode: 2,
              "episode_type": "standard",
              title: "Sam's Dad",
              "overview": "When Sam's dad comes to Woodstone for a visit, Patience puts their father-daughter relationship to the test. Also, Isaac must deal with the fallout from his breakup with Nigel, and Thor and Flower handle an awkward situation with Nancy.",
              "runtime": 22,
            },
            {
              release: "2024-10-31",
              episode: 3,
              "episode_type": "standard",
              title: "Halloween 4: The Witch",
              "overview": "The Ghosts seeking some excitement during a low key Halloween join Patience in putting Sam on a witch trial.",
              "runtime": 22,
            },
            {
              release: "2024-11-07",
              episode: 4,
              "episode_type": "standard",
              title: "The Work Retreat",
              "overview": "Trevor, who has catfished his way into a remote financial analyst job, is in hot water when he's summoned to a mandatory in-person work retreat. Also, Hetty and Sass start a rumor about Pete.",
              "runtime": 22,
            },
            {
              release: "2024-11-14",
              episode: 5,
              "episode_type": "standard",
              title: "A Star Is Dead",
              "overview": "Alberta offers to help Sam prepare for an audition for a community theater production. Also, Sass finds a new reason to interfere in Jay's dreams.",
              "runtime": 21,
            },
            {
              release: "2024-12-05",
              episode: 6,
              "episode_type": "standard",
              title: "The Primary Source",
              "overview": "When Sam’s book publisher requires source material for her biography on Isaac, she and Jay take a field trip to find the diary he claims he hid when he was alive.",
              "runtime": null,
            },
            {
              release: "2024-12-12",
              episode: 7,
              "episode_type": "standard",
              title: "Sad Farnsby",
              "overview": "When Sam accidentally creates a rift between Sam and Jay's neighbors, the Farnsbys, Henry Farnsby moves into Woodstone B&B; Isaac and Nigel battle over a belated wedding present.",
              "runtime": null,
            },
            {
              release: "2024-12-19",
              episode: 8,
              "episode_type": "standard",
              title: "A Very Arondekar Christmas (1)",
              "overview": "",
              "runtime": null,
            },
            {
              release: "2024-12-19",
              episode: 9,
              "episode_type": "mid_season",
              title: "A Very Arondekar Christmas (2)",
              "overview": "",
              "runtime": null,
            },
            {
              release: "2025-01-30",
              episode: 10,
              "episode_type": "standard",
              title: "Episode 10",
              "overview": "",
              "runtime": null,
            },
          ]
        }
      ]
    },
    {
      "backdrop_path": "/cdY1KD6dFlWf0XB787RJLCaSqsE.jpg",
      "id": 200753,
      title: "Kite Man: Hell Yeah!",
      "overview": "Lovable loser Kite Man and his new squeeze Golden Glider moonlight as criminals to support their foolish purchase of Noonan’s, Gotham’s seediest dive bar, where everybody knows your name, but not necessarily your secret identity!",
      background: "/egO6MZeQ3CKb8UMVZPYR7fENA6w.jpg",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
      16,
      35
      ],
      seasons : [
        {
          season: 1,
          episodes: [
            {
              release: "2024-07-18",
              episode: 1,
              "episode_type": "standard",
              title: "Pilot, Hell Yeah!",
              "overview": "When Lex Luthor threatens to shut down disreputable dive bar Noonan's, supervillain lovebirds Kite Man and Golden Glider scheme to save it.",
              "runtime": 24,
            },
            {
              release: "2024-07-18",
              episode: 2,
              "episode_type": "standard",
              title: "Grand Reopening, Hell Yeah!",
              "overview": "Ahead of Noonan's grand reopening, Golden Glider struggles to keep the peace with Kite Man's new hire.",
              "runtime": 24,
            },
            {
              release: "2024-07-25",
              episode: 3,
              "episode_type": "standard",
              title: "Villigan's, Hell Yeah!",
              "overview": "A villain-themed chain restaurant opens across from Noonan's just as Kite Man and Golden Glider stress over a new step in their relationship.",
              "runtime": 23,
            },
            {
              release: "2024-08-01",
              episode: 4,
              "episode_type": "standard",
              title: "Portal Potty, Hell Yeah!",
              "overview": "While decorating the apartment, Kite Man finally learns about Golden Glider's childhood, while Bane accidentally time travels to the 1980s.",
              "runtime": 23,
            },
            {
              release: "2024-08-08",
              episode: 5,
              "episode_type": "standard",
              title: "Prison Break, Hell Yeah!",
              "overview": "As Kite Man, Golden Glider and Bane attempt a rescue at The Pit, Malice juggles two unexpected visitors: her boyfriend and a health inspector.",
              "runtime": 23,
            },
            {
              release: "2024-08-15",
              episode: 6,
              "episode_type": "standard",
              title: "Mother/Daughter Day, Hell Yeah!",
              "overview": "Golden Glider plans a mother/daughter day to bond with Rebecca, while Kite Man finally decides he's done being powerless.",
              "runtime": 23,
            },
            {
              release: "2024-08-22",
              episode: 7,
              "episode_type": "standard",
              title: "Sexiest Villain Alive, Hell Yeah!",
              "overview": "As Beast Mode competes for the Sexiest Villain Award, Golden Glider tries to find a way to turn him back into Kite Man.",
              "runtime": 23,
            },
            {
              release: "2024-08-29",
              episode: 8,
              "episode_type": "standard",
              title: "Just Right, Hell Yeah!",
              "overview": "Kite Man and Golden Glider hide out with the Anti-Life Equation, while Bane adds babysitter to his résumé.",
              "runtime": 23,
            },
            {
              release: "2024-09-05",
              episode: 9,
              "episode_type": "standard",
              title: "To Get to the Other Side, Hell Yeah!",
              "overview": "As Kite Man and Golden Glider wing it against an unexpected adversary, Darkseid visits Malice on the anniversary of her parents' deaths.",
              "runtime": 23,
            },
            {
              release: "2024-09-12",
              episode: 10,
              "episode_type": "finale",
              title: "Hero Stuff, Hell Yeah!",
              "overview": "With time running out, Kite Man, Golden Glider and Noonan's regulars must find a way to destroy the Anti-Life Equation once and for all.",
              "runtime": 24,
            },
          ]
        }
      ]
    },
    {
      "backdrop_path": "/tn0Rn7kKXB9DwH8smBwkl66pYaG.jpg",
      "id": 154084,
      title: "Citadel Honey Bunny",
      "overview": "When stuntman Bunny recruits struggling actress Honey for a side gig, they are hurled into a high-stakes world of action, espionage and betrayal. Years later, as their dangerous past catches up, the estranged Honey and Bunny must reunite and fight to protect their young daughter Nadia.",
      background: "/lzZ9J2FOsaq1DCuD7k2f4ogbXdD.jpg",
      mediaType: "series",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
      10759,
      18,
      10765
      ],
      seasons : [
        {
          season: 1,
          episodes: [
            {
              release: "2024-11-06",
              episode: 1,
              "episode_type": "standard",
              title: "Dancing and Fighting",
              "overview": "1992: Bunny, a stuntman in films, recruits struggling actor Honey for a side gig which endangers her life. 2000: Single mother Honey and her daughter Nadia’s idyllic life is shattered when Honey’s past catches up. And the estranged Bunny finds a truth that shakes up his life!",
              "runtime": 52,
            },
            {
              release: "2024-11-06",
              episode: 2,
              "episode_type": "standard",
              title: "Talwar",
              "overview": "1992: Guru’s agency makes inroads into their enemy’s Project Talwar. As romance blossoms between Honey and Bunny, she entrenches herself in the agency, despite Guru’s skepticism. 2000: Bunny reunites with Chacko to look for the estranged Honey and Nadia, who are on the run from their assailants.",
              "runtime": 55,
            },
            {
              release: "2024-11-06",
              episode: 3,
              "episode_type": "standard",
              title: "Spy Game",
              "overview": "1992: Bunny and Honey embark on the agency’s most important mission in Belgrade. Honey makes a shocking discovery. 2000: Bunny narrowly misses Honey and Nadia. Fearing the worst and left with no choice, he and Chacko turn to their old buddy Ludo for help.",
              "runtime": 47,
            },
            {
              release: "2024-11-06",
              episode: 4,
              "episode_type": "standard",
              title: "Home",
              "overview": "1992: Honey struggles to balance her personal feelings and love for Bunny with her duty to the mission, facing a profound inner conflict. 2000: Honey encounters a similar dilemma when she must decide whether to seek refuge in her childhood home, the place she once despised. Meanwhile, Bunny makes an important breakthrough about Guru and his motives!",
              "runtime": 52,
            },
            {
              release: "2024-11-06",
              episode: 5,
              "episode_type": "standard",
              title: "Traitor",
              "overview": "1992: Honey’s world is turned upside down when she discovers the agency she once trusted is not who they claim to be, forcing her to take a drastic step, risking everyone’s lives. 2000: Bunny plots Honey’s next step, as drastic as the one she took in the past.",
              "runtime": 43,
            },
            {
              release: "2024-11-06",
              episode: 6,
              "episode_type": "finale",
              title: "Play",
              "overview": "2000: As things come to a head, Honey and Bunny join forces to unleash their full might, fighting for love, family, and their daughter's future. As KD decides to take matters into his own hands, the ensuing battle tests their resilience, leaving the future uncertain.",
              "runtime": 54,
            },
          ]
        }
      ]
    },
    {
      "backdrop_path": "/sLs4MmjvJ8RRNBgBeho9uUtnlB5.jpg",
      "id": 117830,
      title: "Tomb Raider: The Legend of Lara Croft",
      "overview": "Thrust into a high-stakes chase around the world, fearless adventurer Lara Croft confronts her traumatic past while unraveling an ancient mystery.",
      "poster_path": "/mIvbfZFLJGwNvJKJcnYIppSbWdI.jpg",
      mediaType: "series",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
      10759,
      16
      ],
      seasons : [
        {
          season: 1,
          episodes: [
            {
              release: "2024-10-10",
              episode: 1,
              "episode_type": "standard",                        
              title: "A Single Step",
              "overview": "When a high-tech thief steals a mysterious jade artifact from Croft Manor, fearless archeological adventurer Lara Croft leaps into action to retrieve it.",
              "runtime": 36,
            },
            {
              release: "2024-10-10",
              episode: 2,
              "episode_type": "standard",                        
              title: "A Set of Lies Agreed Upon",
              "overview": "Tracking the thief to a village in China, Lara and Jonah search for a group of missing children and make a remarkable discovery in an underground tomb.",
              "runtime": 27,
            },
            {
              release: "2024-10-10",
              episode: 3,
              "episode_type": "standard",                        
              title: "Living Midnight",
              "overview": "Vengeful mercenary Devereaux reveals the truth behind his hunt for the peril stones. Lara infiltrates the compound of a notorious warlord in Istanbul.",
              "runtime": 28,
            },
            {
              release: "2024-10-10",
              episode: 4,
              "episode_type": "standard",                        
              title: "Big Lies, Small Secrets",
              "overview": "Deep in the Paris catacombs, Lara and Interpol agent Camilla Roth uncover a mythical link between the peril stones and the Knights Templar.",
              "runtime": 28,
            },
            {
              release: "2024-10-10",
              episode: 5,
              "episode_type": "standard",                        
              title: "Whanaungatanga",
              "overview": "After skydiving into Iran, Lara boards a speeding train and fights the possessed passengers to rescue an old friend from Devereaux's sinister control.",
              "runtime": 24,
            },
            {
              release: "2024-10-10",
              episode: 6,
              "episode_type": "standard",                        
              title: "The Spirit Way",
              "overview": "An astrological clue sends Lara racing to the site of an ancient battle, where legend says the final peril stone resides beneath a golden tree.",
              "runtime": 25,
            },
            {
              release: "2024-10-10",
              episode: 7,
              "episode_type": "standard",                        
              title: "Yinyang",
              "overview": "With time running out, Lara and Camilla lead a desperate mission to separate the peril stones from Devereaux — whose body undergoes a monstrous change.",
              "runtime": 25,
            },
            {
              release: "2024-10-10",
              episode: 8,
              "episode_type": "finale",                        
              title: "A Journey of a Thousand Miles",
              "overview": "High atop the mystical Kunlun Mountain, Lara faces the challenges of a goddess — and a colossal new threat — in her quest to restore order to the world.",
              "runtime": 28,
            },
            
          ]
        }
      ]
    },
    {
      "backdrop_path": "/oskggc9don7i7TYSETRVHtjhwSi.jpg",
      "id": 241485,
      title: "Fight Night: The Million Dollar Heist",
      "original_name": "Fight Night: The Million Dollar Heist",
      "overview": "The story of how on the night of Ali’s defeat of Jerry Quarry, which came after he was banned from boxing for refusing to enter the military draft, hundreds of guests at an after-party were robbed at gunpoint, becoming one of the largest armed robberies the country has ever seen.",
      background: "/ucxvu9kRykTd23m1omktBJZG2Q1.jpg",
      "mediaType": "series",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
      18,
      80
      ],
      seasons : [
        {
          season: 1,
          episodes: [
            {
              release: "2024-09-05",
              episode: 1,
              "episode_type": "standard",
              title: "Round One: The Ballad of Chicken Man",
              "overview": "Atlanta prepares for Muhammad Ali's comeback fight, and everyone wants a piece of the action; Chicken Man sets his eye on the fight night prize; Detective JD Hudson's call to duty is tested.",
              "runtime": 57,
            },
            {
              release: "2024-09-05",
              episode: 2,
              "episode_type": "standard",
              title: "Round Two: Fight Night",
              "overview": "As Chicken Man hustles to level up with the Black Mafia, local robbers find holes in his grand plans; publicly, Detective Hudson performs his duty as Ali's faithful guard but privately, he is tired of waiting for real police work.",
              "runtime": 53,
            },
            {
              release: "2024-09-05",
              episode: 3,
              "episode_type": "standard",
              title: "Round Three: Black Vegas",
              "overview": "After tirelessly working to impress the Black Mafia, Chicken Man's dream turns into a heist nightmare; the ice finally thaws between Detective Hudson and Ali; Hudson is called upon to do real police work.",
              "runtime": 43,
            },
            {
              release: "2024-09-12",
              episode: 4,
              "episode_type": "standard",
              title: "Round Four: Real Policework",
              "overview": "A desperate Chicken Man sets out to prove his innocence as the Black Mafia doubles down on revenge; in the shadows of Ali's victory, Detective Hudson witnesses the toll the fight night heist takes on his community.",
              "runtime": 51,
            },
            {
              release: "2024-09-19",
              episode: 5,
              "episode_type": "standard",
              title: "Round Five: Ambition Ain't Free",
              "overview": "Now on the run, Chicken Man must form an unlikely partnership as the fallout from the robbery hits close to home; Detective Hudson's new case puts him back in the spotlight, as the post-fight night crimes raise more questions than answers.",
              "runtime": 47,
            },
            {
              release: "2024-09-26",
              episode: 6,
              "episode_type": "standard",
              title: "Round Six: Community Men",
              "overview": "The manhunt for Chicken Man ramps up as he becomes front-page news, derailing his mission to clear his name; Detective Hudson works outside of the law to advance his case and to prove Chicken's innocence.",
              "runtime": 55,
            },
            {
              release: "2024-10-03",
              episode: 7,
              "episode_type": "standard",
              title: "Round Seven: Jekyll Island",
              "overview": "Detective Hudson and Chicken Man track the robbers to the Georgia coast, culminating in an explosive standoff; Vivian forges an unlikely alliance, securing her future.",
              "runtime": 46,
            },
            {
              release: "2024-10-10",
              episode: 8,
              "episode_type": "finale",
              title: "Round Eight: Testify",
              "overview": "In a daring final hustle, Detective Hudson and Chicken Man face off against the robbery mastermind, determined to clear Chicken's name once and for all; the Black Mafia convenes, staging a trial of their own members.",
              "runtime": 45,
            },
          ]
        }
      ]
    },
    {
      "backdrop_path": "/xC37S8DMaWeom19jYWKoPyeDW8E.jpg",
      "id": 251939,
      title: "Poppa's House",
      "overview": "Legendary talk radio host and happily divorced Poppa has his point of view challenged at work when a new female co-host is hired, and at home where he finds himself still parenting his adult son, a brilliant dreamer who is trying to pursue his passion while being a responsible father and husband.",
      "background": "/hQnhk8bOFHlFI7KZ12NT24yW8iw.jpg",
      "mediaType": "series",
      "adult": false,
      "original_language": "en",
      "genre_ids": [
      35
      ],
      seasons : [
        {
          season: 1,
          episodes: [
            {
              release: "2024-10-21",
              episode: 1,
              "episode_type": "standard",
              title: "Pilot",
              "overview": "Poppa gets surprised at work when corporate brings in brainy psychologist Dr. Ivy Reid to add a female perspective to his radio show. Also, Junior gets fired by Nina's dad.",
              "runtime": 22,
            },
            {
              release: "2024-10-28",
              episode: 2,
              "episode_type": "standard",
              title: "Sleepover",
              "overview": "When Dr Ivy Reed joins family for dinner, she begins judgibng relationships for potential catastrophes. Jr spends the night at his dad's house while the girls devise a plan over a bottle of wine.",
              "runtime": 22,
            },
            {
              release: "2024-11-04",
              episode: 3,
              "episode_type": "standard",
              title: "Podcast",
              "overview": "Junior enlists Nina's help to film a documentary of Poppa's iconic career, but the direction of the film takes a detour when the radio station begins using AI promos with Poppa's and Ivy's voices.",
              "runtime": 22,
            },
            {
              release: "2024-11-11",
              episode: 4,
              "episode_type": "standard",
              title: "School Days",
              "overview": "Junior and Nina turn to their parents for help paying tuition when their son gets accepted into a prestigious private school. While Poppa believes the kids will be just fine at public school, his ex-wife, Catherine, and Nina's father, JJ, try to convince him that his grandson's education is worth the investment.",
              "runtime": 22,
            },
            {
              release: "2024-11-25",
              episode: 5,
              "episode_type": "standard",
              title: "Disciplinairian",
              "overview": "When Junior and Nina's son begins acting out, Poppa doles out parenting advice. Also, Poppa suspects Dr. Ivy Reed may be flirting with him.",
              "runtime": null,
            },
            {
              release: "2024-12-02",
              episode: 6,
              "episode_type": "standard",
              title: "Family Photo",
              "overview": "Poppa wants a new family photo that doesn't include his ex-wife, but Junior and Nina don't want to leave Catherine out.",
              "runtime": null,
            },
            {
              release: "2024-12-09",
              episode: 7,
              "episode_type": "standard",
              title: "Brokeback",
              "overview": "",
              "runtime": null,
            },
            {
              release: "2024-12-16",
              episode: 8,
              "episode_type": "standard",
              title: "Episode 8",
              "overview": "",
              "runtime": null,
            },
            {
              release: "2025-01-27",
              episode: 9,
              "episode_type": "standard",
              title: "Episode 9",
              "overview": "",
              "runtime": null,
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
          season: 12,
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
        first_release: '2012-10-10',
        genre: 'Drama',
        overview: "An edge-of-your-seat view into the lives of everyday heroes committed to one of America's noblest professions. For the firefighters, rescue squad and paramedics of Chicago Firehouse 51, no occupation is more stressful or dangerous, yet so rewarding and exhilarating. These courageous men and women are among the elite who forge headfirst into danger when everyone else is running the other way and whose actions make the difference between life and death.",
        seasons : [
          {
              season: 1,

            release :"2012-10-10",
             episodes:[
              {
              release: "2012-10-10",
              episode: 1,
              id: 891024,
              title: "Pilot",
              overview: "When a fire claims one of their own, there's plenty of guilt and blame to go around. Lt. Matthew Casey, in charge of the Truck, tries to carry on, but butts heads with the brash Lt. Kelly Severide of the Rescue Squad - and each blames the other for their fallen team member. The firehouse also includes: Battalion Chief Wallace Boden, a fireman's fireman who is confronted by important personal decisions; paramedics Gabriela Dawson and Leslie Shay, who share a close bond and team together to face some of the most harrowing situations imaginable; Peter Mills, an academy graduate who is the latest generation in a family of firefighters; and Christopher Herrmann, a seasoned veteran who loses his home to foreclosure and now must uproot his family to move in with his in-laws.",
              runtime: 43,
              },
              {
              release: "2012-10-17",
              episode: 2,
              id: 891025,
              title: "Mon Amour",
              overview: "Severide is hiding a serious shoulder injury sustained in the fire that killed Andy Darden, and grapples with his guilt as he fights to rescue a construction worker trapped in a building collapse. Adding to the burden, Darden's wife Heather turns on Severide at the annual firefighters' barbecue, blaming him for her husband's death. A call is made to an accident site at Hancock Tower, where two teenagers are pinned in a vehicle trapped beneath the falling debris of a broken window washer's cart. Meanwhile, Casey and Hallie work to figure out their future together.",
              runtime: 42,
              },
              {
              release: "2012-10-24",
              episode: 3,
              id: 891026,
              title: "Professional Courtesy",
              overview: "Casey faces pressure to cover for a cop's son, who was responsible for a drunken-driving accident that left a teenager paralyzed. Meanwhile, Severide ignores his doctor's warnings that his neck injury may never heal if he doesn't seek treatment; and Mills must choose between working at the fire department full-time or helping his mom with her restaurant.",
              runtime: 43,
              },
              {
              release: "2012-10-31",
              episode: 4,
              title: "One Minute",
              overview: "Chief Boden is accused of leaving a homeless man to die in a warehouse fire after ordering his men to evacuate the scene, creating negative press and bad feeling within the department. Meanwhile, Lieutenant Severide helps an elderly woman facing some neighborhood problems. Detective Voight ramps up his intimidation tactics aimed at Casey in an attempt to discourage him from testifying against his son. Shay is forced to revisit her heartbreak over her ex-girlfriend Clarice, when she finds herself face-to-face with the ex and her husband during a call. Hermann’s temper flares during a rescue call at a Halloween block party.",
              runtime: 43,
              
              },
              {
              release: "2012-11-07",
              episode: 5,
              id: 891028,
              title: "Hanging On",
              overview: "Casey confronts Detective Voight about his harassing tactics, vowing never to back down, and ends up paying the price for his decision. Dawson faces disciplinary action for her on-the-job conduct. Meanwhile, Severide finds his arm failing him during a rescue at a construction accident, and reaches out to Anna, an old flame and pharmaceutical rep, hoping she might be able to help alleviate his injury problems.",
              runtime: 43,
              },
              {
              release: "2012-11-14",
              episode: 6,
              id: 891030,
              title: "Rear View Mirror",
              overview: "Facing suspension, Dawson gets a hand from the same girl she saved through the procedures that landed her in front of the disciplinary board. Lieutenant Casey finds his fuse shortening as Detective Voight stops at nothing to get him to retract his statement. However, when Casey lays his life on the line during an apartment fire, he may have unknowingly caught the break he was needing.",
              runtime: 42,
              },
              {
              release: "2012-11-21",
              episode: 7,
              id: 891029,
              title: "Two Families",
              overview: "Everyone in the firehouse is ordered to take a drug test after a call to a daycare center exposes them to a makeshift meth lab, and Severide stalls, not wanting his injury, or the painkillers he takes, to be discovered. Meanwhile, Truck and Squad find themselves pinned down by gunfire while trying to help the victim of a gang shooting, and a deep-fried turkey fire grows from small to explosive when a garage catches fire. Elsewhere, Dawson saves a bleeding man and Casey delivers a baby on the scene of a massive car pileup on the freeway.",
              runtime: 43
              },
              {
              release: "2012-12-05",
              episode: 8,
              id: 891032,
              title: "Leaving the Station",
              overview: "At the site of a train accident, Peter Mills becomes deeply upset when he observes the dead body of a young victim. Unable to shake his emotional distress about the event, he questions his future as a firefighter. Dawson and Shay save a 6-year-old girl whose mother is abusing her – but their confrontation leads the woman to resort to dire actions. Meanwhile, Severide aggravates his injury while rescuing a heart attack victim and Shay sends Clarice, her married, pregnant ex-girlfriend, back home to her husband.",
              runtime: 42
              },
              {
              release: "2012-12-12",
              episode: 9,
              id: 891033,
              title: "It Ain't Easy",
              overview: "After he's injured in a terrible fire at an auto machine shop, Jose Vargas is forced to go on disability and leave his life as a firefighter behind - a task he finds incredibly difficult. Chief Boden tries to help a suspected teenage firebug. Also, Severide receives an enticing invitation from Renee, a woman who he saved from a car crash incident involving live electrical wires. Meanwhile, Cruz tries to save his younger brother Leon from the gang he is involved with.",
              runtime: 4
              },
              {
              release: "2012-12-19",
              episode: 10,
              id: 891034,
              title: "Merry Christmas, Etc.",
              overview: "After putting out a kitchen fire in an upscale townhouse, Casey, Herrmann, Mouch, Cruz, Otis and Mills find themselves accused of stealing a $50,000 diamond necklace from the home, touching off an internal investigation. Cruz’s brother Leon is caught in the middle of an escalating gang war, leaving Cruz to make a desperate choice to save him. Meanwhile, Dawson invites Casey to her cousin’s fancy Christmas party, and a frustrated Shay has reached her limit with Severide.",
              runtime: 43,
              },
              {
              release: "2013-01-02",
              episode: 11,
              title: "God Has Spoken",
              overview: "Eaten up by his guilt over Flaco’s death in the fire, Cruz goes to Casey to confess. While Shay recovers from a head injury sustained in the ambulance crash, Severide asks Dawson for her help in dealing with his own injury. Casey is caught in the middle of a family conflict between his mother and sister. Elsewhere, Herrmann finds a business deal hard to stomach.",
              runtime: 42,
              },
              {
              release: "2013-01-09",
              episode: 'Adventure',
              title: "Under the Knife",
              overview: "Severide finally addresses Chief Boden about his injury and makes some important personal decisions about his future. Meanwhile, Casey struggles with family matters and Dawson takes matters into her own hands when she discovers a young girl who is the sole survivor at the scene of a rescue call.",
              runtime: 42,
              
              },
              {
              release: "2013-01-30",
              episode: 13,
              id: 891036,
              title: "Warm and Dead",
              overview: "A troubled Chief Boden goes to the police when a man dies in a hardware store fire set by Ernie, the troubled teenage firebug he’s been trying to help, and his Uncle Ray. Meanwhile, Severide decides on his future and reaches out to his father. Elsewhere, Otis finds camaraderie when he fills in for a few shifts at the slowest firehouse in the city, and makes a decision of his own, while Dawson and Shay find themselves in a bad predicament during a call to a tenement.",
              runtime: 43,
              },
              {
              release: "2013-02-06",
              episode: 14,
              id: 891039,
              title: "A Little Taste",
              overview: "Severide finds that he shares a familiar past with Eric Whaley, the Lieutenant who was brought into the firehouse to help out. Dawson lets Shay in on her secret, while Casey deals with family issues. Meanwhile, a bad batch of heroin on the streets has Boden and the team scrambling, while Clarice and Shay find they have a new problem to overcome.",
              runtime: 43,
              },
              {
              release: "2013-02-13",
              episode: 15,
              id: 891038,
              title: "Nazdarovya!",
              overview: 'Dawson attempts to help her brother Antonio unravel the details of his drugs-and-gang investigation, and goes behind his back in turning to an unlikely source for assistance. Casey and his mother, Nancy struggle with their new relationship. Meanwhile, as a favor to Lieutenant Whaley, Severide visits someone important from his past, while Herrmann and Otis learn some hard truths about their "silent partner" in the bar.',
              runtime: 42,
              
              },
              {
              release: "2013-02-20",
              episode: 16,
              id: 891037,
              title: "Viral",
              overview: "The anguish that haunts Cruz over his previous actions boils over, as he puts himself and his fellow firefighters in jeopardy. Casey and his sister Christie try to solve their issues with their mother and each other. Meanwhile, Severide reaches out again to an important person from his past as a favor to Lieutenant Whaley and the squad gains new perspective after assisting the bomb squad on an extremely dangerous call.",
              },
              {
              reease: "2013-02-27",
              episode: 17,
              id: 891040,
              title: "Better to Lie",
              overview: "Old emotional wounds are opened when Lieutenant Severide’s father Bennie comes to town and clashes with Chief Boden over the death of their former colleague. Mills helps a distraught driver who caused an accident and Shay makes a decision about her future with Clarice. Meanwhile, Herrmann, Otis and Dawson get to the bottom of a mystery about their bar.",
              runtime: 43,
              },
              {
              release: "2013-03-20" ,    
              episode: 18,
              title: "Fireworks",
              overview: "With tensions still running high between Chief Boden and Bennie Severide, things boil over when Mills confronts Bennie about the fire that killed his father. Meanwhile, Severide, Casey and Bennie uncover the truth behind two mysterious diner fires and Shay takes a new direction with her plan to have a baby.",
              runtime: 43,
              },
              {
              release: "2013-03-27",
              episode: 19,
              id: 891041,
              title: "A Coffin That Small",
              overview: "Tragedy strikes when a rescue attempt at a tenement building proves unsuccessful, leaving the men and women of firehouse 51 affected by the loss of the victim. Severide's decision to put Mills on the fast track to move from Truck to Squad doesn't sit well with some of the others and tension mounts between Severide and Casey over Heather Darden. Shay and Dawson are forced to deal with a junkie's crazy behavior while on a call and Shay considers a different way to have a family. Meanwhile, the team draws the ire of local drug dealers who threaten the peace and safety of the neighborhood and firehouse.",
              runtime: 42,
              },
              {
              release: "2013-04-03",
              episode: 20,
              id: 891045,
              title: "Ambition",
              overview: "Mills finds himself the target of resentment from some colleagues when Severide supports his desire to join Squad. Tara, a paramedic candidate, joins Dawson and Shay on the job for a few shifts. Meanwhile, Shay comes to the aid of Cindy Herrmann, who suffers from pregnancy complications while her husband Christopher is out of town. Elsewhere, Dawson and Casey draw closer as the grand opening of Molly’s draws near, and Casey receives a surprise visit.",
              runtime: 43,
              },
              {
              release: "2013-05-01",
              episode: 21,
              id: 891042,
              title: "Retaliation Hit",
              overview: "Accused of sexual misconduct by a former paramedic candidate, Severide faces potentially dire consequences and fights for his survival both within the Chicago Fire Department and the legal system. Detective Voight returns, looking to collect on the favor that Dawson owes him for helping her brother, Antonio. Casey falls back into old patterns in his personal life, while Dawson, Herrmann and Otis become the proud owners of a real neighborhood bar as Molly's prepares for its grand opening.",
              runtime: 42,
              },
              {
              release: "2013-05-08",
              episode: 22,
              id: 891043,
              title: "Leaders Lead",
              overview: "A frustrated Severide, turns to an unlikely ally to resolve his current dilemma. Casey begins to find satisfaction in his personal life, while Mills and Dawson face personal challenges. Meanwhile, the squad is called to the scene of a harrowing apartment building collapse.",
              runtime: 43,
              },
              {
              release: "2013-05-15",
              episode: 23,
              id: 891046,
              title: "Let Her Go",
              overview: "Events force Lieutenant Casey to team up with the Intelligence Unit, now run by Voight, who doesn’t appear to have changed his crooked ways after his stint in prison. Shay's excitement at the prospect of becoming a parent grows, while Mills and Dawson face some personal challenges. Meanwhile, the house comes together to support the opening of Molly's.",
              runtime: 43,
              },
              {
              release: "2013-05-22",
              episode: 24,
              episode_type: "finale",
              id: 891047,
              title: "A Hell of a Ride",
              overview: "When a call comes in from the Cook County jail, the squad steps into a volatile predicament and are tasked with trying to defuse an escalating situation. Shay remains hopeful about her baby dreams and Hermann's wife Cindy goes into labor with their fifth child. Meanwhile, Mills and Dawson face key decisions in their personal lives.",
              runtime: 43,
              }
           ]  
          },
          {
              season: 2,
              release: "2013-09-24",
              episodes: [
              {
              release: "2013-09-24",
              episode: 1,
              episode_type: "standard",
              id: 891048,
              title: "A Problem House",
              overview: "An arsonist targets Lt. Severide. Meanwhile, Station 51 is under scrutiny by Gail McLeod, a financial consultant for the city who is deciding if any firehouses should be closed. Mouch receives a visit from his Japanese girlfriend, Lt. Casey 'celebrates the one-year anniversary of Andy's death, and Shay suspects Severide's paternity.",
              production_code: "201",
              runtime: 42,
              },
              {
              release: "2013-10-01",
              episode: 2,
              episode_type: "standard",
              id: 891050,
              title: "Prove It",
              overview: "In the wake of Heather's incident, Lt. Casey is having a hard time handling his newfound responsibilities. Lt. Severide is on edge dreading the next attack from the firehouse's arsonist. Meanwhile, with Renee back from her mother's, Severide knows he has to confront her about his paternity suspicions. Elsewhere, Mouch begins his campaign for union president and Shay and Dawson feel that they need to get out more.",
              production_code: "202",
              runtime: 42,
              },
              {
              release: "2013-10-08",
              episode: 3,
              episode_type: "standard",
              id: 968696,
              title: "Defcon 1",
              overview: "Lt. Severide has his strong ideas on who the serial arsonist is, but first needs to find proof to back up his suspicions. Meanwhile, Lt. Casey adjusts to his new lifestyle in the wake of recent events and Molly's bar is failing, much to the dismay of owners Hermann, Dawson and Otis. Elsewhere, Dawson goes out on a date with Jay Halstead, one of the bar regulars, and Mouch's campaign trail starts to get on track with the aid of Isabella, an old friend of Dawson's.",
              production_code: "203",
              runtime: 42,
              },
              {
              release: "2013-10-15",
              episode: 4,
              pisode_type: "tandard",
              id: 968697,
              title: "A Nuisance Call",
              overview: "Lieutenant Severide is anxious to implicate the serial arsonist, while Dawson and Shay get a shock on a routine call. Meanwhile, suspicions continue to point to Clarke as the mole inside the firehouse and Molly's falls deeper into the red. Elsewhere, Mouch campaigns for union president, with the aid of Isabella, and Boden butts heads with Gail McLeod.",
              production_code: "204",
              runtime: 42,
              },
              {
              elease: "2013-0-22",
              episode: 5,
              episode_type: "standard",
              id: 968698,
              title: "A Power Move",
              overview: "Boden's future with Firehouse 51 is on the line and McLeod keeps on him about his past wrongdoings, pushing him toward an early retirement. With Boden considering his options, McLeod calls on an unlikely candidate to potentially replace him as Chief. Meanwhile, it becomes clearer who the mole inside the firehouse is and everyone takes measures to make their disdain for him known. Meanwhile, Shay's social life is in full bloom and Arthur continues to take money from the struggling Molly's.",
              production_code: "205",
              runtime: 42,
              },
              {
              release: "2013-11-12",
              episode: 6,
              episode_type: "standard",
              id: 968699,
              title: "Joyriding",
              overview: "While out on a jog, Severide comes across a secluded and empty construction site and encounters a young boy who has been trapped in a backhoe loader and is in dire need of assistance. Boden and McLeod continue to butt heads about the future of the firehouse and Boden breaks news about his future to Casey. Meanwhile, it's election day for the union presidency and Mouch and Greg Sullivan have a debate on Otis' podcast. With rival bar Game Day's future in peril, the finger is being pointed at Molly's.",
              production_code: "206",
              runtime: 42,
              },
              {
              release: "2013-11-19",
              episode: 7,
              episode_type: "standard",
              id: 968700,
              title: "No Regrets",
              overview: "When a tanker collides into a commuter train that subsequently crashes into a warehouse, the firehouse is called to the horrific scene that tests everyone to the limits as life and death hangs in the balance. With the ultimatum in place for him or the firehouse, Boden is tasked with making life-changing decisions regarding his future. Severide learns more about Katie, the young woman he saw with his father. Meanwhile, Shay and Dawson are still at odds and Casey’s responsibility of being a surrogate father takes a sharp turn.",
              production_code: "207",
              runtime: 42,
              },
              {
              release: "2013-11-26",
              episode: 8,
              episode_type: "standard",
              id: 968701,
              title: "Rhymes with Shout",
              overview: "When the shooting of a young girl happens in their neighborhood, Cruz and his brother, Leon are forced to think about the gang they have tried to escape. The battle between Chief Boden and McLeod continues to escalate and Isabella convinces Mills to dress up for a fancy gala. Meanwhile, Lt. Casey is sad Dawson won't be coming by as much now that his parental duties are over, Shay is fed up with the firehouse and digs in deeper with Devon and Zoya's visa is expiring, prompting her to come up with an idea.",
              production_code: "208",
              runtime: 42,
              },
              {
              release: "2013-12-03",
              episode: 9,
              episode_type: "standard",
              id: 968702,
              title: "You Will Hurt Him",
              overview: "Chief Boden prepares to counterattack McLeod in a final effort to save the firehouse from closure and the romance between Dawson and Casey escalates. Leon is making progress in the gang murder investigation, but Cruz cannot stand being left in the dark by Voight, fearing for his brother's safety. Meanwhile, Severide and Katie bond to make up for lost time and Otis feels uncomfortable living with Severide and Shay after Devon's latest escapade.",
              production_code: "209",
              runtime: 42,
            },
              {
              release: "2013-12-10",
              episode: 10,
              episode_type: "standard",
              id: 968984,
              title: "Not Like This",
              overview: "All seems lost with firehouse 51 on the verge of closing its’ doors, thanks in no small part to Gail McLeod, but Chief Boden and the rest of the house refuse to allow themselves to sit by and let it happen. An emergency call to an apartment structure fire tests everyone’s limits and puts the squad in harm’s way. Meanwhile, Dawson receives some life-changing news and union president Greg Sullivan makes headlines, which has an immediate impact on Mouch.",
              production_code: "210",
              runtime: 42,
              },
              {
              release: "2014-01-07",
              episode: 11,
              episode_type: "standard",
              id: 969974,
              title: "Shoved in My Face",
              overview: "Lt. Casey returns to work at Firehouse 51 after nearly being killed in a building collapse and Shay meets Allison Rafferty, her new partner, who is friendly to everyone except her. Dawson begins her rigorous training at the Chicago Fire Academy, while Lt. Severide prepares for his stint as instructor. Meanwhile, Clarke stubbornly does not speak with the police about the murder in which he is the prime suspect and the future of Molly’s looks bleaker than ever.",
              production_code: "211",
              runtime: 42,
          },
              {
              release: "2014-01-14",
              episode: 'Adventure',
              episode_type: "standard",
              id: 970463,
              title: "Out with a Bang",
              overview: "Lieutenant Casey tries to convince himself and everyone around him that he is one hundred percent healthy following his near-death incident in the line of duty. Shay, not wanting to delve into the emotionally traumatic incident, continues to elude a lawyer who wants to speak with her about Daryl’s suicide. Meanwhile, Otis and Katie bond over board games, Boden helps out a woman with a negligent landlord and Dawson notices fellow recruit Rebecca Jones undertaking some interesting test-taking techniques at the Academy.",
              production_code: "212",
          },   
           {
            release: "2014-01-21",
              episode: 13,
              episode_type: "standard",
              id: 90654,
              title: "Tonight's the Night",
              overview: "When a drunk driver knocks down a transformer, the entire neighborhood is left without power on a frigid Chicago night and members of Firehouse 51 step up to lend their much needed help. While many from the community ride out the night at the station, in the midst of such close quarters, romances speed up and tempers flare. Meanwhile, Casey continues to lie to both himself and Dawson about his condition and the stakeholders in Molly's bicker about the bar's direction.",
              production_code: "213",
              runtime: 42,
              },
              {
              elease: "2014-2-25",
              episode: 14,
              episode_type: "standard",
              id: 971908,
              title: "Virgin Skin",
              overview: "Severide feels sidelined as he leaves Detective Lindsay and the Intelligence Unit to do their job and locate his sister Katie. Shay gets an unusual tip from Chicago Blackhawk players Brent Seabrook and Duncan Keith, who makes friends with Clarke and stop by Molly’s. Meanwhile, Casey learns more about his head injuries after another close call and Dawson pushes hard to pass the physical test at the Academy.",
              production_code: "214",
              runtime: 42,
              },
              {
              release: "2014-03-04",
              episode: 15,
              episode_type: "standard",
              id: 972369,
              title: "Keep Your Mouth Shut",
              overview: "Severide is getting impatient with the police as Vince Keeler walks free. Meanwhile, the house pulls out all the stops to save a girl trapped inside a donation bin, Mouch learns that Boden’s secretary Connie is not someone to mess with and the squad and truck are called to a serious high rise fire inside a 20-story downtown office building.",
              production_code: "215",
              runtime: 42,
          
              },
              {
              elease: "2014-3-11",
              episode: 16,
              episode_type: "standard",
              id: 972688,
              title: "A Rocket Blasting Off",
              overview: "Lt. Severide hits the top of the list as Det. Lindsay starts calling in suspects with the clearest motives to make the guy who kidnapped Katie disappear. Meanwhile, Jones is still having trouble fitting in as word of her disruptions reach the fire department’s headquarters. Elsewhere, Herrmann celebrates his twentieth anniversary with his wife, but no one supports his idea on the gift he intends to give.",
              production_code: "216",
              runtime: 42,
             },
              {
              release:  "2014-3-18",
              episode: 17,
              episode_type: "standard",
              id: 973050,
              title: "When Things Got Rough",
              overview: "Lt. Severide is reminded of his own past by a man he saves from a car accident and feels compelled to help him. Elsewhere, Lt. Casey and Chief Boden grapple with how to dock Jones per her father’s orders. Meanwhile, Mouch and Dawson have troubles with the opposite sex and an emotional call to duty creates ripples throughout Firehouse 51.",
              production_code: "217",
              runtime: 42,
              },
              {
              release: "2014-04-08",
              episode: 18,
              episode_type: "standard",
              title: "Until Your Feet Leave the Ground",
              overview: 'Lt. Severide sticks his neck out for Dave Bloom, a fellow firefighter from Denver who is troubled by addiction. Elsewhere, Dawson and Shay leave town for a "girl"s weekend" at a cabin in the woods. Meanwhile Jones struggles with the knowledge that her father is pressuring Chief Boden about her career path and Mouch"s internet dating profile gets an upgrade with the help of Mills and the guys.',
              runtime: 42,
          
              },
              {
              elease: "2014-4-15",
              episode: 19,
              episode_type: "standard",
              title: "A Heavy Weight",
              overview: "A suicide note is delivered to a surprised Dawson and Lt. Severide digs deeper into Bloom’s dark past. Elsewhere, Chief Boden learns shocking news, and with the help of Shay, Lt. Casey goes on the search for a life-changing item.",
              production_code: "219",
              runtime: 42,
             },
              {
              release: "2014-04-29",
              episode: 20,
              episode_type: "standard",
              id: 974675,
              title: "A Dark Day (I)",
              overview: "Lt. Casey and Dawson volunteer to help at a charity run at Chicago Medical when a massive explosion sends Chicago into chaos. With one of their own missing in the blast, the firehouse is tested like never before. The crossover continues on Chicago P.D. S01E12 8:30 PM (II)",
              production_code: "220",
              runtime: 42,
           },  
              {
              charelease: "214-05-06",
              episode: 21,
              episode_type: "standard",
              title: "One More Shot",
              overview: "With everyone’s support, Dawson makes final preparations to retake the fireman’s exam, but a call to the field may throw a major wrench into her plans. Elsewhere, Lt. Casey has an important matter to discuss with Antonio. Meanwhile, Lt. Severide and the firehouse welcome Rick Newhouse , the latest addition to the squad, Shay gets an uninvited surprise guest and Chief Boden makes a bold move.",
              production_code: "221",
              runtime: 42,
              },
              {
              release: "2014-05-13",
              episode: 22,
              episode_type: "finale",
              id: 975500,
              title: "Real Never Waits",
              overview: "A fire at a boarding school leaves Lt. Severide shaken and wondering if he could have done more. Meanwhile, with the firehouse in full support of Dawson as she retakes the fireman’s exam, Lt. Casey attempts some political maneuverings on her behalf. Elsewhere, Mills looks for answers about his father’s mysterious past and Chief Boden’s grand plans take a detour.",
              production_code: "222",
              runtime: 42,
              }
            ]
        },
        {
          season:3,
          release: "2014-09-23",
          episodes: [
              {
              release: "2014-09-23",
              episode: 1,
              episode_type: "standard",
              id: 1000954,
              title: "Always",
              overview: "Boden forces members of Firehouse 51 to pull themselves back together in the aftermath of a harrowing fire explosion. While Severide goes missing for one week too many, Casey works to track down his whereabouts. Newhouse brings some unexpected news regarding one of Mills’ relatives. Herrmann and Otis make some new goals regarding Molly’s.",
              runtime: 42,
              },
              {
              release: "2014-09-30",
              episode: 2,
              episode_type: "standard",
              id: 1006883,
              title: "Wow Me",
              overview: "Severide returns to Firehouse 51, but he is clearly not his usual self. Dawson counts down the weeks until she gets started as a candidate at the Austin Firehouse. Mills learns more about his father’s family. Herrmann asks the rest of the Molly investors to come up with some new ideas to turn the business around.",
              },
              {
              release: "2014-10-07",
              episod: 3,
              episode_type: "standard",
              id: 1006884,
              title: "Just Drive the Truck",
              overview: "Tensions run high when trucks from two firehouses collide and fingers are pointed towards Cruz for his driving.",
              runtime: 42,
              },
              {
              release: "2014-10-14",
              episode: 4,
              episode_type: "standard",
              id: 1006885,
              title: "Apologies are Dangerous",
              overview: "Dawson tries to strike a balance with Casey during her first day as a candidate. Mills ponders an uncertain future. Severide faces his demons. A city inspector visits Molly's.",
              runtime: 42, 
              },
              {
              release: "2015-02-10",
              episode: 14,
              episode_type: "standard",
              id: 1039826,
              title: "Call It Paradise",
              overview: "An ice storm hits, forcing a citywide lockdown. Mills and Brett are left stranded in the elements while searching for a teen, and the firehouse members babysit a newborn. Elsewhere, Severide receives a job offer, and Chief Boden clashes with his father over his treatment.",
              runtime: 42,
              },
              {
              release: "2015-02-17",
              episode: 15,
              episode_type: "standard",
              title: "Headlong Toward Disaster",
              overview: "A temporary chief fills in for Boden, who is forced to take some time off for personal reasons.",
              runtime: 42
              },
              {
              release: "2015-03-03",
              episode: 16,
              episode_type: "standard",
              id: 1042390,
              title: "Red Rag the Bull",
              overview: "The interim chief makes a tactical error during an apartment fire, stirring up tensions and putting careers in jeopardy. Meanwhile, Mouch discovers that his donation to a fertility clinic has resulted in a child, and Dawson goes out on a double date with Brett and Cruz.",
              runtime: 42,
              },
              {
              release: "2015-03-10",
              episode: 17,
              episode_type: "standard",
              title: "Forgive You Anything",
              overview: "Severide lobbies Chief Boden for a favor for Scott Rice, an old friend needing a second chance with the CFD, but Casey and Otis have their doubts. Elsewhere, Mills works to regain his active squad status while Brett and Dawson decide they need a big night out.",
              runtime: 42, 
              },
              {
              release: "2015-03-17" ,    
              episode: 18,
              episode_type: "standard",
              title: "Forgiving, Relentless, Unconditional",
              overview: "Herrmann tries to rescue a toddler from a structure fire. Mills discovers unexpected news.",
              runtime: 42,
              },
              {
              release: "2015-04-07",
              episode: 19,
              episode_type: "standard",
              id: 1047513,
              title: "I Am the Apocalypse",
              overview: "The Chicago fire team works seamlessly with Chicago Med personnel to help aid victims of a deadly gas leak, but things quickly take a turn for the worse when the hospital is suddenly forced into quarantine.",
              runtime: 42,
              },
              {
              release: "2015-04-21",
              episode: 20,
              "episode_type": "standard",
              id: 1047514,
              title: "You Know Where to Find Me",
              overview: "Truck and squad are called to the scene of a car crash that has Mills desperately working to save the life of a driver seriously injured in the wreck. Meanwhile, Casey has some doubts about Jack Nesbitt, whose strip club he is remodeling on the side. Elsewhere, Hermann, Otis, Cruz and Chaplain Orlovsky help get their team ready for the peewee hockey championship, but Herrmann might prove more of an obstacle than the other team.",
              runtime: 42,
              },
              {
              release: "2015-04-28",
              episode: 21,
              episode_type: "standard",
              id: 1051593,
              title: "We Called Her Jellybean (I)",
              overview: "An apartment fire connected to a case of rape and attempted murder resembles an unsolved case in New York, so Sgt. Benson of Special Victims Unit comes to Chicago to help Intelligence with the investigation. The crossover continues on Chicago P.D. S02E20 The Number of Rats (II) and Law & Order: Special Victims Unit S16E20 Daydream Believer (III).",
              runtime: 42,
              },
              {
              release: "2015-05-05",
              episode: 22,
              episode_type: 'standard',
              title: "Category 5",
              overview: "At Sgt. Voight's urging, a determined Lt. Casey agrees to go undercover in an effort to provide proof of Jack Nesbitt's shady dealings. Meanwhile, Otis and Severide continue to disagree about the integrity of Scott Rice, causing tensions to flare between members of truck and squad. Meanwhile, Herrmann helps out a fellow member of the firehouse.",
              runtime: 42,
              },
              {
              release: "2015-05-12",
              episode: 23,
              episode_type: "finale",
              title: "Spartacus",
              overview: "Lt. Casey puts his life on the line and digs deeper into the shady dealings of Jack Nesbitt. Chief Boden must figure out how to create unity in a divided house, while Severide comes to question his own judgment. A dangerous warehouse blaze quickly gets out of control and threatens members of firehouse 51.",
              runtime: 42,
              }
              
          ]
        },
        {
              season:4,
              episodes: [
              {
              release: "2015-10-13",
              episode: 1,
              episode_type: "standard",
              title: "Let It Burn",
              overview: "Casey is placed in a dangerous situation while working undercover to bring down a trafficking ring being run out of Nesbitt's club. The squad's high turnover rate results in an unwelcome surprise for Severide. Dawson recognizes that her life is about to change. A new candidate makes an unusual first impression. Residents band together to protest a drug den in their neighborhood.",
              runtime: 42,
              },
              {
              release: "2015-10-20",
              episode: 2,
              episode_type: "standard",
              title: "A Taste of Panama City",
              overview:  'Boden"s job is on the line pending an internal investigation. Severide adjusts to Patterson, his new commanding officer. Dawson shakes things up at the work. Casey searches for important evidence in his investigation of Nesbitt. Herrmann tries to keep the peace with Molly"s new neighbors.'
              },
              {
              release: "2015-10-27",
              episod: 3,
              episode_type: "standard",
              title: "A Taste of Panama City",
              overview: "Tensions run high when trucks from two firehouses collide and fingers are pointed towards Cruz for his driving.",
              runtime: 42,
              },
              {
              release: "2015-11-03",
              episode: 4,
              episode_type: "standard",
              title: "Your Day Is Coming",
              overview: "The squad members come together to support one of their own. Herrmann tries to figure out how to reopen Molly's after it gets shut down. Severide digs deep into the arson investigation.",
              runtime: 42, 
              },
              {
              release: "2015-11-10",
              episode: 5,
              episode_type: "standard",
              title: "Regarding This Wedding",
              overview: "Boden offers to host a wedding at the firehouse after a fire destroys the original location, but it doesn't sit well with Chief Riddle, who also butts heads with Dawson over her ability to perform. Severide fights for his old position. Capt. Patterson finds himself torn between leadership and his colleagues.",
              runtime: 42,
              },
              {
              release: "2015-11-17",
              episode: 6,
              episode_type: "standard",
              title: "2112",
              overview: "Boden's new neighbor asks him for a favor that could have serious repercussions. Severide is upset when he's treated like a candidate by Patterson. Cruz is visited by a gangbanger who knows his brother. The team responds to act involve: wheeler; and is thanked with tickets to see Rush.",
             runtime: 42
              },
              {
              release: "2015-11-24",
              episode: 7,
              episode_type: "standard",
              id: 1042390,
              title: "Sharp Elbows",
              overview: "Boden suspects his neighbor is setting him up; Severide, who's still on probation, receives a surprise visit from his father and also learns something about Patterson that could be a game changer. Romance blossoms at a fire department gala.",
              runtime: 42,
              },
              {
              release: "2015-12-01",
              episode: 8,
              episode_type: "standard",
              title: "When Tortoises Fly",
              overview: "Boden believes Maddox is behind Serena's accusations. Severide reaches out to Jamie, who's Maddox's lawyer, in an attempt to help. Patterson questions whether Boden can remain chief. Brett and Chili suspect that a man passed out in a garden is connected to a previous call. Otis has problems with his social calendar, but Casey and Otis have their doubts. Elsewhere, Mills works to regain his active squad status while Brett and Dawson decide they need a big night out.",
              runtime: 42, 
              },
              {
              release: "2015-12-08",
              episode: 9,
              episode_type: "standard",
              title: "Short and Fat",
              overview: "Patterson fills in for Boden, who's trying to clear his name. Severide learns where Serena may be hiding. Herrmann and Otis give Freddie a job that keeps him close by. Jimmy and Chili draw more attention then either bargained for.",
              runtime: 42,
              },
              {
              release: "2016-01-05",
              episode: 10,
              episode_type: "standard",
              title: "The Beating Heart (I)",
              overview: "Herrmann fights for his life after being stabbed; Cruz hits the streets to find Freddie. Mouch proposes to Trudy. The crossover continues on Chicago Med S01E05 Malignant (II) and Chicago P.D. S03E10 Now I'm God (III).",
              runtime: 42,
              },
              {
              release: "2016-01-19",
              episode: 11,
              "episode_type": "standard",
              title: "The Path of Destruction",
              overview: "A tornado threatens Chicago. Chili makes a major mistake, which causes Brett to report her to Boden. Otis asks Dawson to help him solve his women troubles. Severide assists a Department of Homeland Security agent.",
              runtime: 42,
              },
              {
              release: "2016-01-26",
              episode: 12,
              episode_type: "standard",
              title: "Not Everyone Makes It",
              overview: "Freddie's father begs Herrmann to forgive his son's assault. Casey discovers that a makeshift shelter housing people displaced by the tornado may close. Casey attends a fund-raiser at the request of an alderman. Dawson and Brett experience repercussions after telling Boden about Chili's erratic behavior.",
              runtime: 42,
              },
              {
              release: "2016-02-02",
              episode: 13,
              episode_type: "standard",
              title: "The Sky Is Falling",
              overview: "The team responds to a mass shooting; Casey investigates the missing money from the fund-raiser. Jimmy agrees to represent the firehouse in a boxing match against the Chicago PD's 21st District. Chili's behavior continues to be an issue for Brett.",
              runtime: 42,
              },
              {
              release: "2016-02-09",
              episode: 14,
              title: "All Hard Parts",
              overview: 'Severide confronts Chili about her erratic behavior. Members of the firehouse rally around Casey, who they think would make a great candidate for alderman. Jimmy squares off against Antonio in the first annual "Battle of the Badges" boxing match.',
              runtime: 42,
              },
              {
                release: "2016-02-16",
                episode: 15,
                episode_type: "standard",
                title: "Bad for the Soul",
                overview: "The team responds to a suspicious call from a neighboring firehouse; and welcomes a new firefighter, though her addition has repercussions. Casey moves forward in his run for alderman.",
                runtime: 42,
              },
              {
                release: "2016-02-23",
                episode: 16,
                episode_type: "standard",
                title: "Two Ts",
                overview: "Casey reconsiders his run for alderman after he's targeted by a propaganda campaign. The squad responds when a man is trapped inside of a burning car. Trudy's nerdy brother plans Mouch's bachelor party. Jimmy and Brett investigate a kidnapping on their own.",
                runtime: 42,
              },
              {
                release: "2016-03-29",
                episode: 17,
                episode_type: "standard",
                title: "What Happened to Courtney",
                overview: "Severide and Cruz find a child's remains inside a chimney while investigating a possible carbon monoxide leak inside a home. In other events, Casey braces for the worst in his run for alderman while Alderman Becks continues to bad mouth him to the press.",
                runtime: 42,
              },
              {
                release: "2016-04-05",     
                episode:18,
                episode_type: "standard",
                title: "On the Warpath",
                overview: "Sylvie witnesses a murder and is threatened by the shooter not to go to the police. Firehouse 51 jumps into action when a fire breaks out at a restaurant and traps several people inside a vault. Mouch starts to get cold feet.",
                runtime: 42,
              },
              {
                release: "2016-04-19",
                episode: 19,
                episode_type: "standard",
                title: "I Will Be Walking",
                overview: "Casey steps up to help a teenager being bullied by a gang; Severide bonds with a detective’s son after her life is threatened; and Kidd and Herrmann go head-to-head in a test of bar knowledge.",
                runtime: 42,
              },
              {
                release: "2016-04-26",
                episode: 20,
                episode_type: "standard",
                title: "The Last One for Mom",
                overview: "Firehouse 51 unites to help a young boy in tragic circumstances. A high-powered political consultant helps Casey navigate a potential scandal. Cruz makes a mistake that nearly costs him his life.",
                runtime: 42,
              },
              {
                release: "2016-05-03",episode: 21,episode_type: "standard",title: "Kind of a Crazy Idea",
                overview: "Dawson saves a young boy from an apartment fire. Kidd's idea for Molly's doesn't go as hoped. Severide hits a wall while advocating for new fire masks. Cruz and Brett utilize a secret weapon to get Otis to see Dr. Halstead take a blood test.",
                runtime: 42,
              },
              {
                release: "2016-05-10",
                episode: 22,
                episode_type: "standard",
                title: "Where the Collapse Started",
                overview: "The team responds to a building collapse that's trapped more than a dozen people. Dawson's quest to foster Louie is aided by a familiar face. Otis, who's on medical leave, meets his temporary replacement. Severide and Kidd continue to see each other. Casey is at odds with Antonio.",
                runtime: 42,
              },
              {
                release: "2016-05-17",
                episode: 23,
                episode_type: "finale",
                title: "Superhero",
                overview: "Boden and Jimmy are at odds. Kidd deals with her unstable ex. Dawson continues her quest to foster Louie. Casey's new political consultant urges him to think big. The team responds to a dangerous structure fire.",
                runtime: 42,
              }

              ]
             
              },
        {
          season:5,
release :"2016-10-11",
 episodes : [
 {
  release: "2016-10-11",
  episode: 1,
  episode_type: "standard",
  title: "The Hose or the Animal",
 overview: "Severide and Stella search for Grant, who's AWOL from Chicago Med. Dawson questions her career path. Casey's relationship with his political consultant cools. Borrelli's anger at Boden over his brother's death boils over. Mouch and Brett partner on a new venture.",
  runtime: 42,
  },
  {
 release: '',
  episode: 2,
  episode_type: "standard",
  title: "A Real Wake-Up Call",
  overview: "Casey and Dawson find themselves in the midst a potential political mess. Stella has to make a big decision about her ex-beau. The squad responds to an auto accident. Severide befriends a socialite. Brett and Mouch set aside their writing differences for the greater good.",
  },
  {
  release: "2016-10-25",
  episode: 3,
  episode_type: "standard",
  title: "Scorched Earth",
  overview: "Casey seeks help with a personal matter from Susan Weller. A rich party guy wants Severide to travel with him. Stella tries to help a sick street kid. Otis and Herrmann share their concerns about Molly's lack of customers.",
  runtime: 42,
  },
  {
  release: "2016-11-01",
  episode: 4,
  episode_type: "standard",
  title: "Nobody Else Is Dying Today",
  overview: "Lt. Casey finds himself in a bad spot when a forklift accidentally pierces a tank storing acid. Casey is forced to use extreme measures to help a father and daughter in peril. Dawson and Brett respond to an elderly woman who has a difficult senior advocate. Mouch and Brett continue with their secret project. Otis shares some exciting news as he prepares himself for an unusual expedition.",
  runtime: 42,
  },
  {
 release: "2016-11-15",
  episode: 5,
  episode_type: "standard",
  id: 1230656,
  title: "I Held Her Hand",
  overview: "Lt. Casey is unable to rescue a woman who becomes trapped inside her burning greystone, prompting him and Lt. Severide to butt heads over the husband's role in the tragedy. Herrmann is on a mission to catch a mystery tagger that keeps targeting their firehouse and Boden gets a surprise visitor. Meanwhile, Dawson and Brett respond to a 16-year-old boy who was injured during a romantic homecoming proposal.",
  runtime: 42,
  },
  {
  release: "2016-11-22",
  episode: 6,
  episode_type: "standard",
  id: 1230657,
  title: "That Day",
  overview: "While responding to a call in the field, Dawson accidentally hits a pedestrian who stepped in front of the ambulance, and is left to deal with the repercussions. Lt. Casey and Lt. Severide disagree and continue to investigate an arson case while Chief Boden is left to decide whether to attend an important function in New York. Elsewhere, in hopes of preparing him for a possible promotion, Lt. Casey puts Herrmann at the helm for a shift so he can discover firsthand what his superiors deal with.",
  runtime: 42,
  },
  {
  release: "2016-11-29",
  episode: 7,
  episode_type: "standard",
  id: 1230658,
  title: "Lift Each Other",
  overview: "It's a family reunion when Dawson and Antonio's mother and father come to Chicago for their big anniversary party, but things quickly turn south. When a deep secret comes to the surface involving his stepson James, Chief Boden decides to take matters into his own hands. Meanwhile, Casey tries to save a young boy during a harrowing call to a warehouse and Otis and Kidd become competitive at the mud-hundred race.",
  runtime: 42,
  },
  {
  release: "2016-12-06",
  episode: 8,
  episode_type: "standard",
  id: 1230659,
  title: "One Hundred",
  overview: "Lt. Casey and Dawson apply for permanent adoption of Louie, but quickly discover a hurdle. Firefighter-turned-medical student Jeff Clarke approaches Lt. Severide with an interesting proposition. With hopes of reinvigorating business at the bar, Otis convinces a skeptical Herrmann to throw a bash in celebration of the milestone 100th anniversary of Molly's, but not without complications.",
  runtime: 42,
  },
  {
  release: "2017-01-03",
  episode: 9,
  episode_type: "standard",
  id: 1249307,
  title: "Some Make It, Some Don't (I)",
  overview: "Dawson and Casey deal with legal matters in hopes of remaining Louie's legal guardians. Severide continues in his efforts for a bone marrow procedure to help Anna, but when things don't go as planned, he finds himself slipping back into old habits. Meanwhile, Brett opens up to Dawson and members of Firehouse 51 become competitive, much to the dismay of Chief Boden. The crossover continues on Chicago P.D. S04E09 Don't Bury This Case (II).",
  runtime: 42,
  },
  {
  release: "2017-01-17",
  episode: 10,
  episode_type: "standard",
  title: "The People We Meet",
  overview: "Severide agrees to a bone marrow donation but a work accident throws everything into flux. Casey and Dawson try to find harmony at home. Meanwhile, Otis and Mouch decide to film a PSA encouraging people to join the Chicago Fire Department but hit a creative wall in the process.",
  runtime: 42,
  },
  {
  release: "2017-01-24",
  episode: 11,
  episode_type: "standard",
  title: "Who Lives and Who Dies",
  overview: "Dawson finds it hard to keep her emotions in check during an ambo run involving a pregnant teen. Elsewhere, the firehouse is called to the site of a building fire and Casey is forced to make a split-second decision when two victims are each need of life-saving assistance. In the aftermath, Casey is left to deal with the repercussions. Meanwhile, Severide shares a bond with Anna, as she makes her recovery.",
  runtime: 42,
  },
  {
  release: "2017-02-07",
  episode: 12,
  episode_type: "standard",
  title: "An Agent of the Machine",
  overview: "The team is on high alert when a previous incident during a fire call leaves a dangerous man on the loose with a vendetta to target Lt. Casey and Firehouse 51, and prompts CPD to step in. Dennis Mack, a buddy firefighter of Severide's father, comes to town to shadow the squad but may have ulterior motives. Meanwhile, Brett and Antonio's relationship hits some bumps in the road when his ex-wife Laura surfaces and Casey has a present for Dawson.",
  runtime: 42,
  },
  {
  release: "2017-02-14",
  episode: 13,
  episode_type: "standard",
  id: 1260477,
  title: "Trading in Scuttlebutt",
  overview: "When truck and squad are summoned to the scene of a dangerous accident, Chief Boden makes a split-second decision that overrides Chief Anderson, the incident commander whose house was the first to respond to the call. Feeling his authority was undercut and his reputation damaged, Anderson uses his power to make things miserable for Boden and all of House 51 feels the repercussions.",
  runtime: 42,
  },
  {
  release: "2017-02-21",
  episode: 14,
  episode_type: "standard",
  id: 1262860,
  title: "Purgatory",
  overview: "After exercising his disdain and authority over Chief Boden, Chief Anderson reassigns members of 51 to various houses around town, citing the need for improvement. The ramifications are felt by the crew, who are left to make the best of their respective situations in their new surroundings.",
  runtime: 42,
  },
  {
  release: "2017-03-01",
  episode: 15,
  episode_type: "standard",
  id: 1266970,
  title: "Deathtrap (I)",
  overview: "Truck and squad are called to aid in a massive all-city response when an old, ill-equipped factory-turned live/work space quickly turns into a firestorm, trapping countless unsuspecting victims. The dire situation quickly turns personal when it is discovered that one of Chicago PD's own has a family member at the scene. The crossover continues on Chicago P.D. S04E016 Emotional Proximity (II) and Chicago Justice S01E01 Fake (III).",
  runtime: 42,
  },
  {
  release: "2017-03-21",
  episode: 16,
  episode_type: "standard",
  title: "Telling Her Goodbye",
  overview: "When a turf war escalates, members of truck and squad find themselves caught in the middle as unsuspecting hostages when a group of armed gang members take cover and assume control over Firehouse 51.",
  runtime: 42,
  },
  {
  release: "2017-03-28",
  episode: 17,
  episode_type: "standard",
  title: "Babies and Fools",
  overview: "When similar car accidents uncover the fact that someone may be targeting innocent people, a determined Dawson takes matters into her own hands to help push things along. Severide does everything he can to make Anna feel welcome in her new Chicago surroundings. Herrmann, Kidd and Dawson decide to have Molly's included as a stop in this year's pub crawl. Meanwhile, Casey tends to his Alderman's duties when a persistent constituent asks for his help in resolving an issue.",
  runtime: 42,
  },
  {
  release: "",
  episode: 18,
  episode_type: "standard",
  title: "Take a Knee",
  overview: "Casey discovers a new crack house on the block that is harboring a female junkie. Dawson and Brett get assigned a new trainee for the shift. Meanwhile, Severide gets an unexpected visit from his father and Herrmann deals with family issues when his son gets into trouble at school.",
  runtime: 42,
  },
  {
  release: "2017-04-25",
  episode: 19,
  episode_type: "standard",
  id: 1303164,
  title: "Carry Their Legacy",
  overview: "When the squad's rig breaks down in the field, Casey reunites with his old friend and colleague Jason Kannell from Squad 6. Dawson and Brett serve their time in retraining. Severide tries to remedy what is going on with Anna and finds support from unlikely sources. As Connie returns from her family engagement, the crew lays bets on how long her temporary replacement Marcy will last.",
  runtime: 42,
  },
  {
  release: "2017-05-02",
  episode: 20,
  episode_type: "standard",
  id: 1303165,
  title: "Carry Me",
  overview: "Casey goes to drastic measures to help his friend Kannell. Lt. Severide helps an old widow come to terms with letting go, but realizes he may be the one needing help. Otis and Cruz deal with surprises when they find a new roommate to move in. Dawson and Brett get crafty to save a young girl.",
  runtime: 42,
  },
  {
  release: "2017-05-09",
  episode: 21,
  episode_type: "standard",
  title: "Sixty Days",
  overview: "Cruz finds himself in a bad spot when an off-duty incident begins to unravel, prompting Mouch to step in and offer help in hopes of avoiding serious consequences from the CFD. Casey goes head to head with a big politician to get his measure for first responders passed. Lt. Severide makes life difficult for newest team member Jason Kannell and Dawson gets an unexpected visit from her father. ",
  },
  {
  release: "2017-05-16",
  episode: 22,
  episode_type: "finale",
  id: 1308213,
  title: "My Miracle",
  overview: "A dangerous warehouse fire puts truck and squad at risk. Tensions are high for Dawson and Casey when Dawson's father overstays his welcome at their home. Meanwhile, Casey continues to fight for his first responders bill, Mouch makes a serious decision regarding his future and Herrmann goes to tremendous lengths to make a young boy smile.",
  runtime: 42,
 },
  ]
  
 },
        {
          season:6,
          episodes: [
            {
              release: "2017-09-28",
              episode: 1,
              episode_type: "standard",
              title: "It Wasn't Enough",
              overview: "With most of the squad still trapped inside the burning warehouse fire, Chief Boden makes a risky last-minute decision in an effort to save his men. Dawson continues to deal with her father, who has new plans for himself. Brett's childhood friend Hope visits the Windy City and strikes the attention of someone within the firehouse, while Kidd goes head-to-head with her landlord. Meanwhile, a fire at a high school hits close to home for Boden.",
              runtime: 42,
            },
            {
              release: "2017-10-05",
              episode: 2,
              episode_type: "standard",
              title: "Ignite on Contact",
              overview: "After learning the school fire wasn't an accident, Chief Boden turns up the pressure on Severide and Casey to investigate the cause of the fire that trapped his wife. Fueled by a competitive bet against Firehouse 87, Mouch pushes all of the wrong buttons in his need to win the competitive challenge known as the firefighter muster. Meanwhile, as Kidd settles into her new living arrangement, her unresolved feelings prompt her to question the intentions of newcomer Hope.",
              runtime: 42,
            },
            {
              release: "2017-10-12",
              episode: 3,
              episode_type: "standard",
              title: "An Even Bigger Surprise",
              overview: "Lt. Casey gets off on the wrong foot with Sam Mullins, a temporary Chief who is filling in for Boden at House 51 for the morning. When Casey later makes a risky move in an attempt to save a distraught man from jumping off a building, Mullins has a surprise that Casey does not expect. Mouch flies in Cruz's brother Leon as a birthday surprise, but the rest of the squad struggles to keep it a secret. Meanwhile, Brett is caught off guard when she learns new information about her hometown friend Hope.",
              runtime: 42,
            },
            {
              release: "2017-10-19",
              episode: 4,
              episode_type: "standard",
              title: "king Point",
              overview: "While running a secret errand, Dawson finds herself trapped in a collapsed parking structure. With all paths of exit blocked, she is forced to improvise and works double-duty to keep a number of injured individuals alive while trying to maintain peace among those trapped. Meanwhile, pressure is mounting on Casey as he begins to take on additional duties, Kidd grows increasingly skeptical of Hope after learning about rumors circulating and the firehouse receives a surprise visitor.",
            },
            {
              releaet: "207-10-26",
              episode: 5,
              episode_type: "standard",
              title: "Devil's Bargain",
              overview: "Casey and Severide find themselves at odds after Casey argues with him over the best way to save a teenager entangled in barbed wire. When Casey looks to Boden for help smoothing out the situation, he comes to the realization that he will have to fix it himself. Elsewhere, Otis tries to convince Casey to participate in the beta test for an expensive piece of new firefighting equipment imported from Japan. Meanwhile, Kidd and Hope come to blows over a payroll issue and Brett goes on a date with a doctor she meets during an ambo call.",
              runtime: 42,
            },
            {
              release: "2017-11-02",
              episode: 6,
              episode_type: "standard",
              title: "Down Is Better",
              overview: "After heroically saving a mother and newborn baby from a rooftop fire, Kidd receives surprising news when she discovers she is being transferred out of the firehouse. Severide and Casey believe something is off about the turn of events, prompting them to investigate the situation. Otis and Herrmann discuss the possibilities of taking over a rundown bar and Dawson's frustration with her father, Ramon, reaches a boiling point.",
              runtime: 42,
            },
            {  release: "2017-01-04",
              episode: 7,
              episode_type: "standard",
              title: "A Man's Legacy",
              overview: "Brett attempts to make a lifesaving decision in the field to someone near and dear to the firehouse family. In an effort to impress Lily, Otis scrambles to get everything together for the grand opening of Molly's North. Meanwhile, Boden becomes emotional following the rescue of a famous blues player from a burning apartment building and Dawson struggles to come to terms with how she has been dealing with her father.",
              runtime: 42,
            },
            {  
              release: "2017-01-11",
              episode: 8,
              episode_type: "standard",
              title: "The Whole Point of Being Roommates",
              overview: "After saving a young girl, Dawson is forced to make a tough decision when she finds out the girl's father is addicted to painkillers. Herrmann loses his cool and gets into an altercation with a police officer after responding to a call. Otis and Cruz are on a mission to find out who Brett is dating. Meanwhile, Boden is skeptical when Donna's brother Julian unexpectedly comes to town.",
              "runtime": 42,
            },
            {
              release: "2017-01-18",
              episode: 9,
              episode_type: "standard",
              title: "Foul Is Fair",
              overview: "After learning unsettling news, Dawson enlists Severide to help her out. Elsewhere, Casey and Dawson struggle with communication issues while Brett and Kidd compete to win the heart of Zach, a Hazmat officer. Meanwhile, Otis, Herrmann and Mouch are on a mission to locate the source of a horrible stench that is making life unpleasant at Firehouse 51.",
              runtime: 42,
            },
            {  release: "2017-01-25",
              episode: 10,
              episode_type: "standard",
              title: "Slamigan",
              overview: "Dawson and Casey do everything they can to locate Bria's whereabouts after discovering important new information. Lt. Severide reunites with Chief Grissom, and old family friend. Meanwhile, Cruz enlists the help of Brett and Mouch to create a new tool and Kidd and Zach go on a date.",
              runtime: 42,
            },
            {  release:"2017-02-01",
              episode: 11,
              episode_type: "standard",
              title: "Law of the Jungle",
              overview: "After responding to a time-sensitive rescue, Casey and Severide don't see eye to eye on the best course of action. Herrmann struggles to entertain his daughter on 'bring your child to work day.' Brett is joined by a surprise guest during a spa getaway, courtesy of Dawson, while Kidd's social life gets a boost.",
              runtime: 42,
            },
            {  release: "2017-03-01",
              episode: 12,
              episode_type: "standard",
              title: "The F Is For",
              overview: "After photos of Casey and Severide jumping off the roof during a heroic rescue make the front page of the newspaper, Boden unwillingly agrees for the photographer to chronicle a day-in-the-life story at the Firehouse. Dawson and Brett are on a mission to find out what keeps happening to Gerald, a frequent flier they know who lives on the streets. Meanwhile, Herrmann decides to take up life-coaching as a side job and Kidd makes a decision regarding her living arrangement with Severide.",
              runtime: 42,
            },
            {  release: "2017-03-08",
              episode: 13,
              episode_type: "standard",
              title: "Hiding Not Seeking (II)",
              overview :"While working to track down a bombing suspect, Voight and Antonio meet with Chief Boden, who unwillingly agrees to let Dawson and Brett go undercover. As the investigation continues, Boden, Casey and Severide lend their skilled expertise in the investigation. Elsewhere, Kidd and Zach's relationship hits a bump and Cruz has a hard time expressing his true feelings for Brett. Meanwhile, Herrmann and Connie are forced to come up with an alternative solution when two birthday parties are booked on the same day at the firehouse. The crossover starts on Chicago Fire S05E016 Profiles (I).",
              runtime: 42,
            },
            {  release: "2017-03-22",
              episode: 14,
              episode_type: "standard",
              title: "Looking for a Lifeline",
              overview :"After responding to a car accident, Casey and Dawson become skeptical when a domineering husband continues to answer for his injured wife. Cruz becomes frustrated with Herrmann and Mouch when he discovers they have contacted people regarding his 'Slamigan' invention without his knowledge. Kidd uncovers something meaningful and important to Severide while Brett discovers some potentially unsettling news.",
              runtime: 42,
            },
            {  release: "2017-03-22",
              episode: 15,
              episode_type: "standard",
              title: "The Chance to Forgive",
              overview: "In response to a call involving a residential fire, Otis and Kidd's lives are suddenly put in jeopardy when gunfire goes off inside the house. Dawson comforts Brett during an especially trying time. Meanwhile, Casey begins to notice that romance might be going on within the firehouse.",
              runtime: 42,
            },
            {  release: "2017-03-29",
              episode: 16,
              episode_type: "standard",
              title: "The One That Matters Most",
              overview: "The crew struggles to come to terms with an injury to one of their own; a temporary replacement must be dealt with; Boden ponders some interesting news; Kidd has a hard time keeping a secret.",
              runtime: 42,
            },
            {  release: "2017-04-05",
              episode: 17,
              episode_type: "standard",
              title: "Put White On Me",
              overview: "Boden has a lapse in judgment in the aftermath of rescuing a young boy. Kidd struggles to win the approval of Severide's mom after a surprise visit and Otis takes on new responsibilities at the firehouse.",
              runtime: 42,
            },
            {  release: "2017-04-12",
              episode: 18,
              episode_type: "standard",
              title: "When They See Us Coming",
              overview: "When the FBI takes over Firehouse 51 for an undercover mission, Casey and Severide volunteer to assist with the investigation. Kidd attempts to help Severide come to terms with recent developments he's been managing.",
              runtime: 42,
            },
            {  release: "2017-04-19",
              episode: 19,
              episode_type: "standard",
              title: "Where I Want to Be",
              overview: "After responding to a residential fire at a property belonging to a Mexican drug cartel, Casey is skeptical of Cordova after a hefty amount of money was found missing from the crime scene. Elsewhere, Kidd makes a big decision.",
              runtime: 42,
            },
            {  release: "2017-04-26",
              episode: 20,
              episode_type: "standard",
              title: "The Strongest Among Us",
              overview: "After saving a girl from a car accident, Chief Boden and Lt. Severide are taken aback when they receive a surprise package. Brett struggles to keep quiet about Cruz reacquainting with his now-married high school sweetheart and Otis tackles his next challenge. A crisis brings Bria back into Dawson's life.",
              runtime: 42,
            },
            {  release: "2017-05-03",
              episode: 21,
              episode_type: "standard",
              title: "The Unrivaled Standard",
              overview: "Lt. Severide is shocked when Rene Royce resurfaces; Casey comes up with a plan to help Chief Boden in his latest pursuit; Kidd regrets a decision she made regarding Severide; Herrmann clashes with Lt. Colannino over their son's basketball team.",
              runtime: 42,
            },
            {  release: "2017-05-10",
              episode: 22,
              episode_type: "standard",
              title: "One for the Ages",
              overview: "Boden takes a big step in the pursuit of a major career decision. Kidd becomes increasingly distrustful of Renee's motives with Severide. Herrmann has trouble bouncing back after a tragedy.",
              runtime: 42,
            },
            {  release: "2017-05-10",
              episode: 23,
              episode_type: "finale",
              title: "The Grand Gesture",
              overview: "Boden's chances for a promotion are met with potential complications. Dawson and Casey don't see eye to eye on an important decision, while Kidd finds herself struggling to find time with Severide. Brett and Dawson respond to a tough call that quickly turns dangerous.",
              runtime: 42,
            }
          ]
        },
        {
          season:7,
          episodes: [
            {  release: "2017-09-26",
              episode: 1,
              episode_type: "standard",
              title: "A Closer Eye",
              overview: "Casey tries to deal with his unsettled personal life and the firehouse welcomes a new member. Boden clashes with new Assistant Deputy Commissioner Jerry Gorsch.",
              runtime: 42,
            },
            {  release: "2017-10-03",
              episode: 2,
              episode_type: "standard",
              title: "Going to War (I)",
              overview: "Firehouse 51 is faced with a daunting challenge when an out-of-control blaze consumes a 15-story apartment complex, trapping victims on the top floors. Complicating the rapidly escalating situation, members soon discover that someone close to home may be one of the trapped victims. The crossover continues on Chicago Med S04E02 When to Let Go (II) and Chicago P.D. S06E02 Endings (III).",
              runtime: 42,
            },
            {  release: "2017-10-10",
              episode: 3,
              episode_type: "standard",
              title: "Thirty Percent Sleight of Hand",
              overview: "Chief Boden becomes increasingly skeptical of Assistant Deputy Commissioner Gorsch's motives, while Severide gets wrapped up in a difficult situation following the rescue of a child from a car wreck. Trying to fit in with the rest of the firehouse, Foster is tasked with doling out some personal advice to Cruz.",
              runtime: 42,
            },
            {  release: "2017-10-17",
              episode: 4,
              episode_type: "standard",
              title: "This Isn't Charity",
              overview: "Firehouse 51 is on high alert when a series of explosions rock the city. Herrmann adjusts to his new duties and Kidd gets a visit from an old friend.",
              runtime: 42,
            },
            {  release: "2017-10-24",
              episode: 5,
              episode_type: "standard",
              title: "A Volatile Mixture",
              overview: "Working alongside a journalist, Casey does some digging into the cause of a trailer park fire. Boden hits his breaking point while Mouch, Herrmann and Cruz work to figure out why Molly's isn't performing up to expectations.",
              runtime: 42,
            },
            {  release: "2017-10-31",
              episode: 6,
              episode_type: "standard",
              title: "All the Proof",
              overview: "Halloween is in full effect for Foster and Brett, who are summoned to a home where a prank has quickly turned serious. Gorsch continues his reign of terror on Firehouse 51.",
              runtime: 42,
            },
            {  release: "2017-11-07",
              episode: 7,
              episode_type: "standard",
              title: "What Will Define You",
              overview: "Severide faces some major adversity and Kidd is on a mission to help in any way she can. Following a car accident rescue involving a teenage girl and her young sister, a suspicious Brett has an unsettling feeling there is more to the story than what appears on the surface.",
              runtime: 42,
            },
            {  release: "2017-11-14",
              episode: 8,
              episode_type: "standard",
              title: "The Solution to Everything",
              overview: "Firehouse 51 is called in to battle a dangerous structure fire that places everyone in peril. Severide makes a big personal realization. Casey lends another helping hand to Naomi, the investigative reporter.",
              runtime: 42,
            },
            {  release: "2017-12-05",
              episode: 9,
              episode_type: "standard",
              title: "Always a Catch",
              overview: "Stakes are high when a massive car pile-up on the freeway impacts someone dear to the firehouse family. Brett and Foster encounter a harrowing call while Kidd and Severide find their relationship being tested.",
              runtime: 42,
            },
            {
              release: "2019-01-09",
              episode: 10,
              episode_type: "standard",
              title: "Inside These Walls",
              overview: "A dangerous situation leaves Casey and Naomi in peril. Foster and Brett are in charge of planning a field trip visit to the station while Severide and Kidd go through tough times.",
              runtime: 42,
            },
            {
              release: "2019-01-16",
              episode_number: 11,
              episode_type: "standard",
              title: "You Choose",
               overview: "Foster faces blowback after pointing out a doctor's oversight. Brett helps Casey look for a new apartment. Kidd prepares Tuesday the Dalmatian for the Fire Safety Dog Competition. A serious accusation is leveled against Severide.",
              runtime: 42,
            },
            {
              release: "2019-01-23",
              episode: 12,
              episode_type: "standard",
              title: "Make This Right",
              overview: "When the firehouse is called to a motorcycle crash, Casey and Severide sense that the details don't add up and work to determine exactly what transpired. A rift develops between Mouch and Otis. Brett, Foster and Kidd work to secretly fix a dent in the ambulance bumper they believe they unknowingly caused.",
              runtime: 42,
            },
            {
              release: "2019-02-06",
              episode: 13,
              episode_type: "standard",
              title: "The Plunge",
              overview: "Cruz leads the charge in getting the firehouse to gear up for the Polar Plunge. Herrmann has a hard time bouncing back after dealing with a tough call. Foster's personal relationships begin to interfere with her job.",
              runtime: 42,
            },
            {
              release: "2019-02-13",
              episode: 14,
              episode_type: "standard",
              title: "It Wasn't About Hockey",
              overview: "Brett, Foster and Kidd take a road trip to Indiana and encounter an accident involving a boys' hockey team that leaves them scrambling and relying on their instincts to save the injured. The rest of Firehouse 51 competes in the annual chili cook-off.",
              runtime: 42,
            },
            {
             release: "2019-02-20",
              episode: 15,
              episode_type: "standard",
              title: "What I Saw (I)",
              overview: "A spate of robberies comes to light after a firehouse lockbox key goes missing; Sergeant Hank Voight suspects a firefighter may be involved, and with Boden's support, he recruits Cruz to go undercover to help sniff out any suspicious activity. The crossover continues on Chicago P.D. S06E15 Good Men (II)",
              runtime: 42,
            },
            {
              release: "2019-02-27",
              episode: 16,
              episode_type: "standard",
              title: "Fault in Him",
              overview: "Casey struggles after experiencing a narrow miss on a call. Otis wins a unique sporting opportunity in a raffle. Grissom turns to Severide for assistance when the mayor's office sends a task force to Firehouse 51.",
              runtime: 42,
            },
            {
              release: "2019-03-27",
              episode: 17,
              episode_type: "standard",
              title: "Move a Wall",
              overview: "Tensions run high between Casey and Herrmann after the firehouse responds to an apartment complex fire. After discovering something extremely suspicious during the call, Kidd and Severide do some investigating and get CPD on the case.",
              runtime: 42,
            },
            {
              release: "2019-04-03",
              episode: 18,
              episode_type: "standard",
              title: "No Such Thing as Bad Luck",
              overview: "Severide gets angry at Cruz when he feels his orders were disobeyed in the field. Boden reconnects with an old high school friend during a call to a house fire. Herrmann has issues when one of his favorite knick-knacks from Molly's goes missing.",
              runtime: 42,
            },
            {
              release: "2019-04-24",
              episode: 19,
              episode_type: "standard",
              title: "Until the Weather Breaks",
              overview: "A horrible storm wreaks havoc on Chicago and impacts Firehouse 51 when the power goes off. A little boy mysteriously shows up at the station and everyone works together to uncover who he belongs to. Foster and Kidd argue about Severide.",
              runtime: 42,
            },
            {
              release: "2019-05-08",
              episode: 20,
              episode_type: "standard",
              title: "Try Like Hell",
              overview: "Severide and Boden search to uncover whether arson was the cause of a fire at a hair salon. Mouch, Herrmann, Otis and Kidd make a startling discovery in tracking down the missing piercing nozzle from Engine 27.",
              runtime: 42,
            },
            {
              release: "2019-05-15",
              episode: 21,
              episode_type: "standard",
              title: "The White Whale",
              overview: "A serial arsonist cold case is reopened when Lt. Severide finds a connection to a recent salon fire. Firehouse 51 celebrates a retirement party.",
              runtime: 42,
            },
            {
              release: "2019-05-22",
              episode: 22,
              episode_type: "finale",
              title: "I'm Not Leaving You",
              overview: "Severide and Kidd continue to investigate Benny’s old arson case, unexpected news leads Brett to ponder a big decision and all hell breaks loose.",
              runtime: 42,
            },
          ]
        },
          {
            season:8,
            episodes: [
              {
                release: "2019-09-25",
                episode: 1,
                episode_type: "standard",
                title: "Sacred Ground",
                overview: "The mattress factory fire spirals out of control. Truck and squad lay it on the line in hopes of getting the trapped victims out alive.",
                runtime: 42,
              },
              {
              release: "2019-10-02",
              episode: 2,
              episode_type: "standard",
              title: "A Real Shot in the Arm",
              overview: "Lt. Casey struggles to get Chief Boden to sign off on an energetic new recruit. Against her better judgment, Foster extends an olive branch to her irritating new medic. Otis inspires Herrmann to seek new partners at Molly’s. Brett realizes life in Fowlerton will take some getting used to.",
              runtime: 42,
              },
              {
            releasee: "2019-10-09",
            episode: 3,
              episode_type: "standard",
              title: "Badlands",
              overview: "Brett and Foster question the suspicious circumstances surrounding a brutal attack at a juvenile detention center, which leaves them searching for the truth. A convoluted new technology installed inside Firehouse 51 tests everybody’s patience. Kidd gets chosen to represent the district at a leadership conference.",
              runtime: 42,
              },
              {
              release: "2019-10-16",
              episode: 4,
               episode_type: "standard",
                title: "Infection (I)",
                overview: "A rare but deadly bacteria takes its toll on numerous victims around the city, leaving Chicago’s finest first responders to work together alongside the CDC to resolve the dangerous situation. Following a fire at a local university that ties into the outbreak, Severide has suspicions that something bigger is happening. The crossover continues on Chicago Med S05E04 Infection, Part II (II) and Chicago P.D. S07S04 Infection, Part III (III).",
                runtime: 42,
              },
              {
              release: "2019-10-23",
              episode: 5,
               episode_type: "standard",
                title: "Buckle Up",
                overview: "Kidd must prove herself at the National Firefighter Leadership Conference while the rest of Firehouse 51 is called to two eerily similar car wrecks. Mouch tries to keep everyone in the firehouse informed by starting a newsletter, but things quickly get out of hand. Cruz deals with a heartbreak.",
                runtime: 42,
              },
              {
                release: "2019-10-30",
                episode: 6,
                episode_type: "standard",
                title: "What Went Wrong",
                overview: "Cruz and Severide suspect foul play when a fire started by an elderly woman turns deadly. Kidd, Foster and Brett create a women’s-only lounge. Firehouse 51 celebrates some good news.",
                runtime: 42,
              },
              {
               release: "2019-11-06",
               episode: 7,
               episode_type: "standard",
                title: "Welcome to Crazytown",
                overview: "Severide must make a tough decision about the future of his career at Firehouse 51. Herrmann deals with the consequences of his temper. Cruz is excited to demonstrate the Slamigan at the Firefighting Expo. Commissioner Grissom returns.",
                runtime: 42,
              },
              {
                releasee: "2019-11-13",
                episode: 8,
                episode_type: "standard",
                title: "Seeing Is Believing",
                overview: "Severide begins his assignment at the Office of Fire Investigation and gets off on the wrong foot when, despite his orders, he reopens an old case. When the cause of an apartment fire hits close to home, Herrmann is on a mission to get to the bottom of it. Kidd finds herself burning the candle at both ends.",
                runtime: 42,
              },
              {
               releasee: "2019-11-20",
               episode: 9,
               episode_type: "standard",
               titleame: "Best Friend Magic",
                overview: "An unexpected visit throws Casey for a loop. Severide sets out to exonerate a wrongly convicted arsonist. Kidd pays the price for burning the candle at both ends. Cruz goes on a mission to fix one of Otis’s old toys.",
                "runtime": 42,
              },
              {
                release: "2020-01-08",
                episode: 10,
                episode_type: "standard",
                title: "Hold Our Ground",
                "overview": "Members of Firehouse 51 are dismayed to learn their boundaries have been redrawn to overlap with an adjacent station and problems quickly arise. Casey and Gallo hunt a missing piece of equipment. Brett and Foster find themselves at odds. Mouch tries the find the recipient of a mysterious letter he discovers.",
                "runtime": 42,
              },
              {
                release: "2020-01-15",
                episode: 11,
                episode_type: "standard",
                title: "Where We End Up",
                "overview": "A pest control problem forces the 51 team to temporarily bunk with Firehouse 20. All under the same roof, Casey clashes with Capt. Delaney while Foster, Kidd and Brett fear Capt. Leone has it out for them. Boden mulls a procedural overhaul.",
                "runtime": 42,
              },
              {
                release: "2020-01-22",
                episode: 11,
                "episode_type": "standard",
                title: "Then Nick Porter Happened",
                "overview": "A series of false alarms at a private school hinders the firehouse's ability to respond to legitimate emergency calls. Kidd asks for ideas to surprise Severide on his birthday. Cruz and Brett rent out their extra room, but the new tenant is more than they bargained for.",
                "runtime": 42,
              },
              {
                release: "2020-02-05",
                episode: 13,
                episode_type: "standard",
                title: "A Chicago Welcome",
                "overview": "The surprising arrival of a new fire truck brings both joy and chaos to members of Firehouse 51. Boden and Severide are asked to make peace with an old foe for the greater good. Brett receives family news while Foster plans a party with friends.",
                "runtime": 42
              },
              {
                release: "2020-02-12",
                episode: 14,
                "episode_type": "standard",
                title: "Shut It Down",
                "overview": "A series of mysterious gas leaks has members of Firehouse 51 puzzled and spread thin. Brett’s conflicted when her birth mother gets serious about tracking her down. Severide misunderstands his role as Cruz’s best man. Mouch bites off more than he can chew.",
                "runtime": 42,
              },
              {
                release: "2020-02-26",
                episode: 15,
                "episode_type": "standard",
                title: "Off the Grid (I)",
                "overview": "A series of teen opioid overdoses sees Severide partner with Sean Roman, but begins to suspect there’s more to the story than his old friend is telling him. Casey tries to be there for Brett as she considers her birth mother’s offer to meet. The crossover continues on Chicago P.D. S07E15 Burden of Truth (II).",
                runtime: 42,
              },
              {
                release: "2020-03-04",
                episode: 16,
                "episode_type": "standard",
                title: "The Tendency of a Drowning Victim",
                "overview": "Boden is on edge after starting a new fad diet. Casey and Severide disagree on a call. Brett’s birth mother shares life-altering news. A familiar face has a proposition for Herrmann.",
                "runtime": 42,
              },
              {
               release: "2020-03-11",
                episode: 17,
                "episode_type": "standard",
                title: "Protect a Child",
                "overview": "Things get personal for Casey and Gallo in the aftermath of a suburban house fire involving a mother and her young son. Herrmann campaigns for more respect. Kidd has an idea for giving back to her community.",
                "runtime": 42,
              },
              {
                release: "2020-03-25",    
                 episode: 18,
                "episode_type": "standard",
                title: "I'll Cover You",
                "overview": "Lt. Severide teams up with Seager and the OFI when a motel structure fire turns suspicious. Firehouse 51 members become amateur sleuths following a Reddit post involving one of their own. Brett continues to get invested in her birth mother, Julie.",
                "runtime": 42,
              },
              {
                release: "2020-04-08",
                episode: 19,
                "episode_type": "standard",
                title: "Light Things Up",
                "overview": "Tension builds when a group of rabble-rousers attempt to lock down the firehouse. Brett is faced with a monumental decision. Cruz readies himself for a big day. Gallo and Ritter attempt to launch Firehouse 51 into the social media age.",
                "runtime": 42,
              },
              {
                release: "2020-04-15",
                episode: 20,
                "episode_type": "finale",
                title: "51's Original Bell",
                "overview": "When one of 51's own gets injured on a call, Lt. Severide becomes obsessed with helping out. Foster contemplates a big decision. Kidd is concerned for one of her high school trainees.",
                "runtime": 42,
              },
             ]
          },
          {
            season:9,
            episodes: [
              {
                release: "2020-11-11",
                episode: 1,
                "episode_type": "standard",
                 title: "Rattle Second City",
                "overview": "Firehouse 51 welcomes a new member to the team, whose presence could provide some complications. Brett's leadership shines during a scary call. Boden sees great potential in Kidd and proposes an idea that could have lasting repercussions.",
                runtime: 42,
              },
              {
                release: "2010-11-18",
                episode: 2,
                "episode_type": "standard",
                 title: "That Kind of Heat",
                "overview": "Brett and Mackey find their lives in peril. Casey and Brett tread in unfamiliar territory. Severide chases a memory while Kidd adeptly solves a firehouse problem. Ritter puts himself in harms way during a harrowing call.",
                runtime: 42,
              },
              {
                release: "2021-01-13",
                episode: 3,
                "episode_type": "standard",
                title: "Smash Therapy",
                "overview": "A mishap on the aerial ladder in the midst of a fire rescue leaves Mouch shaken and questioning his abilities. Kidd looks for support from Severide while Casey and Brett discuss their future.",
                runtime: 42,
              },
              {
                release: "2021-01-'",
                episode: 4,
                "episode_type": "standard",
                title: "Funny What Things Remind Us",
                "overview": "While completing a task assigned by headquarters, Boden makes an unforeseen connection. Gallo is forced to make a surprise rescue to one of their own when the firehouse is called to the site of a construction explosion. Mouch reignites an old feud.",
                runtime: 42,
              },
              {
                release: "2021-02-03",
                episode: 5,
                "episode_type": "standard",
                 title: "My Lucky Day",
                "overview": "When Firehouse 51 is called to the scene of a dangerous blaze inside a 10-story storage unit, Herrmann and Cruz find themselves trapped inside a freight elevator with all communications cut off.",
                runtime: 42,
              },
              {
                release: "2021-02-10",
                episode: 6,
                "episode_type": "standard",
                 title: "Blow This Up Somehow",
                "overview": "Gallo makes a split-second decision during a dangerous fire rescue leaving Casey steaming that his direct orders were not obeyed. Kidd feels a strain in her relationship with Severide. Brett and Mackey find themselves searching for answers following a series of suspicious calls.",
                runtime: 42,
              },
              {
                release: "2021-02-17",
                episode: 7,
                "episode_type": "standard",
                 title: "Dead of Winter",
                "overview": "A fire at a homeless encampment leaves Severide and Casey searching for answers. Cruz is shaken up after a close call. Ritter lends a helping hand to a victim.",
                runtime: 42,
              },
              {
                release: "2021-03-10",
                episode: 8,
                "episode_type": "standard",
                 title: "Escape Route",
                "overview": "A call to a familiar location brings back mixed emotions for Severide. Herrmann heads out for a vacation. Casey is not thrilled with his replacement.",
                runtime: 42,
              },
              {
                release: "2021-03-17",
                episode: 9,
                "episode_type": "standard",
                 title: "Double Red",
                "overview": "Mouch, Gallo, Ritter and Mackey report for training. A nasty blow to the head brings Casey unimaginable pain.",
                runtime: 42,
              },
              {
                release: "2021-03-31",
                episode: 10,
                "episode_type": "standard",
                title: "One Crazy Shift",
                "overview": "A series of suspicious fires sends 51 on a search for the cause. Casey continues down a troubling path. Mouch is looking to make his long-awaited dream come true.",
                runtime: 42,
              },
              {
                release: "2021-04-07",
                episode: 11,
                "episode_type": "standard",
                title: "A Couple Hundred Degrees",
                "overview": "A new recruit with ties to the CFD tests Serveride's patience. Violet receives a mysterious note that sends her and Brett on a hunt for the person who wrote it.",
                runtime: 42,
              },
              {
                release: "2021-04-21",
                episode: 12,
                "episode_type": "standard",
                title: "Natural Born Firefighter",
                "overview": "While Mouch makes an incredible save, all eyes are on a mystery man who helped save his neighbor. Casey worries about his future at the CFD.",
                runtime: 42,
              },
              {
                release: "2021-05-05",
                episode: 13,
                "episode_type": "standard",
                title: "Don't Hang Up",
                "overview": "A mysterious caller who is in danger relies on Kidd to help save her and her brother. The firehouse helps Cruz get ready for fatherhood.",
                runtime: 42,
              },
              {
                release: "2021-05-12",
                episode: 14,
                "episode_type": "standard",
                title: "What Comes Next",
                "overview": "A fire breaks out at a pet food factory and Casey and Severide help the owner, Pete, get to the bottom of it. The annual garage sale takes place at 51 and everyone is on edge.",
                runtime: 42,
              },
              {
                release: "2021-05-19",
                episode: 15,
                "episode_type": "standard",
                title: "A White-Knuckle Panic",
                "overview": "Severide and Casey try to find the best fit for Kidd. Ritter, Gallo and Violet help plan an event for Mouch.",
                runtime: 42,
              },
              {
                release: "2021-05-26",
                episode: 16,
                "episode_type": "finale",
                title: "No Survivors",
                "overview": "The firehouse reacts to some exciting news, a mysterious stranger arrives and a shocking call takes Severide's breath away.",
                runtime: 42,
              },
            ]
          },
          {
            season:10,
            episodes: [
              {
                release: "2021-09-22",
                episode: 1,
                "episode_type": "standard",
                title: "Mayday",
                "overview": "Firehouse 51 deals with the aftermath of the capsized boat rescue. Gallo, Ritter and Violet discuss plans for a side gig.",
                "runtime": 42,
              },
              {
                release: "2021-09-29",
                episode: 2,
                "episode_type": "standard",
                title: "Head Count",
                "overview": "A video of Casey from the roof rescue goes viral. Mouch sets up a Little Free Library at Firehouse 51. Herrmann breaks protocol.",
                "runtime": 42,
              },
              {
                release: "2021-10-06",
                episode: 3,
                "episode_type": "standard",
                title: "Counting Your Breaths",
                "overview": "Griffin learns the truth about his father’s death and reveals why he really came to visit Casey. Gallo, Ritter and Violet take steps to expand their microbrewery business.",
                "runtime": 42,
              },
              {
                release: "2021-10-13",
                episode: 4,
                "episode_type": "standard",
                title: "The Right Thing",
                "overview": "Kidd spreads her wings as a lieutenant. Chief Hawkins rides with Ambulance 61 to learn more about Brett. Casey takes a trip out of town. A Ritter date night turns into an emergency situation.",
                "runtime": 42,
              },
              {
                release: "2021-10-20",
                episode: 5,
                "episode_type": "standard",
                title: "Two Hundred",
                "overview": "Casey makes a life-altering decision. Gallo, Ritter and Violet agree to an interview and photo shoot. Brett and Mouch launch the paramedicine program. Cruz comes closer to fatherhood.",
                "runtime": 42,
              },
              {
                release: "2021-10-27'",
                episode: 6,
                "episode_type": "standard",
                title: "Dead Zone",
                "overview": "A major security breach in the city’s computer networks forces Firehouse 51’s senior leaders to take matters into their own hands. Severide gears up for an arson investigation.",
                "runtime": 41,
              },
              {
                release: "2021-11-03",
                episode: 7,
                "episode_type": "standard",
                title: "Whom Shall I Fear?",
                "overview": "Gallo clashes with the new lieutenant temporarily filling in for Casey. Severide closes in on a dangerous and deadly arsonist.",
                "runtime": 42,
              },
              {
                release: "2021-11-10",
                episode: 8,
                "episode_type": "standard",
                title: "What Happened at Whiskey Point?",
                "overview": "Severide and Herrmann clash over office space. Boden looks at Pelham’s past as he considers making him permanent. Gallo’s resentment of Pelham comes to a head. Brett and Ritter force Violet to confront her true feelings for Gallo.",
                "runtime": 42,
              },
              {
                release: "2021-12-08",
                episode: 9,
                "episode_type": "standard",
                title: "Winterfest",
                "overview": "Gallo, Violet and Ritter debut their microbrewery business at Winterfest. Brett prepares to present her paramedicine program to an oversight panel. Firehouse 51 gets in the holiday spirit.",
                "runtime": 42,
              },
              {
                release: "2022-01-05",
                episode: 10,
                "episode_type": "standard",
                title: "Back with a Bang",
                "overview": "Stella Kidd returns to Firehouse 51. The team must work together to put out a potassium fire in a tunnel. After that incident, Ritter begins to worry about a young cop who witnessed the fiery death of a truck driver.",
                "runtime": 42,
              },
              {
                release: "2022-01-12",
                episode: 11,
                "episode_type": "standard",
                title: "Fog of War",
                "overview": "On a call with Station 37, a firefighter is struck by a power line and decides to lash out after her injury. Brett is visited by Scott and Amelia. Violet gets a surprise envelope. The rest of 51 enters a contest.",
                "runtime": 42,
              },
              {
                release: "2022-01-19",
                episode: 12,
                "episode_type": "standard",
                title: "Show of Force",
                "overview": "Boden, Kidd and Severide work together to protect one of their own. At the Fire Academy, Herrmann meets an inspiring young man. Talk of the annual CFD Gala dominates the firehouse.",
                "runtime": 42,
              },
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
        overview: "The nicest guy in the Midwest moves his family into a tough neighborhood in Los Angeles where not everyone appreciates his extreme neighborliness. That includes their new next-door neighbor Calvin ",
         release: "2017-10-01",
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
        "backdrop_path": "/zsy6D6MXkROv6ESN4i0cz7nCEb5.jpg",
        "id": 135934,
        title: "The Legend of Vox Machina",
        "overview": "They're rowdy, they're ragtag, they're misfits turned mercenaries for hire. Vox Machina is more interested in easy money and cheap ale than actually protecting the realm. But when the kingdom is threatened by evil, this boisterous crew realizes that they are the only ones capable of restoring justice.",
       background: "/b5A0qkGrZJTyVv3gT6b8clFEz9R.jpg",
        mediaType: "series",
        "genre_ids": [
           16,
            10765
         ],
        seasons : [
          {
            season: 1,
            episodes: [
              {
                release: "2022-01-27",
                episode: 1,
                "episode_type": "standard",
                title: "The Terror of Tal'Dorei (1)",
                "overview": "The ragtag group of adventurers known as Vox Machina are commissioned by Sovereign Uriel to find out who (or what) is decimating villages in the outskirts of Emon.",
                "runtime": 28,
               },
               {
                release: "2022-01-27",
                episode: 2,
                "episode_type": "standard",
                title: "The Terror of Tal'Dorei (2)",
                "overview": "Vox Machina tells Sovereign Uriel of the monstrous culprit behind the devastating village attacks, and manage to track the creature back to its hidden lair. For the safety of Emon, Vox Machina must rise to the occasion and go face-to-face with a beast that is seemingly impossible to kill.",
                "runtime": 29,
               },
               {
                release: "2022-01-27",
                episode: 3,
                "episode_type": "standard",
                title: "The Feast of Realms",
                "overview": "Vox Machina is invited to the palace for a formal dinner, where Percy encounters murderous figures from his past: the mysterious Lord Sylas and Lady Delilah Briarwood. While gathering more information about the Briarwoods, a battle ensues. In the aftermath, the team discovers Percy’s tortured past has left something dark brewing inside of him.",
                "runtime": 25,
               },
               {
                release: "2022-02-03",
                episode: 4,
                "episode_type": "standard",
                title: "Shadows at the Gates",
                "overview": "After ruining Sovereign Uriel’s diplomatic dinner, Vox Machina is confined to their Keep under house arrest. While they stave off boredom, Keyleth convinces Percy to open up about his dark history and Pike fears she has lost her connection to her deity. Meanwhile, a looming new threat is on its way to confront Vox Machina.",
                "runtime": 25,
               },
               {
                release: "2022-02-03",
                episode: 5,
                "episode_type": "standard",
                title: "Fate's Journey",
                "overview": "Vox Machina journeys to Whitestone to confront the Briarwoods and help Percy reclaim his family home. As they travel, Scanlan studies Delilah Briarwood’s mysterious spell book to uncover clues. But the team’s first road trip is interrupted when the Briarwoods send horrific monsters to retrieve their missing book.",
                "runtime": 26,
               },
               {
                release: "2022-02-03",
                episode: 6,
                "episode_type": "standard",
                title: "Spark of Rebellion",
                "overview": "Vox Machina finds Whitestone's holy leader, Keeper Yennen, who tells them of a growing rebellion. The team realizes that to defeat the Briarwoods they will need the help of rebel leader, Archibald Desnay. But first they must stage a daring prison break and confront the Briarwoods’ sadistic jailer, Kerrion Stonefell.",
                "runtime": 25,
               },
               {
                release: "2022-02-10",
                episode: 7,
                "episode_type": "standard",
                title: "Scanbo",
                "overview": "As Vox Machina discovers more about a revenge pact Percy made years ago, Keyleth tries to magically connect with the Sun Tree. She senses its pain as well as a dark force deep below the city of Whitestone. Feeling underappreciated, Scanlan volunteers to infiltrate Duke Vedmire's mansion as a distraction while Vox Machina attempts to rescue Percy's sister Cassandra.",
                "runtime": 25,
               },
               {
                release: "2022-02-10",
                episode: 8,
                "episode_type": "standard",
                title: "A Silver Tongue",
                "overview": "Vox Machina battles the vicious Professor Anders and his unique magical abilities, while Delilah Briarwood uses magic to summon a demonic army to rise against our heroes. Meanwhile, Pike searches for a way to reconnect with her deity, even if it means risking her life.",
                "runtime": 25,
               },
               {
                release: "2022-02-10",
                episode: 9,
                "episode_type": "standard",
                title: "The Tide of Bone",
                "overview": "The Briarwoods' evil past connects with the present as Delilah reveals her pact with the Whispered One. In the bloody Whitestone streets, Vox Machina wages the fight of their lives against an undead horde. But just when all looks lost, the team gets help from an unexpected source.",
                "runtime": 25,
               },
               {
                release: "2022-02-17",
                episode: 10,
                "episode_type": "standard",
                title: "Depths of Deceit",
                "overview": "After Percy confronts his old nemesis, Dr. Anna Ripley, a tenuous partnership is struck. Despite Percy’s protests that she can’t be trusted, Vox Machina brings Ripley along. She leads them through the traps under the castle, but soon the team is double-crossed by one of their own.",
                "runtime": 25,
               },
               {
                release: "2022-02-17",
                episode: 11,
                "episode_type": "standard",
                title: "Whispers at the Ziggurat",
                "overview": "Vox Machina launches a final assault against the Briarwoods atop the Ziggurat. Battling the dark magic of Delilah and the vampiric strength of Sylas, a worried Vex and an unhinged Percy try to save their siblings. But their best efforts may not be enough as the Briarwoods near completion of their secret ritual.",
                "runtime": 24,
               },
               {
                release: "2022-02-17",
                episode: 12,
                "episode_type": "finale",
                title: "The Darkness Within",
                "overview": "Vox Machina has stopped the Briarwoods’ evil ritual, but at a heavy cost. As they flee the Ziggurat to save one of their own, Percy is eager to take revenge on their prisoner, Delilah Briarwood. When Vex implores him to let go of his vengeance, Percy must confront the darkness within himself.",
                "runtime": 28,
               }
            ]
          },
          {
            season: 2,
            episodes: [
              {
                release: "2023-01-19",
                episode: 1,
                "episode_type": "standard",
                title: "Rise of the Chroma Conclave",
                "overview": "Vox Machina's victorious return home to Emon is cut short by the arrival of ancient dragons, the Chroma Conclave. Despite Vox Machina's best efforts, the dragons lay waste to the city, forcing the team to find a way to escape.",
                "runtime": 25,
               },
               {
                release: "2023-01-19",
                episode: 2,
                "episode_type": "standard",
                title: "The Trials of Vasselheim",
                "overview": "Vox Machina travels to the mysterious ancient city of Vasselheim to search for allies. They're soon forced to turn to a group of seedy bounty-hunters, called the Slayer's Take. There they encounter an ancient creature who holds critical information that could help them in their fight against the dragons of the Chroma Conclave.",
                "runtime": 26,
               },
               {
                release: "2023-01-19",
                episode: 3,
                "episode_type": "standard",
                title: "The Sunken Tomb",
                "overview": "Vox Machina explores an ancient temple to search for their first Vestige of Divergence, a legendary weapon they hope will aid them against the dragons of the Chroma Conclave. As they overcome a series of dangerous encounters to reach the sunken tomb, one of the team makes a terrible mistake.",
                "runtime": 26,
               },
               {
                release: "2023-01-26",
                episode: 4,
                "episode_type": "standard",
                title: "Those Who Walk Away",
                "overview": "In a desperate bid to save a team member's life, Vax strikes a fateful deal with the Matron of Ravens, offering his life in exchange. As Vox Machina battles their way out of the sunken temple, Vax wonders what he's just signed up for.",
                "runtime": 26,
               },
               {
                release: "2023-01-26",
                episode: 5,
                "episode_type": "standard",
                title: "Pass Through Fire",
                "overview": "While traveling to find the next Vestige of Divergence, Vox Machina passes by Pyrah, home to the Fire Ashari people. Discovering that the village is in distress, Vox Machina must help them, battling fire creatures that are spilling out into the world through a portal to another dimension. As they try to close the portal, Keyleth learns more about the power that lies within her.",
                "runtime": 27,
               },
               {
                release: "2023-01-26",
                episode: 6,
                "episode_type": "standard",
                title: "Into Rimecleft",
                "overview": "Upon arriving at the location of the next Vestige of Divergence, Vox Machina must face the challenges of the mysterious sphinx, Kamaljiori – the mate of Osysa. But even if they can succeed, a new, unexpected threat lies waiting for them.",
                "runtime": 27,
               },
               {
                release: "2023-02-02",
                episode: 7,
                "episode_type": "standard",
                title: "The Fey Realm",
                "overview": "After escaping from the black dragon Umbrasyl, Vox Machina is split up. Half of the party find themselves lost in another dimension, the mysterious Fey Realm. They encounter strange dangers as they seek to recover the next Vestige of Divergence. Meanwhile, the other half of the party searches for a way to heal their cursed teammate.",
                "runtime": 28,
               },
               {
                release: "2023-02-02",
                episode: 8,
                "episode_type": "standard",
                title: "The Echo Tree",
                "overview": "In the Fey Realm, Vox Machina unexpectedly discovers the city of Syngorn and meets Vax and Vex's father. After the emotional encounter, Vox Machina journeys deeper into the Fey Realm, searching for the next Vestige of Divergence – the Fenthras Bow. To acquire it, they must confront an ancient and powerful archfey. Meanwhile back in Tal'dorei, Scanlan and Pike attempt to nurse Grog back to health.",
                "runtime": 28,
               },
               {
                release: "2023-02-02",
                episode: 9,
                "episode_type": "standard",
                title: "Test of Pride",
                "overview": "Knowing that the Titanstone Knuckles are in the city of Westruun, Pike and Scanlan come up with a plan to get them from their current owner, Grog's uncle, Kevdak. But Grog, weakened by Craven Edge's curse and haunted by his last encounter with his uncle, questions whether he is strong enough of mind, or body, to confront Kevdak.",
                "runtime": 28,
               },
               {
                release: "2023-02-09",
                episode: 10,
                "episode_type": "standard",
                title: "The Kill Box",
                "overview": "Despite his weakened state, Grog confronts his uncle, Kevdak, in a fight to the death. The battle is intense, with Grog taking a beating at the hands of his uncle’s Titanstone Knuckles, another Vestige of Divergence. As Grog is about to fall, the rest of Vox Machina arrives, just in time to join the fray.",
                "runtime": 27,
               },
               {
                release: "2023-02-09",
                episode: 11,
                "episode_type": "standard",
                title: "The Belly of the Beast",
                "overview": "While Scanlan makes a fateful and shocking discovery about his past, Vax confronts the Matron of Ravens to uncover the truth about the mysterious pact he made with her. At the same time, Vox Machina teams up with Grog’s Herd and sets their sights on Umbrasyl, preparing an ambush to take down the dreaded black dragon.",
                "runtime": 28,
               },
               {
                release: "2023-02-09",
                episode: 12,
                "episode_type": "finale",
                title: "The Hope Devourer",
                "overview": "As the black dragon Umbrasyl escapes their attempted ambush, Vox Machina pursues him to Gatshadow Mountain. In the fearsome acid-filled tunnels of Umbrasyl’s lair, Vox Machina must make a final stand against the evil dragon.",
                "runtime": 30,
               }
            ]
          },
          {
            season: 3,
            episodes: [
               {
                release: "2024-10-03",
                episode: 1,
                "episode_type": "standard",
                title: "A Deadly Bargain",
                "overview": "In disguise, Raishan visits Vox Machina with a promise of aid. She tells them of a vestige capable of defeating Thordak; the Plate of the Dawnmartyr. The team is divided on trusting the duplicitous dragon, but journeys to the city of Marquet to test if she speaks true.",
                "runtime": 28,                
               },
               {
                release: "2024-10-03",
                episode: 2,
                "episode_type": "standard",
                title: "Prisoners of Ank'Harel",
                "overview": "In Ank'Harel, Vox Machina comes face-to-face with Anna Ripley... and Orthax. But only escape her clutches to stand accused of murder! While Vox Machina stands trial, Scanlan runs into his daughter. The clock is ticking as Scanlan tries to save his friends and his relationship with Kaylie.",
                "runtime": 27,
               },
               {
                release: "2024-10-03",
                episode: 3,
                "episode_type": "standard",
                title: "Vexations",
                "overview": "Go to hell, Vox Machina! But stop in Draconia first. Don't worry - Kima and Allura know someone there who can help. You'll love her, she's great. But first, don't forget romance. Percy has feelings for Vex, Vax has feelings for Keyleth! What could go wrong?",
                "runtime": 27,
               },
               {
                release: "2024-10-10",
                episode: 4,
                "episode_type": "standard",
                title: "Hell to Pay",
                "overview": "While Vax, Keyleth, Pike, Grog and Scanlan seek magical armor in the Hells of Despath, Percy, Vex, Kima and Allura try to survive against the savage Vorugal. Can each team survive the fires of hell, and the frigid doom?",
                "runtime": 28,
               },
               {
                release: "2024-10-10",
                episode: 5,
                "episode_type": "standard",
                title: "The Frigid Doom",
                "overview": "As Kima is hunted by Vorugal, Allura struggles to stop the beast and save her love. Meanwhile in hell, Pike gambles against a devil for the souls of her friends and the future of the world. Does she have an ace up her sleeve that can save the day?",
                "runtime": 26,
               },
               {
                release: "2024-10-10",
                episode: 6,
                "episode_type": "standard",
                title: "The Coming Storm",
                "overview": "Welcome friends, to The Chateau Shorthalt! There's singing, dancing, and more chicken than you could ever eat. Not enough for you? How about juvenile dragons attacking Whitestone? Or perhaps Raishan betraying Vox Machina?",
                "runtime": 27,
               },
               {
                release: "2024-10-17",
                episode: 7,
                "episode_type": "standard",
                title: "Cloak and Dagger",
                "overview": "In the ruins of Whitestone, Vox Machina makes a startling discovery - a clue from Ripley luring them to her remote island lair. Before they can resume the fight against the Chroma Conclave, they must deal with the serpent who's been nipping at their heels.",
                "runtime": 27,
               },
               {
                release: "2024-10-17",
                episode: 8,
                "episode_type": "standard",
                title: "The Siege of Emon",
                "overview": "After a devastating loss, Vox Machina must take the fight to Thordak with one less memeber. They travel across Exandria recruiting allies to face down the Cinder King in his lair. Will the gathered might of the world be enough? Or will Thordak turn Tal'Dorei to ash?",
                "runtime": 27,
               },
               {
                release: "2024-10-17",
                episode: 9,
                "episode_type": "standard",
                title: "Thordak",
                "overview": "Thordak strikes back! The combined armies of Whitestone and Syngorn are in trouble as the dragon's ambush is sprung. Betrayed by Raishan and left with nowhere to run, Vox Machina scrambles to find a new plan before their allies are wiped out.",
                "runtime": 26,
               },
               {
                release: "2024-10-24",
                episode: 10,
                "episode_type": "standard",
                title: "To the Ends of the World",
                "overview": "Thordak has fallen - though the price paid was steep. In the aftermath, Raishan absconds with Thordak's corpse. Vox Machina doesn't know her plan, but it can't be good. Fractured, they scatter on their own personal quests: vengeance, solace, and knowledge.",
                "runtime": 27,
               },
               {
                release: "2024-10-24",
                episode: 11,
                "episode_type": "standard",
                title: "Deadly Echoes",
                "overview": "At sea, the twins fight for their lives against Ripley. Keyleth undergoes a dangerous earth ritual to locate Raishan, one that could cost her life. Pike and Grog's quest is no less perilous, as they struggle to convince Kaylie to help save Scanlan.",
                "runtime": 27,
               },
               {
                release: "2024-10-24",
                episode: 12,
                "episode_type": "finale",
                title: "Souls in Darkness",
                "overview": "Merging her soul with a red dragon corpse, Raishan becomes an unkillable, undead monstrosity. She battles Vox Machina in her lair, trying to erase them before they can foil her plans.",
                "runtime": 30,
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
              {
                episode: 1,
              }
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
        "backdrop_path": "/umVYLVZ7T85TkIHudxK799lPnLQ.jpg",
        "id": 100883,
        title: "Never Have I Ever",
        "overview": "After a traumatic year, all an Indian-American teen wants is to go from pariah to popular -- but friends, family and feeling won't make it easy on her.",
       background: "/hd5fnBixab6IzfUwjC5wfdbX3eM.jpg",
        mediaType: 'series',
        "original_language": "en",
         "genre_ids": [
          35,
          18
          ],
        seasons: [
          {
            season: 1,
            episodes: [
              {
                release: "2020-04-27",
                episode: 1,
                "episode_type": "standard",
                title: "Pilot",
                "overview": "After recent trauma, Devi starts her first day as a high school sophomore determined to shake off old labels and finally become cool.",
                 "runtime": 28,
              },
              {
                release: "2020-04-27",
                episode: 2,
                "episode_type": "standard",
                title: "... had sex with Paxton Hall-Yoshida",
                "overview": "Devi hesitates to tell her friends the truth about her awkward interactions with Paxton. The prospect of an arranged marriage puts Kamala under pressure.",
                 "runtime": 30,
              },
              {
                release: "2020-04-27",
                episode: 3,
                "episode_type": "standard",
                title: "... gotten drunk with the popular kids",
                "overview": "Devi hopes to win cool points with Paxton at a party, until a surprising turn of events. Hidden emotions emerge for Fabiola. Kamala makes a choice.",
                 "runtime": 30,
              },
              {
                release: "2020-04-27",
                episode: 4,
                "episode_type": "standard",
                title: "... felt super Indian",
                "overview": "At Ganesh Puja celebrations, Devi questions how much she identifies with Indian culture, Nalini dodges acerbic aunties and Kamala frets over her future.",
                 "runtime": 22,
              },
              {
                release: "2020-04-27",
                episode: 5,
                "episode_type": "standard",
                title: "... started a nuclear war",
                "overview": "Devi allows rumors about her and Paxton to swirl during an overnight school trip. Fabiola opens up to Eleanor, who gets upsetting news about her mother.",
                 "runtime": 29,
              },
              {
                release: "2020-04-27",
                episode: 6,
                "episode_type": "standard",
                title: "... been the loneliest boy in the world",
                "overview": "With absentee parents, a shallow girlfriend and no one to hang out with, Ben Gross is lonelier than ever, until an unlikely invitation offers some hope.",
                 "runtime": 23,
              },
              {
                release: "2020-04-27",
                episode: 7,
                "episode_type": "standard",
                title: "... been a big, fat liar",
                "overview": "Devi oversteps several boundaries in an attempt to be a better friend. Eleanor’s reunion with her mother leads to multiple revelations and confessions.",
                 "runtime": 25,
              },
              {
                release: "2020-04-27",
                episode: 8,
                "episode_type": "standard",
                title: "... pissed off everyone I know",
                "overview": "After another fallout with her friends, Devi grapples with unresolved trauma. A party at Ben’s turns out to be equal parts awkward, awful and amazing.",
                 "runtime": 29,
              },
              {
                release: "2020-04-27",
                episode: 9,
                "episode_type": "standard",
                title: "... had to be on my best behavior",
                "overview": "Flashbacks unearth painful memories and resentment for Devi. Meanwhile, Kamala is forced to get honest as the family welcomes her suitor at home.",
                 "runtime": 24,
              },
              {
                release: "2020-04-27",
                episode: 10,
                "episode_type": "finale",
                title: "... said I'm sorry",
                "overview": "After unwelcome news sparks a fight with her mother, Devi seeks an escape. Mohan’s birthday brings an opportunity for closure — and for new beginnings.",
                 "runtime": 29,
              },
            ]
          },
          {
            season: 2,
            episodes: [
              {
                release: "2021-07-15",
                episode: 1,
                "episode_type": "standard",
                title: "… been a playa",
                "overview": "Ahead of their impending move to India, Devi faces her first-ever love triangle, while Nalini tries to sell her patient roster to a flashy competitor.",
                "runtime": 28,
              },
              {
                release: "2021-07-15",
                episode: 2,
                "episode_type": "standard",
                title: "... thrown a rager",
                "overview": "Devi plans to throw the ultimate party, but her knotty dating life may turn it into a different kind of blowout. Nalini has an eye-opening trip to India.",
                 "runtime": 32,
              },
                {
                  release: "2021-07-15",
                  episode: 3,
                  "episode_type": "standard",
                  title: "... opened a textbook",
                  "overview": "Making good grades has never been a priority for Paxton — until a mishap urges him to prove he’s more than a campus heartthrob and star swimmer.",
                 "runtime": 27,
              },
              {
                release: "2021-07-15",
                episode: 4,
                "episode_type": "standard",
                title: "... had an Indian frenemy",
                "overview": "Devi instantly resents the new Indian girl at school, but is taken by surprise as they get acquainted. Kamala struggles to be respected at her lab.",
                 "runtime": 28,
              },
              {
                release: "2021-07-15",
                episode: 5,
                "episode_type": "standard",
                title: "... ruined someone's life",
                "overview": "At a 24-hour school relay, Devi’s impulsive words spark an insensitive rumor. Fabiola hesitates to introduce her overenthusiastic mother to Eve.",
                 "runtime": 29,
              },
              {
                release: "2021-07-15",
                episode: 6,
                "episode_type": "standard",
                title: "... betrayed a friend",
                "overview": "While attempting to cover her trail for fueling gossip about Aneesa, Devi's guilt grows. Nalini warms up to a nemesis. Kamala gets a rude shock.",
                 "runtime": 27,
              },
              {
                release: "2021-07-15",
                episode: 7,
                "episode_type": "standard",
                title: "... begged for forgiveness",
                "overview": "Devi must learn the art of a genuine apology before it’s too late. Kamala considers standing up for herself. Nalini takes some parenting advice.",
                 "runtime": 29,
              },
              {
                release: "2021-07-15",
                episode: 8,
                "episode_type": "standard",
                title: "... been Daisy Buchanan",
                "overview": "Watching an ex with someone new tests Devi’s resolve to be more mature. Fabiola struggles to stay true to herself, and grows concerned for Eleanor.",
                 "runtime": 28,
              },
              {
                release: "2021-07-15",
                episode: 9,
                "episode_type": "standard",
                title: "... stalked my own mother",
                "overview": "A disastrous snooping incident compels Devi and Nalini to do some introspection. Paxton steps out of his comfort zone. Eleanor has a breakthrough.",
                 "runtime": 31,
              },
              {
                release: "2021-07-15",
                episode: 10,
                "episode_type": "finale",
                title: "... been a perfect girl",
                "overview": "As Paxton's mixed messages have Devi questioning herself, the upcoming winter dance offers a chance to determine where she stands — and what she needs.",
                 "runtime": 31,
              },
            ]
          },
          {
            season: 3,
            episodes: [
              {
                release: "2022-08-12",
                episode: 1,
                "episode_type": "standard",
                title: "...been slut-shamed",
                "overview": "At last, Devi is dating her dream guy, but some catty gossip has her worried about taking things slow. Nalini urges Kamala to rethink a decision.",
                 "runtime": 30,
              },
              {
                release: "2022-08-12",
                episode: 2,
                "episode_type": "standard",
                title: "...had my own troll",
                "overview": "Anonymous messages about Paxton have Devi playing detective. Aneesa feels neglected by Ben. Pati hosts a mixer to find Kamala a 'suitable partner.",
                 "runtime": 30,
              },
              {
                release: "2022-08-12",
                episode: 3,
                "episode_type": "standard",
                title: "…had a valentine",
                "overview": "On Valentine's Day, a compatibility test's results spark more drama than romance among the Sherman Oaks couples. Meanwhile, Nalini makes a new friend.",
                 "runtime": 32,
              },
              {
                release: "2022-08-12",
                episode: 4,
                "episode_type": "standard",
                title: "...made someone jealous",
                "overview": "Kamala invites Manish over for Navratri, to Pati's annoyance. Devi isn't thrilled about taking Rhyah's son to a house party, but she's in for a surprise.",
                 "runtime": 27,
              },
              {
                release: "2022-08-12",
                episode: 5,
                "episode_type": "standard",
                title: "...been ghosted",
                "overview": "A charity event gives Devi the chance to polish her rusty flirting skills. As awkward vibes between Fabiola and Aneesa lingers, Paxton offers advice.",
                 "runtime": 26,
              },
              {
                release: "2022-08-12",
                episode: 6,
                "episode_type": "standard",
                title: "...had a breakdown",
                "overview": "Chasing Ivy League dreams and his dad's approval, Ben ignores warning signs of burnout until the stress of his jam-packed workload builds up — literally.",
                 "runtime": 25,
              },
              {
                release: "2022-08-12",
                episode: 7,
                "episode_type": "standard",
                title: "...cheated",
                "overview": "Up against Des' team at a debate tournament, Devi takes her competitiveness too far. An opportunity arises for Eleanor. Pati explains herself to Kamala.",
                 "runtime": 27,
              },
              {
                release: "2022-08-12",
                episode: 8,
                "episode_type": "standard",
                title: "...hooked up with my boyfriend",
                "overview": "A game night gives Devi and Fab a chance for alone time with Des and Aneesa, but other guests throw the evening off course. An art tutor surprises Ben.",
                 "runtime": 26,
              },
              {
                release: "2022-08-12",
                episode: 9,
                "episode_type": "standard",
                title: "…had an Indian boyfriend",
                "overview": "Watching Devi struggle with a painful memory, a nervous Rhyah orders Des to keep his distance. Paxton enlists Eleanor's help to break some news to Trent.",
                 "runtime": 30,
              },
              {
                release: "2022-08-12",
                episode: 10,
                "episode_type": "finale",
                title: "...lived the dream",
                "overview": "The end of the school year has the Sherman Oaks crew all up in their feels. Devi is torn between planning the future and enjoying the present.",
                 "runtime": 29,
              }
            ]
          },
          {
            season: 4,
            episodes: [
              {
                release: "2023-06-08",
                episode: 1,
                "episode_type": "standard",
                title: "...lost my virginity",
                "overview": "An awkward end to an intimate moment has Devi fuming all summer. As senior year begins, the crew has college — and complicated feelings — on the brain.",
                "runtime": 29,
                file: ' '
              },
              {
                release: "2023-06-08",
                episode: 2,
                "episode_type": "standard",
                title: "...gotten sweet revenge",
                "overview": "Bent on exposing who vandalized her car, Devi makes a bold accusation. Fabiola shakes up the robotics club's culture. Pati hides a secret from the family.",
                "runtime": 27,
              },
              {
                release: "2023-06-08",
                episode: 3,
                "episode_type": "standard",
                title: "...liked a bad boy",
                "overview": "As senior year continues to spiral, Devi's resolve to avoid Ethan weakens. Paxton returns to a comforting place. Nalini tackles termite issues.",
                "runtime": 26,
              },
              {
                release: "2023-06-08",
                episode: 4,
                "episode_type": "standard",
                title: "...wrecked my future",
                "overview": "At a college fair, Devi juggles her love life with her academic ambitions, Fabiola ponders a tricky decision and an unlikely ally comes to Ben's rescue.",
                "runtime": 29,
              },
              {
                release: "2023-06-08",
                episode: 5,
                "episode_type": "standard",
                title: "...been to New Jersey",
                "overview": "On a school trip to New York, Devi discovers that college may be scarier than she thought, Eleanor faces disappointment and Fabiola remains tight-lipped.",
                "runtime": 28,
              },
              {
                release: "2023-06-08",
                episode: 6,
                "episode_type": "standard",
                title: "...had my dream stolen",
                "overview": "With early college admissions rolling in, Devi's in for more than one surprise. Kamala warns a smitten Pati about Len. Ben overhears a hurtful comment.",
                "runtime": 33,
              },
              {
                release: "2023-06-08",
                episode: 7,
                "episode_type": "standard",
                title: "...had an identity crisis",
                "overview": "As Paxton struggles to let go of his past as the king of high school, he seizes a chance to thrive as a swim coach and finds closure with an old flame.",
                "runtime": 27,
              },
              {
                release: "2023-06-08",
                episode: 8,
                "episode_type": "standard",
                title: "...set my mom up",
                "overview": "Unsure about her own love life, Devi focuses on Nalini's — but it will mean befriending an enemy. Pati's birthday ends on a high note no one sees coming.",
                "runtime": 33,
              },
              {
                release: "2023-06-08",
                episode: 9,
                "episode_type": "standard",
                title: "...gone to prom",
                "overview": "After a major setback, Devi feels the burden of telling a lie and must dig deep for a second chance. On prom night, the friends share their truths.",
                "runtime": 31,
              },
              {
                release: "2023-06-08",
                episode: 10,
                "episode_type": "finale",
                title: "...said goodbye",
                "overview": "The last weekend of summer coincides with a festive occasion — and on the brink of their new lives, Devi, her family and friends have lots to celebrate.",
                "runtime": 32,
              },
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
        overview: "A dark medieval fantasy following the last surviving member of the disgraced Belmont clan, trying to save Eastern Europe from extinction at the hand of Vlad Dracula Tepe himself. Inspired by the classic video game series.",
        genre: 'Action',
        year: 2017,
        "genre_ids": [
            16,
            10765,
            18
           ],
        seasons: [
          {
            season: 1,
            episodes: [
              {
                release: "2017-07-07",
                episode: 1,
                "episode_type": "standard",
                title: "Witchbottle",
                "overview": "A headstrong young woman seeks out forbidden knowledge, and a corrupt bishop courts disaster by enraging a legend.",
                "runtime": 25,
              },
              {
                release: "2017-07-07",
                episode: 2,
                "episode_type": "standard",
                title: "Necropolis",
                "overview": "Trevor Belmont drifts into the panicked city of Gresit, where he learns of an ancient evil and makes a surprising vow.",
                "runtime": 23,
              },
              {
                release: "2017-07-07",
                episode: 3,
                "episode_type": "standard",
                title: "Labyrinth",
                "overview": "Belmont explores the catacombs of Gresit and makes a disturbing discovery. As night falls on the city, the beasts return for blood.",
                "runtime": 24,
              },
              {
                release: "2017-07-07",
                episode: 4,
                "episode_type": "finale",
                title: "Monument",
                "overview": "Belmont strives to save Gresit from certain doom and comes face to face with a shocking truth.",
                "runtime": 23,
              }
            ]
          },
          {
            season: 2,
            episodes: [
             {
              release: "2018-10-26",
              "episod": 1,
              "episode_type": "standard",
              title: "War Council",
              "overview": "Dracula's generals gather to prosecute the war against humanity. There is discord when Dracula's human allies, Hector and Isaac, are given command of the armies of the night.",
              "runtime": 25,
              },
              {
              release: "2018-10-26",
              "episod": 2,
              "episode_type": "standard",
              title: "Old Homes",
              "overview": "As Belmont shares a bold strategy with Alucard and Sypha, Dracula addresses a conflict within his ranks. Isaac recalls a painful encounter.",
              "runtime": 25,
              },
              {

             release: "2018-10-26",
             episode: 3,
             "episode_type": "standard",
             title: "Shadow Battles",
             "overview": "Belmont travels to his family's archives, along with Sypha and a cynical Alucard. Godbrand voices a suspicion about Dracula's motives.",
             "runtime": 27,
              },
              {
            release: "2018-10-26",
            episode: 4,
             "episode_type": "standard",
             title: "Broken Mast",
             "overview": "As Godbrand's thirst grows stronger, Carmilla tries to recruit Hector. Isaac shows his loyalty, and Belmont shares a family story with Sypha.",
             "runtime": 25,
              },
              {
              release: "2018-10-26",
              episode: 5,
              "episode_type": "standard",
              title: "Last Spell",
              "overview": "Carmilla presses forward with her plan despite Godbrand's disappearance. Sypha makes a startling discovery while combing the archives.",
              "runtime": 24,
             },
             {
             release: "2018-10-26",
             episode: 6,
             "episode_type": "standard",
             title: "The River",
             "overview": "Does he really have what it takes to live up to his family’s reputation? It's time for Belmont to pick his fate. Also, Dracula prepares for the fight.",
             "runtime": 25,
             },
              {
            release: "2018-10-26",
            episode: 7,
            "episode_type": "standard",
            title: "For Love",
            "overview": "With nothing less than the future of humanity at stake, Belmont, Alucard and Sypha do battle with their immortal enemy: Dracula.",
            "runtime": 28,
              },
              {
             release: "2018-10-26",
              episode: 8,
              "episode_type": "finale",
              title: "End Times",
               "overview": "With the war between humans and vampires seemingly settled, the survivors -- both good and evil -- look toward the future.",
               "runtime": 29,
              }
            ]
          },
          {
            season: 3,
            episodes: [
             {
             release: "2020-03-05",
             episode: 1,
             "episode_type": "standard",
             title: "Bless Your Dead Little Hearts",
            "overview": "Alucard adjusts to his lonely new life, Belmont and Sypha pay a visit to an eerie and unusual town, and Carmilla returns home with a prize.",
            "runtime": 28,
              },
              {
                release: "2020-03-05",
                episode: 2,
                "episode_type": "standard",
                title: "The Reparation of My Heart",
                "overview": "Isaac gets some unexpected help in his search for Hector. Meanwhile, Carmilla plots a land grab and Alucard meets some fans.",
                "runtime": 30,
              },
              {
                release: "2020-03-05",
                episode: 3,
                "episode_type": "standard",
                title: "Investigators",
                "overview": "Belmont and Sypha's plan to leave Lindenfeld hits a snag. Isaac and the Captain debate the merits of humanity. Hector tries to get a read on Lenore.",
                "runtime": 28,
              },
              {
                release: "2020-03-05",
                episode: 4,
                "episode_type": "standard",
                title: "I Have a Scheme",
                "overview": "Zumi and Takka share their history with Alucard. Also, Saint Germain gains entrance to the priory, and Isaac receives an icy welcome in Genoa.",
                "runtime": 31,
              },
              {
                release: "2020-03-05",
                episode: 5,
                "episode_type": "standard",
                title: "A Seat of Civilisation and Refinement",
                "overview": "Belmont and the Judge discover an ominous symbol, Saint Germain's treasure hunt is cut short, and Alucard's bond with Zumi and Takka continues to grow.",
                "runtime": 22,
              },
              {
                release: "2020-03-05",
                episode: 6,
                "episode_type": "standard",
                title: "The Good Dream",
                "overview": "Lenore continues to spend time with Hector, slowly earning his trust. Saint Germain experiences a telling nightmare about the Infinite Corridor.",
                "runtime": 24,
              },
              {
                release: "2020-03-05",
                episode: 7,
                "episode_type": "standard",
                title: "Worse Things Than Betrayal",
                "overview": "As Saint Germain makes unsettling discoveries, Isaac marches toward a showdown. Meanwhile, Belmont and Sypha question a monk — aggressively.",
                "runtime": 25,
              },
              {
                release: "2020-03-05",
                episode: 8,
                "episode_type": "standard",
                title: "What the Night Brings",
                "overview": "Something is alive in the priory's basement, and for Belmont and Sypha, time is of the essence. Lenore opens up to Hector about Carmilla’s plans.",
                "runtime": 25,
              },
              {
                release: "2020-03-05",
                episode: 9,
                "episode_type": "standard",
                title: "The Harvest",
                "overview": "Night falls on Lindenfeld and all manner of hell breaks loose. Also, Isaac meets the Magician, Hector makes a pledge, and Zumi and Takka make a move.",
                "runtime": 25,
              },
              {
                release: "2020-03-05",
                episode: 10,
                "episode_type": "finale",
                title: "Abandon All Hope",
                "overview": "With the portal to hell open, Trevor and Sypha must battle an onslaught. Meanwhile, the Judge shares a disturbing legacy, and Hector learns his fate.",
                "runtime": 28,
            }
            ],
           // overview: "In Season 3, Belmont and Sypha settle into a village with sinister secrets, Alucard mentors a pair of admirers, and Isaac embarks on a quest to locate Hector.",
          },
          {
            season: 4,
            episodes: [
              {
                release: "2021-05-13",
                episode: 1,
                "episode_type": "standard",
                title: "Murder Wakes It Up",
                "overview": "Belmont and Sypha continue to battle beasts loyal to Dracula, but it's getting a little old. Meanwhile, Alucard receives a guest.",
                "runtime": 24,
              },
              {
                release: "2021-05-13",
                episode: 2,
                "episode_type": "standard",
                title: "Having the World",
                "overview": "Lenore urges Hector to not test Carmilla's patience. Belmont and Sypha cross paths with Zamfir, a fearsome guard with a suspicious mind.",
                "runtime": 23,
              },
              {
                release: "2021-05-13",
                episode: 3,
                "episode_type": "standard",
                title: "Walk Away",
                "overview": "Isaac gets under Varney's skin. Vampires Morana and Striga receive an urgent message from Carmilla. Belmont and Sypha get a look at Targoviste.",
                "runtime": 29,
              },
              {
                release: "2021-05-13",
                episode: 4,
                "episode_type": "standard",
                title: "You Must Sacrifice",
                "overview": "Alucard travels to Danesti, where he makes a dramatic entrance in the nick of time. Also, the scholar Saint Germain reflects on his own twisted path.",
                "runtime": 28,
              },
              {
                release: "2021-05-13",
                episode: 5,
                "episode_type": "standard",
                title: "Back in the World",
                "overview": "With Greta's help, Alucard sets out to guide the villagers to his castle for protection. Sypha pushes back on Zamfir's leadership. Isaac makes a move.",
                "runtime": 25,
              },
              {
                release: "2021-05-13",
                episode: 6,
                "episode_type": "standard",
                title: "You Don't Deserve My Blood",
                "overview": "As Isaac and his army of night creatures descend on Carmilla's castle, Hector rushes to finish his preparations before the bloody reunion begins.",
                "runtime": 31,
              },
              {
                release: "2021-05-13",
                episode: 7,
                "episode_type": "standard",
                title: "The Great Work",
                "overview": "Varney and Ratko discover their plan is working — but who gets the credit? Also, Zamfir finally takes Belmont and Sypha underground.",
                "runtime": 26,
              },
              {
                release: "2021-05-13",
                episode: 8,
                "episode_type": "standard",
                title: "Death Magic",
                "overview": "Belmont, Sypha and Zamfir battle Varney, Ratko and their unholy army. Alucard's castle falls under attack, and Saint Germain shares his scheme.",
                "runtime": 24,
              },
              {
                release: "2021-05-13",
                episode: 9,
                "episode_type": "standard",
                title: "The Endings",
                "overview": "Belmont and Sypha join forces with their old friend Alucard — and not a moment too soon. As the battle rages, Varney reveals his true form.",
                "runtime": 31,
              },
              {
                release: "2021-05-13",
                episode: 10,
                "episode_type": "finale",
                title :"It's Been a Strange Ride",
                "overview": "Not content to live in a cage, Lenore chooses another fate. Alucard opens his castle. Sypha wonders if she's lost Belmont for good.",
                  "runtime": 27,
            }
            ],
             // overview: "In Season 4, the nation of Wallachia collapses into chaos, with factions clashing. Some attempt to assert control, as others try to bring Dracula back from the dead. Nobody is who they seem, and nobody can be trusted. These are the end times, after all.",
            
          },
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
        "backdrop_path": "/zHbxjq7FzraynhUaiDQdFWxp2UN.jpg",
        "id": 252136,
        title: "Lady Revenger Returns From the Fire",
        "overview": "Luo Ai Lian, the gentle and peaceful eldest daughter of the Luo family, lost everything overnight due to a sudden disaster and was thrown from wealth into a quagmire. After experiencing many difficulties, she finally experienced a narrow escape and became the eldest daughter of the escort agency, Shen Dan Qing, who was capable of both literary and martial arts. She was reborn from the ashes and embarked on the thorny road of tearing apart her enemies with her hands, starting her different life. In the process of revenge, Shen Dan Qing accidentally broke into the sight of General Xu, who was looking for the lost treasure, arousing his suspicion. This made Shen Dan Qing's road to revenge even more ups and downs and unique. In this thrilling battle of wits and courage, they helped each other and cherished each other, and a series of exciting stories happened.",
        "poster_path": "/4ByjmnwzlaSM8ORxFsFaxwEP9Y6.jpg",
        "media_type": "tv",
        "adult": false,
        "original_language": "zh",
        "genre_ids": [
        18
        ],
        seasons: [
          {
            season: 1,
            episodes: [
              {
                "_id": "6620b7d287ae7b014cd7b705",
                "air_date": "2024-04-26",
                "episodes": [
                {
                "air_date": "2024-04-26",
                "episode_number": 1,
                "episode_type": "standard",
                "id": 5288971,
                title: "Episode 1",
                "overview": "",
                "production_code": "",
                "runtime": 38,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/eqr7lirGPoo67hny5UySgRCYymL.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-04-26",
                "episode_number": 2,
                "episode_type": "standard",
                "id": 5303927,
                title: "Episode 2",
                "overview": "",
                "production_code": "",
                "runtime": 43,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/rhLNrjVAwrecDARntqFKxBBGuw7.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-04-26",
                "episode_number": 3,
                "episode_type": "standard",
                "id": 5303928,
                title: "Episode 3",
                "overview": "",
                "production_code": "",
                "runtime": 35,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/uGbH2YB7lVywAdZQnMXMlANPjXa.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-04-26",
                "episode_number": 4,
                "episode_type": "standard",
                "id": 5303929,
                title: "Episode 4",
                "overview": "",
                "production_code": "",
                "runtime": 35,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/b4CmDoI2JxONcfKTDZXjwXLmrj0.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-04-26",
                "episode_number": 5,
                "episode_type": "standard",
                "id": 5303930,
                title: "Episode 5",
                "overview": "",
                "production_code": "",
                "runtime": 42,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/j73PfnNU2ZexcH8LZKAflrAig8l.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-04-27",
                "episode_number": 6,
                "episode_type": "standard",
                "id": 5304137,
                title: "Episode 6",
                "overview": "",
                "production_code": "",
                "runtime": 41,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/YhkGlHImUaacxS1bQBDpYrHVnc.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-04-28",
                "episode_number": 7,
                "episode_type": "standard",
                "id": 5304138,
                title: "Episode 7",
                "overview": "",
                "production_code": "",
                "runtime": 34,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/97DQZlXUdhKEy52azuEZcjYmmsH.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-04-29",
                "episode_number": 8,
                "episode_type": "standard",
                "id": 5304139,
                title: "Episode 8",
                "overview": "",
                "production_code": "",
                "runtime": null,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/lRBYD3hIQiSE76ik7a7sMsa4prt.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-04-30",
                "episode_number": 9,
                "episode_type": "standard",
                "id": 5304140,
                title: "Episode 9",
                "overview": "",
                "production_code": "",
                "runtime": 43,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/bH3KCEyrmAaRpzzAUeQIqriIg5Q.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-01",
                "episode_number": 10,
                "episode_type": "standard",
                "id": 5304141,
                title: "Episode 10",
                "overview": "",
                "production_code": "",
                "runtime": 43,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/kxC8jJNMFJqQsDEFKjQ46EVEq9I.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-02",
                "episode_number": 11,
                "episode_type": "standard",
                "id": 5304142,
                title: "Episode 11",
                "overview": "",
                "production_code": "",
                "runtime": 42,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/fHwCXkaQ7pT4YJl1MRXbFhrYpQs.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-03",
                "episode_number": 12,
                "episode_type": "standard",
                "id": 5304143,
                title: "Episode 12",
                "overview": "",
                "production_code": "",
                "runtime": 42,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/uCh09WBWjcWM8AXTAxurABQOcpU.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-04",
                "episode_number": 13,
                "episode_type": "standard",
                "id": 5304144,
                title: "Episode 13",
                "overview": "",
                "production_code": "",
                "runtime": 44,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/BQbQPkeVODK7u3iu910BSygTf9.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-05",
                "episode_number": 14,
                "episode_type": "standard",
                "id": 5304145,
                title: "Episode 14",
                "overview": "",
                "production_code": "",
                "runtime": 44,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/uU0Che5b50dBL3G9dzcBu3rHRW8.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-06",
                "episode_number": 15,
                "episode_type": "standard",
                "id": 5304146,
                title: "Episode 15",
                "overview": "",
                "production_code": "",
                "runtime": 44,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/hjSTLdRuxSKtcpHO6dfM73kTwE2.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-07",
                "episode_number": 16,
                "episode_type": "standard",
                "id": 5304147,
                title: "Episode 16",
                "overview": "",
                "production_code": "",
                "runtime": 44,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/AiMAiTCh58c94UvQtO5qIpwsg5H.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-08",
                "episode_number": 17,
                "episode_type": "standard",
                "id": 5304148,
                title: "Episode 17",
                "overview": "",
                "production_code": "",
                "runtime": 47,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/k41y2MILNZMtdk9nlcrCRxPhGq6.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-09",
                "episode_number": 18,
                "episode_type": "standard",
                "id": 5304149,
                title: "Episode 18",
                "overview": "",
                "production_code": "",
                "runtime": 43,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/cBweymtaggyKkG0jNQNf2oAIFHc.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-10",
                "episode_number": 19,
                "episode_type": "standard",
                "id": 5304150,
                title: "Episode 19",
                "overview": "",
                "production_code": "",
                "runtime": 45,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/jAkVyUvcAAbaXOgZZChofQXUIFL.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-10",
                "episode_number": 20,
                "episode_type": "standard",
                "id": 5304151,
                title: "Episode 20",
                "overview": "",
                "production_code": "",
                "runtime": 46,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/gTKyj64OPxCP3Ux60j88nRTdxiU.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-10",
                "episode_number": 21,
                "episode_type": "standard",
                "id": 5304152,
                title: "Episode 21",
                "overview": "",
                "production_code": "",
                "runtime": 47,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/xvBUEO9DJIk6bsCzrI571Wka6dK.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-10",
                "episode_number": 22,
                "episode_type": "standard",
                "id": 5304153,
                title: "Episode 22",
                "overview": "",
                "production_code": "",
                "runtime": 45,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/i6kfG7TWPbPYFuWR3ggg65cjU23.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-10",
                "episode_number": 23,
                "episode_type": "standard",
                "id": 5304154,
                title: "Episode 23",
                "overview": "",
                "production_code": "",
                "runtime": 44,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/ac4Jv1r2JfdXLWeN5CcQS69QWzH.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                },
                {
                "air_date": "2024-05-10",
                "episode_number": 24,
                "episode_type": "finale",
                "id": 5304155,
                title: "Episode 24",
                "overview": "",
                "production_code": "",
                "runtime": 44,
                "season_number": 1,
                "show_id": 252136,
                "still_path": "/ajAcVpMQ5IMJn9dClAgnpWTBGmp.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "crew": [],
                "guest_stars": []
                }
                ],
                title: "Season 1",
                "overview": "",
                "id": 389054,
                "poster_path": "/2FSGskwbr1odE3oWTGhHOpVSAtU.jpg",
                "season_number": 1,
                "vote_average": 0
                }
            ]
          }
        ]
      },
      {
  id: 25,
  title: 'The Untamed',
  background: '/imges/untamed.jpg',
  mediaType: 'series',
  genre: '',
  seasons: [
    {
      season: 1,
      episodes: [
{
date: "2019-06-27'",
episode: 1,
episode_type: "standard",
title:   'Episode 1',
overview: "Yilin Patriarch Wei Wuxian died in the battle with three biggest clans happened in No Night City. After 16 years later, Mo Xuanyu from Mo residence sacrifices himself and bring Wei Wuxian back to get revenge for him. The same day, juniors from Gusu Lan Sect came to Mo residence to solve some trouble. When Wei Wuxian is awake, he found out juniors can't handle it, so, he tries to help them.",
runtime: 43,

},
{
date: "2019-06-'",
episode: 2,
episode_type: "standard",
title:  'Episode 2',
overview: "After Wei Wuxian left Mo Residence, he arrived at Dafan mountain. Then he encounters the Dancing God. While dealing with the Dancing God, he meets with two old friends.",
runtime: 45,
},
{
date: "2019-06-27'",
episode: 3,
episode_type: "standard",
title:  'Episode 3',
overview: "We go back 16 years where Wei Wuxian is still part of the Yunmeng Jiang sect. He travels with the elder brother and sister of the clan, Jiang Cheng and Jiang Yanli. He encounters the very strict Lan Wanggji for the first time here.",
runtime: 42,
},
{
date: "2019-06-'",
episode: 4,
episode_type: "standard",
title:  'Episode 4',
overview: "While students were performing greetings, Wen Chao from Qishan Wen Sect along with Wen Ning and Wen Qing arrived at Gusu Lan Sect. A misunderstanding is caused. Luckily, no one was hurt. After that, Wei Wuxian met with Wen Ning.",
runtime: 44,

},
{
date: "2019-06-27'",
episode: 5,
episode_type: "standard",
title:  'Episode 5',
overview: "Wei Wuxian gets punished for a mistake he made in the class. After a few days, Wei Wuxian, Jiang Cheng go together with Lan Sect to Caiyi Village to a solve water spirit problem.",
runtime: 44,

},
{
date: "2019-06-'",
episode: 6,
episode_type: "standard",
title:  'Episode 6',
overview: "Wei Wuxian and Lan Wangji find out about the greatest secret hidden in Gusu Lan Sect for a long time.",
runtime: 44,

},
{
date: "2019-06-28",
episode: 7,
episode_type: "standard",
title:  'Episode 7',
overview: "Because of Wei Wuxian and Jin Zixuan's fight, the engagement between Jin Zixuan and Jiang Yanli was called off.",
runtime: 45,

},
{
date: "2019-06-28",
episode: 8,
episode_type: "standard",
title:  'Episode 8',
overview: "Wei Wuxian, Jiang Cheng and Jiang Yanli left Gusu Lan Sect together with Yunmeng Jiang's Sect's leader as a result of Wei Wuxian's fight with Jin Zixuan. But Wei Wuxian didn't go home. He left a note and then goes and finds Lan Wangji. Then two of them go on a journey to find the rest of Silver Metals. Meanwhile, Wen Chao finds another piece of Silver Metal.",
runtime: 44,

},
{
date: "2019-07-01",
episode: 9,
episode_type: "standard",
title:  'Episode 9',
overview: "The three heroes sleep within the cave of the Dancing Goddess, but during the night she comes alive and they fight her off. Shortly after an army of ghost puppets arrive at the cave. Wen Qing works together with them to save the people.",
runtime: 44,

},
{
date: "2019-07-01",
episode: 10,
episode_type: "standard",
title:   '',
overview: "Wei Wuxian, Lan Wangji and Jiang Cheng meet with Xiao Xingchen and Song Lan. Then they take the person responsible to what happened to Yueyang Cheng Sect who was captured by Xiao XIngchen and Song Lan to Qinghe Nie Sect. There, they learned that they have to go to Qishan Wen Sect to learn some manners. After a few days, Wen Chao from Qishan Wen Sect attacks Qinghe Nie Sect.",
runtime: 45,
},
{
date: "2019-07-02",
episode: 11,
episode_type: "standard",   
title:   '',
overview: "Wei Wuxian and Jiang Cheng go back home. Meanwhile, Gusu Lan Sect was attacked by Wen Xu from Qishan Wen Sect. After a few days, Wei Wuxian and Jiang Cheng left home and go to Qishan Wen Sect. There, they find out Lan Wangji is also there.",
runtime: 44,

},
{
date: "2019-07-02",
episode: 12,
episode_type: "standard",
title:   '',
overview: "When they are at Qishan Wen Sect, because of Wen Chao, Wei Wuxian already has to face a lot of troubles. Thankfully, Wen Ning is quietly helping him. At the same time, Wei Wuxian learns Gusu Lan Sect has been destroyed by Qishan Wen Sect.",
runtime: 44,

},
{
date: "2019-07-03",
episode: 13,
episode_type: "standard",
title:   '',
overview: "Wen Chao takes them to hunt beast which is in the Tu Lu Xuan Wu cave. A lot of things happened in there which leads to Wei Wuxian and Lan Wangji have to spend some time in the cave.",
runtime: 45,

},
{
date: "2019-07-03",
episode: 14,
episode_type: "standard",
title:  'Episode 1',
overview: "After sleeping in the cave, Wei Ying and Lan Zahn come up with a plan to fight the elemental beast and gather arrows, rope and whatever they can find. Wen Zhao is instructed to find Xue Yang and the last piece of Yin metal.",
runtime: 45,

},
{
date: "2019-07-08",
episode: 15,
episode_type: "standard",
title:   '',
overview: "A leader from a small clan arrives wounded at Lotus Pier. Wuxian and Cheng are left in charge while their father and sister look for a safer place to heal the clansman. In their absence Wang Lingjiao provokes Madam Yu into battle.",
runtime: 45,

},
{
date: "2019-07-08",
episode: 16,
episode_type: "standard",
title:   '',
overview: "When Wei Wuxian and Jiang Cheng are on a boat, they meet with Jiang Fengmian who came back. They told him everything. Then Jiang Fengmian ties Wei Wuxian, Jiang Cheng and Jiang Yanli and let them go far away from home. As for him, he goes back to Yunmeng Jiang Sect to save his wife. On that night, Yunmeng Jiang Sect is completely destroyed by Qishan Wen Sect. From now on, Wei Wuxian, Jiang Cheng and Jiang Yanli have to depend on themselves. On the run, while Wei Wuxian goes outside to buy foods, Jiang Cheng gets out. By the time Wei Wuxian is back, he finds out Jiang Cheng has been captured by Qishan Wen Sect. So, he goes to Yunmeng Jiang Sect to save Jiang Cheng.",
runtime: 44,

},
{
date: "2019-07-09",
episode: 17,
episode_type: "standard",
title:   '',
overview: "With the help of Wen Ning, Wei Wuxian successfully rescues Jiang Cheng. To avoid from finding out, Wen Ning takes them to Yilin which they have occupied. When staying there, Wei Wuxian finds out the worst thing happened to Jiang Cheng. In order to save depressed Jiang Cheng, Wei Wuxian tries to find a solution. Later, he finds a way to get Jiang Cheng back on the track.",
runtime: 46,
},
{
date: "2019-07-09",
epis: 18,
episode_type: "standard",
title:   '',
overview: "While staying at Wen Qing's, Wei Wuxian discovered Song Lan who lost consciousness in the middle of nowhere. He brings back Song Lan and asks Wen Qing to cure him. When Song Lan's better, Wei Wuxian asks him to take Jiang Yanli to Lanling Jin Sect. As for Wei Wuxian and Jiang Cheng, Wei Wuxian comes up with a big plan to get Jiang Cheng normal again.",
runtime: 45,
},
{
date: "2019-07-10",
episode: 19,
episode_type: "standard",
title:   '',
overview: "While Jiang Cheng is going under the process of repairing the golden core, Wei Wuxian has been captured by Wen Chao. Then Wei Wuxian's been missing for three months. Meanwhile, Lan Wangji and Jiang Cheng try to find out whereabouts of Wei Wuxian.",
runtime: 44,

},
{
date: "2019-07-10",
episode: 20,
episode_type: "standard",
title:  'Episode 2',
overview: "When Lan Wangji and Jiang Cheng join hands to fight Qishan Wen Sect, they find a lot of people from Wen Sect by an unknown person. By the time they get to the place where Wen Chao and Wen Zhuliu are staying for the night, they find out who is responsible for what they saw in these days.",
runtime: 44,

},
{
date: "2019-07-15",
episode: 21,
episode_type: "standard",
title:  'Episode 2',
overview: "With the comeback of Wei Wuxian, Yumeng Jiang Sect gets an extra on his side in the battle with Qishan Wen Sect. Meanwhile, Wei Wuxian has to fight his own demon himself.",
runtime: 45

},
{
date: "2019-07-15",
episode: 22,
episode_type: "standard",
title:  'Episode 2',
overview: "Yunmeng Jiang Sect, Lanling Jin Sect, Gusu Lan Sect and Qinghe Nie Sect advance to Qishan Wen Sect with a plan. When Qinghe Nie Sect's leader Nie Mingjue gets there, he meets with an old friend. Meanwhile, the battle with Qishan Wen Sect and the rest of four sects continue. In order to win, Wei Wuxian uses his ability and takes control of Wen Ruohan's zombie things.",
runtime: 45,
},
{
date: "2019-07-16",
episode: 23,
episode_type: "standard",
title:  'Episode 2',
overview: "When Wei Wuxian takes the control of Wen Ruohan's zombie things, Wen Ruohan comes out to find who takes over. When he sees Wei Wuxian, he tries to kill him. But someone who he didn't think would do it kills him. With the death of Wen Ruohan, the battle finally finished. When Wen family falls, they celebrate a feast in Wen Sect.",
runtime: 45,

},
{
date: "2019-07-16",
episode: 24,
episode_type: "standard",
title:  'Episode 2',
overview: "After the feast, Jin Guangshan tracks down the traces of the last silver metal. Meanwhile Wei Wuxian and Jiang Cheng get back to Lotus Cove and start a new chapter. And as for Lan Wangji, he tries to find a way to help Wei Wuxian.",
runtime: 45,

},
{
date: "2019-07-17",
episode: 25,
episode_type: "standard",
title:  'Episode 2',
overview: "After Wen Sect has fallen, Lanling Jin Sect does the hunting in Baifeng Mountain. Because of the fact that Wei Wuxian takes third of prey, Jin Zixun causes problems with Wei Wuxian.",
runtime: 46,

},
{
date: "2019-07-17",
episode: 26,
episode_type: "standard",
title:  'Episode 2',
overview: "Because of Wen Qing's request, Wei Wuxian goes to Lanling Jin Sect and asks Jin Zixun where he keeps Wen Ning. After he gets the answer, Wei Wuxian goes to that place and saves Wen Ning. When they are about to get out of that place, there's someone who will stop them. Who would that be?",
runtime: 44,

},
{
date: "2019-07-22",
episode: 27,
episode_type: "standard",
title:  'Episode 2',
overview: "Although Lan Wangji wants to stop Wei Wuxian, but he couldn't. Then Wei Wuxian takes the rest of Wen family he saved to Yilin Graveyard. Because of the trouble Wei Wuxian caused, Jiang Cheng has to go to Wei Wuxian and talks some sense to him.",
runtime: 45,

},
{
date: "2019-07-22",
episode:'Action',
episode_type: "standard",
title:  'Episode 2',
overview: "Jiang Cheng comes to Wei Wuxian and convinces him to do the right thing. But Wei Wuxian doesn't want give up the rest of Wen family he saved. So, he challenges Jiang Cheng. The next day, Jiang Cheng tells the world that Wei Wuxian betrayed Yumeng Jiang Sect. Meanwhile, Jin Zixuan tries to win Jiang Yanli.",
runtime: 45,

},
{
date: "2019-07-23",
episode: 29,
episode_type: "standard",
title:  'Episode 2',
overview: "Lan Wangji comes to Yilin to meet with Wei Wuxian. During they are talking, some problem happens in Yilin Graveyard. Wei Wuxian must go back there. Lan Wangji also comes along with Wei Wuxian. When they get there, they find some problem caused by recently awaken Wen Ning. Wei Wuxian and Lan Wangji solve that problem.",
runtime: 45,

},
{
date: "2019-07-23",
episode: 30,
episode_type: "standard",
title:  'Episode 30',
overview: "Jiang Cheng and Jiang Yanli comes to Yilin to meet with Wei Wuxian. Meanwhile, Lanling Jin Sect is preparing for the big wedding.",
runtime: 45,
},
{
date: "2019-07-24",
episode: 31,
episode_type: "standard",
title:  'Episode 31',
overview: "Jin Zixuan invites Wei Wuxian to come to Jin Ling's birthday. While Wei Wuxian's preparing present for Jin Ling, Jin Zixun comes and gives Wei Wuxian troubles. To that scene, unexpectedly, someone comes. At the end, because of something that interrupts Wei Wuxian, Wei Wuxian killed who he shouldn't kill. Who would that be?",
runtime: 45,
},
{
date: "2019-07-24",
episode: 32,
episode_type: "standard",
title:  'Episode 32',
overview: "Due to the fact that Lanling Jin Sect killed Wen Qing and Wen Ning, Wei Wuxian battles with the world including Lanling Jin Sect, Gusu Lan Sect and Qinghe Nie Clan. During the batter, unexpected and unfortunate thing happened. What would it be?",
runtime: 45,

},
{
date: "2019-07-29",
episode: 33,
episode_type: "standard",
title:  'Episode 33',
overview: "Wei Wuxian's previous life is ended by jumping from the cliff. The scene changed to after 16 years later. When he wakes up, he finds he's lying on the bed in Gusu Lan Clan. The next day, he finds out something strange on Lan Wangji's body. What would that be?",
runtime: 47,

},
{
date: "2019-07-29",
episode: 34,
episode_type: "standard",
title:  'Episode 34',
overview: "Wei Wuxian and Lan Wangji arrive at Qinghe and find out the grave that eats people. Due to Lan Wangji left Wei Wuxian to capture a guy who was found near the grave, Wei Wuxian is captured by Jiang Cheng. Wei Wuxian must escape from Jiang Cheng. Who will help him to escape?",
runtime: 46,

},
{
date: "2019-07-30",
episode: 35,
episode_type: "standard",
title:  'Episode 35',
overview: "After Wei Wuxian's escaped from Jiang Cheng by help of Jin Ling, he goes back to Lan Wangji. Then they both find out Qinghe Nie Clan's family secret.",
runtime: 46,

},
{
date: "2019-07-30",
episode: 36,
episode_type: "standard",
title:  'Episode 36',
overview: "Wei Wuxian summons Wen Ning and finds out what happened to him. At that night, Lan Wangji's drunk and Wei Wuxian's taking care of him.",
runtime: 46,

},
{
date: "2019-07-31",
episode: 37,
episode_type: "standard",
title:  'Episode 37',
overview: "Wei Wuxian takes care of juniors in Yi City and then he meets with Xue Yang again.",
runtime: 46,

},
{
date: "2019-07-31",
episode: 38,
episode_type: "standard",
title:  'Episode 38',
overview: "Wei Wuxian empathises with A Jing and finds out what happened to Xiao Xingchen and Song Lan.",
runtime: 45,

},
{
date: "2019-08-05",
episode: 39,
episode_type: "standard",
title:  'Episode 39',
overview: "Wei Wuxian and Lan Wangji finds out Nie Mingjue's body hidden in Yi City. When Lan Xichen comes, they both explained the current situation. By luck, Lan Xichen finds out the one who is in front of him is Yilin Patriarch Wei Wuxian.",
runtime: 46,

},
{
date: "2019-08-05",
episode: 40,
episode_type: "standard",
title:  'Episode 40',
overview: "Wei Wuxian and Lan Wangji together with Lan Xichen go to Jin Sect to search for the missing Nie Mingjue's head and at the same time, Wei Wuxian finds out some strange things.",
runtime: 46,

},
{
date: "2019-08-06",
episode: 41,
episode_type: "standard",
title:  'Episode 41',
overview: "Wei Wuxian is being draw into empathy by Nie Mingjue and he finds out how he died.",
runtime: 47,

},
{
date: "2019-08-06",
episode: 42,
episode_type: "standard",
title:  'Episode 42',
overview: "The whole world knows Wei Wuxian came back. Because of the hatred caused by the fact that Wei Wuxian killed Jin Zixuan and Jiang Yanli, as soon as Wei Wuxian's true identity is revealed, Jin Ling stabs Wei Wuxian. With wound in the abdomen, Wei Wuxian and Lan Wangji left Jin Sect. Then they solved the case of how Nie Mingjue died.",
runtime: 46,

},
{
date: "2019-08-07",
episode: 43,
episode_type: "standard",
title:  'Episode 43',
overview: "Wei Wuxian now knows what Lan Wangji did after the massacre in Nightless city thing. After a few days, they know there are a lot of zombies are going to Yilin Graveyard. So, Wei Wuxian and Lan Wangji left Lan Sect to solve that problem. On journey, they both meet with an old friend.",
runtime: 46,

},
{
date: "2019-08-07",
episode: 44,
episode_type: "standard",
title:  'Episode 44',
overview: "Wei Wuxian and Lan Wangji arrived to Yinlin and find out there are a lot of juniors are tied up in Fumo Cave. Wei Wuxian and Lan Wangji save them. At the same time, their parents and guardians and also, people from other sect arrive to Yilin Graveyard to kill Wei Wuxian. Fortunately, Wei Wuxian revealed the one who planned this whole thing. At the same time, they are surrounded by a lot of zombies. How would they get out of it?",
runtime: 46,

},
{
date: "2019-08-07",
episode: 45,
episode_type: "standard",
title:  'Episode 45',
overview: "Everyone who comes to kill Wei Wuxian are facing the moment of death. Wei Wuxian and Lan Wangji save them and get them out of troubles. But everyone is still shouting to kill Wei Wuxian. Then they go back to Yunmeng Jiang Sect to rest for a while. By the time they arrived, they all discovered two people who tell the terrible things that Jin Guangyao did.",
runtime: 46,

},
{
date: "2019-08-07",
episode: 46,
episode_type: "standard",
title:  'Episode 46',
overview: "Jiang Cheng knows the truth about his so-called repaired golden core.",
runtime: 48,

},
{
date: "2019-08-07",
episode: 47,
episode_type: "standard",
title:  'Episode 47',
overview: "Wei Wuxian and Lan Wangji arrived in Yunping City and found out the place that Jin Guangyao bought. While they are investigating, they are captured by Jin Guangyao and being hold as hostages until he's done with his business.",
runtime: 43,

},
{
date: "2019-08-07",
episode: 48,
episode_type: "standard",
title:  'Episode 48',
overview: "Wei Wuxian and Jiang Cheng talked and everything between them is back to OK. Then Wei Wuxian learns the truth about who put a curse on Jin Zixun 16 years ago.",
runtime: 45,

},
{
date: "2019-08-07",
episode: 49,
episode_type: "standard",
title:  'Episode 49',
overview: "All 6 people including Jin Ling know the one who is truly responsible for Jin Zixuan's death. At a later time, Wei Wuxian got back his Chenqing and controls Nie Mingjue's sword spirit.",
runtime: 45,
},
{
date: "2019-08-07",
episode: 50,
episode_type: "finale",
title:  'Episode 50',
overview: "The mastermind who plans everything has appeared. He's not someone who wouldn't think he would be the one who is behind everything, including Wei Wuxian's comeback. Who would that be?",
runtime: 45,
      
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
        overview: "Agatha Harkness gathers a coven of witches and sets off down, down, down The Witches' Road.",
        seasons: [
          {
            season: 1,
            episodes: [
              {
                release: "2024-09-18",
                episode: 1,
                "episode_type": "standard",
                title: "Seekest Thou the Road",
                "overview": "In small town Westview, Detective Agnes' murder case sends her down a road that changes everything.",
                "runtime": 42,
              },
              {
                release: "2024-09-18",
                episode: 2,
                "episode_type": "standard",
                title: "Circle Sewn with Fate / Unlock Thy Hidden Gate",
                "overview": "With old foes in hot pursuit, Agatha and Teen gather a desperate coven to walk The Witches' Road.",
                "runtime": 44,
              },
              {
                release: "2024-09-25",
                episode: 3,
                "episode_type": "standard",
                title: "Through Many Miles / Of Tricks and Trials",
                "overview": "The coven faces their first perilous trial on The Witches' Road.",
                "runtime": 39,
              },
              {
                release: "2024-10-02",
                episode: 4,
                "episode_type": "standard",
                title: "If I Can't Reach You / Let My Song Teach You",
                "overview": "The coven faces their second trial on The Witches' Road.",
                "runtime": 44,
              },
              {
                release: "2024-10-09",
                episode: 5,
                "episode_type": "standard",
                title: "Darkest Hour / Wake Thy Power",
                "overview": "With enemies closing in, the coven flees under the light of a blood moon to the next ghastly trial.",
                "runtime": 32,
              },
              {
                release: "2024-10-16",
                episode: 6,
                "episode_type": "standard",
                title: "Familiar by Thy Side",
                "overview": "Familiar Teen is much more than he seems, and his connections to the rest of the coven are revealed.",
                "runtime": 50,
              },
              {
                release: "2024-10-23",
                episode: 7,
                "episode_type": "standard",
                title: "Death's Hand in Mine",
                "overview": "Those remaining suffer the hand they are dealt in the next trial.",
                "runtime": 37,
              },
              {
                release: "2024-10-30",
                episode: 8,
                "episode_type": "standard",
                title: "Follow Me My Friend / To Glory at the End",
                "overview": "The end of The Road.",
                "runtime": 49,
              },
              {
                release: "2024-10-30",
                episode: 9,
                "episode_type": "finale",
                title: "Maiden Mother Crone",
                "overview": "The truth of Agatha Harkness and The Witches' Road.",
                "runtime": 42,
              },
            ]
          }
        ]
      },
      {
        id:28,
        title: 'House Of The Dragon',
        background: '/imges/dragon.jpg',
        mediaType: 'series',
        genre: 'Action',
        overview: 'The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.',
        seasons: [
          {
            season: 1,
          episodes: [
            {
              release: "2022-08-21",
              episode: 1,
              "episode_type": "standard",
              title: "The Heirs of the Dragon",
              "overview": "Viserys hosts a tournament to celebrate the birth of his second child. Rhaenyra welcomes her uncle Daemon back to the Red Keep.",
              "runtime": 66,
            },
            {
           release: "2022-08-28",
           episode: 2,
          "episode_type": "standard",
          title: "The Rogue Prince",
          "overview": "Princess Rhaenyra dives deep into the prophecies about House Targaryen while confronting a realm that resists the idea of a woman on the Iron Throne, and Prince Daemon, embittered over being passed over as the heir to Westeros, prepares to go to war.",
          "runtime": 54,
            },
            {
             release: "2022-09-04",
             episode: 3,
            "episode_type": "standard",
            title: "Second of His Name",
            "overview": "Daemon and the Sea Snake battle the Crabfeeder. The realm celebrates Aegon's second nameday. Rhaenyra faces the prospect of marriage.",
            "runtime": 64,
            },
            {
              release: "2022-09-11",
              episode: 4,
              "episode_type": "standard",
              title: "King of the Narrow Sea",
              "overview": "Daemon returns to court after the successful completion of the battle. Princess Rhaenyra must deal with potential suitors in order to keep her line of succession.",
              "runtime": 63,
            },
            {
              release: "2022-09-18",
              episode: 5,
              "episode_type": "standard",
              title: "We Light the Way",
              "overview": "Daemon visits his wife in the Vale. Viserys and Rhaenyra broker agreements with the Valeryons. Alicent seeks the truth about the princess.",
              "runtime": 60 
            },
            {
              release: "2022-09-25",
              episode: 6,
              "episode_type": "standard",
              title: "The Princess and the Queen",
              "overview": "Ten years later. Rhaenyra navigates Alicent's continued speculation about her children, while Daemon and Laena weigh an offer in Pentos.",
              "runtime": 68 
            },
            {
              release: "2022-10-02",
              episode: 7,
              "episode_type": "standard",
              title: "Driftmark",
              "overview": "As the families gather on Driftmark for a funeral, Viserys calls for an end to infighting and Alicent demands justice.",
              "runtime": 59 
            },
            {
              release: "2022-10-09",
              episode: 8,
              "episode_type": "standard",
              title: "The Lord of the Tides",
              "overview": "Six years later. With the Driftmark succession suddenly critical, Rhaenyra attempts to strike a bargain with Rhaenys.",
              "runtime": 68 
            },
            {
              release: "2022-10-16",
              episode: 9,
              "episode_type": "standard",
              title: "The Green Council",
              "overview": "While Alicent enlists Cole and Aemond to track down Aegon, Otto gathers the great houses of Westeros to affirm their allegiance.",
              "runtime": 58 
            },
            {
              release: "2022-10-23",
              episode: 10,
              "episode_type": "finale",
              title: "The Black Queen",
              "overview": "Mourning a tragic death, Rhaenyra tries to hold the kingdom together and Daemon prepares for war.",
              "runtime": 60 
            },
          ]
          },
          {
            season: 2,
          episodes: [
            {
              release: "2024-06-16",
              episode: 1,
              "episode_type": "standard",
              title: "A Son for a Son",
              "overview": "While Rhaenyra struggles to come to terms with her son's murder, in King's Landing, Alicent grows concerned that Aegon's Small Council may lead them to an all-out war. Larys suggests Aegon needs a new Hand, and Rhaenyra arrives at a fateful decision.",
              "runtime": 59,
            },
            {
              release: "2024-06-23",
              episode: 2,
              "episode_type": "standard",
              title: "Rhaenyra the Cruel",
              "overview": "As Otto schemes to turn the public against her, Rhaenyra questions Daemon's loyalty. Meanwhile, Ser Criston Cole concocts a misguided plan for revenge.",
              "runtime": 69,
            },
            {
              release: "2024-06-30",
              episode: 3,
              "episode_type": "standard",
              title: "The Burning Mill",
              "overview": "As ancient grudges resurface, Rhaenys suggests that Alicent may see reason while the men around her seek bloodshed. Ser Criston proposes a bold scheme. Daemon arrives at Harrenhal to raise an army for the Blacks.",
              "runtime": 67,
            },
            {
              release: "2024-07-07",
              episode: 4,
              "episode_type": "standard",
              title: "The Red Dragon and the Gold",
              "overview": "In Rhaenyra's absence and with no word from Daemon at Harrenhal, Rhaenys tries to keep the peace on the Black Council as Cole mounts a campaign into the Crownlands. In King's Landing, Aemond continues to undermine Aegon's fragile hold on authority.",
              "runtime": 56,
            },
            {
              release: "2024-07-14",
              episode: 5,
              "episode_type": "standard",
              title: "Regent",
              "overview": "Amid whispers of bad omens, the Greens consider how to fill a void on Aegon's Council, Jacaerys sets out on a rogue mission to strike a deal, and Daemon enlists Lord Willem Blackwood to help persuade the Brackens to bend the knee.",
              "runtime": 63,
            },
            {
              release: "2024-07-21",
              episode: 6,
              "episode_type": "standard",
              title: "Smallfolk",
              "overview": "With few options left, Rhaenyra summons a trusted knight for a risky venture and plots with Mysaria to catalyze the smallfolk. Meanwhile, Daemon's unease grows, and Aemond takes steps to reshape the Green Council.",
              "runtime": 68,
            },
            {
              release: "2024-07-28",
              episode: 7,
              "episode_type": "standard",
              title: "The Red Sowing",
              "overview": "As Rhaenyra looks to gain an advantage by unusual means, Daemon pressures a young liege lord to raise up his bannermen.",
              "runtime": 64,
            },
            {
              release: "2024-08-04",
              episode: 8,
              "episode_type": "finale",
              title: "The Queen Who Ever Was",
              "overview": "As Aemond becomes more volatile, Larys plots an escape, and Alicent grows more concerned about Helaena's safety. Flush with new power, Rhaenyra looks to press her advantage.",
              "runtime": 70,
            },
          ]
          }
        ]
      },
      {
       id: 29,
       title: 'The Boondocks',
       background: '/imges/boon.jpg',
       mediaType: 'series',
       overview: "Marilyn 'Madam' DeVille is at the top of her game in the Atlanta nightclub industry, and she won't let anyone or anything stand her in way as she rules a crew of male exotic dancers.",
       seasons: [
        {
          season: 1,
          episodes: [
            {
              release: "2005-11-06",
              episode: 1,
              "episode_type": "standard",
              title: "The Garden Party",
              "overview": "When the owner of Granddad's house invites Granddad and the kids to his garden party, Huey tries to start trouble by saying Jesus was black and comparing Ronald Regan to the devil. Meanwhile, Riley and the owner's grandson (a soldier back from Iraq) play with guns and Granddad runs into the self-loathing black butler Uncle Rukus.",
                           "runtime": 22,
            },
            {
              release: "2005-11-13",
              episode: 2,
              "episode_type": "standard",
              title: "The Trial of Robert Kelly",
              "overview": "When the trial of R&B star R. Kelly comes to town and Tom Dubois is the ADA, Huey and Riley are on opposing sides of the hot-button 'underage peeing' issue. Meanwhile, Granddad and Uncle Ruckus argue about white people during a game of checkers.",
                           "runtime": 22,
            },
            {
              release: "2005-11-20",
              episode: 3,
              "episode_type": "standard",
              title: "Guess Hoe's Coming to Dinner",
              "overview": "Huey and Riley try to convince Grandad that his new girlfriend Cristal (like the champagne) is actually a prostitute. Of course, Grandad doesn't believe them, even when she spends all his money. But when A Pimp Named Slickback shows up, the truth is revealed.",
                           "runtime": 22,
            },
            {
              release: "2005-11-27",
              episode: 4,
              "episode_type": "standard",
              title: "Granddad's Fight",
              "overview": "Grandad and Colonel Stinkmeaner have a beef. One man's blind. One man's feeble. Both are really, really old. Let 'The Slugfest In Woodcrest' commence!",
                           "runtime": 22,
            },
            {
              release: "2005-12-04",
              episode: 5,
              "episode_type": "standard",
              title: "A Date with the Health Inspector",
              "overview": "District Attorney and law-abiding citizen Tom Dubois fits the description of the elusive 'X-Box Killer' and is arrested. Huey has to find the real killer before Tom is shipped off to 'real' prison where he will most assuredly become someone's girlfriend.",
              "runtime": 22,
            },
            {
              release: "2005-12-11",
              episode: 6,
              "episode_type": "standard",
              title: "The Story of Gangstalicious",
              "overview": "Riley's favorite rapper, Gangstalicious, is shot and hospitalized in Woodcrest. When Riley goes to visit the rapper, he finds more than he anticipated ... like maybe rappers that make songs like Thuggin' Luv aren't necessarily as tough as they seem. Go figure.",
              "runtime": 22,
            },
            {
              release: "2005-12-18",
              episode: 7,
              "episode_type": "standard",
              title: "A Huey Freeman Christmas",
              "overview": "A well meaning teacher offers Huey the chance to direct the school Christmas play, and Huey decides to release his vision to the world: 'The Adventures of Black Jesus.'",
                           "runtime": 22,
            },
            {
              release: "2006-01-08",
              episode: 8,
              "episode_type": "standard",
              title: "The Real",
              "overview": "While Riley is busy convincing two reality shows that Granddad's blind and running a homeless shelter, Huey is being shadowed by a secret government agent. But is he real?",
                           "runtime": 22,
            },
            {
              release: "2006-01-15",
              episode: 9,
              "episode_type": "standard",
              title: "Return of the King",
              "overview": "When Martin Luther King Jr. comes out of a coma after 32 years and finds himself thrust into the 21st and life in the post 'September 11th' lunacy, his 'turn the other cheek' philosophy quickly takes him from beloved national hero to dispised terrorist sympathizer.",
                           "runtime": 22,
            },
            {
              release: "2006-01-22",
              episode: 10,
              "episode_type": "standard",
              title: "The Itis",
              "overview": "Grandad opens 'The Itis', the only soul food restaurant in Woodcrest. White people didn't expect it. They also didn't expect high cholesterol, heart disease, and obesity.",
                           "runtime": 22,
            },
            {
              release: "2006-02-12",
              episode: 11,
              "episode_type": "standard",
              title: "Let's Nab Oprah",
              "overview": "Huey has to stop Riley and a small gang of misfit idiots from nabbing the talk show deity, Oprah.",
                           "runtime": 22,
            },
            {
              release: "2006-02-19",
              episode: 12,
              "episode_type": "standard",
              title: "Riley Wuz Here",
              "overview": "When Riley's affinity for grafitti goes too far, Grandad sends him to an art teacher that actually encourages him to do grafitti, only painting murals instead. Meanwhile, Huey discovers a black woman died from watching too much black TV, and decides to watch black TV for 2 weeks to see if that was the cause.",
                           "runtime": 22,
            },
            {
              release: "2006-03-05",
              episode: 13,
              "episode_type": "standard",
              title: "Wingmen",
              "overview": "When Grandad's oldest friend, and possibly his worst friend, Moe, dies, the Freemans go back home and Grandad wants the possession Moe left him. Meanwhile, Huey is eager to see his friend again but both Grandad and Huey both discover to put the past behind them and focus on the future.",
                           "runtime": 22,
            },
            {
              release: "2006-03-12",
              episode: 14,
              "episode_type": "standard",
              title: "The Block is Hot",
              "overview": "Its February, and its record temperatures of 90 degrees. Luckily, Jazmine has her lemonade stand open, and does pretty well. Her success catches the eye of corporate tycoon Ed Wuncler. Despite several warnings from Huey, Jazmine then learns the true meaning of 'capitalism' when Wuncler decides to buy the stand.",
                           "runtime": 22,
            },
            {
              release: "2006-03-19",
              episode: 15,
              "episode_type": "finale",
              title: "The Passion of Reverend Ruckus",
              "overview": "While Ruckus spreads the word of White Jesus to get into White Heaven, Huey desperately tries to save his friend from death row.",
                           "runtime": 22
            }
          ]
        },
        {
          season: 2,
          episodes: [
            {
              release: "2007-10-08",
              episode: 1,
              "episode_type": "stanard",
              title: "...Or Die Trying",
              "overview": "Granddad, Huey, Riley and Jazmine must avoid guards after they sneak in to a theatre to watch Soul Plane 2: The Blackjacking.",
               "runtime": 22,
            },
            {
              release: "2007-10-15",
              episode: 2,
              "episode_type": "standad",
               title: "Tom, Sarah and Usher",
              "overview": "While on a date with Tom Dubois, Sarah Dubois meets the singing sensation, Usher. Sarah starts being obsessed with Usher, and Tom begins to think Sarah is cheating on him. Sarah kicks Tom out of the house and Tom moves in with the Freemans. A pimp Named Slick Back returns in this episode to try to help Tom get Sarah back.",
              "runtime": 22,
            },
            {
              release: "2007-10-22",
              episode: 3,
              "episode_type": "stanard",
              title: "Thank You for Not Snitching",
              "overview": "Two men are invading homes, and Riley and Granddad are refusing to speak to the police. It gets worse when Granddad's car, Dorothy, gets stolen by the robbers. If Riley and Granddad still refuse, worse things may be in store.",
              "runtime": 22,
            },
            {
              release: "2007-10-29",
              episode: 4,
              "episode_type": "stanard",         
              title: "Stinkmeaner Strikes Back",
              "overview": "Huey has a dream of Stinkmeaner and Granddad says that he was a menace and he sent him to hell like he deserves. Stinkmeaner's spirit later inhabits Tom Dubois' body and goes looking for revenge against Granddad. Huey must stop him from killing Granddad.",
              "runtime": 22,
              },
              {
                release: "2007-11-05",
                episode: 5,
                "episode_type": "standard",
                title: "The Story of Thugnificent",
                "overview": "The infamous rapper Thugnificent moves to the neighbourhood with his friends Macktastic and Flonominal, eventually leading to Granddad becoming annoyed with his new neighbours. Their feud inspires Thugnificent to create a diss-track called 'Eff Granddad'.",
                 "runtime": 22,
              },
              {
                release: "2007-11-19",
                episode: 6,
                "episode_type": "standard",       
                title: "Attack of the Killer Kung-Fu Wolf Bitch",
                "overview": "After many failed attempts at online dating, Granddad finally meets a beautiful woman named Luna… who just happens to be a psycho.",
              "runtime": 22,
              },
              {
                release: "2007-11-26",
                episode: 7,
                "episode_type": "standard",
                title: "Shinin'",
                "overview": "Riley joins Thugnificent's Lethal Injection crew. Meanwhile, a local bully steals Riley's prized chain.",
              "runtime": 22,
              },
              {
                release: "2007-12-03",
                episode: 8,
                "episode_type": "standard",
                title: "Ballin'",
                "overview": "Riley learns a lesson in good sportsmanship after he joins a basketball team.",
              "runtime": 22,
              },
              {
                release: "2007-12-10",
                episode: 9,
                "episode_type": "standard",
                title: "Invasion of the Katrinians",
                "overview": "Jericho Freeman, Granddad's cousin, and his family, who were displaced by Hurricane Katrina, arrive at the Freeman's home looking for a place to stay. Granddad reluctantly allows the family to stay, but is soon trying to get rid of them.",
              "runtime": 22,
              },
              {
                release: "2007-12-17",
                episode: 10,
                "episode_type": "standard",
                title: "Home Alone",
                "overview": "Granddad takes a vacation, leaving the boys alone, but just who is in charge?",
                "runtime": 22,
                },
                {
                  release: "2008-01-21",
                  episode: 11,
                  "episode_type": "standard",                
                  title: "The S-Word",
                  "overview": "A teacher calls Riley a 'nigga' in class, causing Robert to decide that he wants to sue for restitution.",
                  "runtime": 22,
                  },
                  {
                    release: "2008-01-28",
                    episode: 12,
                    "episode_type": "standard",
                    title: "The Story of Catcher Freeman",
                    "overview": "Huey and Riley listen to different perspectives on the story of their ancestor Catcher Freeman.",
                    "runtime": 22,
                    },
                    {
                      release: "2008-02-04",
                      episode: 13,
                      "episode_type": "standard",
                      title: "The Story of Gangstalicious: Part 2",
                      "overview": "Granddad worries about Riley's sexuality when he notices that he begins to dress and act like 'in-the-closet' rapper, Gangstalicious.",
                      "runtime": 22,
                    },
                    {
                      release: "2008-03-16",
                      episode: 14,
                      "episode_type": "standard",
                   
                      title: "The Hunger Strike",
                      "overview": "Huey goes on a hunger strike in a boycott of BET, and receives some high-profile support from Reverend Rollo Goodlove, who may be more interested in his own self-promotion than any good intentions.",
                      
  "runtime": 22,
                    },
                    {
                      release: "2008-03-23",
                      episode: 15,
                      "episode_type": "finale",
                   
                      title: "The Uncle Ruckus Reality Show",
                      "overview": "In the wake of Huey's failed protest against the network, BET's Harvard-educated programming chief, Weggie Rudlin, is moving ahead with his promise to create The Uncle Ruckus Reality Show.",
                      
  "runtime": 22,
                    },
          ]
        },
        {
          season: 3,
          episodes: [
            {
              release: "2010-05-02",
              episode: 1,
              "episode_type": "standard",
              
              title: "It's a Black President, Huey Freeman",
              "overview": "The Freemans are filmed for a German documentary about the 2008 election of Barack Obama in the Season 3 premiere.",
              
              "runtime": 22,
            },
            {
              release: "2010-05-09",
              episode: 2,
              "episode_type": "standard",
              
              title: "Bitches to Rags",
              "overview": "When his new album tanks, Thugnificent is faced with the horror of getting a real job.",
              
              "runtime": 22,
            },
            {
              release: "2010-05-16",
              episode: 3,
              "episode_type": "standard",
              
              title: "The Red Ball",
              "overview": "Kickball legend Huey Freeman returns after a self-imposed exile from the game.",
              
              "runtime": 22,
            },
            {
              release: "2010-05-23",
              episode: 4,
              "episode_type": "standard",
              
              title: "The Story of Jimmy Rebel",
              "overview": "Uncle Ruckus has long idolized Jimmy Rebel, a popular racist country singer based on the infamous Johnny Reb, a.k.a. Pee Wee Trahan. So much did Jimmy Rebel's music influence him that he eventually sends off recordings of his own racist tunes to the man, and is faced with a dilemma when Jimmy shows up on his doorstep. Uncle Ruckus' legendary status as a black-hating racist thus runs up against the slight problem of his negritude.",
              
              "runtime": 22,
            },
            {
              release: "2010-05-30",
              episode: 5,
              "episode_type": "standard",
              
              title: "Stinkmeaner 3: The Hateocracy",
              "overview": "The Freemans are in trouble when Stinkmeaner's gang decide to come after them in retaliation for his death",
              
              "runtime": 22,
            },
            {
              release: "2010-06-06",
              episode: 6,
              "episode_type": "standard",
              
              title: "Smokin with Cigarettes",
              "overview": "Riley becomes friends with a sociopathic boy named Lamilton, who wants to do nothing more than hurt people, cause mayhem, and smoke cigarettes.",
              
              "runtime": 22,
            },
            {
              release: "2010-06-13",
              episode: 7,
              "episode_type": "standard",
              
              title: "The Fundraiser",
              "overview": "Riley organizes a fundraiser with Cindy McPhearson and other kids from Woodcrest.",
              "runtime": 22,
              },
              {
                release: "2010-06-20",
                episode: 8,
                "episode_type": "standard",   
                title: "Pause",
                "overview": "Granddad is cast as the leading man by mega-superstar of stage and screen, Winston Jerome. But when the theater group turns out to be a homoerotic evangelical cult, it's up to Huey and Riley to put a pause to it.",
                "runtime": 22
              },
              {
                release: "2010-06-27",
                episode: 9,
                "episode_type": "standard",
                title: "A Date with the Booty Warrior",
                "overview": "Having conquered his fear of prison rape, Tom volunteers to lead Huey, Riley, and some classmates on a trip to jail as part of a Scared Stiff program. But when a riot breaks out, Tom has to get the kids, and his delicate backside, out of jail in one piece.",
                "runtime": 22,
              },
              {
                release: "2010-07-04",
                episode: 10,
                "episode_type": "standard",
                
                title: "The Story of Lando Freeman",
                "overview": "There's a new handyman in the neighborhood undercutting Uncle Ruckus... which is all good for Granddad and his garden until the man claims to be his long lost son, Lando. Will Granddad take responsibility and be a father to his child? Not without a talk show paternity test.",
                
                "runtime": 22,
              },
              {
                release: "2010-07-11",
                episode: 11,
                "episode_type": "standard",
                
                title: "Lovely Ebony Brown",
                "overview": "Grandad meets a young black woman who asks him out on a date, and the only person who can spoil Grandad's new romance, is Grandad.",
                
                "runtime": 22,
              },
              {
                release: "2010-07-18",
                episode: 12,
                "episode_type": "standard",
                
                title: "Mr. Medicinal",
                "overview": "After a checkup, a doctor warns Granddad that he could die any day if he doesn't get his stress levels down. Not wanting to become dependent on pills, he decides to take Thugnificent's suggestion and turns to marijuana.",
                
                "runtime": 22,
              },
              {
                release: "2010-08-01",
                episode: 13,
                "episode_type": "standard",
                
                title: "The Fried Chicken Flu",
                "overview": "When a chicken franchise run out of its newest recipe introduction, things go from bad to worse when a viral outbreak is linked to the same chicken. Thankfully, Huey has prepared a survival outline in just such an emergency, but it's all threatened when no one can seem to stick to the simple plan.",
                
                "runtime": 22,
              }, 
              {
                release: "2010-08-08",
                episode: 14,
                "episode_type": "standard",
                
                title: "The Color Ruckus",
                "overview": "On a final visit to Woodcrest, Ruckus's terminally ill Nana wants to die in Robert Freeman's house.",
                
                "runtime": 22,
              },
              {
                release: "2010-08-15",
                episode: 15,
                "episode_type": "finale", 
                title: "It's Goin' Down",
                "overview": "A terror attack near Woodcrest is imminent, and retired domestic terrorist Huey Freeman is the main suspect. With super-agent Jack Flowers on his tail and Ed and Rummy on the loose, can anyone save the day?",  
                "runtime": 22,
              },
          ]
        },
        {
          season: 4,
          episodes: [
            {
              release: "2014-04-21",
              episode: 1,
              "episode_type": "standard",
              title: "Pretty Boy Flizzy",
              "overview": "Pretty Boy Flizzy is arrested for armed robbery while in town, and Tom agrees to be his lawyer.",
              "runtime": 22,
            },
            {
              release: "2014-04-28",
              episode: 2,
              "episode_type": "standard",
              title: "Good Times",
              "overview": "Eddie Wuncler has unique ideas about how Granddad can repay the millions he owes on his house.",
              "runtime": 22,
            },
            {
              release: "2014-05-05",
              episode: 3,
              "episode_type": "standard",
              title: "Breaking Granddad",
              "overview": "The Freemans sell an explosive hair product and contend with the black market of the hair-care industry.",
                           "runtime": 22,
            },
            {
              release: "2014-05-12",
              episode: 4,
              "episode_type": "standar",
              title: "Early Bird Special",
              "overview": "Granddad is hired by pimps to escort lonely women at a nursing home.",
                           "runtime": 22
              },
              {
                release: "2014-05-19",
                episode: 5,
                "episode_type": "standard",
                title: "Freedom Ride or Die",
                "overview": "A young Granddad is held as an unwilling freedom rider on a trip through the racist South.",
                               "runtime": 22,
              },

              {
                release: "2014-05-26",
                episode: 6,
                "episode_type": "standard",
                title: "Granddad Dates a Kardashian",
                "overview": "Granddad begins dating a long-lost Kardashian sister and winds up on a reality show.",
                               "runtime": 22,},
                {
                  release: "2014-06-02",
                  episode: 7,
                  "episode_type": "standard",
                  title: "Freedomland",
                  "overview": "The Freemans get trapped in a slavery theme park.",
                                   "runtime": 22,
                },
                {
                  release: "2014-06-09",
                  episode: 8,
                  "episode_type": "standard",
                  title: "I Dream of Siri",
                  "overview": "Grandpa's personal assistant program on his phone becomes obsessed with him.",
                                   "runtime": 22,
                },
                {
                  release: "2014-06-16",
                  episode: 9,
                  "episode_type": "standard",
                  title: "Stinkmeaner: Begun the Clone War Has",
                  "overview": "Stinkmeaner becomes a celebrity after a video of his fight with Granddad goes viral.",
                                   "runtime": 22,
                },
                {
                  release: "2014-06-23",
                  episode: 10,
                  "episode_type": "finale",
                  title :"The New Black",
                  "overview": "Riley's homophobic slur ends him in hot water with gay rights groups.",
                                   "runtime": 22,
                },
          ]
        }

     
     
       ]
      },
      {
        id:15576,
        title: 'Kevin Hart',
        background: 'moana',
        mediaType: 'Series',
        seasons: [

        ]
      },
      {
        id: 30,
        title: 'All The Queens"s Men',
        background: '/imges/queen1.jpg',
        mediaType: 'series',
        overview: 'Marilyn "Madam" DeVille is at the top of her game in the Atlanta nightclub industry, and she won"t let anyone or anything stand her in way as she rules a crew of male exotic dancers.',
        seasons: [
          {
            season: 1,
            episodes: [
              {
                release: "2021-09-09",
                episode: 1,
                "episode_type": "standard",
                title: "The Pilot",
                "overview": "Madam Devile, owner of Club Eden, runs into trouble when her leading shareholder threatens to sell the male exotic club. This maneater makes it known that no one will get in her way. Amp, her nephew released from prison, seeks help to get his life back.",
                "runtime": null,
              },
              {
                release: "2021-09-09",
                episode: 2,
                "episode_type": "standard",
                title: "Silent Partner",
                "overview": "Allen's blood lands in the hands of Madam as she becomes the prime suspect for Detective Davis. Amp struggles to get his life back as he encounters a bizarre roommate and the disgruntled keeper of the halfway house on a mission to send Amp back to prison.",
                "runtime": null,
              },
              {
                release: "2021-09-09",
                episode: 3,
                "episode_type": "standard",
                title: "Blackmail Baby",
                "overview": "Madam expands her queendom despite the complex situation with Allen. A new vigilante hides in the shadows with his sights set on the queen, whose dealings cost her loved ones safety. Amp finally works at the club, but is suspicious about his roommate.",
                "runtime": null,
              },
              {
                release: "2021-09-09",
                episode: 3,
                "episode_type": "standard",
                title: "Blackmail Baby",
                "overview": "Madam expands her queendom despite the complex situation with Allen. A new vigilante hides in the shadows with his sights set on the queen, whose dealings cost her loved ones safety. Amp finally works at the club, but is suspicious about his roommate.",
                "runtime": null,
              },
              {
                release: "2021-09-09",
                episode: 5,
                "episode_type": "standard",
                title: "Dirty Dancing",
                "overview": "Madam has no compassion for Judge Ross, but opens up to the angst of Shemika's challenges. Trouble continues to find Amp, so he takes a chance on Amateur Night in hopes of a fresh start. Allen's murder is still unsolved, and Madam is on the suspect list.",
                "runtime": null,
              },
              {
                release: "2021-09-09",
                episode: 6,
                "episode_type": "standard",
                title: "When the Family Feuds",
                "overview": "Madam gets control of her father but not without a fight. Amp hits the stage at amateur night and is a hit with the ladies and Dime. Shemika is in trouble and Madam sends back up, but things are not what she thinks.",
                "runtime": null,
              },
              {
                release: "2021-09-09",
                episode: 7,
                "episode_type": "standard",
                title: "Kryptonite",
                "overview": "Shemika is a cop, but Madam will do whatever it takes. Amp and Dime get closer, and he keeps his new path private from his roommate. Tina is up to no good and Doc is in the middle of a bad love affair and new-found info that will change his life forever.",
                "runtime": null,
              },
              {
                release: "2021-09-09",
                episode: 8,
                "episode_type": "standard",
                title: "The Ringmaster",
                "overview": "Madam discovers that she is being investigated by the GBI and her father's past comes crashing at the doorsteps of the club. Red ultimately reveals his true intentions and Amp is the prime target, but he isn't the only one after him.",
                "runtime": null,
              },
              {
                release: "2021-09-09",
                episode: 9,
                "episode_type": "standard",
                title: "Balls to the Wall",
                "overview": "Madam is all business until family is involved, making it known they are not to be messed with. Things heat up with Dime and Amp, as he contemplates his new life. Doc tries to make things better with his widowed mistress, but for Tina, things take a turn.",
                "runtime": null,
              },
              {
                release: "2021-09-09",
                episode: 10,
                "episode_type": "finale",
                title: "Everybody vs. Madam",
                "overview": "Things come crumbling down when Tina gets in Doc's way and Blue becomes prime suspect number one. Red is not taking no for an answer and Dime and the club are his target. Kat has had enough of Madam and Amp pays the ultimate price.",
                "runtime": null,
              }
            ]
          },
          {
            season: 2,
            episodes: [
             {
               release: "2022-07-14",
               episode: 1,
               "episode_type": "standard",
               title: "Amplified",
               "overview": "AMP fights for his life, Madam pays Judge Ross a visit, Doc gets unexpected news about Teresa, a woman from Fuego's past shows up at Eden, and Madam follows the trail of her missing money.",
                "runtime": 50,
             },
             {
               release: "2022-07-14",
               episode: 2,
               "episode_type": "standard",
               title: "True Blue",
               "overview": "Midnight just might make the biggest mistake of his life when considering a dangerous offer. Meanwhile, Madam is proving to be less than indestructible as things take a turn for the worst for the men and women of Eden.",
                "runtime": 45,
             },
             {
               release: "2022-07-21",
               episode: 3,
               "episode_type": "standard",
               title: "Cash of the Titans",
               "overview": "The Concierge introduces Madam to the ultimate affluent circle and she allows him to get closer than most. Meanwhile the Eden dancers are at odds with each other and Amp's medical status is up in the air.",
                "runtime": 50,
             },
             {
               release: "2022-07-21",
               episode: 4,
               "episode_type": "standard",
               title: "Mr. and Mrs. Money/Kill Bill",
               "overview": "Doc and Midnight are at odds with each other and Madam must play mediator while Babyface finds his own way to make some extra cash with the help of an amateur dancer.",
                "runtime": 54,
             },
             {
               release: "2022-07-28",
               episode: 5,
               "episode_type": "standard",
               title: "Bait and Switch",
               "overview": "Madam enters into a deadly round of negotiations, AMP opens up to Dime, Madam tries to get Blue's mind off of Kat, and Babyface finds himself on the outside looking in with the Tandys.",
                "runtime": 40,
             },
             {
               release: "2022-07-28",
               episode: 6,
               "episode_type": "standard",
               title: "A Million Ways to Die",
               "overview": "Madam learns half of her money is still missing, AMP is forced to face the truth, Babyface demands his cut of Rayshon's earnings, and Dime makes a startling discovery.",
                "runtime": 40,
             },
             {
               release: "2022-08-04",
               episode: 7,
               "episode_type": "standard",
               title: "Pimpin' Ain't Easy",
               "overview": "Ms. Tandy makes Rayshon an offer, the Concierge gives Madam some unsolicited advice, Carla sets a plan in motion, Dime confides in Blue, and Madam gets unsettling news.",
                "runtime": 40,
             },
             {
               release: "2022-08-04",
               episode: 8,
               "episode_type": "standard",
               title: "Big Momma Thang",
               "overview": "Madam sets out to collect a gambling debt, Ms. Tandy encourages Rayshon to take back what's his, an amateur dancer makes an impression at Eden, and Blue and Madam compare notes on AMP.",
                "runtime": 40,
             },
             {
               release: "2022-08-11",
               episode: 9,
               "episode_type": "standard",
               title: "C.R.E.A.M.",
               "overview": "AMP pleads his case to Madam, Babyface loses his biggest supporter, Rayshon makes a desperate call for help, Doc confides in Midnight, and Madam pays Redneck a visit at the hospital.",
                "runtime": 40,
             },
             {
               release: "2022-08-11",
               episode: 10,
               "episode_type": "standard",
               title: "Bombs Over Buckhead",
               "overview": "Madam and Tommy call on the Tandys, Carla cozies up to one of Madam's allies, Blue tries to fix things between AMP and Madam, and Doc gets troubling news about Teresa and her baby.",
                "runtime": 40,
             },
            ]
             
           },
          {
            season: 3,
            episodes: [
              {
                release: "2023-07-20",
                episode: 1,
                "episode_type": "standard",
                title: "Deep Cover",
                "overview": "Amp begins to spiral out of control while thinking of ways to rectify his shower mishap;Madam comes up against a formidable opponent and begins to use her power to turn the tides her way.",
                 "runtime": null,
              },
              {
                release: "2023-07-20",
                episode: 2,
                "episode_type": "standard",
                title: "Daddy's Girl",
                "overview": "Trouble goes to great lengths to prove her loyalty; Madam receives unfiltered advice from her father after one of her tantrums lands her in hot water.",
                 "runtime": null,
              },
              {
                release: "2023-07-27",
                episode: 3,
                "episode_type": "standard",
                title: "No Way Out",
                "overview": "Nurse Johnson is caught in a compromising position, Casanova's undercover operation hits a snag, Trouble feels unappreciated, and Big D eagerly pursues Dime despite AMP's threats.",
                 "runtime": null,
              },
              {
                release: "2023-08-03",
                episode: 4,
                "episode_type": "standard",
                title: "The Choice is Yours",
                "overview": "AMP advises Fuego to stay in line, Madam gets a lead on her stolen bills, Casanova takes a dangerous risk, and Trouble must decide how far she'll go to prove herself to Madam.",
                 "runtime": null,
              },
              {
                release: "2023-08-10",
                episode: 5,
                "episode_type": "standard",
                title: "Lost and Found",
                "overview": "Trouble learns there are lines she's unwilling to cross to make it to the main stage, AMP is jealous of Dime's interest in Big D, and Madam confronts Midnight's suspicious client.",
                 "runtime": null,
              },
              {
                release: "2023-08-17",
                episode: 6,
                "episode_type": "standard",
                title: "Never Scared",
                "overview": "Big D makes a desperate bid to convince Tommy he's not shady, Detective Davis brings interrogation tactics to the bedroom, and Midnight takes Babyface to task for his treatment of Rayshon.",
                 "runtime": null,
              },
              {
                release: "2023-08-24",
                episode: 7,
                "episode_type": "standard",
                title: "Weakness",
                "overview": "Detective Davis must find a way out when Madam catches her in a sticky situation. Meanwhile, one of Madam's weaknesses gets exposed and catches her by surprise.",
                 "runtime": null,
              },
              {
                release: "2023-08-31",
                episode: 8,
                "episode_type": "standard",
                title: "Never Bluff",
                "overview": "Davis uses her intel as leverage with Madam, Champ and Trouble take matters into their own hands as Rayshon recovers his money from Tandy, and Fernando reveals a sinister plan.",
                 "runtime": null,
              },
              {
                release: "2024-01-11",
                episode: 9,
                "episode_type": "standard",
                title: "Eye to Eye",
                "overview": "Trouble and Champ pull off a robbery but fear Rayshon will be a weak link, Madam faces a devastating loss, and DA Rodds believes she finally has enough evidence to end Madam's reign.",
                 "runtime": 43,
              },
              {
                release: "2024-01-11",
                episode: 10,
                "episode_type": "standard",
                title: "Nowhere to Hide",
                "overview": "Detective Davis tips off Madam about the DA's new evidence, Tandy is determined to track down her stolen money, and Madam searches for the nurse responsible for monitoring her father.",
                 "runtime": null,
              },
              {
                release: "2024-01-18",
                episode: 11,
                "episode_type": "standard",
                title: "The Ultimate Price",
                "overview": "Madam tracks down the nurse who was supposed to take care of her father when she finds out some lifechanging news. Trouble and Champ are exposed for robbing Ms. Tandy and find out that the money they stole is now missing. El Fuego may be the weak link in Madam's ranks as he deals with the death of his ex and the aftermath. And Madam teaches Big D a lesson he will never forget.",
                 "runtime": 43,
              },
              {
                release: "2024-01-25",
                episode: 12,
                "episode_type": "standard",
                title: "The Crossroads",
                "overview": "The funeral for Madam's father begins and The Concierge makes sure to pay his respects in a way that Madam and her guests will never forget.",
                 "runtime": null,
              },
              {
                release: "2024-02-01",
                episode: 13,
                "episode_type": "standard",
                title: "I Got Five on It",
                "overview": "Madam aims high and tries to get control of the mayor's office by endorsing a new candidate.",
                 "runtime": null,
              },
              {
                release: "2024-02-08",
                episode: 14,
                "episode_type": "standard",
                title: "Deja Vu",
                "overview": "Madam finds herself at war with a deadly enemy, and El Fuego is on edge after a clear warning sign is sent his way.",
                 "runtime": null,
              },
              {
                release: "2024-02-15",
                episode: 15,
                "episode_type": "standard",
                title: "Caught Slippin",
                "overview": "Madam dips her toes into politics and finds a new puppet to do her dirty work; Trouble and Champ find themselves in another dangerous situation; Midnight questions Doc's loyalty.",
                 "runtime": null,
              },
              {
                release: "2024-02-22",
                episode: 16,
                "episode_type": "standard",
                title: "Check Mate",
                "overview": "Big D comes to the defense of Trouble and Champ, but his heroic moment is overshadowed by a brawl with Amp; Madam has a difficult decision to make.",
                 "runtime": null,
              },
            ]
          },
         {
          season: 4,
          episodes: [
            {
              release: "2024-11-28",
              episode: 1,
              "episode_type": "standard",
              title: "Episode 1",
              "overview": "",
              "runtime": 'nul' ,
            },
            {
              release: "2024-12-05",
              episode: 2,
              "episode_type": "standard",
              title: "Episode 2",
              "overview": "",
              "runtime": 'null',
            },
            {
              release: "2024-12-12",
              episode: 3,
              "episode_type": "standard",
              "id": 5796642,
              title: "Episode 3",
              "overview": "",
              "runtime": 'nul' ,
            },
            {
              release: "2024-12-19",
              episode: 4,
              "episode_type": "standard",
              title: "Episode 4",
              "overview": "",
              "runtime": 'null',
            },
            {
              release: "2024-12-26",
              episode: 5,
              "episode_type": "standard",
              title: "Episode 5",
              "overview": "",
              "runtime": null,
            },
            {
              release: "2025-01-02",
              episode: 6,
              "episode_type": "standard",
              title: "Episode 6",
              "overview": "",
              "runtime": null,
            },
            {
              release: "2025-01-09",
              episode: 7,
              "episode_type": "standard",
              title: "Episode 7",
              "overview": "",
              "runtime": null,
            },
            {
              release: "2025-01-16",
              episode: 8,
              "episode_type": "standard",
              title: "Episode 8",
              "overview": "",
              "runtime": null,
            },
          ]
         } 
        ]
      }
    
    ]
    var genreData = { 
      genres: [
        { id:'Action', name: "Action" }, 
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" }, 
        { id: 99, name: "Dory" },
          { id: 14, name: "Fantasy" }, 
          { id: 36, name: "History" }, 
          { id: 10402, name: "Music" }, 
          { id: 10749, name: "Romance" },
            { id: 10770, name: "TV Movie" }, 
           { id: 10752, namee: "War" }, 
            { id: 37,name: "Western" }
      ]
    }
  var discover = [
      {
    adult: false,
    background: "/imges/venom1.jpg",
    id: 21,
    original_language: "en",
    overview: "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
    popularity: 3401.148,
    release: "2024-10-22",
    title: "Venom: The Last Dance",
    genre: [
      16
      
      ],
    
      },
      {
    adult: false,
    backdrop_path: "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
    genre : 'Animation, Science Fiction,  Family',
    id: 2,
    original_language: "en",
    overview: "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
   background: '/imges/wildRobot.jpg',
    release: "2024-09-12",
    title: "The Wild Robot",
    video: false,
    vote_average: 8.471,
    vote_count: 3031
      },
      {
    genre: 'Horror,Thriller, Mystery',
    id: 3,
    original_language: "en",
    overview: "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
    popularity: 1968.338,
   background: '/imges/terrifer.jpg',
    release: "2024-10-09",
    title: "Terrifier 3",
    video: false,
    vote_average: 6.938,
    vote_count: 1070
      },
      {
    adult: false,
    background: "/imges/gladiator2.jpg",
    genre: 'Action,Adventure',
    original_language: "en",
    overview: "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its peop",
    release: "2024-11-13",
    title: "Gladiator II",
    video: false,
    vote_average: 6.81,
    vote_count: 585
      },
      {
    adult: false,
    backdrop_path: "/iR79ciqhtaZ9BE7YFA1HpCHQgX4.jpg",
    genre: [
      'Horror',
      9648
      ],
    original_language: "en",
    
  overview: "About to embark on a new world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.",
    popularity: 2324.374,
   background: "/imges/smile2.jpg",
    release: "2024-10-16",
    title: "Smile 2",
    video: false,
    vote_average: 6.9,
    vote_count: 563
      },
      {
    adult: false,
    backdrop_path: "/2fxnTXr8NwyTFkunkimJkGkhq",
    genre:  'Drama, Action',
    original_language: "es",
    overview: "When a kind of rabies that transforms people into aggressive creatures spreads across the planet, Manel isolates himself at home with his cat, relying on his wits to survive; but soon they must go out in search of food, by land and by sea, dodging many dangers.",
    popularity: 1556.289,
   background: "/imges/z.jpg",
    release: "2024-10-04",
    title: "Apocalypse Z: The Beginning of the End",
    video: false,
    vote_average: 6.76,
    vote_count: 529
      },
      {
    adult: false,
    backdrop_path: "/kwXycPsLA6SV3KUOagn343TtMOf.jpg",
    genre: 'Action, Science Fiction, Thriller',
    id: 791042,
    original_language: "en",
       overview: "After witnessing his girlfriend's murder, a man risks everything - including reality itself - to discover the truth.",
    popularity: 1437.109,
   background: "/imges/levels.jpg",
    release: "2024-11-01",
    title: "Levels",
      },

      ]
 app.get('/', function(req,res){
  res.json(movieDatas)
 })
    
app.get('/multi', function(req,res){
    const multi = ([...movieDatas, ...series]);
    multi.sort((a,b) => a.id - b.id);
    res.json(multi);
});

app.get('/movie', function(req,res){
  res.json(movieDatas)
});

app.get('/movie/:movieId', function(req,res){
  const movieId =  parseInt(req.params.movieId);
  const movie = movieDatas.find(movie => movie.id === movieId);

  res.json(movie);
})

app.get('/discover', function(req,res){

  res.json(discover)
});

app.get('/series', function(req,res){
  res.json(series)
});

app.get('/series/:seriesId', function(req,res){
  const seriesId  = parseInt(req.params.seriesId);
  const seriesData = series.find(s=> s.id === seriesId)
    res.json(seriesData);
});

app.get('/recomended', function(req,res){
  res.json(recommendedMovies)
})


app.get('/k-series', function(req,res){
  res.json(k-series);
})

app.get('/anime', function(req,res){
  res.json(anime)
});

app.get('/genre', function(req,res){
  res.json(genreData)
})

app.get('/genre/:genId', function(req,res){
  const id = parseInt(req.params.genId);
  const filterGenre = genreData.genres.find(gen => gen.id === id);
  if(filterGenre) {
    res.json(filterGenre.name);
    //console.log(filterGenre)
  }
 
})
app.listen(process.env.PORT || 5000, function(){
    console.log('sever running on port 5000');
})