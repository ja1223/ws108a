x = 3 //會設成全域變數(建議不要這樣做)

let y = 5 //let 這行打完後才能使用y

const z = 8 //const 變數不能重新指定

const o = {a:3, b:4}//設一個物件o裡面有a欄位跟b欄位，且設a=3,b=4

var x = 5 //var 設變數完前面的程式也可以用

y = 6

o.a = 5 //物件o的a欄位=5

var x = 8

console.log('x=', x, 'y=', y, 'z=', z, 'o=', o)

// z = 9  // 會失敗， const 變數不能重新指定！

// let y = 7 // 會失敗，不能重複宣告兩次


