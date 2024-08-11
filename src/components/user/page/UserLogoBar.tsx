import { useQuery } from "@tanstack/react-query";
import UserLogo from "../component/UserLogo";
import { UserResponse } from "@/lib/Lib";
import UserStackLogo from "../component/UserStackLogo";
import Link from "next/link";

const UserLogoBar = () => {
    const { data } = useQuery<UserResponse>({
        queryKey: ["userInfo"],
    });

    return (
        <div className="flex flex-row items-center px-[30px] justify-between">
            <div className="flex items-center">
                <UserLogo />
                <h1 className=" text-[28px] font-pretendard font-extrabold px-[20px] pr-[100px]">
                    {data?.result?.name}
                </h1>
            </div>
            <div className="flex">
                {data?.result.stack && (
                    <p className="flex flex-wrap my-[5px] font-pretendard font-bold text-[20px]">
                        Stack:
                    </p>
                )}
                {data?.result.stack && (
                    <div className="flex flex-wrap text-[20px]">
                        {data?.result.stack.map((item, index) => {
                            return (
                                <Link
                                    href={`https://${item}.org`}
                                    className="flex flex-row mx-[7px] my-[5px] font-pretendard hover:text-blue-500"
                                    key={index}
                                    target="blank"
                                >
                                    <UserStackLogo stack={`${item}`} />
                                    {item}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserLogoBar;
