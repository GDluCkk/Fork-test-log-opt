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
 * 自定义功能：增强版日志格式化
 * 这是我们Fork中添加的定制化功能
 */
function customLogFormatter(message, options = {}) {
  const timestamp = new Date().toISOString();
  const level = options.level || 'INFO';
  const prefix = options.prefix || '[CUSTOM]';

  return `${timestamp} ${prefix} [${level}] ${message}`;
}

/**
 * 自定义功能：带格式化的日志输出
 */
function customLogPro(message, options = {}) {
  const formattedMessage = customLogFormatter(message, options);
  return logPro(formattedMessage, options);
}

/**
 * 自定义功能：获取包信息
 */
function getPackageInfo() {
  return {
    name: 'log-opt (Fork版本)',
    version: '1.1.2-custom',
    description: '增强版日志工具 - 包含定制化功能',
    customFeatures: ['customLogFormatter', 'customLogPro', 'getPackageInfo']
  };
}

module.exports = {
  // 原始功能
  logPro,
  clearLogProLogs,
  _initialize_log_dirs,
  _cleanup,

  // 定制化功能
  customLogFormatter,
  customLogPro,
  getPackageInfo
};
