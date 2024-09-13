import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";

export function AddInvite() {
  return (
    <div className="flex gap-3">
      <AddBtn />
      <InviteBtn />
    </div>
  );
}

function AddBtn() {
  return (
    <Link href="users/add" className="primary-btn flex justify-center gap-1">
      <AddIcon />
      Add User
    </Link>
  );
}

function InviteBtn() {
  return (
    <Link href="users/invite" className="primary-btn flex justify-center gap-1">
      <SendIcon />
      Invite User
    </Link>
  );
}
