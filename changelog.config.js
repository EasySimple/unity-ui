module.exports = {
  disableEmoji: false,
  list: [
    'feat',
    'fix',
    'docs',
    'chore',
    'style',
    'refactor',
    'perf',
    'test',
    'build',
    'ci',
    'revert',
    'release',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [],
  types: {
    feat: {
      description: 'ๆฐๅ่ฝ',
      emoji: '๐ธ',
      value: 'feat',
    },
    fix: {
      description: 'ไฟฎๆนBug',
      emoji: '๐',
      value: 'fix',
    },
    docs: {
      description: 'ๆๆกฃๅๆด',
      emoji: '๐',
      value: 'docs',
    },
    chore: {
      description: '้็ฝฎ้กน',
      emoji: '๐ค',
      value: 'chore',
    },
    style: {
      description: 'ๆ ทๅผไฟฎๆน',
      emoji: '๐จ',
      value: 'style',
    },
    refactor: {
      description: '้ๆ',
      emoji: '๐ก',
      value: 'refactor',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: 'โก๏ธ',
      value: 'perf',
    },
    test: {
      description: 'Adding missing tests',
      emoji: '๐',
      value: 'test',
    },
    build: {
      description: 'ๆๅปบ',
      emoji: '๐ฆ',
      value: 'build',
    },
    ci: {
      description: 'CI related changes',
      emoji: '๐ก',
      value: 'ci',
    },
    revert: {
      description: 'ๅ้',
      emoji: '๐ฅ',
      value: 'revert',
    },
    release: {
      description: 'Create a release commit',
      emoji: '๐น',
      value: 'release',
    },
  },
};
