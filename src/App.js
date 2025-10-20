import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const result = this.handleString(input);
    Console.print(`결과 : ${result}`);
  }

  handleString(input) {
    const { nums, delimiter } = this.checkDelimiter(input);
    return this.separateAndSum(nums, delimiter);
  }

  // 구분자 탐색 함수
  checkDelimiter(input){
    // 기본 구분자
    let delimiter = /,|:/;
    let nums = input;
    // 커스텀 구분자
    if (input.startsWith('//')) {
      const customDelimiter = input.match(/^\/\/(.)\\n/);
      if (!customDelimiter) {
        throw new Error("[ERROR] 잘못된 커스텀 구분자 형식입니다.");
      }
      delimiter = new RegExp(customDelimiter[1]);
      nums = input.split('\\n')[1];
    };
    return {nums, delimiter};
  }

  // 문자열 분리 및 합 계산 함수
  separateAndSum(input, delimiter){
    const numbers = input.split(delimiter).map(Number);
    const isNegative = numbers.some(num => num < 0);
    if (isNegative) throw new Error("[ERROR] 음수는 입력할 수 없습니다.");

    const hasInvalidNumber = numbers.some(num => isNaN(num));
    if (hasInvalidNumber) throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");

    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum;
  }
}

export default App;