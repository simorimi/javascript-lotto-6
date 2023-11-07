import { MissionUtils } from "@woowacourse/mission-utils";
import MoneyValidity from "../Domain/MoneyValidity.js";

class InputMoney {
  async inputMoney() {
    const MONEY_VALIDITY = new MoneyValidity();
    const MONEY = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );

    MONEY_VALIDITY.inputMoneyValidity(MONEY);
    return Math.floor(MONEY / 1000);
  }
}
export default InputMoney;