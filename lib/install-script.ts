export type InstallScriptStep =
  | { kind: 'command'; input: string; output?: string[] }
  | { kind: 'comment'; text: string }

export type TerminalLine =
  | { type: 'command'; text: string }
  | { type: 'output'; text: string }
  | { type: 'comment'; text: string }

/** Fallback when Packagist/GitHub is unreachable at build/request time. */
export const FALLBACK_PACKAGE_VERSION = 'v6.0.56'

/**
 * Normalize a release tag into Composer-style version + constraint.
 * e.g. "v7.0.2" → { version: "v7.0.2", constraint: "^7.0" }
 */
export function composerVersionParts(tag: string): {
  version: string
  constraint: string
} {
  const version = tag.startsWith('v') ? tag : `v${tag}`
  const bare = version.slice(1)
  const [major = '0', minor = '0'] = bare.split('.')
  return {
    version,
    constraint: `^${major}.${minor}`
  }
}

export function getInstallScript(
  packageVersion: string = FALLBACK_PACKAGE_VERSION
): InstallScriptStep[] {
  const { version, constraint } = composerVersionParts(packageVersion)

  return [
    {
      kind: 'command',
      input: 'composer require austintoddj/canvas',
      output: [
        `Using version ${constraint} for austintoddj/canvas`,
        './composer.json has been updated',
        'Running composer update austintoddj/canvas',
        'Loading composer repositories with package information',
        'Updating dependencies',
        'Lock file operations: 1 install, 0 updates, 0 removals',
        `  - Locking austintoddj/canvas (${version})`,
        'Writing lock file',
        'Installing dependencies from lock file (including require-dev)',
        'Package operations: 1 install, 0 updates, 0 removals',
        `  - Downloading austintoddj/canvas (${version})`,
        `  - Installing austintoddj/canvas (${version}): Extracting archive`,
        'Generating optimized autoload files'
      ]
    },
    {
      kind: 'command',
      input: 'php artisan canvas:install',
      output: [
        '  Publishing assets ..................................... 7.88ms DONE',
        '  Publishing configuration .............................. 0.37ms DONE',
        '  Running migrations ................................... 15.37ms DONE',
        '  Linking storage ....................................... 0.37ms DONE',
        '',
        'Canvas installed successfully.'
      ]
    },
    {
      kind: 'comment',
      text: '# Grant yourself admin access: php artisan canvas:make-admin you@email.com'
    },
    {
      kind: 'command',
      input: 'php artisan canvas:make-admin you@email.com',
      output: ['', '  Assigned Admin to you@email.com.']
    },
    {
      kind: 'comment',
      text: '# Sign in to your app, then visit /canvas'
    }
  ]
}

export function getCompletedTerminalLines(
  packageVersion: string = FALLBACK_PACKAGE_VERSION
): TerminalLine[] {
  const lines: TerminalLine[] = []

  for (const step of getInstallScript(packageVersion)) {
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
