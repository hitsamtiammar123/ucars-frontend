export interface Brand{
  created_at: string,
  description: string,
  id: number,
  image_url: string,
  model_count: number,
  status: boolean,
  updated_at: string
  name: string
}

export interface Model{
  created_at?: string,
  description?: string,
  id: Number,
  image_url: string,
  model_count: Number,
  status: Boolean,
  updated_at: string,
  brand_Id: Number,
  brand?: Brand
}

export interface ResponseBrandIndex{
  status: number,
  count: number,
  page: number,
  brands: Brand[]
}

export interface ResponseBrandeDetail{
  status: number,
  brand: Brand
}

export class BrandInput{
  public name = '';
  public description = '';
  public status = false;
  public image_url =''
}
