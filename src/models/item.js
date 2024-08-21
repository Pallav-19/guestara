import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    taxApplicability: {
      type: Boolean,
      default: false,
    },
    tax: {
      type: Number,
      default: 0,
    },
    baseAmount: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

itemSchema.pre('validate', function (next) {
  if (this.taxApplicability && (!this.tax || !this.taxType)) {
    this.invalidate('tax', 'Tax Number is required when tax applicability is true.');

    this.invalidate('taxType', 'Tax Type is required when tax applicability is true.');
  }
  next();
});

itemSchema.virtual('totalAmount').get(function () {
  return this.baseAmount - this.discount;
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
