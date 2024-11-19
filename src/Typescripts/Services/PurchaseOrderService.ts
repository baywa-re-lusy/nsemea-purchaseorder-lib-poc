import {PurchaseOrder} from "../Entities/PurchaseOrder";
import * as log from 'N/log';
import {PurchaseOrderItemSublist} from "../Entities/PurchaseOrderItemSublist";

export class PurchaseOrderService {

  setProjectOnItemLine (po: PurchaseOrder) {

    log.debug('PurchaseOrderService : setProjectOnItemLine', `Project: ${po.custbody_related_project}`);
    const project = po.custbody_related_project;

    Object.entries(po.item).map(([key, item], index) => {

      if (item instanceof PurchaseOrderItemSublist) {
        log.debug('PurchaseOrderService : setProjectOnItemLine', `Type of item: ${typeof item}`);
        log.debug('PurchaseOrderService : setProjectOnItemLine', `Type of item: ${item instanceof PurchaseOrderItemSublist}`);
        log.debug('PurchaseOrderService : setProjectOnItemLine', `Index: ${index}`);
        log.debug('PurchaseOrderService : setProjectOnItemLine', `Key: ${key}`);
        log.debug('PurchaseOrderService : setProjectOnItemLine', `Item: ${item}`);
        log.debug('PurchaseOrderService : setProjectOnItemLine', `before: ${item.custcol_related_project} -> after: ${project}`);
        item.custcol_related_project = project;
      }

    });
  }

}
