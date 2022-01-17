// https://www.acmicpc.net/problem/10818


const getMaxMinNo = (list_total_count, number_list) => {
  number_list.sort((a, b) => a - b);
  // 오름차순 정렬
  // number_list.sort(); // 1, 100, 32, 50 , 70/
  // 숫자 요소는 의도한 대로 정렬 x
  // number_list.sort((a, b) => {
  //   return a - b;
  // }); // 1, 32, 50, 70, 100
  // number_list.sort((a, b) => a - b); // 1, 32, 50, 70, 100
  return [number_list[0], number_list[list_total_count - 1]]
}

console.log(getMaxMinNo(5, [20, 10, 35, 30, 7]));