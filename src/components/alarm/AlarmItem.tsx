import { alarmInfoData } from "@/api/services/alarm/model"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

export const AlarmItem: React.FC<{ props: alarmInfoData }> = ({ props }) => {
  const router = useRouter()

  return (
    <div
      className="flex border-b-1 border-solid border-black items-center my-3"
      onClick={() =>
        router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/blog/${props.id}`)
      }
    >
      <div className="relative">
        <svg
          width="44"
          height="40"
          viewBox="0 0 44 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 27.0002V25.0002H14V18.0002C14 16.6172 14.417 15.3882 15.25 14.3122C16.083 13.2372 17.167 12.5332 18.5 12.2002V11.5002C18.5 11.0832 18.646 10.7302 18.938 10.4372C19.0758 10.2958 19.2411 10.184 19.4238 10.1089C19.6064 10.0337 19.8025 9.99673 20 10.0002C20.417 10.0002 20.77 10.1462 21.063 10.4382C21.354 10.7292 21.5 11.0832 21.5 11.5002V12.2002C22.833 12.5332 23.917 13.2372 24.75 14.3122C25.583 15.3882 26 16.6172 26 18.0002V25.0002H28V27.0002H12ZM20 30.0002C19.45 30.0002 18.98 29.8042 18.588 29.4132C18.3986 29.2304 18.2488 29.0107 18.1476 28.7676C18.0465 28.5246 17.9962 28.2634 18 28.0002H22C22 28.5502 21.804 29.0202 21.412 29.4132C21.2292 29.6023 21.0096 29.7519 20.7668 29.8529C20.5239 29.9538 20.263 30.004 20 30.0002ZM16 25.0002H24V18.0002C24 16.9002 23.608 15.9582 22.825 15.1752C22.042 14.3922 21.1 14.0002 20 14.0002C18.9 14.0002 17.958 14.3922 17.175 15.1752C16.392 15.9582 16 16.9002 16 18.0002V25.0002Z"
            fill="#212529"
          />
        </svg>
        {!props.isRead && (
          <span className="absolute bottom-[10px] right-[12px] w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </div>
      <span>{props.title}</span>
    </div>
  )
}
