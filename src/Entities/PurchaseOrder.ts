import { PurchaseOrderBase} from "../Core/Transactions/PurchaseOrderBase";
import { FieldType } from '../Core/Base/Record';
import { Sublist } from '../Core/Base/Sublist';
import {PurchaseOrderItemSublist} from "./PurchaseOrderItemSublist";

export class PurchaseOrder extends PurchaseOrderBase {

  @FieldType.select
  subsidiaryText: string

  @FieldType.freeformtext
  custbody_pofollowupnote: string

  @FieldType.select
  custbody_posubstatus: number

  @FieldType.longtext
  custbody_posubstatusText: string

  @FieldType.select
  custbody_related_project: number

  @FieldType.select
  custbody_related_projectText: string

  @FieldType.sublist(PurchaseOrderItemSublist)
    // define a strongly typed item sublist
  item: Sublist<PurchaseOrderItemSublist>;

}