import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    image: { type: String, trim: true },
    description: { type: String, trim: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    taxApplicability: {
      type: Boolean,
      default: function () {
        if (this.taxApplicability !== null) return this.taxApplicability;
        return this.category.taxApplicability;
      },
    },
    tax: {
      type: Number,
      default: function () {
        if (this.tax !== null) return this.tax;
        return this.category.tax;
      },
    },
  },
  { timestamps: true }
);

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export default SubCategory;
