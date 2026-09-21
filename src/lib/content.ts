/**
 * Static content lifted from the reference site, shared across the section
 * pages so each one renders exactly the same markup as the original.
 */

export const COMMITMENTS = [
  {
    name: "Engage",
    body: "We meet young people where they already are — the Power of You Festival and Tour, school clubs, community meetups — because that's where potential gets discovered and belief gets ignited.",
  },
  {
    name: "Empower",
    body: "Confidence is a skill, not a personality trait — we build it deliberately, through hands-on bootcamps like Young Africa Innovates, an Idea Lab for early-stage thinkers, and incubation support that turns ideas into actionable plans.",
  },
  {
    name: "Enact",
    body: "Every cohort ends with a decision, not a certificate — our most promising leaders go on to Seed2030 scholarships, our Leader-Fellow community, and expeditions that put them in rooms most young Ghanaians never get invited into.",
  },
  {
    name: "Include",
    body: "Roughly seven in ten of the young people we work with are young women, and programmes like AmplifyHer and Young Africa Innovates are built specifically for women, rural communities and people with disabilities who get overlooked elsewhere.",
  },
  {
    name: "Sustain",
    body: "We work with the Ministry of Education and Ghana Education Service to embed year-round Elevate Network Clubs inside partner schools, so the work outlasts any single grant cycle — or festival.",
  },
];

export type Programme = {
  photo: string;
  alt: string;
  category: string;
  name: string;
  description: string;
};

export const PROGRAMMES: Programme[] = [
  {
    photo: "/images/program-power-of-you.jpg",
    alt: "Students in a large hall during the Power of You Festival",
    category: "Leadership",
    name: "Power of You Festival",
    description:
      "Our flagship three-day residential festival — identity work, keynote sessions, hands-on skills workshops and problem-solving labs for high schoolers from across Ghana.",
  },
  {
    photo: "/images/program-amplifyher.jpg",
    alt: "Young women celebrating and sharing a moment at an AmplifyHer session",
    category: "Gender & voice",
    name: "AmplifyHer",
    description:
      "Celebrating and championing African women and girls in STEM and the creative industries — through storytelling, mentorship, and partnerships that turn talent into opportunity.",
  },
  {
    photo: "/images/program-seed2030.jpg",
    alt: "A scholarship cohort in a workshop, attentively listening to a mentor",
    category: "Scholarships",
    name: "Seed2030",
    description:
      "A scholarship programme covering tuition and pairing underserved students with world-class mentors — for careers in STEM, the arts, business and social impact.",
  },
  {
    photo: "/images/program-young-africa-innovates.jpg",
    alt: "Young innovators building a prototype during a Young Africa Innovates session",
    category: "Innovation & inclusion",
    name: "Young Africa Innovates",
    description:
      "A partnership with UNDP and the Mastercard Foundation training marginalised youth — women, rural communities, people with disabilities — to become innovators solving real local problems.",
  },
  {
    photo: "/images/program-prodigy-clubs.jpg",
    alt: "A small mentorship group gathered in a living room for an in-school Prodigy Club session",
    category: "In-school",
    name: "Prodigy Clubs",
    description:
      "Year-round, student-led clubs inside partner schools and universities — delivering our STEM, Creativity and Entrepreneurship curriculum between festivals and bootcamps.",
  },
];

export type GalleryFigure =
  | { kind: "single"; photo: string; alt: string }
  | { kind: "crossfade"; ratio: "4-5" | "3-2"; a: string; aAlt: string; b: string; bAlt: string };

export const GALLERY: GalleryFigure[] = [
  {
    kind: "crossfade",
    ratio: "4-5",
    a: "/images/gallery-who-i-am-a.jpg",
    aAlt: "Facilitator leading a 'Who I Am' identity session at the Power of You Festival",
    b: "/images/gallery-who-i-am-b.jpg",
    bAlt: "Presenter giving a thumbs up beside a 'Who I Am' branded screen",
  },
  {
    kind: "single",
    photo: "/images/gallery-facilitator-outdoors.jpg",
    alt: "A facilitator addressing a seated group outdoors under tree cover",
  },
  {
    kind: "crossfade",
    ratio: "4-5",
    a: "/images/gallery-filmmakers-a.jpg",
    aAlt: "Two young filmmakers operating a camera with headphones on",
    b: "/images/gallery-filmmakers-b.jpg",
    bAlt: "Two young people filming with a professional camera on a tripod outdoors",
  },
  {
    kind: "single",
    photo: "/images/gallery-stem-lab.jpg",
    alt: "Students and a facilitator in a school STEM lab session, laptops open on the desks",
  },
  {
    kind: "crossfade",
    ratio: "3-2",
    a: "/images/gallery-dance-a.jpg",
    aAlt: "A group dancing together in front of a brick building",
    b: "/images/gallery-dance-b.jpg",
    bAlt: "A group of young people laughing together outdoors",
  },
  { kind: "single", photo: "/images/gallery-arduino.jpg", alt: "Close-up of a student's hands wiring a breadboard and Arduino during a Prodigy Club session" },
  { kind: "single", photo: "/images/gallery-3d-printer.jpg", alt: "A 3D printer running in a school ICT lab during a STEM workshop" },
  { kind: "single", photo: "/images/gallery-robotics.jpg", alt: "A mentor and student assembling a small robotics build together" },
  { kind: "single", photo: "/images/gallery-festival-title.jpg", alt: "Power of You Festival title card over a scene of attendees registering at a drinks station" },
  { kind: "single", photo: "/images/gallery-friends-laughing.jpg", alt: "Three friends sitting together and laughing at the festival" },
  { kind: "single", photo: "/images/gallery-jennifer-speaking.jpg", alt: "Jennifer Acheampong speaking at the podium beside the Elevate Network step-and-repeat" },
  { kind: "single", photo: "/images/gallery-audience-rows.jpg", alt: "Rows of attendees listening closely during a festival session" },
  { kind: "single", photo: "/images/gallery-coffee-laugh.jpg", alt: "An attendee sharing a laugh over coffee between sessions" },
  { kind: "single", photo: "/images/gallery-duotone-portrait.jpg", alt: "A duotone portrait of a facilitator speaking into a microphone" },
  { kind: "single", photo: "/images/gallery-st-louis-hall.jpg", alt: "A packed hall of St. Louis Senior High School students at a Power of You Festival activation" },
  { kind: "single", photo: "/images/gallery-collar-badge.jpg", alt: "A facilitator adjusting a student's collar and name badge before she goes on" },
  { kind: "single", photo: "/images/gallery-st-louis-students.jpg", alt: "Two St. Louis Senior High School students in uniform laughing together" },
];

export const FOLLOW_TILES = [
  { photo: "/images/insta-01.jpg", alt: "Behind the scenes with the Power of You Festival film crew" },
  { photo: "/images/insta-02.jpg", alt: "Students dancing together at the Power of You Festival" },
  { photo: "/images/insta-03.jpg", alt: "A candid portrait of festival attendees sharing a laugh" },
  { photo: "/images/insta-04.jpg", alt: "A mentor leading a small-group workshop session" },
  { photo: "/images/insta-05.jpg", alt: "A festival attendee seated in the audience" },
  { photo: "/images/insta-06.jpg", alt: "A facilitator leading a creative studio session" },
];
