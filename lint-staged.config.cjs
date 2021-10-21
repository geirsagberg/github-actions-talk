module.exports = {
  '**/*.ts': () => [
    'eslint --cache --fix',
    'prettier --write',
    'npm run build',
    'git add .',
  ],
}
