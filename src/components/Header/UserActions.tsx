// components/Header/UserActions.tsx
import { Bell, User } from "lucide-react";
import UserMenu from "../UserMenu";

interface Props {
  user: any;
  onSignIn: () => void;
  onSignOut: () => void;
}

export default function UserActions({ user, onSignIn, onSignOut }: Props) {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
        <Bell className="h-5 w-5" />
      </button>
      {user ? (
        <UserMenu user={user} onSignOut={onSignOut} />
      ) : (
        <button
          onClick={onSignIn}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <User className="h-4 w-4" />
          <span>Sign In</span>
        </button>
      )}
    </div>
  );
}
