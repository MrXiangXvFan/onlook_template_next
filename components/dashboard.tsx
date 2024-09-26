import React, { Fragment } from "react"
import Link from "next/link"
import Test from "./text"

const innerCom = () => {
  return <div className="text-[#d01212]">文件内的组件</div>
}
/**
 * next项目的主视图
 * 项目跑起来之后，可以改动的那个页面，就是这个文件了。
 * @returns
 */
export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 border-[#1256af] border">
      <div className="text-[#de1d1d]">111</div>
      <h1 className="text-[#2c63e2]">222</h1>
      <Test></Test>
      {innerCom()};
      <Link
        className=""
        href="/test1"
      >
        点击进入AI生成的页面
      </Link>
    </div>
  )
}
