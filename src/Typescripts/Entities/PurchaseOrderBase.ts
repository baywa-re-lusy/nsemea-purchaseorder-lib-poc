/**
 * NetSuite purchase order record
 */
import * as record from 'N/record'
import { TransactionBase } from '../Core/DataAccess/TransactionBase'
import {FieldTypeDecorator, Nullable, SubRecordDecorator} from "../Core/DataAccess/NSTypedRecord";
import {AddressBase} from "../Core/DataAccess/AddressBase";
// import { Sublist, SublistFieldType, SublistLine } from '../Core/DataAccess/Sublist'
// import { AddressBase } from '../Core/DataAccess/AddressBase'

/**
 * Sublist 'item' on purchase orders
 */
// export class ItemSublist extends SublistLine {
//
//   @SublistFieldType.decimalnumber
//   amount: number
//
//   @SublistFieldType.select
//   class: number
//
//   @SublistFieldType.select
//   customer: number
//
//   @SublistFieldType.checkbox
//   deferrevrec: boolean
//
//   @SublistFieldType.select
//   department: number
//
//   @SublistFieldType.textarea
//   description: string
//
//   @SublistFieldType.date
//   expectedreceiptdate: Date
//
//   @SublistFieldType.checkbox
//   isclosed: boolean
//
//   @SublistFieldType.select
//   item: number
//
//   @SublistFieldType.select
//   location: Nullable<number>
//
//   @SublistFieldType.integernumber
//   leadtime: Nullable<number>
//
//   @SublistFieldType.float
//   quantity: number
//
//   @SublistFieldType.float
//   quantityreceived: number
//
//   @SublistFieldType.float
//   quantitybilled: number
//
//   @SublistFieldType.decimalnumber
//   rate: number
//
//   @SublistFieldType.select
//   units: number
//
//   // This is documented as `text` in the records browser
//   // but shows up as what appears to be vendor internal id on records.
//   @SublistFieldType.freeformtext
//   vendorname: string | number
// }

/**
 * NetSuite purchase order record
 */
export class PurchaseOrderBase extends TransactionBase {

  @FieldTypeDecorator()
  accessor approvalstatus: number

  @FieldTypeDecorator()
  accessor balance: Nullable<number>

  @FieldTypeDecorator()
  accessor class: Nullable<number>

  @FieldTypeDecorator()
  accessor createdfrom: Nullable<number>

  @FieldTypeDecorator()
  accessor currency: number

  @FieldTypeDecorator()
  accessor employee: Nullable<number>

  @FieldTypeDecorator()
  accessor incoterm: Nullable<number>

  @FieldTypeDecorator()
  accessor intercotransaction: Nullable<number>

  @FieldTypeDecorator()
  accessor isbasecurrency: boolean

  @FieldTypeDecorator()
  accessor shipdate: Date

  @FieldTypeDecorator()
  accessor shipmethod: Nullable<number>

  @FieldTypeDecorator()
  accessor shipto: Nullable<number>

  @SubRecordDecorator(AddressBase)
  accessor billingaddress: AddressBase

  // @FieldType.subrecord(AddressBase)
  // shippingaddress: AddressBase

  @FieldTypeDecorator()
  accessor terms: Nullable<number>

  @FieldTypeDecorator()
  accessor tobeemailed: Nullable<boolean>

  @FieldTypeDecorator()
  accessor tobefaxed: Nullable<boolean>

  @FieldTypeDecorator()
  accessor tobeprinted: Nullable<boolean>

  @FieldTypeDecorator()
  accessor total: number

  @FieldTypeDecorator()
  accessor unbilledorders: Nullable<number>

  //@FieldType.sublist(ItemSublist)
  //item: Sublist<ItemSublist>

  override recordType () { return record.Type.PURCHASE_ORDER }
}