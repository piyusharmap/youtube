import { useEffect, useState } from "react";
import { COMMENTS_DATA } from "../../../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CommentItem = ({ info }) => {
  const [replyVisibility, setReplyVisibility] = useState(false);

  return (
    <div className="p-2 flex items-start gap-2 cursor-default">
      <h1 className="py-1 px-2 uppercase border-[1px] border-blackSecondary">
        {info?.author.slice(0, 2)}
      </h1>

      <div className="flex-grow">
        <p className="text-sm">
          @{info?.author}
          <span className="px-2 text-xs opacity-80">{info?.postedAt}</span>
        </p>
        {info.replies.length > 0 && (
          <p
            className="text-sm"
            onClick={() => setReplyVisibility(!replyVisibility)}
          >
            {info?.replies.length > 1
              ? info?.replies.length + " replies"
              : info?.replies.length + " reply"}
            <FontAwesomeIcon
              className="ml-2 text-xs text-redMain"
              icon={replyVisibility ? faChevronUp : faChevronDown}
            />
          </p>
        )}
        <p className="py-1">{info?.comment}</p>

        {replyVisibility &&
          info?.replies.map((reply) => {
            return <CommentItem key={reply.id} info={reply} />;
          })}
      </div>
    </div>
  );
};

export default function CommentsBox() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsData();
  }, []);

  const getCommentsData = () => {
    setComments(COMMENTS_DATA);
  };

  const addComment = () => {
    const commentInfo = {
      id: Math.floor(Math.random() * (200 - 150 + 1) + 150),
      author: "Piyush Sharma",
      comment: commentText,
      replies: [],
      postedAt: "1 hour ago",
    };

    comments.unshift(commentInfo);
    setCommentText("");
  };

  return (
    <>
      <h1 className="text-lg">{comments.length + " Comments"}</h1>

      <div className="py-4 flex flex-col gap-2">
        <input
          className="w-full p-2 bg-transparent border-b-[1px] border-blackSecondary focus:outline-0"
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        {commentText !== "" && (
          <button
            className="py-1 px-2 self-end bg-redMain rounded-full"
            onClick={() => addComment()}
          >
            Comment
          </button>
        )}
      </div>

      <div className="h-screen w-full p-2 border-[1px] border-blackSecondary rounded-lg overflow-y-scroll">
        {comments.map((comment) => {
          return <CommentItem key={comment.id} info={comment} />;
        })}
      </div>
    </>
  );
}