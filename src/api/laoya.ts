import { G } from "../util/http";

const baseURL = '/laoya';

/**
 * t=类别ID
 * pg=页码
 * wd=搜索关键字
 * h=几小时内的数据
 */
export const video_list = (params?: any) => G(baseURL, { ac: "list", ...params });
/**
 * ids=数据ID，多个ID逗号分割。
 * t=类型ID
 * pg=页码
 * h=几小时内的数据
 */
export const video_detail = (params?: any) => G(baseURL, { ac: "detail", ...params });