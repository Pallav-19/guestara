import mongoose from 'mongoose';
import Category from './category.js';

const subCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    image: { type: String, trim: true },
    description: { type: String, trim: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    taxApplicability: {
      type: Boolean,
    },
    tax: {
      type: Number,
    },
  },
  { timestamps: true }
);

subCategorySchema.pre('save', async function (next) {
  try {
    const category = await Category.findById(this.category);

    if (!category) {
      throw new Error('Category not found');
    }

    if (this.taxApplicability === null || this.taxApplicability === undefined) {
      this.taxApplicability = category.taxApplicability;
    }

    if (this.tax === null || this.tax === undefined) {
      this.tax = category.tax;
    }

    next();
  } catch (error) {
    next(error);
  }
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export default SubCategory;
