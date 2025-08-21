import inquirer, { DistinctQuestion } from "inquirer";

export async function getValidInput<T>(prompt: DistinctQuestion[],validate?: (value: T) => true | string): Promise<T> {
  while (true) {
    const answer = await inquirer.prompt(prompt);
    const val = Object.values(answer)[0] as T;

    if (!validate) return val; 
    const result = validate(val);
    if (result === true) return val;
    console.error(result); 
  }
}
