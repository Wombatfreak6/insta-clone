import HighlightItem from "./HighlightItem";
import "./StoryHighlights.css";

const HIGHLIGHTS = [
  { id: "h1", label: "Travel" },
  { id: "h2", label: "Sunsets" },
  { id: "h3", label: "Music" },
];

export default function StoryHighlights() {
  return (
    <section className="story-highlights" aria-label="Story highlights">
      <div className="story-highlights__track">
        {HIGHLIGHTS.map((h) => (
          <HighlightItem key={h.id} label={h.label} isNew={false} />
        ))}
        <HighlightItem label="New" isNew={true} />
      </div>
    </section>
  );
}
