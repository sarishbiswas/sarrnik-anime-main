import dsInosuke from "@/assets/ds-inosuke.png";
import dsTengen from "@/assets/ds-tengen.png";
import opLuffy from "@/assets/op-luffy.png";
import opAce from "@/assets/op-ace.png";
import opZoro from "@/assets/op-zoro.png";
import nrItachi from "@/assets/nr-itachi.png";
import nrKakashi from "@/assets/nr-kakashi.png";
import nrPain from "@/assets/nr-pain.png";
import mRyuk from "@/assets/m-ryuk.png";
import mGohan from "@/assets/m-gohan.png";
import obannaiSit10 from "@/assets/ds-obanai-sit-10.png";
import muichiroSit10 from "@/assets/ds-muichiro-sit-10.png";
import sanemiSit10 from "@/assets/ds-sanemi-sit-10.png";
import dsSanemi from "@/assets/ds-sanemi.png";
import shinobuSit10 from "@/assets/ds-shinobu-sit-10.png";
import gyomeiSit10 from "@/assets/ds-gyomei-sit-10.png";
import mitsuriSit10 from "@/assets/ds-mitsuri-sit-10.png";
import giyuSit10 from "@/assets/ds-giyu-sit-10.png";
import dsZenitsu15 from "@/assets/ds-zenitsu-15.png";
import dsTanjiro15 from "@/assets/ds-tanjiro-15.png";
import nrMinato25 from "@/assets/nr-minato-25.png";
import nrNaruto24 from "@/assets/nr-naruto-24.png";
import nrSasuke25 from "@/assets/nr-sasuke-25.png";
import nrDeidara13 from "@/assets/nr-deidara-13.png";
import nrGaraa13 from "@/assets/nr-garaa-13.png";
import nrMadara13 from "@/assets/nr-madara-13.png";
import nrNaruto13 from "@/assets/nr-naruto-13.png";
import nrSasuke13 from "@/assets/nr-sasuke-13.png";
import nrMinato13 from "@/assets/nr-minato-13.png";
import nrmbox from "@/assets/nr-mb.png";
import opSanji29 from "@/assets/op-sanji-29.png";
import opLuffy20 from "@/assets/op-lufi-20.png";
import opZoro18 from "@/assets/op-zoro-18.png";
import opNami15 from "@/assets/op-naomi-15.png";
import opSanji28 from "@/assets/op-sanji-28.png";
import opLuffyShaks from "@/assets/op-lufi-shaks.png";
import opLuffy15 from "@/assets/op-lufi-15.png";
import opZoro16 from "@/assets/op-zoro-16.png";
import mtomt from "@/assets/m-tom-t.png";
import mjerryt from "@/assets/m-jerry-t.png";
import mtomb from "@/assets/m-tom-b.png";
import mjerryb from "@/assets/m-jerry-b.png";
import mGoku29 from "@/assets/m-goku-29.png";
import mgojoGeto from "@/assets/m-gojo-geto.png";
import mSungJinwoo23 from "@/assets/m-jinwoo-23.png";
import mSungJinwoo223 from "@/assets/m-jinwoo2-23.png";
import mErenYeager26 from "@/assets/m-eren-26.png";
import mtoms from "@/assets/m-tom-s.png";
import mjerrys from "@/assets/m-jerry-s.png";
import cpUno from "@/assets/cp-uno.png";
import cpUnoHp from "@/assets/cp-uno-hp.png";
import cpUnoNm from "@/assets/cp-uno-nm.png";
import cpCluedo from "@/assets/cp-cluedo.png";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  collection: string;
}

