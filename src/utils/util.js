import i18n from '@/locales';

/**
 * 设置页面标题
 *
 * @export
 * @param {String} title 标题
 */
export function setDocumentTitle(title) {
  const text = title ? i18n.global.t(`menu.${title}`) : 'Vue3 Admin System';
  document.title = text;
}
