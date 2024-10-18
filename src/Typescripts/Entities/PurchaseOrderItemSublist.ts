import { ItemSublist } from './PurchaseOrderBase';
import { SubListFieldTypeDecorator } from '../Core/DataAccess/NSSubList';

export class PurchaseOrderItemSublist extends ItemSublist {
  @SubListFieldTypeDecorator()
  accessor custcol_postatus: number;

  @SubListFieldTypeDecorator({ fieldId: 'custcol_postatus', asText: true })
  accessor custcol_postatusName: string;

  @SubListFieldTypeDecorator()
  accessor custcol_related_project: number;

  @SubListFieldTypeDecorator({
    fieldId: 'custcol_related_project',
    asText: true,
  })
  accessor custcol_related_projectName: string;
}
