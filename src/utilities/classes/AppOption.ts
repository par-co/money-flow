import type { IAppOption } from "../../types";

class AppOption<TValue = string, TText = string>
  implements IAppOption<TValue, TText>
{
  id: string;
  value: TValue;
  text: TText;

  constructor(id: string, value: TValue, text: TText) {
    this.id = id;
    this.value = value;
    this.text = text;
  }
}

export default AppOption;