export const demonSlayer: Product[] = [
  {
    id: "ds-1",
    title: "30cm Beast Breathing User - Inosuke Hashibira",
    description: "Unleash the wild side of your collection with this dynamic Inosuke figure. Featuring Inosuke Hashibira with his iconic boar head mask pushed up, battle scars, and serrated Nichirin swords, this highly detailed anime statue perfectly captures his fierce, unyielding spirit.",
    image: dsInosuke,
    collection: "Demon Slayer",
  },
  {
    id: "ds-2",
    title: "30cm Sound Hashira — Tengen with Dual Blades",
    description: "Add some flamboyance to your shelf with this striking Tengen figure. Featuring Tengen Uzui with his untamed silver hair, dual chained Nichirin cleavers, and muscular physique, this highly detailed anime statue perfectly embodies the flashy style and power of the Sound Hashira.",
    image: dsTengen,
    collection: "Demon Slayer",
  },
  {
    id: "ds-3",
    title: "30cm Wind Hashira - Sanemi with Sword",
    description: "Showcase the fierce Wind Hashira with this Sanemi anime figure. Featuring his battle scars, signature green uniform, and iconic katana, it's a striking collectible for any fan.",
    image: dsSanemi,
    collection: "Demon Slayer",
  },
  {
    id: "ds-4",
    title: "15cm Thunder Breathing User - Zenitsu Agatsuma",
    description: "Bring lightning speed to your collection with this detailed Zenitsu anime figure. Featuring Zenitsu Agatsuma clutching his Nichirin katana, clad in his signature triangle-patterned yellow haori, it's a striking display piece for any Demon Slayer fan.",
    image: dsZenitsu15,
    collection: "Demon Slayer",
  },
  {
    id: "ds-5",
    title: "15cm Sun Breathing User - Tanjiro Kamado",
    description: "Power up your collection with this dynamic Tanjiro anime figure. Featuring Tanjiro Kamado ready for battle with his drawn Nichirin katana, hanafuda earrings, and iconic checkered haori, it's a must-have showcase piece for Demon Slayer fans.",
    image: dsTanjiro15,
    collection: "Demon Slayer",
  },
  {
    id: "ds-6",
    title: "10cm Serpent Hashira - Obanai Sitting Edition",
    description: "Bring home the fierce Serpent Hashira with this detailed chibi figure of Obanai Iguro from Demon Slayer. Perfectly capturing his iconic heterochromia eyes, striped haori, and loyal snake companion Kaburamaru in a traditional sitting pose, it's a must-have collectible for any anime fan's shelf or desk.",
    image: obannaiSit10,
    collection: "Demon Slayer",
  },
  {
    id: "ds-7",
    title: "10cm Wind Hashira - Sanemi Sitting Edition",
    description: "Add the intense Wind Hashira to your collection with this Sanemi figure from Demon Slayer. Featuring Sanemi Shinazugawa's signature spiky white hair and open uniform in a disciplined sitting pose, this compact collectible brings a powerful anime presence to any desk, shelf, or display case.",
    image: sanemiSit10,
    collection: "Demon Slayer",
  },
  {
    id: "ds-8",
    title: "10cm Mist Hashira - Muichiro Sitting Edition",
    description: "Capture the calm presence of the Mist Hashira with this Muichiro figure from Demon Slayer. Featuring Muichiro Tokito's signature long, mint-tipped hair and oversized uniform in a neat sitting pose, this high-quality chibi collectible is perfect for any anime display, shelf, or workspace.",
    image: muichiroSit10,
    collection: "Demon Slayer",
  },
  {
    id: "ds-9",
    title: "10cm Insect Hashira - Shinobu Sitting Edition",
    description: "Capture the graceful Insect Hashira with this Shinobu mini figure. Featuring Shinobu Kocho's iconic butterfly hair ornament and uniform in a serene sitting pose, it's a perfect anime collectible.",
    image: shinobuSit10,
    collection: "Demon Slayer",
  },
  {
    id: "ds-10",
    title: "10cm Stone Hashira - Gyomei Sitting Edition",
    description: "Honor the Stone Hashira with this Gyomei mini figure. Featuring Gyomei Himejima's prominent prayer beads and draped green haori in a serene sitting pose, it's a great anime addition.",
    image: gyomeiSit10,
    collection: "Demon Slayer",
  },
  {
    id: "ds-11",
    title: "10cm Love Hashira - Mitsuri Sitting Edition",
    description: "Celebrate the Love Hashira with this Mitsuri mini figure. Featuring Mitsuri Kanroji's vibrant pink-and-green braids and signature uniform in a charming sitting pose, it's a perfect anime collectible.",
    image: mitsuriSit10,
    collection: "Demon Slayer",
  },
  {
    id: "ds-12",
    title: "10cm Water Hashira - Giyu Sitting Edition",
    description: "Capture the calm Water Hashira with this giyu figure. Featuring his signature split-pattern haori in a disciplined sitting pose, it's a perfect compact anime collectible.",
    image: giyuSit10,
    collection: "Demon Slayer",
  },
];

