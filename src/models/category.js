import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    image: { type: String, trim: true },
    description: { type: String, trim: true },
    taxApplicability: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    taxType: {
      type: String,
      enum: {
        values: ['direct', 'indirect'],
        message: '{VALUE} is not a valid tax type. Valid options are "direct" or "indirect".',
      },
    },
  },
  { timestamps: true }
);

categorySchema.pre('validate', function (next) {
  if (this.taxApplicability && (!this.tax || !this.taxType)) {
    this.invalidate('tax', 'Tax Number is required when tax applicability is true.');

    this.invalidate('taxType', 'Tax Type is required when tax applicability is true.');
  }
  next();
});

categorySchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate();

  if (update.taxApplicability === false) {
    update.tax = 0;
    update.taxType = null;
  }

  next();
});

categorySchema.pre('updateOne', async function (next) {
  const update = this.getUpdate();

  if (update.taxApplicability === false) {
    update.tax = 0;
    update.taxType = null;
  }

  next();
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
