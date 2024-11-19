import {PurchaseOrder} from "../Entities/PurchaseOrder";
import * as log from 'N/log';
import {PurchaseOrderItemSublist} from "../Entities/PurchaseOrderItemSublist";

export class PurchaseOrderService {

  setProjectOnItemLine (po: PurchaseOrder) {

    log.debug('PurchaseOrderService : setProjectOnItemLine', `Project: ${po.custbody_related_project}`);
    const project = po.custbody_related_project;

    log.debug('PurchaseOrderService : setProjectOnItemLine', `Length: ${po.item.length}`);
    // const nbrOfLines = po.item.length;
    //
    // for (let i = 0; i < nbrOfLines; i++) {
    //   log.debug('PurchaseOrderService : setProjectOnItemLine', `Line: ${i}`);
    //   log.debug('PurchaseOrderService : setProjectOnItemLine', `before: ${po.item[i].custcol_related_project} -> after: ${project}`);
    //   po.item[i].custcol_related_project = project;
    // }

    po.item._entries.map((item) => {
      log.debug('PurchaseOrderService : setProjectOnItemLine', `before: ${item.custcol_related_project} -> after: ${project}`);
    });

    Object.entries(po.item).forEach(([key, item], index) => {
      log.debug('PurchaseOrderService : setProjectOnItemLine', `Key: ${key}`);
      log.debug('PurchaseOrderService : setProjectOnItemLine', `Item: ${item}`);
      log.debug('PurchaseOrderService : setProjectOnItemLine', `before: ${item.custcol_related_project} -> after: ${project}`)
      item.custcol_related_project = project;
    });
  }

}
