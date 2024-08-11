import { UserResponse } from "@/lib/Lib";
import { useQuery } from "@tanstack/react-query";

const UserMiddle = () => {
    const { data } = useQuery<UserResponse>({
        queryKey: ["userInfo"],
    });

    return (
        <div className="flex flex-row justify-between">
            <div className="font-serif text-[18px] flex-wrap">
                {data?.result.introduce}
            </div>
            <div className="flex flex-col font-pretendard font-semibold items-end text-[20px]">
                <span>0 팔로워 0 팔로잉</span>
                <button className="w-[100px] my-2 items-end rounded-md py-1 font-bold font-pretendard px-5 border-solid border-[2px] border-sky-400 text-sky-500">
                    팔로우
                </button>
            </div>
        </div>
    );
};

export default UserMiddle;
