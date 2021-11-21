/*
 * @Author: saber
 * @Date: 2021-11-21 18:07:06
 * @LastEditTime: 2021-11-21 18:08:28
 * @LastEditors: saber
 * @Description: 
 */
import { Fragment, Comment, Text, h } from 'vue';

export function isEmptyElement(c: any) {
  return (
    c &&
    (c.type === Comment ||
      (c.type === Fragment && c.children.length === 0) ||
      (c.type === Text && c.children.trim() === ''))
  );
}

export function filterEmpty(children = [] as any[]) {
  const res: any[] = [];
  children.forEach(child => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if (child.type === Fragment) {
      res.push(...child.children);
    } else {
      res.push(child);
    }
  });
  return res.filter(c => !isEmptyElement(c));
}