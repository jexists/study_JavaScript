
// 45분 일찍 알람 설정하기
// https://www.acmicpc.net/problem/2884
const alarm = (H, M) => {
  if (H == 0) {
    H = 24;
  }
  const total_mins = H * 60 + M;
  const before = total_mins - 45;
  // console.log(before);

  H = Math.floor(before / 60);
  M = before % 60;

  // console.log(result_H);
  // console.log(result_M);

  return [H, M]
}

const [Hour, Mins] = alarm(23, 40);


console.log(Hour, Mins);