export const onePiece: Product[] = [
  {
    id: "op-1",
    title: "30cm Straw Hat Captain — Luffy",
    description: "Bring the Future Pirate King to your collection with this premium Luffy figure, as seen in this image. Featuring his iconic straw hat, flowing black cape, and dynamic red Haki effects, this highly detailed statue perfectly captures his fierce determination. An absolute must-have display piece for every One Piece fan.",
    image: opLuffy,
    collection: "One Piece",
  },
  {
    id: "op-2",
    title: "28cmFire Fist — Ace",
    description: "Add the legendary Fire Fist to your shelf with this striking Ace figure from One Piece. Showcasing his signature tattoos, open white shirt, and a unique 'Marine' cap, this highly detailed statue captures his confident smirk. A perfect, premium piece for any dedicated One Piece collector.",
    image: opAce,
    collection: "One Piece",
  },
  {
    id: "op-3",
    title: "23cm Three Sword Style — Roronoa Zoro",
    description: "Unleash the Straw Hat swordsman with this premium Zoro figure from One Piece. Ready for battle with bandaged wounds, his signature green robes, and his bandana tied on, this stunning statue showcases his iconic Three-Sword Style enveloped in dramatic purple aura effects. A masterpiece for any One Piece collection.",
    image: opZoro,
    collection: "One Piece",
  },
  {
    id: "op-4",
    title: "29cm One Piece Vinsmoke — Sanji",
    description: "Elevate your collection with the Straw Hat crew's master chef from One Piece. Looking dapper in his signature black suit, loosened tie, and gold-buttoned vest, this premium figure features his iconic blonde hair and a dynamic, translucent orange flame effect at his feet. A sleek addition for any fan.",
    image: opSanji29,
    collection: "One Piece",
  },
  {
    id: "op-5",
    title: "20cm Gear Fourth — Monkey D. Luffy",
    description: "Capture Luffy's explosive power with this striking anime figure from One Piece. Showcasing his iconic chest scar, black-clad Haki fists, and intense battle-ready expression, this statue is enveloped in dynamic, translucent pink steam effects. A thrilling, must-have centerpiece for any dedicated One Piece collection.",
    image: opLuffy20,
    collection: "One Piece",
  },
  {
    id: "op-6",
    title: "18cm Wano Arc — Roronoa Zoro",
    description: "Bring the ultimate swordsman to life with this dynamic Zoro figure from One Piece. Perched mid-attack atop a detailed dragon base, it features his classic Wano robes, green hair, and signature Three-Sword Style enveloped in vivid purple energy effects. A thrilling display piece for collectors.",
    image: opZoro18,
    collection: "One Piece",
  },
  {
    id: "op-7",
    title: "15cm One Piece — Nami",
    description: "Add the Straw Hat navigator from One Piece to your shelf. Featuring her iconic orange hair, blue bikini top, and staff, this stunning figure is perfect for any collector.",
    image: opNami15,
    collection: "One Piece",
  },
  {
    id: "op-8",
    title: "28cm Suit Edition — Sanji",
    description: "Add the smooth Straw Hat chef from One Piece to your collection. Featuring his double-breasted black suit, iconic blonde hair, and signature cigarette, this premium statue is a must-have.",
    image: opSanji28,
    collection: "One Piece",
  },
  {
    id: "op-9",
    title: "16cm One Piece Iconic Scene — Shanks and Young Luffy",
    description: "Relive the emotional moment that started it all from One Piece. This premium diorama features red-haired Shanks passing his legendary straw hat down to an emotional, young Monkey D. Luffy. A truly timeless masterpiece for collectors.",
    image: opLuffyShaks,
    collection: "One Piece",
  },
  {
    id: "op-10",
    title: "15cm Cargo Outfit — Monkey D. Luffy",
    description: "Add this unique Luffy figure from One Piece to your collection. Showcasing his prominent chest scar, a green utility vest, and black cargo shorts, it's a must-have for fans.",
    image: opLuffy15,
    collection: "One Piece",
  },
  {
    id: "op-11",
    title: "16cm Black Outfit — Roronoa Zoro",
    description: "Add this sleek Zoro figure from One Piece to your collection. Featuring his iconic black bandana, crossed arms, and detailed hilt, this stealthy look is a standout piece.",
    image: opZoro16,
    collection: "One Piece",
  },
];

