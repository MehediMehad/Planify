import { AddUserModel } from "@/components/module/user/AddUserModel";
import { removeUser, selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Trash2 } from "lucide-react";

const Users = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  console.log(users);

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="flex justify-end">
        {/* AddUserModel */}
        <AddUserModel />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {users.map((user) => (
          <div className="border-2 border-primary rounded-md p-10 flex justify-between">
            <p className="text-xl font-bold">{user.name}</p>

            <Trash2
              onClick={() => dispatch(removeUser(user.id))}
              className="text-red-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
