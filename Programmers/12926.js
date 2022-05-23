//어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

function solution(s, n) {
    let lower = 'abcdefghijklmnopqrstuvwxyz' //알파벳들을 모두 배열로 바꾼다
    let upper = lower.toUpperCase();
    let arrLower = lower.split('');
    let arrUpper = upper.split('');
    let arrTempIndex = [];
    let answer = [];
  
    // s인 인덱스 값을 lower배열에서 찾아 인덱스 값 담기
    for(let i = 0; i <= s.length - 1; i++) {
      if(s[i] === ' ') {
        arrTempIndex.push(' ');
      } else if(s[i]===s[i].toLowerCase()){
        arrTempIndex.push(arrLower.indexOf(s[i]));
      } else {
        arrTempIndex.push(arrUpper.indexOf(s[i]));
      }
    }
  
    // n만큼 증가한 인덱스 값 추출하기
    let arrPlusIndex = arrTempIndex.map(x => (x + n) % arrLower.length);
  
    // 받아온 인덱스 값으로 띄어쓰기는 다시 띄어쓰기 하고 소문자라면 소문자것을 넣고 아니면 대문자 것을 넣는다.
    for(let i = 0; i <= arrTempIndex.length - 1; i++) {
      if(arrTempIndex[i] === ' ') {
        answer.push(' ');
      } else if(s[i]===s[i].toLowerCase()) {  
        answer.push(arrLower[arrPlusIndex[i]]);
      } else {
        answer.push(arrUpper[arrPlusIndex[i]]);
      }
    } //증가 시킨 인덱스 번호로 알파벳 배열에서 결과로 넣어준다.
    return answer.join('') ; 
  }
  
//아스키코드 함수를 불러와서 푼 방법
//   function solution(s, n) {
//     let answer = ''
//     for (let i = 0; i < s.length; i++) {
//       let x = s[i].charCodeAt();
//       if (s[i] == ' ') {
//         answer += ' '
//       } else if (x + n > 122) {
//         answer += String.fromCharCode(x + n - 26)
//       } else if (x + n > 90 && x <=90) {
//         answer += String.fromCharCode(x + n - 26)
//       } else {
//         answer += String.fromCharCode(x + n)
//       }
//     }
//     console.log(answer)
//     return answer;
//   }