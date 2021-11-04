import { getRandomInt } from "../../utils/tools.js";

async function roll(id, text, type, user, bot) {
  let cmd = text.match(/[+-]?[0-9]+/g);

  if (null === cmd) {
    cmd = ["100"];
  }

  if (1 === cmd.length) {
    const max = parseInt(cmd[0]);
    const res = max < 1 || max > 100 ? "骰子面数应为不超过 100 的正整数。" : `骰子的结果为: ${getRandomInt(max)}。`;
    await bot.say(id, res, type, user);
  }
}

export { roll };
