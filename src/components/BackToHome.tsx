import Link from "next/link"
import React, { FC } from "react"

const BackToHome: FC = () => {
    return(
        <Link
        href="/"
        className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border-gray-400 rounded shadow w-max border"
      >
        Back to Home
      </Link>
    )
}

export default BackToHome