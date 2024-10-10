import { ItemSublist } from "../Core/Transactions/PurchaseOrderBase";
import { SublistFieldType } from "../Core/Base/Sublist";

export class PurchaseOrderItemSublist extends ItemSublist {

  @SublistFieldType.select
  custcol_postatus: number

  @SublistFieldType.select
  custcol_postatusText: string

  @SublistFieldType.select
  custcol_related_project: number

  @SublistFieldType.select
  custcol_related_projectText: string

  @SublistFieldType.select
  test_val: string

}