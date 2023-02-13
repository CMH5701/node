import React from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const Read = () => {
    const users = [ 
        {email: 'cmh@gmail.com' , name: '최명환' },
        {email: 'kcj@gmail.com' , name: '김찬진' },
        {email: 'exnpm@gmail.com' , name: '노드와 리엑트' },
    ];


return (
    <table>
        <thead>
        <tr>
            <th>
                이름
            </th>
            <th>
                이메일
            </th>
        </tr>
        </thead>
        
        <tbody>
            {users.map(user => <User userData = {user} />)}   
            {/* 3~7 userdata를 map으로 가져온다 */}
        </tbody>
    </table>
)
}
export default Read

