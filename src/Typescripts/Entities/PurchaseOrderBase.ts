/**
 * NetSuite purchase order record
 */
import * as record from 'N/record';
import { TransactionBase } from '../Core/DataAccess/TransactionBase';
import {
  FieldTypeDecorator,
  Nullable,
  SubListDecorator,
  SubRecordDecorator,
} from '../Core/DataAccess/NSTypedRecord';
import {
  NSSubList,
  SubListFieldTypeDecorator,
} from '../Core/DataAccess/NSSubList';
import { AddressBase } from '../Core/DataAccess/AddressBase';
import { NSSubListLine } from '../Core/DataAccess/NSSubListLine';

/**
 * Sublist 'item' on purchase orders
 */
export class ItemSublist extends NSSubListLine {
  @SubListFieldTypeDecorator()
  accessor amount: number;

  @SubListFieldTypeDecorator()
  accessor class: number;

  @SubListFieldTypeDecorator()
  accessor customer: number;

  @SubListFieldTypeDecorator()
  accessor deferrevrec: boolean;

  @SubListFieldTypeDecorator()
  accessor department: number;

  @SubListFieldTypeDecorator()
  accessor description: string;

  @SubListFieldTypeDecorator()
  accessor expectedreceiptdate: Date;

  @SubListFieldTypeDecorator()
  accessor isclosed: boolean;

  @SubListFieldTypeDecorator()
  accessor item: number;

  @SubListFieldTypeDecorator()
  accessor location: Nullable<number>;

  @SubListFieldTypeDecorator()
  accessor leadtime: Nullable<number>;

  @SubListFieldTypeDecorator()
  accessor quantity: number;

  @SubListFieldTypeDecorator()
  accessor quantityreceived: number;

  @SubListFieldTypeDecorator()
  accessor quantitybilled: number;

  @SubListFieldTypeDecorator()
  accessor rate: number;

  @SubListFieldTypeDecorator()
  accessor units: number;

  // This is documented as `text` in the records browser
  // but shows up as what appears to be vendor internal id on records.
  @SubListFieldTypeDecorator()
  accessor vendorname: string | number;
}

/**
 * NetSuite purchase order record
 */
export class PurchaseOrderBase extends TransactionBase {
  @FieldTypeDecorator()
  accessor approvalstatus: number;

  @FieldTypeDecorator()
  accessor balance: Nullable<number>;

  @FieldTypeDecorator()
  accessor class: Nullable<number>;

  @FieldTypeDecorator()
  accessor createdfrom: Nullable<number>;

  @FieldTypeDecorator()
  accessor currency: number;

  @FieldTypeDecorator()
  accessor employee: Nullable<number>;

  @FieldTypeDecorator()
  accessor incoterm: Nullable<number>;

  @FieldTypeDecorator()
  accessor intercotransaction: Nullable<number>;

  @FieldTypeDecorator()
  accessor isbasecurrency: boolean;

  @FieldTypeDecorator()
  accessor shipdate: Date;

  @FieldTypeDecorator()
  accessor shipmethod: Nullable<number>;

  @FieldTypeDecorator()
  accessor shipto: Nullable<number>;

  @SubRecordDecorator(AddressBase)
  accessor billingaddress: AddressBase;

  @SubRecordDecorator(AddressBase)
  accessor shippingaddress: AddressBase;

  @FieldTypeDecorator()
  accessor terms: Nullable<number>;

  @FieldTypeDecorator()
  accessor tobeemailed: Nullable<boolean>;

  @FieldTypeDecorator()
  accessor tobefaxed: Nullable<boolean>;

  @FieldTypeDecorator()
  accessor tobeprinted: Nullable<boolean>;

  @FieldTypeDecorator()
  accessor total: number;

  @FieldTypeDecorator()
  accessor unbilledorders: Nullable<number>;

  @SubListDecorator(ItemSublist)
  accessor item: NSSubList<ItemSublist>;

  override recordType() {
    return record.Type.PURCHASE_ORDER;
  }
}
