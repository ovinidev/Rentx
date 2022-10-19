import fs from 'fs';
import { parse } from 'csv-parse';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepositories';

interface IImportCategory {
  name: string;
  description: string;
}

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.forEach(async (category) => {
      const categorySearched = await this.categoriesRepository.listByName(
        category.name,
      );

      if (!categorySearched) {
        await this.categoriesRepository.create(category);
      }
    });
  }
}
