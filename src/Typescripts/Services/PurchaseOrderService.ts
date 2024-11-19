import {PurchaseOrder} from "../Entities/PurchaseOrder";
import * as log from 'N/log';
import {PurchaseOrderItemSublist} from "../Entities/PurchaseOrderItemSublist";

export class PurchaseOrderService {

  setProjectOnItemLine (po: PurchaseOrder) {

    log.debug('PurchaseOrderService : setProjectOnItemLine', `Project: ${po.custbody_related_project}`);
    const project = po.custbody_related_project;

    log.debug('PurchaseOrderService : setProjectOnItemLine', `Length: ${po.item.length}`);

    po.item.entries.forEach((item) => {
      log.debug('PurchaseOrderService : setProjectOnItemLine', `before: ${item.custcol_related_project} -> after: ${project}`);
      item.custcol_related_project = project;
    });

    Object.entries(po.item).forEach(([key, item], index) => {
      log.debug('PurchaseOrderService : setProjectOnItemLine', `Key: ${key}`);
      log.debug('PurchaseOrderService : setProjectOnItemLine', `Item: ${item}`);
      log.debug('PurchaseOrderService : setProjectOnItemLine', `before: ${item.custcol_related_project} -> after: ${project}`)
    });
  }

}
