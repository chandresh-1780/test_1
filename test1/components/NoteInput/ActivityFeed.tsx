import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Timeline, Text } from "@mantine/core";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { FiCoffee } from "react-icons/fi";
import { LuBeer } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import style from "./Note.module.scss";

dayjs.extend(relativeTime);

type ActivityFeedProps = {
  notes: any[];
  onDeleteNote: (id: string) => void;
};

const ActivityFeed: React.FC<ActivityFeedProps> = ({ notes, onDeleteNote }) => {
  return (
    <div>
      <Timeline bulletSize={30} lineWidth={2}>
        {notes.map((note) => (
          <Timeline.Item
            bullet={
              note.type === "Message" ? (
                <BiMessageRounded size={15} />
              ) : note.type === "Phone" ? (
                <FiPhoneCall size={15} />
              ) : note.type === "Coffee" ? (
                <FiCoffee size={15} />
              ) : note.type === "Beer" ? (
                <LuBeer size={15} />
              ) : (
                <IoPersonOutline size={15} />
              )
            }
            title={`You had a ${note.type} with Militon Romaguera`}
          >
            <div className={style.flex}>
              <div>
                <Text c="dimmed" size="sm">
                  {note.content}
                </Text>
                <Text size="xs" mt={4} bold>
                  {dayjs(note.timestamp).fromNow()}
                </Text>
              </div>
              <button
                className={style.deleteBtn}
                onClick={() => onDeleteNote(note.id)}
              >
                Delete
              </button>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
      {notes.length === 0 && <p>No activity feed found.</p>}
    </div>
  );
};

export default ActivityFeed;
