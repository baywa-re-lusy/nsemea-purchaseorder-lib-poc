import {PurchaseOrder} from "../Entities/PurchaseOrder";
import * as log from 'N/log';

export class PurchaseOrderService {

  /**
   * Set on all item lines the project column with the value defined on
   * the transaction body project field.
   * @param po Purchase order instance representing the related transaction
   */
  setProjectOnItemLine (po: PurchaseOrder) {

    log.debug('PurchaseOrderService : setProjectOnItemLine', `Project: ${po.custbody_related_project}`);
    const project = po.custbody_related_project;

    log.debug('PurchaseOrderService : setProjectOnItemLine', `Length: ${po.item.length}`);

    po.item.entries.forEach((item) => {
      log.debug('PurchaseOrderService : setProjectOnItemLine', `before: ${item.custcol_related_project} -> after: ${project}`);
      item.custcol_related_project = project;
    });

  }

  setProjectOnCurrentItemLine (po: PurchaseOrder) {

    log.debug('PurchaseOrderService : setProjectOnCurrentItemLine', `Project: ${po.custbody_related_project}`);
    log.debug('PurchaseOrderService : getCurrentSublistIndex', `Project: ${po.item.getCurrentSublistIndex()}`);
    const currIndex = po.item.getCurrentSublistIndex();
    const project = po.custbody_related_project;
    if (currIndex) {
      po.item[currIndex].custcol_related_project = project;
    }

  }

}
