/**
 * @file melon/dialog/Alert
 * @author cxtom(cxtom2008@gmail.com)
 */

import React, {PropTypes} from 'react';
import Dialog from './Dialog';
import Button from './Button';
import createCommand from './dialog/commander';

/* eslint-disable fecs-prefer-class */
export default function Alert(props) {

    const {
        variants = [],
        buttonVariants = [],
        size,
        onConfirm,
        ...rest
    } = props;

    const actions = (
        <Button
            label="确定"
            key="submit"
            size={size}
            type="button"
            onClick={onConfirm ? e => onConfirm() : null}
            variants={buttonVariants} />
    );

    return (
        <Dialog
            {...rest}
            actions={actions}
            variants={[...variants, 'alert']}
            size={size} />
    );

}
/* eslint-enable fecs-prefer-class */

Alert.displayName = 'Alert';

Alert.propTypes = {
    ...Dialog.propTypes,
    onConfirm: PropTypes.func,
    buttonText: PropTypes.string.isRequired,
    buttonVariants: PropTypes.arrayOf(PropTypes.string).isRequired
};

Alert.defaultProps = {
    ...Dialog.defaultProps,
    maskClickClose: false,
    buttonText: '确定',
    buttonVariants: ['primary']
};


/**
 * 命令式显示一个警告框
 *
 * @example
 * const clean = Alert.show({
 *     title: 'xxx',
 *     children: <div>12321</div>,
 *     onConfirm: function () {
 *         同步操作
 *         异步操作.then(function () {
 *            clean();
 *         })
 *     }
 * });
 * @param {Object} options 警告窗参数
 * @return {Function} 清理函数
 */
Alert.show = createCommand(Alert);
