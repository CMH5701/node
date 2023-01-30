const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('main페이지')//기다림 res send는 변수명 아님 바꾸면 오류
})

app.get('/read', function (req, res) {
    res.send("<a href = 'https://www.youtube.com/watch?v=Tt_tKhhhJqY'>read페이지</a>")//send 원하는 데이터
  })
  app.get('/write', function (req, res) {
    res.json({'sound':'야옹'})//send = json 동일하게 값 넘어감 json 사용시 명시적으로 사용하기 좋음
  })

app.get('/user/:id', function (req, res) {
    // const p = req.params //파라미터로 request 요청
    // console.log(p.id) //파라미터 값 입력
    // res.json({'id':p.id})//id : 원하는 입력된 파라미터 값 출력 
    
    const q = req.query
    //http://localhost:8080/user/cmh?q=1&name=cmh localhost= 내가 정한 포트주소 '/'라우팅 주소 /id = cmh 로 저장 
    //쿼리문은 ex)user/id/testcmh?q=임의 값 & name = 임의 값
    console.log(q.id)
    console.log(q.name)
    console.log(q.age)


    res.json({'이름뭐야?': q.name}) //주소창에 입력한 값 출력 id = *** name = mh = {"이름뭐야?" : "cmh"} 출력



})
app.listen(8080)