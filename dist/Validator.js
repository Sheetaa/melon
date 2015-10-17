define('melon/Validator', [
    'require',
    'exports',
    'module',
    './validator/ValidityState'
], function (require, exports, module) {
    var rules = {};
    var ValidityState = require('./validator/ValidityState');
    var Validator = {};
    Validator.register = function (ruleName, check) {
        rules[ruleName] = check;
    };
    Validator.register('required', function (value, component) {
        return new ValidityState(!!value, component.props.requiredErrorMessage || '\u4E0D\u80FD\u4E3A\u7A7A');
    });
    Validator.register('pattern', function (value, component) {
        var _component$props = component.props;
        var pattern = _component$props.pattern;
        var patternErrorMessage = _component$props.patternErrorMessage;
        return new ValidityState(!value || new RegExp(pattern).test(value), patternErrorMessage || '\u683C\u5F0F\u975E\u6CD5');
    });
    Validator.register('maxByteLength', function (value, component) {
        var _component$props2 = component.props;
        var maxByteLength = _component$props2.maxByteLength;
        var maxByteLengthErrorMessage = _component$props2.maxByteLengthErrorMessage;
        var byteLength = value.replace(/[^\x00-\xff]/g, 'xx').length;
        return new ValidityState(!value || byteLength <= maxByteLength, maxByteLengthErrorMessage || '\u4E0D\u80FD\u591A\u4E8E' + maxByteLength + '\u4E2A\u5B57\u7B26\uFF0C\u4E2D\u6587\u53CA\u4E2D\u6587\u7B26\u53F7\u53602\u4E2A\u5B57\u7B26');
    });
    Validator.register('minByteLength', function (value, component) {
        var _component$props3 = component.props;
        var minByteLength = _component$props3.minByteLength;
        var minByteLengthErrorMessage = _component$props3.minByteLengthErrorMessage;
        var byteLength = value.replace(/[^\x00-\xff]/g, 'xx').length;
        return new ValidityState(!value || byteLength >= minByteLength, minByteLengthErrorMessage || '\u4E0D\u80FD\u5C11\u4E8E' + minByteLength + '\u4E2A\u5B57\u7B26\uFF0C\u4E2D\u6587\u53CA\u4E2D\u6587\u7B26\u53F7\u53602\u4E2A\u5B57\u7B26');
    });
    Validator.register('max', function (value, component) {
        var _component$props4 = component.props;
        var max = _component$props4.max;
        var maxErrorMessage = _component$props4.maxErrorMessage;
        var number = +value;
        var isValid = !isNaN(number) && number <= max;
        return new ValidityState(!value || isValid, maxErrorMessage || '\u4E0D\u80FD\u5927\u4E8E' + max);
    });
    Validator.register('min', function (value, component) {
        var _component$props5 = component.props;
        var min = _component$props5.min;
        var minErrorMessage = _component$props5.minErrorMessage;
        var number = +value;
        var isValid = !isNaN(number) && min <= number;
        return new ValidityState(!value || isValid, minErrorMessage || '\u4E0D\u80FD\u5C0F\u4E8E' + min);
    });
    Validator.resolve = function (component) {
        var props = component.props;
        if (props.novalidate) {
            return [];
        }
        return Object.keys(rules).reduce(function (result, ruleName) {
            if (ruleName in component.props) {
                result.push({
                    name: ruleName,
                    check: rules[ruleName]
                });
            }
            return result;
        }, []);
    };
    module.exports = Validator;
});