export const naruto: Product[] = [
  {
    id: "nr-1",
    title: "28cmCrow Illusion — Itachi",
    description: "Bring the legendary rogue ninja to life with this premium collectible figure based on Itachi Uchiha. Featuring Itachi Uchiha in his iconic Akatsuki cloak, this highly detailed statue captures his signature crow jutsu and a dramatic flame base. It is a must-have masterpiece for any Naruto Shippuden fan's collection.",
    image: nrItachi,
    collection: "Naruto",
  },
  {
    id: "nr-2",
    title: "28cm White Fang Legacy — Kakashi",
    description: "Unleash the power of the Copy Ninja with this premium collectible figure based on Kakashi. Depicting Kakashi Hatake as the Sixth Hokage, this highly detailed statue features dynamic translucent lightning effects, his iconic ninken hounds, and a striking Kamui backdrop. A spectacular centerpiece for any Naruto fan.",
    image: nrKakashi,
    collection: "Naruto",
  },
  {
    id: "nr-3",
    title: "22cm Pain - Almighty Push Statue",
    description: "Capture the divine authority of the Akatsuki leader with this premium collectible figure based on Pain. Depicting Pain (Tendo) with his Rinnegan eyes, exposed chakra receivers, a tattered Akatsuki cloak, and a swirling energy sphere, this highly detailed statue stands on a dramatic rock base. Perfect for Naruto collectors.",
    image: nrPain,
    collection: "Naruto",
  },
  {
    id: "nr-4",
    title: "25cm The Fourth Hokage - Minato Namikaze",
    description: "Celebrate the Yellow Flash of the Leaf with this premium collectible figure based on Minato Namikaze. Striking a powerful stance in his iconic Fourth Hokage cloak and Jonin uniform, Minato holds his signature Flying Thunder God kunai. Highly detailed and dynamic, it is a stunning piece for any Naruto collection.",
    image: nrMinato25,
    collection: "Naruto",
  },
  {
    id: "nr-5",
    title: "24cm Classic Orange Jumpsuit - Naruto Uzumaki",
    description: "Embrace the journey of the Hidden Leaf's hero with this premium collectible figure based on Naruto. Showcasing a young Naruto Uzumaki posing confidently with folded arms, this highly detailed statue features his classic orange and black jumpsuit, headband, and iconic smile. Perfect for any anime enthusiast.",
    image: nrNaruto24,
    collection: "Naruto",
  },
  {
    id: "nr-6",
    title: "25cm Curse Mark Hebi - Sasuke Uchiha",
    description: "Channel the avenger's dark power with this premium collectible figure based on Sasuke. Showcasing Sasuke Uchiha in his iconic white robe with a thick purple rope belt, this highly detailed statue features his Sharingan eye, sword, and intricate Curse Mark patterns. An essential piece for any Naruto collection.",
    image: nrSasuke25,
    collection: "Naruto",
  },
  {
    id: "nr-7",
    title: "13cm Explosive Clay - Deidara Akatsuki",
    description: "Celebrate the ultimate artist with this premium figure based on Deidara. Showcasing Deidara in his Akatsuki cloak, it features his signature hand-mouths molding explosive clay.",
    image: nrDeidara13,
    collection: "Naruto",
  },
  {
    id: "nr-8",
    title: "13cm Kazekage - Gaara of the Sand",
    description: "Honor the Hidden Sand's leader with this premium figure based on Gaara. Standing confidently with crossed arms, Gaara features his iconic forehead tattoo and signature sand gourd.",
    image: nrGaraa13,
    collection: "Naruto",
  },
  {
    id: "nr-9",
    title: "13cm Six Paths Sage - Madara Uchiha",
    description: "Unleash absolute power with this premium figure based on Madara Uchiha. Depicting Madara Uchiha in his Six Paths form, it features his white robe, Rinnegan, and iconic sage staff.",
    image: nrMadara13,
    collection: "Naruto",
  },
  {
    id: "nr-10",
    title: "13cm Seventh Hokage - Naruto Uzumaki",
    description: "Celebrate the Hero of the Leaf with this premium figure based on Naruto. Standing tall, Naruto features his iconic white Hokage cloak over his signature orange zipped jacket.",
    image: nrNaruto13,
    collection: "Naruto",
  },
  {
    id: "nr-11",
    title: "13cm Wandering Ninja - Sasuke Uchiha",
    description: "Capture the Shadow Hokage with this premium figure based on Sasuke. Depicting Sasuke in his adult wandering years, it features his black cloak, purple shirt, and travel messenger bag.",
    image: nrSasuke13,
    collection: "Naruto",
  },
  {
    id: "nr-12",
    title: "13cm The Fourth Hokage - Minato Namikaze",
    description: "Celebrate the Yellow Flash with this premium figure based on Minato. Minato stands ready in his white Hokage cloak and green uniform, wielding his signature teleportation kunai.",
    image: nrMinato13,
    collection: "Naruto",
  },
  {
    id: "nr-13",
    title: "Naruto Engraved Wooden Music Box",
    description: "Bring nostalgic tunes to life with this hand-cranked wooden music box based on Naruto Theme. Featuring a beautifully engraved exterior and a vibrant vintage Naruto artwork panel inside the lid.",
    image: nrmbox,
    collection: "Naruto",
  },
];

