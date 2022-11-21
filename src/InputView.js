/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize;
    Console.readLine("\n다리의 길이를 입력해주세요.\n", (input) => {
      try {
        this.validateBridgeSize(input);
        bridgeSize = input;
      } catch (e) {
        Console.print(e.message);
        this.readBridgeSize();
      }
    });
    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let move;
    Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (input) => {
        try {
          this.validatePlayerMove(input);
          move = input;
        } catch (e) {
          Console.print(e.message);
          this.readMoving();
        }
      }
    );
    return move;
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let command;
    Console.readLine(
      "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (input) => {
        try {
          this.validateGameCommand(input);
          command = input;
        } catch (e) {
          Console.print(e.message);
          this.readGameCommand();
        }
      }
    );
    return command;
  },

  validateBridgeSize(input) {
    if (isNaN(input) || input < 3 || input > 20) {
      let err = new Error("InputError : BridgeSize ");
      err.message = "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
      throw err;
    }
  },

  validatePlayerMove(input) {
    if (input !== "U" && input !== "D") {
      let err = new Error("InputError : PlayerMove ");
      err.message = "[ERROR] (위: U, 아래: D) 를 입력해주세요.";
      throw err;
    }
  },

  validateGameCommand(input) {
    if (input !== "R" && input !== "Q") {
      let err = new Error("InputError : gameCommand ");
      err.message = "[ERROR] (재시도: R, 종료: Q) 를 입력해주세요.";
      throw err;
    }
  },
};

module.exports = InputView;
