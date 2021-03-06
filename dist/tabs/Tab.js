/*! 2016 Baidu Inc. All Rights Reserved */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'melon-core/classname/cxBuilder', "../babelHelpers"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('melon-core/classname/cxBuilder'), require("../babelHelpers"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.cxBuilder, global.babelHelpers);
        global.Tab = mod.exports;
    }
})(this, function (exports, _react, _cxBuilder, babelHelpers) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Tab;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    /**
     * @file melon Tabs Tab
     * @author cxtom<cxtom2008@gmail.com>
     */

    var cx = (0, _cxBuilder.create)('TabsItem');

    /* eslint-disable fecs-prefer-class */
    function Tab(props) {
        var selected = props.selected;
        var disabled = props.disabled;
        var label = props.label;
        var others = babelHelpers.objectWithoutProperties(props, ['selected', 'disabled', 'label']);


        var className = cx(props).addStates({ selected: selected, disabled: disabled }).build();

        return _react2['default'].createElement(
            'li',
            babelHelpers['extends']({}, others, { className: className }),
            label
        );
    }

    Tab.propTypes = {
        label: _react.PropTypes.node,
        disabled: _react.PropTypes.bool,
        selected: _react.PropTypes.bool
    };

    Tab.defaultProps = {
        disabled: false,
        selected: false
    };
});