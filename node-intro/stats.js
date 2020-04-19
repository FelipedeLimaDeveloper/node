/* eslint-disable no-console */
/* eslint-disable radix */
const os = require('os');
const log = require('./logger');

setInterval(() => {
  const { freemem, totalmem } = os;
  const total = parseInt(totalmem() / 1024 / 1024);
  const free = parseInt(freemem() / 1024 / 1024);
  const percent = parseInt(((total - free) / total) * 100);
  const stats = {
    free: `${free} MB`,
    total: `${total} MB`,
    usage: `${percent} %`,
  };
  console.clear();
  console.table(stats);
  log(`${JSON.stringify(stats)}\n`);
}, 1000);
