export type InstallScriptStep =
  | { kind: 'command'; input: string; output?: string[] }
  | { kind: 'comment'; text: string }

export type TerminalLine =
  | { type: 'command'; text: string }
  | { type: 'output'; text: string }
  | { type: 'comment'; text: string }

export const installScript: InstallScriptStep[] = [
  {
    kind: 'command',
    input: 'composer require austintoddj/canvas'
  },
  {
    kind: 'command',
    input: 'php artisan canvas:install',
    output: [
      '',
      '  Installing Canvas.',
      '',
      '  Publishing assets ............... DONE',
      '  Publishing configuration ........ DONE',
      '  Running migrations .............. DONE',
      '',
      '  Installation complete.'
    ]
  },
  {
    kind: 'command',
    input: 'php artisan storage:link',
    output: [
      '',
      '  The [public/storage] link has been connected to [storage/app/public].'
    ]
  },
  {
    kind: 'command',
    input: 'php artisan canvas:make-admin you@example.com',
    output: ['', '  Assigned Admin to you@example.com.']
  },
  {
    kind: 'comment',
    text: '# Sign in to your app, then visit /canvas'
  }
]

export function getCompletedTerminalLines(): TerminalLine[] {
  const lines: TerminalLine[] = []

  for (const step of installScript) {
    if (step.kind === 'command') {
      lines.push({ type: 'command', text: step.input })
      for (const text of step.output ?? []) {
        lines.push({ type: 'output', text })
      }
    } else {
      lines.push({ type: 'comment', text: step.text })
    }
  }

  return lines
}