export const misc: Product[] = [
  {
    id: "m-1",
    title: "20cm Death Note Shinigami — Ryuk",
    description: "Bring home the God of Death as seen in Death Note. This highly detailed collectible features Ryuk's iconic wide grin, expansive black wings, and textured gothic attire. Perfect for anime fans.",
    image: mRyuk,
    collection: "Miscellaneous",
  },
  {
    id: "m-2",
    title: "Super Saiyan — Gohan",
    description: "Unleash the ultimate power with this premium Gohan collectible, as shown in Dragon Ball Z. Capturing his intense battle pose and iconic energy blast, this highly detailed figure features vibrant battle-torn clothing and a dramatic energy effect piece. A must-have display piece for anime fans.",
    image: mGohan,
    collection: "Miscellaneous",
  },
  {
    id: "m-3",
    title: "29cm Ultra Instinct — Goku",
    description: "Elevate your anime collection with the powerful warrior featured in Dragon Ball. Standing in a fierce, determined stance, this premium figure showcases Goku's striking silver hair, meticulous muscular definition, and iconic red and black martial arts gi. A flawless centerpiece for any Dragon Ball display.",
    image: mGoku29,
    collection: "Miscellaneous",
  },
  {
    id: "m-4",
    title: "Jujutsu Kaisen - Gojo and Geto Sitting",
    description: "Celebrate the iconic duo from their Jujutsu High days with this premium collectible from Jujutsu Kaisen. Featuring Satoru Gojo and Suguru Geto in a relaxed, back-to-back sitting pose, this highly detailed figure accurately captures their classic uniforms, hairstyles, and expressions. A perfect addition for any fan.",
    image: mgojoGeto,
    collection: "Miscellaneous",
  },
  {
    id: "m-5",
    title: "23cm Solo Leveling - Sung Jinwoo",
    description: "Arise and level up your collection with the striking hunter from Solo Leveling. Captured mid-stride, this premium collectible highlights Sung Jinwoo's iconic dark flowing coat, casual attire, sharp expressions, and signature daggers drawn for battle. An absolute masterpiece for fans of the hit series.",
    image: mSungJinwoo23,
    collection: "Miscellaneous",
  },
  {
    id: "m-6",
    title: "23cm Battle Stance — Sung Jinwoo",
    description: "Prepare for the raid with the Shadow Monarch from Solo Leveling. Ready for action in a dynamic combat stance, this premium collectible showcases Jinwoo in a dark blue hoodie, wielding his signature dual daggers with incredible detail. A powerful addition to any anime collection.",
    image: mSungJinwoo223,
    collection: "Miscellaneous",
  },
  {
    id: "m-7",
    title: "26cm Scout Regiment — Eren Yeager",
    description: "Dedicate your heart to this striking Eren Yeager collectible from Attack on Titan. Standing determinedly on a rubble-themed base, Eren wears the iconic Scout Regiment uniform complete with his flowing green cape, detailed leather straps, and tall boots. An essential masterpiece for any Attack on Titan fan.",
    image: mErenYeager26,
    collection: "Miscellaneous",
  },
  {
    id: "m-8",
    title: "Superman — Tom",
    description: "Add heroic fun to your desk with the collectible from Tom and Jerry. Features Tom Cat in the iconic blue suit, red cape, and 'S' shield.",
    image: mtoms,
    collection: "Miscellaneous",
  },
  {
    id: "m-9",
    title: "Superman — Jerry",
    description: "Power up your collection with the hero from Tom and Jerry. Features Jerry Mouse confidently posing in Superman's classic blue suit, yellow belt, and flowing red cape.",
    image: mjerrys,
    collection: "Miscellaneous",
  },
  {
    id: "m-10",
    title: "Wizard — Tom",
    description: "Bring magic to your desk with the fun collectible from Tom and Jerry. Features Tom Cat dynamically posing in a wizard robe, green tie, and holding a magic wand.",
    image: mtomt,
    collection: "Miscellaneous",
  },
  {
    id: "m-11",
    title: "Wizard — Jerry",
    description: "Add magic to your display with the charming collectible from Tom and Jerry. Features Jerry Mouse dressed in a wizard robe, sweater, and tie while holding a magic wand.",
    image: mjerryt,
    collection: "Miscellaneous",
  },
  {
    id: "m-12",
    title: "Batman — Tom",
    description: "Defend your collection with the playful hero from Tom and Jerry. Features Tom Cat dressed in Batman's classic gray suit, blue cowl, cape, and yellow utility belt.",
    image: mtomb,
    collection: "Miscellaneous",
  },
  {
    id: "m-13",
    title: "Batman — Jerry",
    description: "Brighten your space with the joyful collectible from Tom and Jerry. Features Jerry Mouse happily posing in a light blue tuxedo jacket, green vest, and white bowtie.",
    image: mjerryb,
    collection: "Miscellaneous",
  },
];

