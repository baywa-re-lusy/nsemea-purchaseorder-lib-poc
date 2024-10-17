import { ItemSublist } from "./PurchaseOrderBase";
import {SubListFieldTypeDecorator} from "../Core/DataAccess/NSSubList";

export class PurchaseOrderItemSublist extends ItemSublist {

  @SubListFieldTypeDecorator()
  accessor custcol_postatus: number

  @SubListFieldTypeDecorator({asText: true})
  accessor custcol_postatusName: string

  // @SubListFieldTypeDecorator()
  // accessor custcol_related_project: number

  // @SublistFieldType.select
  // accessor custcol_related_projectText: string

  // @SublistFieldType.select
  // accessor test_val: string

}