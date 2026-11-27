window.AU={people:{zhenyard:"Zhenya · Common Grounds co-founder",tylerprobably:"Tyler · Co-founder",maplesyrupfelony:"Mackenzie · Co-founder",mayacontainsformulas:"Maya · Co-founder",definitelynotstark:"Definitely not Tony Stark",morgueandcoffee:"Jimmy Palmer",forensicnerd:"Kasie Hines"},posts:[{id:1,user:"CG_modteam",title:"Yes, you are allowed to criticize Common Grounds here.",body:"This community is independently moderated. Criticism is welcome. Please stop reporting negative reviews for negative attitude.",votes:12400,pinned:true,comments:[{user:"formerbrewista",body:"That last sentence is killing me.",replies:[{user:"tylerprobably",body:"Cultivate constructive criticism."}]}]},{id:2,user:"formerbrewista",title:"My manager told me to sit down because my feet hurt.",body:"I still cannot believe this is a normal thing here.",votes:4200,comments:[{user:"tylerprobably",body:"Revolutionary technology.",replies:[{user:"zhenyard",body:"Four legs."},{user:"maplesyrupfelony",body:"Sometimes five."},{user:"mayacontainsformulas",body:"Please consult occupational health if the pain persists."}]}]},{id:3,user:"nightshiftRN",title:"Actual hot food at 3 AM?",body:"Chicken adobo, garlic rice and vegetables. The overnight menu is incredible.",votes:2800,comments:[{user:"maplesyrupfelony",body:"Glad you enjoyed it!"},{user:"morgueandcoffee",body:"My daughter loves the ube ensaymada.",replies:[{user:"forensicnerd",body:"JIMMY YOU HAVE REDDIT??"}]}]},{id:4,user:"industrialdesignguy",title:"Stark Industries could learn a lot about repairability from Common Grounds.",body:"The modular design is genuinely impressive.",votes:1600,comments:[{user:"definitelynotstark",body:"They are collaborating, actually.",replies:[{user:"industrialdesignguy",body:"And how would you know?"},{user:"definitelynotstark",body:"Educated guess."},{user:"zhenyard",body:"Tony get off Reddit. We have a meeting in ten minutes."}]}]},{id:5,user:"CG_modteam",title:"Weekly questions, concerns, complaints and emotional outbursts",body:"The weekly community thread.",votes:938,comments:[{user:"cincinnatiengineer",body:"The office is freezing.",replies:[{user:"zhenyard",body:"Temperature isn't a fucking opinion."},{user:"mayacontainsformulas",body:"Facilities has been contacted."},{user:"tylerprobably",body:"Cultivate warmth."}]}]}]};
/* Fictional AU content. Add posts here; no interface changes required. */
AU.communities={
CommonGrounds:{icon:"☕",color:"#315c48",title:"Common Grounds",description:"An independent community for customers, employees, engineers and people who have discovered chairs.",members:"186k",online:842,rules:["Respect other users","Criticism is welcome","No personal information","No harassment or retaliation"]},
Engineering:{icon:"⚙",color:"#455b8e",title:"Engineering",description:"Design, research, repairability and technical discussion in the AU.",members:"412k",online:1204,rules:["Keep discussion constructive","Respect intellectual property","No confidential technical records"]},
NightShift:{icon:"☾",color:"#77638f",title:"Night Shift",description:"For the people keeping the world running after midnight.",members:"94k",online:388,rules:["Respect patient privacy","Be kind to fellow shift workers"]},
Avengers:{icon:"A",color:"#9b3737",title:"Avengers",description:"Public discussion of the Avengers, Stark Industries and their very unusual neighbors.",members:"2.1m",online:7630,rules:["No doxxing","No classified information","Label speculation"]},
KATSEYE:{icon:"✧",color:"#ae5687",title:"KATSEYE",description:"EYEKONS discussing music, performances and the occasional unexpected cameo.",members:"128k",online:619,rules:["Respect the members","No invasive speculation","Keep fan discussions welcoming"]}
};
AU.posts.forEach((p,i)=>{p.community="CommonGrounds";p.flair=["Moderator","Employee experience","Food & drink","Engineering","Weekly thread"][i];p.date=["2027-10-22","2027-10-24","2027-10-26","2027-10-27","2027-10-28"][i]});
AU.people.CG_modteam="Independent moderator team";
AU.people.definitelynotstark="Engineering enthusiast";
Object.assign(AU.people,{biomechanicalengineering:"Biomedical engineering",spiderprints:"Independent maker",espressoengineering:"Industrial design",nightshiftRN:"Night shift worker",eyeconarchive:"EYEKON"});
AU.posts.push(
{id:6,community:"Engineering",user:"biomechanicalengineering",flair:"Research",date:"2027-10-29",title:"Common Grounds × Stark Industries: adaptive prosthetic research",body:"The joint team is exploring modular lower-limb prostheses and sensory feedback. Repairability and access seem to be actual design requirements, not an afterthought. Interested to see how this develops.",votes:1900,comments:[{user:"zhenyard",body:"Still in development. Any performance claims need further clinical evaluation."},{user:"spiderprints",body:"The really interesting part is how much you can simplify the mechanical assembly without sacrificing the useful range of movement.",replies:[{user:"espressoengineering",body:"Finally, someone who thinks about maintenance."}]}]},
{id:7,community:"NightShift",user:"nightshiftRN",flair:"Break room",date:"2027-10-30",title:"Whoever decided hospital food should be available after midnight deserves a raise",body:"A hot meal on my break. Not a vending machine granola bar. An actual meal.",votes:3200,comments:[{user:"morgueandcoffee",body:"Our department has been particularly fond of the bakery deliveries."},{user:"forensicnerd",body:"Some of us are still waiting for the ube restock, Jimmy."},{user:"maplesyrupfelony",body:"We're working on it!"}]},
{id:8,community:"Avengers",user:"starkwatch",flair:"Discussion",date:"2027-10-30",title:"Is Stark seriously arguing with an engineer on r/CommonGrounds?",body:"I thought this was a coffee company subreddit. How did we get here?",votes:6300,comments:[{user:"definitelynotstark",body:"People are allowed to have opinions about manufacturing."},{user:"spiderprints",body:"Some people also have meetings to attend."}]},
{id:9,community:"KATSEYE",user:"eyeconarchive",flair:"Concert",date:"2027-10-31",title:"Can someone explain the 'I'm fucking cold' sign?",body:"The girls recognized the people holding it immediately. I feel like I've missed three seasons of a show.",votes:8700,comments:[{user:"espressoengineering",body:"It's a very long-running Common Grounds inside joke."},{user:"tylerprobably",body:"Outstanding initiative."},{user:"eyeconarchive",body:"WHY ARE WE DISCUSSING THE HOSPITALITY INDUSTRY"}]},
{id:10,community:"CommonGrounds",user:"confusedbarista",flair:"Question",date:"2027-11-01",title:"When is lavender syrup coming back?",body:"Everyone is discussing engineering and I just want my lavender latte.",votes:756,comments:[{user:"maplesyrupfelony",body:"March! We're working on the seasonal menu."},{user:"confusedbarista",body:"Thank you. Good luck with the neuroscience."}]},
{id:11,community:"CommonGrounds",user:"clevelandbarista",flair:"Feedback",date:"2027-11-02",title:"Nexus scheduling is difficult to use on smaller phones",body:"Love that I can see my shifts, but the weekly view is cramped on my screen. Is there a compact view planned?",votes:482,comments:[{user:"zhenyard",body:"Thanks for flagging this. We need to improve device accessibility, not assume everyone has the same screen."},{user:"clevelandbarista",body:"Appreciate the response."}]},
{id:12,community:"CommonGrounds",user:"retailrefugee",flair:"Employee experience",date:"2027-11-03",title:"Can we talk about the difference between being good at your job and pretending to enjoy every second of it?",body:"Having a bad day doesn't make you a bad employee. It feels strange to have a workplace where that's understood.",votes:2250,comments:[{user:"mayacontainsformulas",body:"Performance should be assessed against clear job responsibilities."},{user:"tylerprobably",body:"You're allowed to be a person at work."}]}
);