export const cardsPosters: Product[] = [
  {
    id: "cp-1",
    title: "Classic UNO Card Game",
    description: "Bring home the 'Number 1 for Family Fun' with this classic UNO card game, as shown in cp-uno.png. Perfect for 2 to 10 players aged 7 and up, it features the iconic colorful action, number, and wild cards. Race to match colors or numbers and be the first to shout 'UNO!'",
    image: cpUno,
    collection: "Cards & Posters",
  },
  {
    id: "cp-2",
    title: "UNO Harry Potter Card Game",
    description: "Accio fun! Experience the wizarding world with the Harry Potter UNO card game featured in cp-uno-hp.png. Designed for 2 to 10 players aged 7+, this magical edition includes iconic characters like Harry, Hermione, and Ron, plus a thrilling special rule. Perfect for family game nights and magical gatherings.",
    image: cpUnoHp,
    collection: "Cards & Posters",
  },
  {
    id: "cp-3",
    title: "UNO Show 'Em No Mercy Card Game",
    description: "Brace yourself for the most brutal, ruthless, and unapologetic edition yet, as seen in cp-uno-nm.png. This intense card game takes classic matching to the extreme with tougher penalties, massive Wild +10 cards, and unforgiving new rules. Perfect for competitive game nights where friendships are put to the test!",
    image: cpUnoNm,
    collection: "Cards & Posters",
  },
  {
    id: "cp-4",
    title: "Cluedo Suspect Card Game",
    description: "Solve the crime in the quickest time with this fast-paced mystery game, as shown in cp-cluedo.png. Designed for 3 to 4 players aged 8 and up, it packs all the suspense of the classic board game into a quick 15-minute card version. Perfect for family travel or lightning-fast detective work!",
    image: cpCluedo,
    collection: "Cards & Posters",
  },
];