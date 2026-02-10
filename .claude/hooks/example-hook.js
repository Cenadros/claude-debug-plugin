/**
 * example-hook Hook
 *
 * Event: PreToolUse
 * Description: Add your description here
 */

export default async function example_hook(context) {
  const { tool, input, session } = context;

  // Example: Log all tool usage
  console.log(`[example-hook] Tool: ${tool}, Input: ${JSON.stringify(input).slice(0, 100)}`);

  // Return decision
  return {
    continue: true,  // Set to false to block the action
    // message: 'Optional message to show user',
    // modifiedInput: input,  // Optional: modify the input
  };
}