/* November story expansion: fictional posts, private scene excerpts and timeline. */
Object.assign(AU.people,{
  "mindymeeks": "Film enthusiast",
  "amberfreeman": "Community member",
  "katewithabow": "Kate Bishop",
  "archivist616": "Comics and film fan",
  "sophiaafterhours": "Sophia · KATSEYE",
  "meganoffline": "Megan · KATSEYE",
  "laraonline": "Lara · KATSEYE",
  "yoonchae07": "Yoonchae · KATSEYE",
  "manonhere": "Manon · KATSEYE",
  "danieladances": "Daniela · KATSEYE",
  "dmalard": "Medical examiner",
  "nightshiftkitchen": "Hospital hospitality team",
  "repaircollective": "Independent repair technician",
  "nexus_support": "Common Grounds support",
  "communityresponse": "Common Grounds Response",
  "CG_academy": "Common Grounds Academy",
  "urbanecologist": "Urban ecology",
  "archerprobably": "Clint",
  "forestplanner": "Planning and conservation",
  "pastryhours": "Bakery enthusiast"
});
AU.posts.push(...[
  {
    "id": 13,
    "community": "Engineering",
    "user": "repaircollective",
    "flair": "Research",
    "date": "2027-11-04",
    "title": "Finally, a prosthetic design that accounts for the person repairing it",
    "body": "The Common Grounds and Stark joint research discussion mentions replaceable components and routine maintenance. I hope the eventual cost of replacement parts gets the same attention as the initial device.",
    "votes": 1730,
    "comments": [
      {
        "user": "zhenyard",
        "body": "That's one of the design requirements. A device being affordable once is not particularly useful if maintaining it is prohibitively expensive.",
        "replies": [
          {
            "user": "spiderprints",
            "body": "Also: please stop gluing things that need to be opened.",
            "replies": [],
            "votes": 1
          },
          {
            "user": "definitelynotstark",
            "body": "I feel personally attacked.",
            "replies": [],
            "votes": 1
          },
          {
            "user": "repaircollective",
            "body": "Good.",
            "replies": [],
            "votes": 1
          }
        ],
        "votes": 238
      }
    ]
  },
  {
    "id": 14,
    "community": "Engineering",
    "user": "biomechanicalengineering",
    "flair": "Clinical research",
    "date": "2027-11-05",
    "title": "Can sensory feedback help address phantom limb pain?",
    "body": "Interested in the sensory interface being researched by the CG/Stark team. Is the idea to provide more meaningful feedback during movement rather than just increase the amount of stimulation?",
    "votes": 2120,
    "comments": [
      {
        "user": "zhenyard",
        "body": "Broadly, yes. We're evaluating feedback, comfort and gait with clinical partners. We aren't claiming that a prototype cures phantom pain.",
        "replies": [
          {
            "user": "biomechanicalengineering",
            "body": "Appreciate the distinction. Looking forward to published results.",
            "replies": [],
            "votes": 1
          }
        ],
        "votes": 390
      },
      {
        "user": "spiderprints",
        "body": "There is a lot of work between a successful supervised session and something someone can use every day.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 15,
    "community": "CommonGrounds",
    "user": "morgueandcoffee",
    "flair": "Food & drink",
    "date": "2027-11-05",
    "title": "A small thank you to the bakery",
    "body": "My daughter and I have started splitting an ube ensaymada after dinner. She has developed a very strong opinion about who gets the larger half.",
    "votes": 3460,
    "comments": [
      {
        "user": "forensicnerd",
        "body": "Jimmy you have to stop posting about the pastries before I get to the bakery.",
        "replies": [
          {
            "user": "morgueandcoffee",
            "body": "I'm sorry, Kasie.",
            "replies": [],
            "votes": 1
          },
          {
            "user": "maplesyrupfelony",
            "body": "We're increasing production, I promise.",
            "replies": [],
            "votes": 1
          }
        ],
        "votes": 102
      },
      {
        "user": "dmalard",
        "body": "A rather sensible tradition, Mr Palmer. I should like to try one myself.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "mindymeeks",
        "body": "Finally a subreddit with priorities.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 16,
    "community": "NightShift",
    "user": "nightshiftkitchen",
    "flair": "Institutional hospitality",
    "date": "2027-11-06",
    "title": "What should be on the overnight menu next month?",
    "body": "We're collecting suggestions from overnight staff. Hot meals, vegetarian options and food that is still good when your break gets interrupted are all on the table.",
    "votes": 2840,
    "comments": [
      {
        "user": "nightshiftRN",
        "body": "Something I can eat at 4:20 AM without having to wait for someone to open a counter.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "maplesyrupfelony",
        "body": "Noted. We're also looking at smaller portions with the same variety so you don't have to buy a full meal.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "morgueandcoffee",
        "body": "A clearly marked allergen list would be very helpful.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "nightshiftkitchen",
        "body": "Absolutely. Ingredients and allergens should be available before ordering.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 17,
    "community": "CommonGrounds",
    "user": "communityresponse",
    "flair": "Community response",
    "date": "2027-11-06",
    "title": "Community Response: meals, water and rest spaces for emergency crews",
    "body": "Our institutional partners can request food and hydration deliveries during prolonged incidents. This is a logistics and hospitality service, not a clinical dispatch or patient-record system.",
    "votes": 1910,
    "comments": [
      {
        "user": "nightshiftRN",
        "body": "The fact that someone remembered night shift is huge.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "mayacontainsformulas",
        "body": "Institutional support is separately accounted for. There is no requirement to buy anything to access an emergency rest space.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 18,
    "community": "CommonGrounds",
    "user": "urbanecologist",
    "flair": "Sustainability",
    "date": "2027-11-07",
    "title": "The proposed shop is going into an existing building instead of clearing woodland",
    "body": "I attended the local planning session. The reuse proposal is genuinely more interesting than the original site. Curious to see what they do with the surrounding landscape.",
    "votes": 2140,
    "comments": [
      {
        "user": "forestplanner",
        "body": "The stormwater plan matters as much as the trees. Please keep the public documents updated.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "zhenyard",
        "body": "Agreed. Our environmental team can stop a project if the site isn't suitable.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "retailrefugee",
        "body": "Wait, they can say no to the founders?",
        "replies": [],
        "votes": 1
      },
      {
        "user": "mayacontainsformulas",
        "body": "Yes.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 19,
    "community": "CommonGrounds",
    "user": "CG_academy",
    "flair": "Training",
    "date": "2027-11-07",
    "title": "Academy Q&A: practical training is paid",
    "body": "New hires practice drink preparation, equipment cleaning, service and accessibility procedures in supervised sessions. Progress is assessed against published expectations, with time for feedback and further practice.",
    "votes": 4070,
    "comments": [
      {
        "user": "formerbrewista",
        "body": "So if I don't learn a recipe the first time I can actually practice making it?",
        "replies": [
          {
            "user": "tylerprobably",
            "body": "Yes. That's what the training equipment is there for.",
            "replies": [],
            "votes": 1
          }
        ],
        "votes": 300
      },
      {
        "user": "confusedbarista",
        "body": "Can I become a specialist without becoming a manager?",
        "replies": [],
        "votes": 1
      },
      {
        "user": "CG_academy",
        "body": "Yes. Leadership and technical specialization are separate paths.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 20,
    "community": "KATSEYE",
    "user": "eyeconarchive",
    "flair": "Fan edit",
    "date": "2027-11-08",
    "title": "KATSEYE as the Avengers is the crossover edit I didn't know I needed",
    "body": "Sophia as Iron Man, Manon as Captain America, Megan as Black Widow, Daniela as Hulk, Yoonchae as Hawkeye and Lara as Thor. The casting is sending me.",
    "votes": 12500,
    "comments": [
      {
        "user": "archivist616",
        "body": "Sophia's Iron Man edit is dangerously convincing.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "definitelynotstark",
        "body": "Excellent casting choices.",
        "replies": [
          {
            "user": "eyeconarchive",
            "body": "WHY ARE YOU HERE TOO",
            "replies": [],
            "votes": 1
          },
          {
            "user": "zhenyard",
            "body": "i am begging you to log off",
            "replies": [],
            "votes": 1
          }
        ],
        "votes": 912
      },
      {
        "user": "eyeconarchive",
        "body": "Imagine Clint seeing the Hawkeye part.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 21,
    "community": "KATSEYE",
    "user": "pastryhours",
    "flair": "Discussion",
    "date": "2027-11-08",
    "title": "I came here for concert footage and now I know what industrial design is",
    "body": "Every time someone explains the Common Grounds connection I discover another thing that company does. I thought they made coffee.",
    "votes": 6240,
    "comments": [
      {
        "user": "eyeconarchive",
        "body": "I thought the sign was a fandom joke. Apparently it's a workplace temperature joke.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "espressoengineering",
        "body": "Their café business and their engineering division are both real things in this universe.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "maplesyrupfelony",
        "body": "We also make bread.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "pastryhours",
        "body": "thank god. a subject i understand.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 22,
    "community": "CommonGrounds",
    "user": "clevelandbarista",
    "flair": "Nexus feedback",
    "date": "2027-11-09",
    "title": "Could the weekly schedule fit on one phone screen?",
    "body": "The current view works on my laptop. On my phone I have to scroll sideways to see Sunday. I'd rather have a compact list option than smaller text.",
    "votes": 734,
    "comments": [
      {
        "user": "nexus_support",
        "body": "We've logged the compact list request. It will go through accessibility testing before release.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "zhenyard",
        "body": "Exactly. Shrinking the font isn't an accessibility fix.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 23,
    "community": "CommonGrounds",
    "user": "retailrefugee",
    "flair": "Discussion",
    "date": "2027-11-09",
    "title": "Does anyone else get tired of corporate motivational language?",
    "body": "I like doing my job. I don't necessarily want my entire personality to be part of the job description. A chair should not need a motivational slogan.",
    "votes": 5230,
    "comments": [
      {
        "user": "tylerprobably",
        "body": "Revolutionary technology.",
        "replies": [
          {
            "user": "maplesyrupfelony",
            "body": "Tyler, the chair is not going on the menu.",
            "replies": [],
            "votes": 1
          }
        ],
        "votes": 540
      },
      {
        "user": "mayacontainsformulas",
        "body": "We can hold people accountable for their work without evaluating their emotional performance.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "formerbrewista",
        "body": "I genuinely just want to go home at the end of my shift.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 24,
    "community": "Avengers",
    "user": "starkwatch",
    "flair": "Discussion",
    "date": "2027-11-10",
    "title": "Can somebody explain the Common Grounds engineering partnership without making it a Stark acquisition rumor?",
    "body": "Two companies can work together without one buying the other, right? All I can find is people trying to decide who invented everything.",
    "votes": 3860,
    "comments": [
      {
        "user": "definitelynotstark",
        "body": "Independent collaborators. Shared research. Quite normal.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "spiderprints",
        "body": "Some of us just like building stuff.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "zhenyard",
        "body": "No acquisition. No ownership change. We have enough meetings as it is.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 25,
    "community": "CommonGrounds",
    "user": "pastryhours",
    "flair": "Food & drink",
    "date": "2027-11-10",
    "title": "Musakhan, adobo AND ube pastries at the same place?",
    "body": "I expected the normal coffee shop sandwiches. The menu actually has a story about the dishes and the people developing them.",
    "votes": 2510,
    "comments": [
      {
        "user": "maplesyrupfelony",
        "body": "Our culinary teams develop menus with local partners. The credit matters.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "dmalard",
        "body": "The pleasure of a shared meal is rather universal. The dishes themselves, however, have wonderfully particular histories.",
        "replies": [],
        "votes": 1
      },
      {
        "user": "forensicnerd",
        "body": "Ducky please tell me you saved me one.",
        "replies": [],
        "votes": 1
      }
    ]
  },
  {
    "id": 26,
    "community": "Engineering",
    "user": "spiderprints",
    "flair": "Design discussion",
    "date": "2027-11-11",
    "title": "A very small rant about replacement screws",
    "body": "If your product requires a proprietary tool to remove a component that is intended to be replaced, please explain why. I am listening. I am also holding a very expensive screwdriver.",
    "votes": 4810,
    "comments": [
      {
        "user": "definitelynotstark",
        "body": "There are legitimate engineering reasons for nonstandard fasteners.",
        "replies": [
          {
            "user": "zhenyard",
            "body": "Peter is holding the screwdriver because of you, Tony.",
            "replies": [],
            "votes": 1
          },
          {
            "user": "spiderprints",
            "body": "It was in the wrong drawer.",
            "replies": [],
            "votes": 1
          }
        ],
        "votes": 480
      },
      {
        "user": "repaircollective",
        "body": "Standardization is my love language.",
        "replies": [],
        "votes": 1
      }
    ]
  }
]);
AU.archive={
  "timeline": [
    {
      "date": "2005",
      "title": "Natalia and Ziva",
      "body": "Their relationship begins privately as Ziva joins NCIS. Natalia's S.H.I.E.L.D. work remains classified."
    },
    {
      "date": "2007",
      "title": "An unexpected observer",
      "body": "Natalia accepts an assignment observing Gibbs's team. Familiarity with Ziva slowly becomes harder to miss."
    },
    {
      "date": "2013",
      "title": "A family grows",
      "body": "Natalia and Ziva adopt Zhenya at six. Her family becomes central to the later AU."
    },
    {
      "date": "2019",
      "title": "The return",
      "body": "Natalia and Ziva return to NCIS looking remarkably unchanged. Bishop and Torres meet them."
    },
    {
      "date": "2026–2027",
      "title": "Building Common Grounds",
      "body": "Zhenya, Maya, Tyler and Mackenzie establish an independent company centered on accessible workplaces, practical training and useful technology."
    },
    {
      "date": "2027",
      "title": "KATSEYE and Common Grounds",
      "body": "A creative collaboration grows into an offstage friendship. The founders attend a concert and an inside joke becomes fandom lore."
    },
    {
      "date": "October 2027",
      "title": "New York",
      "body": "Zhenya and Mackenzie encounter the Woodsboro survivors. Amber, Tara, Sam, Mindy and Chad become connected to the broader AU."
    },
    {
      "date": "Late 2027",
      "title": "Adaptive engineering",
      "body": "Zhenya, Peter and Tony collaborate on repairable prosthetics. Amber participates in supervised fitting and feedback; the work remains developmental."
    },
    {
      "date": "Late 2027",
      "title": "Hospital hospitality",
      "body": "Common Grounds expands its institutional food and community-response partnerships. Jimmy, Ducky and Kasie become enthusiastic bakery regulars."
    }
  ],
  "chats": [
    {
      "title": "cultivate kindness ❤️",
      "subtitle": "Founders · private fictional chat",
      "messages": [
        [
          "Tyler",
          "the chair post has four thousand upvotes"
        ],
        [
          "Mackenzie",
          "it's a chair"
        ],
        [
          "Maya",
          "please tell me the occupational health follow-up is actually being done"
        ],
        [
          "Tyler",
          "yes. i checked."
        ],
        [
          "Zhenya",
          "thank god"
        ],
        [
          "Tyler",
          "outstanding initiative"
        ],
        [
          "Zhenya",
          "i will throw the chair at you"
        ]
      ]
    },
    {
      "title": "The Avengers edit",
      "subtitle": "Founders + KATSEYE · private fictional chat",
      "messages": [
        [
          "Megan",
          "someone made a katseye as avengers edit 😭"
        ],
        [
          "Sophia",
          "WHY AM I STARK"
        ],
        [
          "Manon",
          "i'm captain america apparently"
        ],
        [
          "Lara",
          "can i borrow the hammer"
        ],
        [
          "Yoonchae",
          "i actually want to learn archery"
        ],
        [
          "Daniela",
          "bruce seems nice though"
        ],
        [
          "Zhenya",
          "his ego did not need this soph"
        ],
        [
          "Maya",
          "please do not promise anybody a hammer"
        ],
        [
          "Tyler",
          "outstanding initiative"
        ],
        [
          "Mackenzie",
          "we are never escaping this"
        ]
      ]
    },
    {
      "title": "Engineering group",
      "subtitle": "Prototype team · private fictional chat",
      "messages": [
        [
          "Peter",
          "the revised assembly is in the shared folder"
        ],
        [
          "Tony",
          "Seventeen parts. I counted."
        ],
        [
          "Zhenya",
          "did you count the screws"
        ],
        [
          "Tony",
          "I was having a good day."
        ],
        [
          "Peter",
          "i counted the screws"
        ],
        [
          "Zhenya",
          "thank you peter"
        ],
        [
          "Maya",
          "can someone send the actual cost estimate before the meeting"
        ]
      ]
    },
    {
      "title": "The bakery situation",
      "subtitle": "Friends · private fictional chat",
      "messages": [
        [
          "Kasie",
          "Ducky and Jimmy do you want food?"
        ],
        [
          "Jimmy",
          "Yes please! If they're still doing the adobo."
        ],
        [
          "Ducky",
          "How very thoughtful, Kasie."
        ],
        [
          "Mindy",
          "they have ube pastries again"
        ],
        [
          "Amber",
          "get jimmy two"
        ],
        [
          "Jimmy",
          "Oh, you don't have to!"
        ],
        [
          "Amber",
          "one's for your daughter."
        ]
      ]
    }
  ]
};
