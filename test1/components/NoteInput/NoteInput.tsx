import { useState } from "react";
import style from "./Note.module.scss";
import { BiMessageRounded } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { FiCoffee } from "react-icons/fi";
import { LuBeer } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";

type NoteInputProps = {
  onAddNote: (noteContent: string, noteType: string) => void;
};

const NoteInput: React.FC<NoteInputProps> = ({ onAddNote }) => {
  const [noteContent, setNoteContent] = useState("");
  const [noteType, setNoteType] = useState<
    "Message" | "Phone" | "Coffee" | "Beer" | "Meeting Note"
  >("Message");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddNote(noteContent, noteType);
    setNoteContent("");
  };

  return (
    <div className={style.mainCon}>
      <form onSubmit={handleSubmit}>
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Enter your note..."
          rows={4}
          cols={50}
          className={style.input}
        />
        <div className={style.subCon}>
          <div className={style.iconDiv}>
            <div
              className={style.icon}
              style={{
                backgroundColor: noteType === "Message" ? "#00b0ff" : "white",
              }}
              onClick={() => setNoteType("Message")}
            >
              <BiMessageRounded size={15} />
            </div>
            <div
              className={style.icon}
              style={{
                backgroundColor: noteType === "Phone" ? "#00b0ff" : "white",
              }}
              onClick={() => setNoteType("Phone")}
            >
              <FiPhoneCall size={15} />
            </div>
            <div
              className={style.icon}
              style={{
                backgroundColor: noteType === "Coffee" ? "#00b0ff" : "white",
              }}
              onClick={() => setNoteType("Coffee")}
            >
              <FiCoffee size={15} />
            </div>
            <div
              className={style.icon}
              style={{
                backgroundColor: noteType === "Beer" ? "#00b0ff" : "white",
              }}
              onClick={() => setNoteType("Beer")}
            >
              <LuBeer size={15} />
            </div>
            <div
              className={style.icon}
              style={{
                backgroundColor:
                  noteType === "Meeting Note" ? "#00b0ff" : "white",
              }}
              onClick={() => setNoteType("Meeting Note")}
            >
              <IoPersonOutline size={15} />
            </div>
          </div>
          <button type="submit" className={style.btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteInput;
