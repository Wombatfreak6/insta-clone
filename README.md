# Instagram Clone - React UI

A high-fidelity Instagram UI clone built with **React** and **Vanilla CSS**. This project recreates the modern Instagram desktop experience with a focus on premium aesthetics, smooth transitions, and core social features.

![Instagram Clone Preview](https://raw.githubusercontent.com/Wombatfreak6/insta-clone/main/preview.png) *(Placeholder for a real screenshot if available)*

---

## Features

### Home Feed
- **Stories Bar**: Interactive stories carousel with smooth scrolling.
- **Post Feed**: High-quality post cards with likes, captions, and time stamps.
- **Suggestion Bar**: Recommended users to follow, matching the Instagram sidebar layout.

### Notifications (New!)
- **Slide-out Panel**: A smooth, animated panel showing recent activity.
- **Categorized Feed**: Activity grouped by "Today", "This Week", and "Earlier".
- **Interaction Types**: Supports likes, follows (with requested/following states), and comments.

### Messaging
- **Modern Chat Interface**: Full messaging experience with user list and active chat windows.
- **Real-time Feel**: Responsive input and message history display.

### Search & Explore
- **Search Panel**: Instant slide-out search with recent searches and user filtering.
- **Explore Grid**: Responsive grid of trending posts and media.

### Profile
- **User Stats**: Display of posts, followers, and following counts.
- **Post Grid**: Classic Instagram grid view for user uploads.

### Authentication
- **Simulated Login/Signup**: Beautifully styled auth pages with local state persistence.
- **Protected Routes**: Navigation is restricted until authentication is successful.

---

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) (Vite)
- **Styling**: Vanilla CSS (CSS Modules approach for organization)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Go, Io, Ri, Fi sets)
- **Media**: [Lorem Picsum](https://picsum.photos/) and [Pravatar](https://pravatar.cc/) for dynamic mock content.

---

## Project Structure

```text
src/
├── Components/
│   ├── Auth/           # Login and Signup interfaces
│   ├── Home/           # Feed, Stories, and Suggestions
│   ├── Messages/       # Chat and DM interface
│   ├── Notifications/  # Activity panel and data
│   ├── Search/         # Global search functionality
│   ├── Explore/        # Media discovery grid
│   ├── Profile/        # User profile and post grid
│   └── Sidebar/        # Main navigation and Logo
├── App.jsx             # Main routing and state management
├── main.jsx            # Entry point
└── App.css             # Global layout and theme variables
```

---

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Wombatfreak6/insta-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd insta-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.