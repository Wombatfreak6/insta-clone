export const MOCK_NOTES = [
  { id: 'me', name: "Your note", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", note: "What's new?" },
  { id: 1, name: "Chenna Mahith", avatar: "https://i.pravatar.cc/150?u=siddhant", note: "\"never look so desperate to be friends wi..." },
  { id: 2, name: "tusk act 4", avatar: "https://i.pravatar.cc/150?u=lakshya", note: "Ngl pe puchlo main fat fat reply kardun..." },
  { id: 3, name: "Swastik Ar", avatar: "https://i.pravatar.cc/150?u=shin", note: "Never trust someone who has..." },
  { id: 4, name: "Rahul", avatar: "https://i.pravatar.cc/150?u=rahul", note: "Coding vibes" },
];

export const MOCK_CHATS = [
  {
    id: 1,
    name: "Jatin Nagwani",
    avatar: "https://i.pravatar.cc/150?u=shikhar",
    lastMessage: "Jatin sent an attachment.",
    timestamp: "8w",
    unreadCount: 1,
    messages: [
      { id: 1, sender: "other", text: "Hey! How's the project going?", timestamp: "10:30 AM" },
      { id: 2, sender: "me", text: "It's going great, just working on the chat UI now.", timestamp: "10:32 AM" },
      { id: 3, sender: "other", text: "Awesome! Let me know if you need any help with the backend.", timestamp: "10:33 AM" },
      { id: 4, sender: "other", text: "I sent you some UI references as well.", timestamp: "10:33 AM" },
    ]
  },
  {
    id: 2,
    name: "Instagram user",
    avatar: "https://i.pravatar.cc/150?u=insta1",
    lastMessage: "Tq so much 🙌🙌 Ashish",
    timestamp: "9w",
    unreadCount: 1,
    messages: [
      { id: 1, sender: "me", text: "Hey, thanks for reaching out!", timestamp: "Yesterday" },
      { id: 2, sender: "other", text: "No problem! Loved your latest post.", timestamp: "Yesterday" },
      { id: 3, sender: "other", text: "Tq so much 🙌🙌 Ashish", timestamp: "Yesterday" },
    ]
  },
  {
    id: 3,
    name: "Abhyuday Singh Dhapola",
    avatar: "https://i.pravatar.cc/150?u=naman",
    lastMessage: "मैसेज लाइक केला",
    timestamp: "9w",
    unreadCount: 1,
    messages: [
      { id: 1, sender: "other", text: "Kasa aahes?", timestamp: "2d ago" },
      { id: 2, sender: "me", text: "Mast, tu sang.", timestamp: "2d ago" },
      { id: 3, sender: "other", text: "मैसेज लाइक केला", timestamp: "2d ago" },
    ]
  },
  {
    id: 4,
    name: "Fit.Ben_ 🏋️",
    avatar: "https://i.pravatar.cc/150?u=ben",
    lastMessage: "Fit.Ben_ 🏋️ sent an attachment.",
    timestamp: "9w",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "other", text: "Check out this workout routine!", timestamp: "1w ago" },
      { id: 2, sender: "me", text: "Looks intense! I'll try it tomorrow.", timestamp: "1w ago" },
    ]
  },
  {
    id: 5,
    name: "Achintya Pandey",
    avatar: "https://i.pravatar.cc/150?u=mehek",
    lastMessage: "Thanku..",
    timestamp: "10w",
    unreadCount: 0,
    messages: [
      { id: 1, sender: "me", text: "Happy Birthday Achintya!", timestamp: "Oct 12" },
      { id: 2, sender: "other", text: "Thanku..", timestamp: "Oct 12" },
    ]
  }
];
