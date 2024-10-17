import { PurchaseOrderBase } from "./PurchaseOrderBase";
import {FieldTypeDecorator} from "../Core/DataAccess/NSTypedRecord";

import { NSSubList } from '../Core/DataAccess/NSSubList';
import {PurchaseOrderItemSublist} from "./PurchaseOrderItemSublist";

export class PurchaseOrder extends PurchaseOrderBase {

  @FieldTypeDecorator({ fieldId: "subsidiary", asText: true })
  accessor subsidiaryName: string

  @FieldTypeDecorator()
  accessor custbody_potype: string

  @FieldTypeDecorator({ fieldId: "custbody_potype", asText: true })
  accessor custbody_potypeName: string

  @FieldTypeDecorator()
  accessor custbody_delivapptref: string

  @FieldTypeDecorator()
  accessor custbody_pofollowupnote: string

  @FieldTypeDecorator()
  accessor custbody_posubstatus: number

  @FieldTypeDecorator({ fieldId: "custbody_posubstatus", asText: true })
  accessor custbody_posubstatusName: string

  @FieldTypeDecorator()
  accessor custbody_related_project: number

  @FieldTypeDecorator({ fieldId: "custbody_related_project", asText: true })
  accessor custbody_related_projectName: string

  // @FieldType.sublist(PurchaseOrderItemSublist)
  //   // define a strongly typed item sublist
  override item: NSSubList<PurchaseOrderItemSublist>;

}