goog.module('enum_alias2');
goog.module.declareLegacyNamespace();

const notVisible = goog.require('not_visible');

/** @enum {string} */
const Enum = notVisible.OtherEnum;

exports = {Enum};
