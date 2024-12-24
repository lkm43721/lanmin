import Link from "next/link"

export default function News() {
    return(
        <div className="flex place-content-center mt-[10rem]">
            <div className="w-[350px] h-[300px] bg-white rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <table className="mt-[1.5rem] w-[280px] h-[250px] m-auto text-[15px]">
                    <tr>
                        <td><h2 className="text-black text-3xl font-bold font-['PretendardVariable']">로그인</h2></td>
                    </tr>
                    <tr>
                        <td><input 
                            type="text" 
                            placeholder="ID" 
                            className="w-[250px] h-[32px] text-[15px] border-0 rounded-[15px] outline-none pl-[10px] bg-[#E9E9E9]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><input 
                            type="password" 
                            placeholder="Password" 
                            className="w-[250px] h-[32px] text-[15px] border-0 rounded-[15px] outline-none pl-[10px] bg-[#E9E9E9]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/> 로그인 정보 저장</td>
                    </tr>
                    <tr>
                        <td><input 
                            type="submit" 
                            value="Sign in" 
                            className="w-[263px] h-[32px] text-[15px] border-0 rounded-[15px] outline-none pl-[10px] bg-[#39CCAE] active:bg-[#009476]"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="join"><Link href="/signin">회원가입</Link></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}