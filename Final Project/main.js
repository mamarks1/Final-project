//Final project (mythology website)
'use strict'
//variables
let name = document.getElementById('input-name').value
//Event Listeners
document.getElementById('Zeus').addEventListener("click", characterFunction)
document.getElementById('Kratos').addEventListener("click", storyFunction)
document.getElementById('home-Btn').addEventListener("click", homeFunction)
document.getElementById('searchBtn').addEventListener("click", searchFunction)
//Event Functions
function characterFunction(){
    document.getElementById('Story').innerHTML = "GODS";
    document.getElementById('Kratos').innerHTML = "Aphrodite, Ares, Artemis, Eos, Hades, Helios, Hephaestus, Hera, Hermes, Morpheus, persephone, Thanatos, Zeus, Bulder, Freya, Odin, Thor";
    document.getElementById('protagonists').innerHTML = "Kratos, Atreus and Mimir";
    document.getElementById('Heroes').innerHTML = "Protagonists";
    document.getElementById('fighting').innerHTML = "Enemies";
    document.getElementById('enemies').innerHTML = "Draugr, Nightmare, Ancients, Soul eater, Brood, Legion, Reaver, Revenant, Shadow, Traveller, Viken, HrÆzlyr(dragon), Ogre, Wolves, Reignn, Tatzelwurm, Wulver, Dark elves and Trolls";
    document.getElementById('instructions').style.display = "none";
    document.getElementById('search').style.display = "inherit"
    document.getElementById('input-name').style.display = "inherit"
    document.getElementById('searchBtn').style.display = "inherit"
}

function storyFunction(){
    document.getElementById('Characters').innerHTML ;
    document.getElementById('link').style.display = "inherit";
    document.getElementById('Zeus').style.display = "none";
    document.getElementById('Characters').style.display = "none";
    document.getElementById('instructions').style.display = "none";
}

function homeFunction(){

    document.getElementById('Story').innerHTML = "Story";
    document.getElementById('Zeus').style.display = "inherit";
    document.getElementById('Characters').style.display = "inherit"
    document.getElementById('protagonists').innerHTML = "";
    document.getElementById('Heroes').innerHTML = "";
    document.getElementById('fighting').innerHTML = "";
    document.getElementById('enemies').innerHTML = "";
    document.getElementById('link').style.display = "none";
    document.getElementById('Kratos').innerHTML = "<img src= images/kratos.jpg width = 150px>";
    document.getElementById('Story').style.display = "none";
    document.getElementById('search').style.display = "none";
    document.getElementById('input-name').style.display = "none";
    document.getElementById('searchBtn').style.display = "none";
    document.getElementById('instructions').style.display = "inherit";
    document.getElementById('Kratos').style.display = "inherit"
    document.getElementById('Story').style.display = "inherit"
    document.getElementById('protagonists').style.display = "inherit";
    document.getElementById('Heroes').style.display = "inherit";
    document.getElementById('fighting').style.display = "inherit";
    document.getElementById('enemies').style.display = "inherit";
    document.getElementById('instructions').style.display = "inherit";
    document.getElementById('search').style.display = "none";
    document.getElementById('Zeus').innerHTML = "<img src= images/Zeus.jpg width = 150px>";
    document.getElementById('Characters').innerHTML = "Characters";
    document.getElementById('god-facts').innerHTML = ""
}

