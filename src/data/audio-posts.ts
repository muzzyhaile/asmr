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
    title: "Whispering Girl ASMR",
    description: "A soothing whisper session that creates a calming and relaxing atmosphere, perfect for meditation or sleep.",
    audioUrl: "/src/audiofiles/ElevenLabs_2025-03-18T23_36_26_Whispering Girl_pvc_s50_sb62_se0_b_m2.mp3",
    imageUrl: "https://placehold.co/600x400/e9d5ff/6b21a8?text=Whispering+Girl+ASMR",
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
    title: "Meditation Story ASMR",
    description: "A calming meditation story with gentle whispers to guide you into a state of deep relaxation and mindfulness.",
    audioUrl: "/src/audiofiles/story-2025-04-03 (1).mp3",
    imageUrl: "https://placehold.co/600x400/e9d5ff/6b21a8?text=Meditation+Story+ASMR",
    duration: "5:00",
    category: "Ambient",
    tags: ["meditation", "story", "whisper", "relaxation", "mindfulness"],
    creator: "ASMR Studio",
    creatorUrl: "/channels/asmr-studio",
    publishDate: "2025-04-03",
    metaDescription: "Immerse yourself in a soothing meditation story by ASMR Studio. Perfect for relaxation and mindfulness practice."
  }
];

export const audioCategories = ["All", "Whispers", "Nature", "Triggers", "Roleplay", "Ambient", "Sleep", "Meditation"];
