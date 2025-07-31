import { spawn } from 'child_process'

type Cmd = [string, string[]]

const commands: Cmd[] = [
  [
    'bun',
    [
      'build',
      './src/index.ts',
      '--outdir',
      './dist',
      '--packages',
      'external',
      '--minify',
    ],
  ],
  ['tsc', ['--emitDeclarationOnly']],
]

function run([cmd, args]: Cmd) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(cmd, args, {
      stdio: 'inherit',
      shell: process.platform === 'win32',
    })

    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`"${cmd}" exited with code ${code}`))
      } else {
        resolve()
      }
    })

    child.on('error', reject)
  })
}

async function main() {
  process.on('SIGINT', () => process.exit())

  await Promise.all(commands.map(run))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
