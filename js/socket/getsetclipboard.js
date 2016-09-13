'use strict';

require('safe-copy-paste');

module.exports.getClipboard = function(doneCallBack) {
  const pasteCallBack = function(err, data) { doneCallBack(data); };
  paste(pasteCallBack);
};

module.exports.setClipboard = function(data) { copy(data); };
