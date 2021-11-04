/*
 * @Author: saber
 * @Date: 2021-11-04 14:00:16
 * @LastEditTime: 2021-11-04 14:04:43
 * @LastEditors: saber
 * @Description: 
 */
import { Slot, VNode } from "vue";

export interface TableData {
  /**
   * @zh 数据行的key（必须）
   * @en The key of the data row (required)
   */
  key: string;
  /**
   * @zh 扩展行内容
   * @en Expand row content
   */
  expand?: string | (() => VNode);
  /**
   * @zh 子数据
   * @en Sub data
   */
  children?: TableData[];
  /**
   * @zh 是否禁用行选择器
   * @en Whether to disable the row selector
   */
  disabled?: boolean;

  [name: string]: any;
}

export interface TableColumn {
  /**
   * @zh 列信息的标识，对应 `TableData` 中的数据
   * @en The identifier of the column information, corresponding to the data in `TableData`
   */
  dataIndex: string;
  /**
   * @zh 列标题
   * @en Column header
   */
  title?: string | (() => VNode);
  /**
   * @zh 列宽度
   * @en Column width
   */
  width?: number;
  /**
   * @zh 对齐方向
   * @en Alignment direction
   */
  align?: 'left' | 'center' | 'right';
  /**
   * @zh 固定位置
   * @en Fixed position
   */
  fixed?: 'left' | 'right';
  /**
   * @zh 是否显示省略号
   * @en Whether to show ellipsis
   */
  ellipsis?: boolean;
  // /**
  //  * @zh 排序相关选项
  //  * @en Sorting related options
  //  */
  // sortable?: TableSortable;
  // /**
  //  * @zh 过滤相关选项
  //  * @en Filter related options
  //  */
  // filterable?: TableFilterable;
  // /**
  //  * @zh 表头子数据，用于表头分组
  //  * @en Header sub-data, used for header grouping
  //  */
  // children?: TableColumn[];
  /**
   * @zh 自定义列单元格的渲染
   * @en Customize the rendering of column cells
   * @param record
   * @param column
   */
  render?: ({
    record,
    column,
  }: {
    record: TableData;
    column: TableColumn;
  }) => VNode;
  // private
  isLastLeftFixed?: boolean;
  isFirstRightFixed?: boolean;
  slot?: Slot;
}