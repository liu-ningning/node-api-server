import { Context } from 'koa'
import { ReportOrderType, ReportFeedCode } from '../config'

export declare type ReportData = {
  reason: number
  attachments?: string[] | string
  contents?: string
  lid?: number
}

export declare type FeedCommentReportEntity = ReportData & {
  uid: number
  feedId: number
  commentId: number
  reportDate: number
  reportCount: number
  reportUid: number
}

export declare type FeedReportEntity = ReportData & {
  uid: number
  feedId: number
  reportDate: number
  reportCount: number
  reportUid: number
}

export declare type GroupReportEntity = ReportData & {
  uid: number
  groupId: number
  reportDate: number
  reportCount: number
}

export declare type UserReportEntity = ReportData & {
  uid: number
  reportDate: number
  reportCount: number
  reportUid: number
}

// 创建举报工单所需要的一些数据
export declare type ReportOrder = {
  uid: number
  reportDate: number
  reportType: ReportOrderType
  reportUid?: number
  reportId: number
}

export declare type SpecialReportFeed = {
  feedId: number
  ctx?: Context
  uid?: number
  reason?: number
  contents?: string
}

export declare type SpecialReportFeedCommand = (
  arg: SpecialReportFeed
) => Promise<any>

export declare type SpecialReportUser = {
  ctx: Context
  uid: number
  target: number
  reason: number
  contents?: string
  lid?: number
}