function searchFunction(){
    
    //another way to do this if conditional:
    // if (document.getElementById('input-name').value.toLowerCase() == 'aphrodite');
    if(document.getElementById('input-name').value.toLowerCase() == "aphrodite"){
        console.log("test")
        aphroditeFunction();
    } else if (document.getElementById('input-name').value.toLowerCase() == "ares"){
        aresFunction();
    } else if (document.getElementById('input-name').value.toLowerCase() == "athena"){
        athenaFunction();
    } else if (document.getElementById('input-name').value.toLowerCase() == "zeus"){
        ZeusFunction();    
    } else if (document.getElementById('input-name').value.toLowerCase() == "kratos"){
        KratosFunction();
    } else if (document.getElementById('input-name').value.toLowerCase() == "atreus"){
        atreusFunction();
    } else if (document.getElementById('input-name').value.toLowerCase() == "mimir"){
        mimirFunction();

    }


    function aphroditeFunction(){
        document.getElementById('Story').style.display = "none";
        document.getElementById('Kratos').style.display = "none"
        document.getElementById('protagonists').style.display = "none";
        document.getElementById('Heroes').style.display = "none";
        document.getElementById('fighting').style.display = "none";
        document.getElementById('enemies').style.display = "none";
        document.getElementById('instructions').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('input-name').style.display = "inherit";
        document.getElementById('searchBtn').style.display = "inherit";
        document.getElementById('Zeus').innerHTML = "<img src= images/Aphrodite.jpg width = 150px>";
        document.getElementById('Characters').innerHTML = "Aphrodite";
        document.getElementById('god-facts').innerHTML = "Goddes of love, beauty and eternal youth born from the foam in the waters of paphos on the greek island of Cyprus. Supposedly born when the titan cronus killed his father and threw his genitals into the water. In the world of god of war assumptions of her death in the third game come from Athena telling kratos that she would be the last living god after Gaia attacks olympus and destroys it" 
    }

    function aresFunction(){
        document.getElementById('Story').style.display = "none";
        document.getElementById('Kratos').style.display = "none"
        document.getElementById('protagonists').style.display = "none";
        document.getElementById('Heroes').style.display = "none";
        document.getElementById('fighting').style.display = "none";
        document.getElementById('enemies').style.display = "none";
        document.getElementById('instructions').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('input-name').style.display = "inherit";
        document.getElementById('searchBtn').style.display = "inherit";
        document.getElementById('Zeus').innerHTML = "<img src= images/Ares.jpg width = 150px>";
        document.getElementById('Characters').innerHTML = "Ares";
        document.getElementById('god-facts').innerHTML = "God of war Ares son of Zeus and Hera is the representation of violence and war. In the god of war francise he is who kratos calls to in battle as a spartan general to help slay his enemies in exchange for his life. being ended by kratos in the end of god of war one." 
    }

    function athenaFunction(){
        document.getElementById('Story').style.display = "none";
        document.getElementById('Kratos').style.display = "none"
        document.getElementById('protagonists').style.display = "none";
        document.getElementById('Heroes').style.display = "none";
        document.getElementById('fighting').style.display = "none";
        document.getElementById('enemies').style.display = "none";
        document.getElementById('instructions').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('input-name').style.display = "inherit";
        document.getElementById('searchBtn').style.display = "inherit";
        document.getElementById('Zeus').innerHTML = "<img src= images/Athena.jpg width = 150px>";
        document.getElementById('Characters').innerHTML = "Athena";
        document.getElementById('god-facts').innerHTML = "Goddes of widom, courage, inspiration, civilization, law and justice, strategic warfare, mathematics, strength, strategy, the arts, crafts and skill. Born from Zeus's forehead after a massive headache she sprang to life full grown in armor. After the god of war ares is killed kratos asks the gods to take away his memories of the murder of his wife and child, he is told it is impossible and attemps suicide seeing it as the only way to avoid the memories but is saved by Athena and she tells him that death is not an option and offers him title of new 'GOD OF WAR' But is killed in kratos's attempt to kill Zeus."  
    }

    function ZeusFunction(){
        document.getElementById('Story').style.display = "none";
        document.getElementById('Kratos').style.display = "none"
        document.getElementById('protagonists').style.display = "none";
        document.getElementById('Heroes').style.display = "none";
        document.getElementById('fighting').style.display = "none";
        document.getElementById('enemies').style.display = "none";
        document.getElementById('instructions').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('input-name').style.display = "inherit";
        document.getElementById('searchBtn').style.display = "inherit";
        document.getElementById('Zeus').innerHTML = "<img src= images/Zeus2.jpg width = 150px>";
        document.getElementById('Characters').innerHTML = "Zeus";
        document.getElementById('god-facts').innerHTML = "God of the sky and king of all gods son of the last titan cronus Zeus fathered a handful of gods and goddesses and ruled over olympus with Hera and had also mated with several mortals creating demi gods. But in the god of war series he was killed by one of those demi gods kratos who killed him with his bare hands." 
    }
    function KratosFunction(){
        document.getElementById('Story').style.display = "none";
        document.getElementById('Kratos').style.display = "none"
        document.getElementById('protagonists').style.display = "none";
        document.getElementById('Heroes').style.display = "none";
        document.getElementById('fighting').style.display = "none";
        document.getElementById('enemies').style.display = "none";
        document.getElementById('instructions').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('input-name').style.display = "inherit";
        document.getElementById('searchBtn').style.display = "inherit";
        document.getElementById('Zeus').innerHTML = "<img src= images/Kratos2.jpg width = 150px>";
        document.getElementById('Characters').innerHTML = "Kratos";
        document.getElementById('god-facts').innerHTML = "Kratos in mythology has conflicting parentage some say that he is the son of zeus and an unknown woman but many other claim him as the son of titans pallas and styx, but what matters here is what god of war says and they say son of zeus so thats what we'll go with. Kratos starts of the game series as a spartan general who turned 50 men into 10,000 and went to war with barabarians but in that war he cries out to the greek god of war Ares who by kratos's wishes takes kratos into survitude for life in return he ends the barabrian army and gives Kratos his iconic weapons 'The Blades Of Chaos' which he uses to lead his army in survitude of ares until ares has kratos's wofe and child brought to a temple of athena where Kratos in a rage of blood lust kicks the door in and kills his family. After that kratos rescinds ares and swears revenge on him and eventually on all the gods and kills them all before moving into highding out in the norse world of midgard with his new wife Faye a giant and his son Atreus who after faye's death he takes on an adventure to the highest peek in all of the nine realms which just so happens to be in jotenheim the realm of the giants where after Atreus and Kratos spread Faye's ashes we find out about something on a prophecy wall that atreus is known to the jotun as loki explaining his half godhood and half frost giant which is how loki is described in mythology and most notably in the marvel cinimatic universe. " 
    }

    function atreusFunction(){
        document.getElementById('Story').style.display = "none";
        document.getElementById('Kratos').style.display = "none"
        document.getElementById('protagonists').style.display = "none";
        document.getElementById('Heroes').style.display = "none";
        document.getElementById('fighting').style.display = "none";
        document.getElementById('enemies').style.display = "none";
        document.getElementById('instructions').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('input-name').style.display = "inherit";
        document.getElementById('searchBtn').style.display = "inherit";
        document.getElementById('Zeus').innerHTML = "<img src= images/Atreus.jpg width = 150px>";
        document.getElementById('Characters').innerHTML = "Atreus";
        document.getElementById('god-facts').innerHTML = "Son of the fallen god of war Kratos, Atreus is a half frost giant half god named after a spartan warrior that was always seen with a smile even in the worst of times but was almost named loki something known for the god of mischief." 
    }

    function mimirFunction(){
        document.getElementById('Story').style.display = "none";
        document.getElementById('Kratos').style.display = "none"
        document.getElementById('protagonists').style.display = "none";
        document.getElementById('Heroes').style.display = "none";
        document.getElementById('fighting').style.display = "none";
        document.getElementById('enemies').style.display = "none";
        document.getElementById('instructions').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('input-name').style.display = "inherit";
        document.getElementById('searchBtn').style.display = "inherit";
        document.getElementById('Zeus').innerHTML = "<img src= images/Mimir.jpg width = 150px>";
        document.getElementById('Characters').innerHTML = "Mimir";
        document.getElementById('god-facts').innerHTML = "Mimir the wise helps the father son duo get to jotenheim to spread Faye's ashes and gives them information along the way during boat trips. in his past he was odins ambassador to the aesir gods until oduin imprisonned him in a tree for 109 years." 
    }   
}