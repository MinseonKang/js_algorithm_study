//어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
    let result = 0; // 결과 변수 선언
    for(let i in signs){ //signs 배열을 돈다
        if(signs[i] === true){  //sign이 참이면,
            result += absolutes[i]; //absolutes 배열의 i번째 값을 더해주고, 
						//대입연산자 활용. result = result+absolutes[i]라는 뜻
        }else{
            result -= absolutes[i]; //아니면 반대로 빼준다!
        }
    }
    return result;
}