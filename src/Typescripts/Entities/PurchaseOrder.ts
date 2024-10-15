import { PurchaseOrderBase} from "./PurchaseOrderBase";
import { FieldType } from '../Core/DataAccess/Record';
import { Sublist } from '../Core/DataAccess/Sublist';
import {PurchaseOrderItemSublist} from "./PurchaseOrderItemSublist";

export class PurchaseOrder extends PurchaseOrderBase {

  @FieldType.select
  subsidiaryText: string

  @FieldType.select
  custbody_potype: string

  @FieldType.select
  custbody_potypeText: string

  @FieldType.freeformtext
  custbody_delivapptref: string

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