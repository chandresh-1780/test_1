import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NoteInput from "../components/NoteInput/NoteInput";
import ActivityFeed from "../components/NoteInput/ActivityFeed";

const Home: React.FC = () => {
  const [notes, setNotes] = useState<any[]>([]);

  // Load notes from local storage on initial load
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to local storage whenever they change
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  const handleAddNote = (noteContent: string, noteType: string) => {
    const newNote: any = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      user: "User",
      type: noteType,
      content: noteContent,
    };

    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <div className="subContainer">
        <h1>Notes</h1>
        <NoteInput onAddNote={handleAddNote} />
        <h2 style={{ margin: "20px 0" }}>Activity Feed</h2>
        <ActivityFeed notes={notes} onDeleteNote={handleDeleteNote} />
      </div>
    </div>
  );
};

export default Home;
