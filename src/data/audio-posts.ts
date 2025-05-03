interface AudioPost {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  imageUrl: string;
  duration: string;
  category: string;
  tags: string[];
  creator: string;
  creatorUrl: string;
  publishDate: string;
  metaDescription: string;
}

export const audioPosts: AudioPost[] = [
  {
    id: "whispering-girl",
    title: "Whispering ASMR",
    description: "A soothing whisper session that creates a calming and relaxing atmosphere, perfect for meditation or sleep.",
    audioUrl: "/audiofiles/ElevenLabs_2025-03-18T23_36_26_Whispering Girl_pvc_s50_sb62_se0_b_m2.mp3",
    imageUrl: "https://placehold.co/600x400/e9d5ff/6b21a8?text=Whispering+ASMR",
    duration: "3:00",
    category: "Whispers",
    tags: ["whisper", "female voice", "soft speaking", "relaxation", "sleep aid"],
    creator: "ASMR Studio",
    creatorUrl: "/channels/asmr-studio",
    publishDate: "2025-03-18",
    metaDescription: "Experience deep relaxation with gentle whispers by ASMR Studio. Perfect for sleep and meditation."
  },
  {
    id: "meditation-story",
    title: "Morning Meditation Story ASMR",
    description: "A calming morning meditation story with gentle whispers to start your day with relaxation and mindfulness.",
    audioUrl: "/audiofiles/story-2025-04-03 (1).mp3",
    imageUrl: "https://placehold.co/600x400/e9d5ff/6b21a8?text=Morning+Meditation+Story",
    duration: "5:00",
    category: "Meditation",
    tags: ["morning", "meditation", "story", "whisper", "relaxation", "mindfulness"],
    creator: "ASMR Studio",
    creatorUrl: "/channels/asmr-studio",
    publishDate: "2025-04-03",
    metaDescription: "Start your day with a soothing morning meditation story by ASMR Studio. Perfect for morning relaxation and mindfulness practice."
  },
  {
    id: "meditation-story-2",
    title: "Morning Energy Meditation",
    description: "An energizing morning meditation to awaken your senses and prepare your mind for a productive and mindful day ahead.",
    audioUrl: "/audiofiles/story-2025-04-03 (2).mp3",
    imageUrl: "https://placehold.co/600x400/e9d5ff/6b21a8?text=Morning+Energy+Meditation",
    duration: "6:00",
    category: "Meditation",
    tags: ["morning", "meditation", "energy", "guided", "relaxation", "mindfulness"],
    creator: "ASMR Studio",
    creatorUrl: "/channels/asmr-studio",
    publishDate: "2025-04-03",
    metaDescription: "Energize your morning with this guided meditation by ASMR Studio. Perfect for starting your day with clarity and focus."
  }
];

export const audioCategories = ["All", "Whispers", "Nature", "Triggers", "Ambient", "Sleep", "Meditation"];
