const { 
  logPro, 
  clearLogProLogs,
  _initialize_log_dirs,
  _cleanup
} = require('./src/logPro');
const { getCurrentVersion, checkForUpdates } = require('./src/versionCheck');

// 导入时自动检查版本
checkForUpdates();

/**
 * 上游新增功能：性能监控
 * 这是原始仓库新增的功能
 */
function performanceMonitor(operation, callback) {
  const startTime = Date.now();
  const result = callback();
  const endTime = Date.now();
  console.log(`⏱️  操作 "${operation}" 耗时: ${endTime - startTime}ms`);
  return result;
}

/**
 * 上游新增功能：批量日志处理
 */
function batchLogPro(messages, options = {}) {
  console.log(`📦 批量处理 ${messages.length} 条日志消息`);
  return messages.map(msg => logPro(msg, options));
}

module.exports = {
  // 新增的上游功能
  performanceMonitor,
  batchLogPro,
  logPro,
  clearLogProLogs,
  _initialize_log_dirs,
  _cleanup
};
