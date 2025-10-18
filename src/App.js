import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    Console.print(input);
  }

  // 구분자 탐색 함수
  checkDelimiter(input){
    // 기본 구분자
    let delimiter = /,|:/;
    let nums = input;

    // 커스텀 구분자
    const customDelimiter = input.match(/^\/\/(.)\n/);
    if(customDelimiter){
      delimiter = new RegExp(customDelimiter[1]);
      nums = input.split('\\n')[1];
    };
    return {nums, delimiter};
  }
}

export default App;
