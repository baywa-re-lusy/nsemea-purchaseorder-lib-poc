import { PurchaseOrderBase } from "./PurchaseOrderBase";
import {AutoGetSet} from "../Core/DataAccess/NSTypedRecord";

// import { FieldType } from '../Core/DataAccess/Record';
// import { Sublist } from '../Core/DataAccess/Sublist';
// import {PurchaseOrderItemSublist} from "./PurchaseOrderItemSublist";

export class PurchaseOrder extends PurchaseOrderBase {

  // @AutoGetSet({ fieldId: "subsidiary", asText: true })
  // accessor subsidiaryName: string

  @AutoGetSet()
  accessor custbody_potype: string

  // @AutoGetSet({ fieldId: "custbody_potype", asText: true })
  // accessor custbody_potypeName: string

  @AutoGetSet()
  accessor custbody_delivapptref: string

  @AutoGetSet()
  accessor custbody_pofollowupnote: string

  @AutoGetSet()
  accessor custbody_posubstatus: number

  // @AutoGetSet({ fieldId: "custbody_posubstatus", asText: true })
  // accessor custbody_posubstatusName: string

  @AutoGetSet()
  accessor custbody_related_project: number

  // @AutoGetSet({ fieldId: "custbody_related_project", asText: true })
  // accessor custbody_related_projectName: string

  // @FieldType.sublist(PurchaseOrderItemSublist)
  //   // define a strongly typed item sublist
  // item: Sublist<PurchaseOrderItemSublist>;

}