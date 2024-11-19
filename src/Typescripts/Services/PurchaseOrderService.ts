import {PurchaseOrder} from "../Entities/PurchaseOrder";
import * as _ from 'lodash';
import * as log from 'N/log';

export class PurchaseOrderService {

  setProjectOnItemLine (po: PurchaseOrder) {

    log.debug('PurchaseOrderService : setProjectOnItemLine', `Project: ${po.custbody_related_project}`);
    const project = po.custbody_related_project;

    _.map(po.item, (item) => {
      log.debug('PurchaseOrderService : setProjectOnItemLine', `Line Project from: ${item.custcol_related_project} to ${project}`);
      item.custcol_related_project = project;
    });
  }

}
